import React from 'react';
import { Code2, Palette, Server } from 'lucide-react';

const SkillBadge = ({ label }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
    {label}
  </span>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About me</h2>
            <p className="mt-4 text-slate-300">
              I’m a full‑stack developer who cares about clean code, smooth interactions, and thoughtful design. From backend architecture to pixel‑perfect UIs, I love building experiences that feel fast and delightful.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'MySQL', 'Node.js', 'REST APIs'].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                <Server className="h-5 w-5" />
              </div>
              <h3 className="text-base font-medium">Backend Engineering</h3>
              <p className="mt-1 text-sm text-slate-300">Scalable APIs, database modeling, authentication, and performance‑first architectures.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-medium">Frontend Craft</h3>
              <p className="mt-1 text-sm text-slate-300">Component systems, accessibility, micro‑interactions, and modern tooling.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:col-span-2">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                <Palette className="h-5 w-5" />
              </div>
              <h3 className="text-base font-medium">Design Mindset</h3>
              <p className="mt-1 text-sm text-slate-300">Aesthetic layouts, consistent typography, and a delightful brand voice that reflects modern, playful tech.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
