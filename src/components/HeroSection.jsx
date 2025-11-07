import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[420px] sm:h-[520px] md:h-[620px] overflow-hidden rounded-2xl bg-black/70 border border-white/10">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay gradients for immersive feel (won't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.35),transparent_60%)]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1.5 rounded-full bg-white/10 text-white/80 backdrop-blur border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-violet-300" />
          <span>Doing unlocks access</span>
        </div>
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl leading-tight font-semibold text-white tracking-tight">
          Your Applied Learning Quest Starts Now
        </h1>
        <p className="mt-3 max-w-xl text-sm sm:text-base text-white/80">
          Execute focused weekly missions. Quality work compounds into real-world access — mentors, labs, tools, and industry challenges.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-violet-200/90 text-sm">
          <Rocket className="w-4 h-4" />
          <span>Momentum grows with consistency</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
