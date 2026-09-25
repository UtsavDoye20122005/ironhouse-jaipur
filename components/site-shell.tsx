"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site, nav, ui } from "@/content/site";

function waLink() {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
}

function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link href="/" className="font-display text-2xl leading-none tracking-tight md:text-3xl">
          Iron<span className="text-volt">house</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="kicker text-paper transition-colors hover:text-volt"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden items-center gap-2 kicker text-paper transition-colors hover:text-volt md:flex"
          >
            <Phone size={14} /> {site.phoneDisplay}
          </a>
          <Link
            href="/trial"
            className="hidden bg-volt px-4 py-3 kicker text-ink transition-transform hover:-translate-y-0.5 sm:block"
          >
            {ui.freeTrial}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? ui.closeMenu : ui.menu}
            aria-expanded={open}
            className="lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border px-4 py-4 font-display text-2xl md:px-8"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${site.phoneTel}`}
            className="block px-4 py-4 kicker text-volt md:px-8"
          >
            {ui.call} {site.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <p className="font-display text-3xl leading-none">
            Iron<span className="text-volt">house</span>
          </p>
          <p className="mt-3 max-w-[22ch] text-sm text-muted-foreground">{site.tagline}</p>
        </div>

        <div>
          <p className="kicker">{ui.hoursHeading}</p>
          <dl className="mt-4 space-y-1.5 text-sm">
            {site.hours.map((day) => (
              <div key={day.label} className="flex justify-between gap-4">
                <dt className="text-muted-foreground">{day.label.slice(0, 3)}</dt>
                <dd className="text-right tabular-nums">
                  {day.slots.map((slot) => `${slot.start}–${slot.end}`).join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 max-w-[30ch] text-xs text-muted-foreground">{site.hoursNote}</p>
        </div>

        <div>
          <p className="kicker">{ui.addressHeading}</p>
          <address className="mt-4 text-sm not-italic text-muted-foreground">
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
            {ui.getDirections}
          </a>
        </div>

        <div>
          <p className="kicker">{ui.contactHeading}</p>
          <div className="mt-4 space-y-2 text-sm">
            <a href={`tel:${site.phoneTel}`} className="block hover:text-volt">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="block break-all hover:text-volt">
              {site.email}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-volt"
            >
              {ui.whatsapp}
            </a>
          </div>
          <p className="kicker mt-6">{ui.socialHeading}</p>
          <div className="mt-3 flex gap-4 text-sm text-muted-foreground">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-volt">Instagram</a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-volt">Facebook</a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-volt">YouTube</a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:px-8">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <p>{site.credit}</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-volt focus:px-4 focus:py-2 focus:text-ink">
        {ui.skipToContent}
      </a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
