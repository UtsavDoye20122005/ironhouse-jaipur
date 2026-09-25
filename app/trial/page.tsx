import type { Metadata } from "next";
import { site } from "@/content/site";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { TrialForm } from "@/components/trial-form";

export const metadata: Metadata = {
  title: "Free trial",
  description: `Book a free first session at ${site.name}, ${site.address.line2}, ${site.city}. No card, no contract, no sales call.`,
};

const STEPS = [
  {
    n: "01",
    title: "You send the message",
    copy: "Name, number, and roughly what you want to try. That is the whole form.",
  },
  {
    n: "02",
    title: "We reply with two times",
    copy: "Usually within the hour during floor hours. Pick one, or ask for another.",
  },
  {
    n: "03",
    title: "Come fifteen minutes early",
    copy: "A coach walks you round, asks about injuries, and shows you where things live.",
  },
  {
    n: "04",
    title: "You train",
    copy: "A full session, coached, with the rest of the class. Not a tour, not a demo.",
  },
];

export default function TrialPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="First one is free"
        title="Train once before you pay anything."
        lede="No card details, no contract, no sales call afterwards. If it is not for you, we will say so ourselves."
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 md:grid-cols-[1fr_minmax(0,420px)] md:gap-16 md:px-8 md:py-24">
          <div>
            <h2 className="text-4xl leading-none md:text-5xl">How it goes.</h2>
            <ol className="mt-10 divide-y divide-border border-t border-border">
              {STEPS.map((step) => (
                <li key={step.n} className="grid gap-4 py-7 sm:grid-cols-[72px_1fr]">
                  <span className="font-display text-3xl leading-none text-volt">{step.n}</span>
                  <div>
                    <h3 className="text-2xl leading-none">{step.title}</h3>
                    <p className="mt-3 text-muted-foreground">{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 border-l-2 border-volt pl-5">
              <p className="kicker">Where to come</p>
              <address className="mt-3 not-italic text-muted-foreground">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city} {site.address.pincode}
              </address>
              <a
                href={site.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block kicker text-volt"
              >
                Open in Maps
              </a>
            </div>
          </div>

          <div>
            <TrialForm />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-8">
          <iframe
            src={site.mapsEmbedUrl}
            title={site.mapsIframeTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full border border-border grayscale"
          />
        </div>
      </section>
    </SiteShell>
  );
}
