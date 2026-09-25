import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus, ArrowRight } from "lucide-react";
import { memberships, billingCycles, membershipNotes } from "@/content/memberships";
import { site, ui } from "@/content/site";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Memberships",
  description: `Membership prices at ${site.name}, ${site.city} — monthly, quarterly and annual, with the joining fee and what each tier includes.`,
};

function rupees(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function MembershipsPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="What it costs"
        title="Every price, on the page."
        lede="No enquiry form standing between you and a number. Three tiers, three billing cycles, the joining fee written down."
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-border md:grid-cols-3">
          {memberships.map((tier) => (
            <article key={tier.id} className="flex flex-col bg-ink p-6 md:p-8">
              <div className="min-h-6">
                {tier.popular && <p className="kicker">{ui.mostPopular}</p>}
              </div>
              <h2 className="mt-2 text-4xl leading-none">{tier.name}</h2>
              <p className="mt-4 text-sm text-muted-foreground">{tier.tagline}</p>

              <dl className="mt-8 border-t border-border">
                {billingCycles.map((cycle) => {
                  const total = tier.prices[cycle.id];
                  const perMonth = Math.round(total / cycle.months);
                  const saving = tier.prices.monthly * cycle.months - total;
                  return (
                    <div
                      key={cycle.id}
                      className="flex items-baseline justify-between gap-4 border-b border-border py-3"
                    >
                      <dt className="text-sm text-muted-foreground">{cycle.label}</dt>
                      <dd className="text-right">
                        <span className="font-display text-2xl tabular-nums">{rupees(total)}</span>
                        {cycle.months > 1 && (
                          <span className="block text-xs text-muted-foreground tabular-nums">
                            {rupees(perMonth)}/mo · {ui.saveAmount} {rupees(saving)}
                          </span>
                        )}
                      </dd>
                    </div>
                  );
                })}
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-sm text-muted-foreground">{ui.joiningFee}</dt>
                  <dd className="font-display text-xl tabular-nums">
                    {tier.joiningFee === 0 ? "Waived" : rupees(tier.joiningFee)}
                  </dd>
                </div>
              </dl>

              <p className="kicker mt-8">{ui.included}</p>
              <ul className="mt-4 space-y-2.5">
                {tier.included.map((line) => (
                  <li key={line} className="flex gap-3 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-volt" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <p className="kicker mt-7">{ui.notIncluded}</p>
              <ul className="mt-4 space-y-2.5">
                {tier.notIncluded.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-muted-foreground">
                    <Minus size={16} className="mt-0.5 shrink-0" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/trial"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-volt px-5 py-4 kicker text-ink"
              >
                Try it first <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
          <p className="kicker">The small print, in normal size</p>
          <ul className="mt-8 max-w-[70ch] divide-y divide-border">
            {membershipNotes.map((note) => (
              <li key={note} className="py-4 text-muted-foreground">{note}</li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
