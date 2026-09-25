"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { classes } from "@/content/classes";

const SLOTS = [
  "Morning — 05:30 to 11:00",
  "Evening — 16:00 to 22:30",
  "Either, tell me what is free",
];

export function TrialForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [classId, setClassId] = useState("");
  const [slot, setSlot] = useState(SLOTS[0]);
  const [touched, setTouched] = useState(false);

  const phoneOk = /^[6-9]\d{9}$/.test(phone.replace(/\D/g, ""));
  const ready = name.trim().length > 1 && phoneOk;
  const chosen = classes.find((c) => c.id === classId);

  const message = [
    `Hi ${site.shortName}, I want to book a free trial.`,
    `Name: ${name.trim()}`,
    `Phone: ${phone.trim()}`,
    chosen ? `Class: ${chosen.name}` : "Class: not sure yet, happy to be pointed",
    `Preferred slot: ${slot}`,
  ].join("\n");

  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <form
      className="grid gap-5 border border-border p-6 md:p-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid gap-2">
        <label htmlFor="name" className="kicker text-paper">Your name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched(true)}
          autoComplete="name"
          className="min-h-12 border border-border bg-muted px-4 text-paper outline-none focus:border-volt"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="phone" className="kicker text-paper">Mobile number</label>
        <input
          id="phone"
          inputMode="numeric"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={() => setTouched(true)}
          autoComplete="tel"
          placeholder="10 digits"
          aria-describedby="phone-hint"
          className="min-h-12 border border-border bg-muted px-4 text-paper outline-none focus:border-volt"
        />
        <p id="phone-hint" className="text-xs text-muted-foreground">
          {touched && phone && !phoneOk
            ? "That does not look like an Indian mobile number."
            : "We use it once, to confirm the slot."}
        </p>
      </div>

      <div className="grid gap-2">
        <label htmlFor="class" className="kicker text-paper">What do you want to try?</label>
        <select
          id="class"
          value={classId}
          onChange={(e) => setClassId(e.target.value)}
          className="min-h-12 border border-border bg-muted px-4 text-paper outline-none focus:border-volt"
        >
          <option value="">Not sure — point me somewhere</option>
          {classes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} · {c.type} · {c.intensity}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="grid gap-2">
        <legend className="kicker text-paper">Which half of the day?</legend>
        <div className="mt-2 grid gap-2">
          {SLOTS.map((option) => (
            <label key={option} className="flex items-center gap-3 text-sm">
              <input
                type="radio"
                name="slot"
                value={option}
                checked={slot === option}
                onChange={() => setSlot(option)}
                className="accent-volt"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <a
        href={ready ? href : undefined}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={!ready}
        onClick={(e) => {
          if (!ready) {
            e.preventDefault();
            setTouched(true);
          }
        }}
        className={`mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 kicker transition-opacity ${
          ready ? "bg-volt text-ink" : "cursor-not-allowed bg-border text-muted-foreground"
        }`}
      >
        Send on WhatsApp <ArrowRight size={16} />
      </a>

      <p className="text-xs text-muted-foreground">
        This opens WhatsApp with your details already typed. Nothing is stored on this site.
      </p>
    </form>
  );
}
