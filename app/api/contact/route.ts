import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  source?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const name = (body.name || "").trim();
    const phone = (body.phone || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();
    const source = (body.source || "unknown").trim();

    if (!name || !phone) {
      return Response.json(
        { ok: false, error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const TO_EMAIL = process.env.TO_EMAIL || "skyhabitatbyurbanrise@gmail.com";

    if (!SMTP_USER || !SMTP_PASS) {
      return Response.json(
        { ok: false, error: "Email service not configured (missing env vars)." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `New Lead — Codename Sky Habitat (${source})`;
    const text = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "Email: (not provided)",
      message ? `Message: ${message}` : "Message: (not provided)",
      `Source: ${source}`,
      `Time: ${new Date().toISOString()}`,
    ].join("\n");

    await transporter.sendMail({
      from: `"Sky Habitat Website" <${SMTP_USER}>`,
      to: TO_EMAIL,
      subject,
      text,
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    return Response.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

