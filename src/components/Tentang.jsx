"use client";

import { useApp } from "../context/AppContext";
import { profile } from "../data/content";

// Icons are visual-only (not language-dependent), so they stay mapped by key here.
// Titles and tags now come from content.js (t.about.skills.categories) so they translate.
const skillIcons = {
  cv: (
    <g>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </g>
  ),
  ml: <path d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 7h10v10H7z" />,
  lang: (
    <g>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </g>
  ),
  viz: <path d="M4 20V10m5 10V4m5 16v-6m5 6V8" />,
  tools: (
    <g>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2m0 16v2M2 12h2m16 0h2" />
    </g>
  ),
  soft: (
    <g>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </g>
  ),
};

function SkillIcon({ icon }) {
  return (
    <svg
      className="w-5 h-5 text-accent shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {icon}
    </svg>
  );
}

function TimelineItem({ item }) {
  return (
    <div className="relative group">
      {/* Dot on the timeline */}
      <span className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-surface transition-transform group-hover:scale-125 duration-200"></span>
      <div className="flex items-baseline gap-2 flex-wrap">
        <p className="text-sm font-semibold text-ink">{item.role}</p>
      </div>
      <p className="text-xs font-medium text-ink-soft">{item.org}</p>
      <p className="text-xs text-ink-faint mb-1">{item.period}</p>
      <p className="text-xs text-ink-soft leading-relaxed">{item.desc}</p>
    </div>
  );
}

export default function Tentang() {
  const { t } = useApp();
  const a = t.about;

  return (
    <section className="px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-ink">
            {a.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Sidebar: Photo + fact sheet (sticky) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
            {/* Profile photo — formal/old photo for Tentang page */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-xs aspect-square rounded-2xl overflow-hidden border-2 border-line-strong shadow-md transition-shadow hover:shadow-lg duration-300">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">{a.education.title}</h3>
              <div className="bg-surface border border-line rounded-xl p-4 space-y-1 hover:border-accent/40 transition-colors duration-200">
                <p className="text-sm font-semibold text-ink">{a.education.degree}</p>
                <p className="text-sm text-ink-soft">{a.education.institution}</p>
                <p className="text-xs text-ink-faint">{a.education.period}</p>
                <p className="text-xs font-medium text-accent">{a.education.gpa}</p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">{a.certifications.title}</h3>
              <ul className="space-y-2">
                {a.certifications.items.map((c, i) => (
                  <li key={i} className="text-sm text-ink-soft flex gap-2 items-start">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Stack */}
            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">{a.tools.title}</h3>
              <div className="flex flex-wrap gap-2">
                {a.tools.items.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-medium bg-accent-soft text-accent rounded-full border border-accent/20 hover:bg-accent hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Bio */}
            <div>
              <h3 className="text-lg font-semibold text-ink mb-3">{a.bioTitle}</h3>
              <div className="space-y-3">
                {a.bio.map((p, i) => (
                  <p key={i} className="text-sm text-ink-soft leading-relaxed">{p}</p>
                ))}
              </div>
            </div>

            {/* Skills — now driven by content.js, so it translates with EN/ID toggle */}
            <div>
              <h3 className="text-lg font-semibold text-ink mb-4">{a.skills.sectionTitle}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {a.skills.categories.map((cat) => (
                  <div
                    key={cat.key}
                    className="bg-surface border border-line rounded-xl p-4 space-y-3 hover:border-accent/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    <div className="flex items-center gap-2">
                      <SkillIcon icon={skillIcons[cat.key]} />
                      <p className="text-sm font-semibold text-ink">{cat.title}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-medium bg-accent-soft text-accent rounded-md border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-lg font-semibold text-ink mb-4">{a.experience.title}</h3>
              <div className="relative border-l-2 border-line pl-5 space-y-6">
                {/* Work experience first */}
                {a.experience.work.map((item, i) => (
                  <TimelineItem key={`w-${i}`} item={item} />
                ))}
                {a.experience.orgs.map((item, i) => (
                  <TimelineItem key={`o-${i}`} item={item} />
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-lg font-semibold text-ink mb-4">{a.achievements.title}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {a.achievements.items.map((ach, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-line border-l-4 border-l-accent rounded-xl p-4 space-y-1 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <p className="text-sm font-semibold text-ink leading-snug">{ach.title}</p>
                    <p className="text-xs text-ink-faint">{ach.period}</p>
                    <p className="text-xs text-ink-soft leading-relaxed">{ach.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
