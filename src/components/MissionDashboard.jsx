import React from 'react';
import { Upload, Target, CheckCircle2 } from 'lucide-react';

const microTasks = [
  { id: 1, title: 'Interview 2 peers about leadership gaps', effort: 0.7 },
  { id: 2, title: 'Draft a 1-page mission plan', effort: 0.5 },
  { id: 3, title: 'Run a 30-min mini-initiative', effort: 0.9 },
  { id: 4, title: 'Reflect: What did you learn?', effort: 0.4 },
];

const MissionDashboard = () => {
  return (
    <section className="mt-8 grid gap-6">
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-black/80 border border-white/10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-violet-300/80">This Week</p>
            <h2 className="mt-1 text-2xl font-semibold text-white">Leadership Mission</h2>
            <p className="mt-1 text-sm text-white/70 max-w-2xl">
              Break your goal into small, high-quality actions. Aim for depth over breadth.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-violet-200/90 bg-white/5 px-3 py-2 rounded-xl border border-white/10">
            <Target className="w-4 h-4" />
            <span className="text-sm">Quality target: 80% to unlock Mentor AMA</span>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          {microTasks.map(task => (
            <div key={task.id} className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-300" />
                <div>
                  <p className="text-white text-sm sm:text-base">{task.title}</p>
                  <div className="mt-2 w-48 sm:w-64 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-violet-400 to-fuchsia-400" style={{ width: `${task.effort * 100}%` }} />
                  </div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-white/70 shrink-0">Effort hint</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-white/80">
            <div className="w-28 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-2/3 bg-violet-400/70" />
            </div>
            <span className="">Momentum: 14-day streak</span>
          </div>
          <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm shadow-lg shadow-fuchsia-500/20 border border-white/10 hover:opacity-95 transition">
            <Upload className="w-4 h-4" />
            Submit Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionDashboard;
