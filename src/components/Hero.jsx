import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden" id="home">
      {/* Spline 3D scene as background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            Tech • Portfolio • Interactive • Modern
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Building playful, modern web experiences
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            I craft performant interfaces, delightful interactions, and scalable backends. Explore my recent work and let’s build something great together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-800 font-medium shadow-sm hover:bg-slate-50">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
