"use client";

import Link from "next/link";
import { useApp } from "../context/AppContext";
import { profile } from "../data/content";

export default function Beranda() {
  const { t } = useApp();

  return (
    <section className="min-h-[calc(100vh-88px)] flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile Photo — new DSC09079, face-focused */}
        <div className="flex justify-center md:justify-end order-2 md:order-1">
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-line-strong shadow-lg">
              <img
                src={profile.heroPhoto}
                alt={profile.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
            {/* Decorative accent ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-accent opacity-20 pointer-events-none"></div>
          </div>
        </div>

        {/* Right: Text + Buttons */}
        <div className="text-center md:text-left order-1 md:order-2">
          <h1 className="text-4xl lg:text-6xl font-bold font-serif text-ink mb-6 leading-[1.05]">
            {t.hero.greeting}{" "}
            <span className="text-accent">{t.hero.name}</span>
          </h1>
          <p className="text-base lg:text-lg text-ink-soft leading-relaxed mb-8 max-w-xl">
            {t.hero.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-btn text-btn-ink font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md"
            >
              {t.hero.resumeBtn}
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 bg-surface text-ink-soft font-semibold rounded-lg border-2 border-line-strong hover:border-accent hover:text-accent transition-all text-center"
            >
              {t.hero.contactBtn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
