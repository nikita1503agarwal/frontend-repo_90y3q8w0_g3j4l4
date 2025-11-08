import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E‑Commerce Dashboard',
    description: 'Admin analytics dashboard with charts, role‑based access, and order management.',
    tags: ['React', 'Node.js', 'REST', 'MySQL'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Portfolio CMS',
    description: 'Headless CMS to manage projects and blog posts with a slick UI.',
    tags: ['PHP', 'Laravel', 'MySQL'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Realtime Chat',
    description: 'Socket‑powered chat app with rooms, typing indicators, and emoji reactions.',
    tags: ['React', 'Node.js', 'WebSocket'],
    demo: '#',
    repo: '#',
  },
];

const ProjectCard = ({ project }) => (
  <div className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/40">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
    <p className="mt-2 text-sm text-slate-300">{project.description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.tags.map((t) => (
        <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          {t}
        </span>
      ))}
    </div>
    <div className="mt-5 flex items-center gap-3">
      <a href={project.demo} className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:underline">
        <ExternalLink className="h-4 w-4" /> Live demo
      </a>
      <a href={project.repo} className="inline-flex items-center gap-1 text-sm text-slate-300 hover:underline">
        <Github className="h-4 w-4" /> Code
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected work</h2>
            <p className="mt-2 text-slate-300">A few projects that reflect my full‑stack focus and design sensibilities.</p>
          </div>
          <a href="#contact" className="hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10 md:block">
            Let’s work together
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
