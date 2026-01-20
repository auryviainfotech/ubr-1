import { ContactHero } from "../../components/ContactHero";
import { ContactForm } from "../../components/ContactForm";
import { QuickActions } from "../../components/QuickActions";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="section-padding navy-section">
        <div className="lux-container space-y-8">
          <QuickActions />
          <div className="flex justify-center">
            <div className="glass-panel gold-border bg-navy-900/70 p-5 w-full max-w-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-400">
                    Contact Form
                  </p>
                  <h2 className="text-xl font-semibold text-slate-50">
                    We'll call you back with details.
                  </h2>
                </div>
                <span className="text-[10px] text-slate-400">Secure & private</span>
              </div>
              <div className="mt-4">
                <ContactForm source="contact_page" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

