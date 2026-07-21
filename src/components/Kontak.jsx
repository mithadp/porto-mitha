"use client";

import { useApp } from "../context/AppContext";
import { profile } from "../data/content";

export default function Kontak() {
  const { t } = useApp();
  const c = t.contact;

  return (
    <section className="px-6 lg:px-12 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-ink mb-3">
            {c.title}
          </h2>
          <p className="text-base text-ink-soft max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <a
            href={`mailto:${profile.email}`}
            className="bg-surface border border-line rounded-2xl p-6 hover:border-accent/40 transition-all group flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-ink-faint uppercase tracking-wide mb-1">{c.form.email}</p>
              <p className="text-sm font-medium text-ink truncate">{profile.email}</p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface border border-line rounded-2xl p-6 hover:border-accent/40 transition-all group flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-ink-faint uppercase tracking-wide mb-1">LinkedIn</p>
              <p className="text-sm font-medium text-ink truncate">{c.linkedin}</p>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-surface border border-line rounded-2xl p-8">
          <form action="https://formspree.io/f/mpqvrdaw" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">
                {c.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-paper border border-line rounded-lg text-ink focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
                {c.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="_replyto"
                required
                className="w-full px-4 py-3 bg-paper border border-line rounded-lg text-ink focus:outline-none focus:border-accent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
                {c.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="w-full px-4 py-3 bg-paper border border-line rounded-lg text-ink focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-btn text-btn-ink font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md"
            >
              {c.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
