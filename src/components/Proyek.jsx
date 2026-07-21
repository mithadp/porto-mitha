"use client";

import { useApp } from "../context/AppContext";

export default function Proyek() {
  const { t } = useApp();
  const p = t.projects;

  return (
    <section className="px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-ink">
            {p.title}
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {p.items.map((project) => (
            <ProjectCard key={project.id} project={project} t={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, t }) {
  const hasDemo = project.demo && !project.isPrivate;
  const hasCode = project.repo && !project.isPrivate;
  const showButtons = hasDemo || hasCode;

  return (
    <article className="bg-surface border border-line rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1">
      {/* Project Image */}
      <div className="aspect-video overflow-hidden bg-ink-faint/10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        {/* Title + Org/Period */}
        <div>
          <h3 className="text-lg font-semibold text-ink leading-snug mb-1">
            {project.title}
          </h3>
          {project.org && (
            <p className="text-xs text-ink-faint">{project.org}</p>
          )}
          {project.period && (
            <p className="text-xs text-ink-faint">{project.period}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-ink-soft leading-relaxed">
          {project.desc}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-accent-soft text-accent rounded border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons (conditional per instructions) */}
        {showButtons && (
          <div className="flex gap-3 pt-2">
            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-btn text-btn-ink text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {t.viewProject}
              </a>
            )}
            {hasCode && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-surface text-ink-soft text-sm font-semibold rounded-lg border-2 border-line-strong hover:border-accent hover:text-accent transition-all"
              >
                {t.viewCode}
              </a>
            )}
          </div>
        )}

        {/* Private indicator (only image + desc, no buttons) */}
        {project.isPrivate && (
          <p className="text-xs text-ink-faint italic pt-2">
            Private project — code not publicly available
          </p>
        )}
      </div>
    </article>
  );
}
