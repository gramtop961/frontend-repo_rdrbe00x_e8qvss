import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-50">
      <div className="absolute inset-x-0 -top-20 mx-auto h-40 max-w-5xl bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 blur-3xl opacity-40" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Let’s build something</h2>
          <p className="mt-3 text-slate-600">Have an idea in mind? I’d love to hear about it.</p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <form
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = data.get('name');
              const email = data.get('email');
              const message = data.get('message');
              const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
              const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
              window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Ada Lovelace"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell me about your project, timeline, and goals..."
              />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-xs text-slate-500">This form opens your email client to send the message.</p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-500"
              >
                <Mail className="h-4 w-4" />
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
