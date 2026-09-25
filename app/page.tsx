import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site, ui } from "@/content/site";
import { classes, classTypeOrder } from "@/content/classes";
import { trainers } from "@/content/trainers";
import { memberships } from "@/content/memberships";
import { schedule } from "@/content/schedule";
import { media } from "@/content/media";
import { SiteShell } from "@/components/site-shell";
import { initials } from "@/lib/initials";

export default function Home() {
  const todayCount = schedule.filter((slot) => slot.day === 1).length;

  return (
    <SiteShell>
      {/* hero */}
      <section className="relative border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={media.floor.src}
            alt={media.floor.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-36">
          <p className="kicker">{site.address.line2} · {site.city}</p>
          <h1 className="mt-6 max-w-[14ch] text-display">
            Heavy iron.<br />Honest coaching.
          </h1>
          <p className="mt-8 max-w-[46ch] text-lg text-muted-foreground">
            {site.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/trial"
              className="inline-flex items-center gap-2 bg-volt px-6 py-4 kicker text-ink transition-transform hover:-translate-y-0.5"
            >
              {ui.freeTrial} <ArrowRight size={16} />
            </Link>
            <Link
              href="/memberships"
              className="inline-flex items-center gap-2 border border-paper px-6 py-4 kicker text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              See the prices
            </Link>
          </div>
          <p className="mt-10 max-w-[40ch] border-l-2 border-volt pl-4 text-sm text-muted-foreground">
            {site.hoursNote}
          </p>
        </div>
      </section>

      {/* facts strip */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
          {[
            { value: String(classes.length), label: "classes on the board" },
            { value: String(todayCount), label: "sessions on a Monday" },
            { value: String(trainers.length), label: "coaches who lift" },
            { value: String(schedule.length), label: "sessions on the board each week" },
          ].map((stat) => (
            <div key={stat.label} className="border-b border-r border-border p-6 md:border-b-0 md:p-10">
              <p className="font-display text-5xl leading-none text-volt md:text-6xl">{stat.value}</p>
              <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* classes */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="kicker">What runs here</p>
              <h2 className="mt-4 max-w-[16ch] text-5xl leading-none md:text-7xl">
                Six kinds of hard.
              </h2>
            </div>
            <Link href="/classes" className="inline-flex items-center gap-2 kicker text-volt">
              All {classes.length} classes <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {classTypeOrder.map((type) => {
              const inType = classes.filter((c) => c.type === type);
              return (
                <div key={type} className="bg-ink p-6 md:p-8">
                  <p className="kicker">{inType.length} on the board</p>
                  <h3 className="mt-3 text-3xl leading-none md:text-4xl">{type}</h3>
                  <p className="mt-4 text-sm text-muted-foreground">{inType[0].blurb}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* conditioning split */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] items-stretch md:grid-cols-2">
          <div className="relative min-h-[320px] md:min-h-[520px]">
            <Image
              src={media.conditioning.src}
              alt={media.conditioning.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="border-t border-border p-8 md:border-l md:border-t-0 md:p-14">
            <p className="kicker">How it works here</p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Nobody sells you<br />a transformation.
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                You come in, a coach watches your first three sessions, and you get put on
                something you can actually repeat. That is the whole method.
              </p>
              <p>
                The floor shuts between 11 and 4 so the equipment gets cleaned and the staff
                eat. We think a gym that never closes is a gym nobody is looking after.
              </p>
            </div>
            <Link href="/trainers" className="mt-10 inline-flex items-center gap-2 kicker text-volt">
              Meet the coaches <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* coaches */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
          <p className="kicker">On the floor</p>
          <h2 className="mt-4 max-w-[18ch] text-5xl leading-none md:text-7xl">
            Coaches, not influencers.
          </h2>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-ink p-6 md:p-8">
                <div className="grid h-16 w-16 place-items-center bg-volt font-display text-2xl text-ink">
                  {initials(trainer.name)}
                </div>
                <h3 className="mt-5 text-2xl leading-none">{trainer.name}</h3>
                <p className="kicker mt-2">{trainer.role} · {trainer.years} {ui.yearSuffix}</p>
                <p className="mt-4 text-sm text-muted-foreground">{trainer.philosophy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* memberships teaser */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="kicker">What it costs</p>
              <h2 className="mt-4 text-5xl leading-none md:text-7xl">Three tiers.</h2>
            </div>
            <Link href="/memberships" className="inline-flex items-center gap-2 kicker text-volt">
              Full breakdown <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {memberships.map((tier) => (
              <div key={tier.id} className="bg-ink p-6 md:p-8">
                {tier.popular && <p className="kicker">{ui.mostPopular}</p>}
                <h3 className={`text-3xl leading-none md:text-4xl ${tier.popular ? "mt-3" : ""}`}>
                  {tier.name}
                </h3>
                <p className="mt-4 font-display text-5xl leading-none text-volt">
                  ₹{tier.prices.monthly.toLocaleString("en-IN")}
                </p>
                <p className="kicker mt-2">per month</p>
                <p className="mt-5 text-sm text-muted-foreground">{tier.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-volt text-ink">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-8 px-4 py-20 md:px-8">
          <h2 className="max-w-[16ch] text-5xl leading-none md:text-7xl">
            First session is free. No card.
          </h2>
          <Link
            href="/trial"
            className="inline-flex items-center gap-2 bg-ink px-8 py-5 kicker text-volt"
          >
            Book the trial <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
