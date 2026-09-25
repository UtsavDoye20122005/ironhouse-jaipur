import type { Metadata } from "next";
import { classes, classTypeOrder } from "@/content/classes";
import { schedule, weekDays } from "@/content/schedule";
import { trainers } from "@/content/trainers";
import { site, ui } from "@/content/site";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Classes",
  description: `Every class on the board at ${site.name}, ${site.city} — strength, HIIT, CrossFit, yoga, Zumba and MMA, with what to bring.`,
};

export default function ClassesPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="The board"
        title="Every class, and what it asks of you."
        lede="Eleven sessions across six disciplines. Each one says how long it runs, how hard it goes, and what you need to walk in with."
      />

      {classTypeOrder.map((type) => {
        const inType = classes.filter((c) => c.type === type);
        return (
          <section key={type} className="border-b border-border">
            <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-20">
              <h2 className="text-4xl leading-none text-volt md:text-5xl">{type}</h2>
              <div className="mt-10 grid gap-px bg-border md:grid-cols-2">
                {inType.map((item) => (
                  <article key={item.id} className="bg-ink p-6 md:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-3xl leading-none">{item.name}</h3>
                      <p className="kicker">
                        {item.durationMin} min · {item.intensity}
                      </p>
                    </div>
                    <p className="mt-4 text-muted-foreground">{item.blurb}</p>
                    <p className="mt-6 border-t border-border pt-4 text-sm">
                      <span className="kicker">{ui.bring}</span>
                      <br />
                      <span className="text-muted-foreground">{item.whatToBring}</span>
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section>
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
          <p className="kicker">Week at a glance</p>
          <h2 className="mt-5 text-4xl leading-none md:text-6xl">The timetable.</h2>
          <p className="mt-5 max-w-[50ch] text-muted-foreground">
            Spots shown are what was left when this page was built. Call the floor to confirm.
          </p>

          <div className="mt-12 space-y-10">
            {weekDays.map((day) => {
              const slots = schedule.filter((slot) => slot.day === day.index);
              if (!slots.length) return null;
              return (
                <div key={day.index}>
                  <h3 className="border-b border-border pb-3 text-2xl leading-none">{day.full}</h3>
                  <ul className="divide-y divide-border">
                    {slots.map((slot) => {
                      const cls = classes.find((c) => c.id === slot.classId);
                      const coach = trainers.find((t) => t.id === slot.trainerId);
                      if (!cls || !coach) return null;
                      return (
                        <li
                          key={slot.id}
                          className="grid gap-2 py-4 sm:grid-cols-[84px_1fr_auto] sm:items-baseline sm:gap-6"
                        >
                          <span className="font-display text-xl tabular-nums text-volt">
                            {slot.start}
                          </span>
                          <span>
                            <span className="font-display text-xl">{cls.name}</span>
                            <span className="ml-3 text-sm text-muted-foreground">
                              {coach.name} · {cls.durationMin} min
                            </span>
                          </span>
                          <span className="text-sm text-muted-foreground tabular-nums">
                            {slot.spotsLeft} of {slot.spotsTotal} {ui.spotsLeft}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
