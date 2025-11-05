import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description:
      'A playful landing page using WebGL and Spline for immersive hero sections with smooth performance.',
    tech: ['React', 'Spline', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Realtime Chat App',
    description:
      'Full‑stack chat with authentication, typing indicators, and message reactions.',
    tech: ['FastAPI', 'WebSockets', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Responsive dashboard with charts, filters, and export tools for product metrics.',
    tech: ['React', 'Tailwind', 'D3'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Selected Projects</h2>
            <p className="mt-2 text-slate-600">A snapshot of things I’ve designed and built recently.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50"
          >
            <Code className="h-4 w-4" />
            Start a project
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-200 via-sky-200 to-emerald-200" />
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-900"
                >
                  View project
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
