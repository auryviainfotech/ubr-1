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

    const EMAIL_HOST = process.env.EMAIL_HOST;
    const EMAIL_PORT = process.env.EMAIL_PORT;
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_TO = process.env.EMAIL_TO || "skyhabitatbyurbanrise@gmail.com";

    if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
      return Response.json(
        { ok: false, error: "Email service not configured (missing env vars)." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
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
      from: `"Sky Habitat Website" <${EMAIL_USER}>`,
      to: EMAIL_TO,
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

