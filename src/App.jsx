import React from 'react';
import HeroSection from './components/HeroSection';
import MissionDashboard from './components/MissionDashboard';
import UnlocksMap from './components/UnlocksMap';
import UpcomingUnlocks from './components/UpcomingUnlocks';
import { Compass } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#050508] text-white">
      {/* Top Nav / Brand */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600">
              <Compass className="w-4 h-4" />
            </span>
            <div>
              <p className="text-sm font-semibold leading-none">Experiment Labs</p>
              <p className="text-[10px] text-white/60 leading-none mt-0.5">Personalization × Execution × Access</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs text-white/70">
            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">Weekly Missions</span>
            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">Unlocks</span>
          </div>
        </div>
      </header>

      {/* Hero with Spline */}
      <main className="mx-auto max-w-6xl px-4 py-6">
        <HeroSection />

        {/* Screen 1: Weekly Mission Dashboard */}
        <MissionDashboard />

        {/* Upcoming Unlocks Preview */}
        <UpcomingUnlocks />

        {/* Screen 2: Unlocks / Progress Map */}
        <UnlocksMap />
      </main>

      <footer className="mt-10 py-8 text-center text-xs text-white/50">
        Built for focused, immersive growth. Do the work. Unlock access.
      </footer>
    </div>
  );
}

export default App;
