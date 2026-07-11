import ContactForm from "./ContactForm";
import ContactHero from "./ContactHero";
import ContactInfoCards from "./ContactInfoCards";
import LocationSection from "./LocationSection";

export const metadata = {
  title: "Contact Us | EventBridge",
  description:
    "Get in touch with the EventBridge team for support, questions, or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ContactHero />
      <ContactInfoCards />

      <section
        aria-labelledby="contact-form-heading"
        className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h2
            id="contact-form-heading"
            className="text-2xl font-semibold text-foreground sm:text-3xl"
          >
            Send us a message
          </h2>
          <p className="mt-2 text-sm text-foreground/70">
            Fill out the form and our team will get back to you within 1–2
            business days.
          </p>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </section>

      <LocationSection />
    </main>
  );
}
