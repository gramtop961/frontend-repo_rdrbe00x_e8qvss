import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="font-inter text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">About me</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I’m a full‑stack developer focused on creating interactive, accessible, and fast web apps. I enjoy
              blending thoughtful design with solid engineering — from 3D hero moments and micro‑interactions to
              scalable APIs and data layers.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'FastAPI', 'TypeScript', 'Tailwind', 'MongoDB'].map((skill) => (
                <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MyPortfolio — Built with love and a lot of coffee.
      </footer>
    </div>
  );
}
