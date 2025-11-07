import React from 'react';
import { LockOpen, Clock } from 'lucide-react';

const items = [
  { id: 1, label: 'Mentor AMA', condition: 'Reach 80% quality', eta: 'Later this week' },
  { id: 2, label: 'Tool Credits', condition: 'Submit prototype notes', eta: '2 days' },
  { id: 3, label: 'Lab Access', condition: 'Complete mission reflection', eta: '4 days' },
];

const UpcomingUnlocks = () => {
  return (
    <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-black/80 border border-white/10">
      <h3 className="text-lg font-semibold text-white">Upcoming Unlocks</h3>
      <div className="mt-4 grid gap-3">
        {items.map((it) => (
          <div key={it.id} className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-violet-500/20">
                <LockOpen className="w-4 h-4 text-violet-300" />
              </span>
              <div>
                <p className="text-white text-sm">{it.label}</p>
                <p className="text-xs text-white/60">{it.condition}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Clock className="w-3.5 h-3.5" />
              <span>{it.eta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingUnlocks;
