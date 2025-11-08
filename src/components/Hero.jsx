import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 opacity-60">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 via-slate-950/40 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 pt-28 md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Open to full‑time & freelance opportunities
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Dhruv Baldev</span>
          <br />
          Full‑Stack Web Developer
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          I craft robust backends and elegant frontends. Proficient in HTML, CSS, JavaScript, React, PHP, and MySQL — and always exploring what’s next.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:translate-y-[-1px] hover:bg-emerald-400"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Download className="h-4 w-4" /> Download résumé
          </a>
        </div>

        <div className="mt-10 flex items-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> Quality
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" /> Performance
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500" /> Design
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
