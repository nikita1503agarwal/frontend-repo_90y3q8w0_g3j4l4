import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s build something together</h2>
          <p className="mt-2 text-slate-300">Have a project in mind or just want to say hi? I’d love to hear from you.</p>
        </div>

        <form
          className="mx-auto mt-10 grid max-w-2xl gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-slate-300">Name</label>
              <input className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none ring-emerald-400/30 placeholder:text-slate-500 focus:ring-2" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-300">Email</label>
              <input type="email" className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none ring-emerald-400/30 placeholder:text-slate-500 focus:ring-2" placeholder="your@email.com" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-300">Message</label>
            <textarea rows={5} className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm outline-none ring-emerald-400/30 placeholder:text-slate-500 focus:ring-2" placeholder="Tell me about your project..." />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-400">Or email me directly: <span className="text-emerald-400">hello@dhruvbaldev.dev</span></p>
            <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-emerald-400">
              <Send className="h-4 w-4" /> Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
