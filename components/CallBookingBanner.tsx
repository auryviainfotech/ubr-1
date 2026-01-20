import { ContactForm } from "./ContactForm";

export function CallBookingBanner() {
  return (
    <section
      id="site-visit"
      className="section-padding navy-section border-y border-white/10"
    >
      <div className="lux-container grid gap-8 lg:grid-cols-[1.2fr,1.4fr] lg:items-center">
        <div className="space-y-3">
          <p className="section-title">Book a Site Visit</p>
          <h2 className="section-heading">
            Walk through the sky community in person.
          </h2>
          <p className="section-subtitle">
            Share your details and our dedicated sales team will connect with
            you to schedule a personalized site visit and walkthrough.
          </p>
          <p className="text-[11px] text-slate-400">
            By submitting, you consent to be contacted via call, WhatsApp or
            email regarding Codename Sky Habitat by Urbanrise.
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

