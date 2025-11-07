import React from 'react';
import { Users, FlaskConical, Wrench, Shield } from 'lucide-react';

const nodes = [
  { id: 'mentor', label: 'Mentor AMA', icon: Users, status: 'locked', angle: -20, radius: 80 },
  { id: 'lab', label: 'Prototype Lab', icon: FlaskConical, status: 'unlocked', angle: 25, radius: 110 },
  { id: 'tool', label: 'Pro Tool Suite', icon: Wrench, status: 'unlocked', angle: 70, radius: 85 },
  { id: 'challenge', label: 'Industry Challenge', icon: Shield, status: 'locked', angle: 140, radius: 120 },
];

const UnlocksMap = () => {
  return (
    <section className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#0b0b12] to-black border border-white/10">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">Access Constellation</h3>
          <p className="text-sm text-white/70">Opportunities unlocked by the depth of your work.</p>
        </div>
        <div className="hidden sm:block text-xs text-violet-200/80">Emphasis: access and growth</div>
      </div>

      <div className="relative mt-6 h-72 sm:h-80 rounded-2xl bg-gradient-to-br from-violet-950/60 via-fuchsia-900/30 to-transparent overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.25),transparent_60%)]" />
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <g stroke="url(#glow)" strokeWidth="1" fill="none">
            <path d="M10 50 Q 160 120 310 60" />
            <path d="M40 160 Q 160 20 280 170" />
            <path d="M60 80 Q 160 190 260 90" />
          </g>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            {nodes.map((n) => {
              const x = 50 + n.radius * Math.cos((Math.PI / 180) * (n.angle + 45));
              const y = 50 + n.radius * Math.sin((Math.PI / 180) * (n.angle + 45));
              const Icon = n.icon;
              const isUnlocked = n.status === 'unlocked';
              return (
                <div
                  key={n.id}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className={`relative px-3 py-2 rounded-xl border backdrop-blur text-white/90 text-xs shadow-lg ${
                    isUnlocked
                      ? 'bg-white/10 border-white/20'
                      : 'bg-black/50 border-white/10 opacity-70'
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-lg ${
                        isUnlocked ? 'bg-violet-500/30' : 'bg-zinc-800'
                      }`}>
                        <Icon className={`w-3.5 h-3.5 ${isUnlocked ? 'text-violet-300' : 'text-white/60'}`} />
                      </span>
                      <span>{n.label}</span>
                    </div>
                    {isUnlocked && (
                      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-white/70">
        Your Leadership Mission unlocked: <span className="text-white">Industry Challenge – Lead a Mini Team</span>
      </p>
    </section>
  );
};

export default UnlocksMap;
