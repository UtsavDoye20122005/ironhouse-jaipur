import type { Metadata } from "next";
import { trainers } from "@/content/trainers";
import { schedule } from "@/content/schedule";
import { classes } from "@/content/classes";
import { site, ui } from "@/content/site";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { initials } from "@/lib/initials";

export const metadata: Metadata = {
  title: "Coaches",
  description: `The coaching floor at ${site.name}, ${site.city} — who they are, what they specialise in and how they teach.`,
};

export default function TrainersPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="On the floor"
        title="The people watching your reps."
        lede="Every coach here holds certifications you can check, and trains in the same room you do."
      />

      <section>
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
          <div className="grid gap-px bg-border md:grid-cols-2">
            {trainers.map((trainer) => {
              const taught = [
                ...new Set(
                  schedule
                    .filter((slot) => slot.trainerId === trainer.id)
                    .map((slot) => classes.find((c) => c.id === slot.classId)?.name)
                    .filter(Boolean),
                ),
              ] as string[];

              return (
                <article key={trainer.id} className="bg-ink p-6 md:p-10">
                  <div className="flex items-start gap-5">
                    <div className="grid h-20 w-20 shrink-0 place-items-center bg-volt font-display text-3xl text-ink">
                      {initials(trainer.name)}
                    </div>
                    <div>
                      <h2 className="text-3xl leading-none">{trainer.name}</h2>
                      <p className="kicker mt-2">
                        {trainer.role} · {trainer.years} {ui.yearSuffix}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {trainer.specialisation}
                      </p>
                    </div>
                  </div>

                  <p className="mt-7 border-l-2 border-volt pl-4 text-lg">
                    {trainer.philosophy}
                  </p>

                  <div className="mt-7 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
                    <div>
                      <p className="kicker">Certified</p>
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        {trainer.certifications.map((cert) => (
                          <li key={cert}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                    {taught.length > 0 && (
                      <div>
                        <p className="kicker">Runs</p>
                        <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                          {taught.map((name) => (
                            <li key={name}>{name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
