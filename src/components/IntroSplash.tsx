import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SESSION_KEY = 'smashpoint_intro_shown';

// Geometric 9-hole dot pattern for the minimal ball
const BALL_HOLES = [
  { cx: 0, cy: 0, r: 2.8 },
  { cx: -10, cy: -8, r: 2.2 },
  { cx: 10, cy: -8, r: 2.2 },
  { cx: -10, cy: 9, r: 2.2 },
  { cx: 10, cy: 9, r: 2.2 },
  { cx: 0, cy: -14, r: 1.8 },
  { cx: 0, cy: 14, r: 1.8 },
  { cx: -14, cy: 0, r: 1.8 },
  { cx: 14, cy: 0, r: 1.8 },
];

interface IntroSplashProps {
  onComplete?: () => void;
}

export function IntroSplash({ onComplete }: IntroSplashProps) {
  const [isDismissing, setIsDismissing] = useState(false);
  const [shouldShow, setShouldShow] = useState(() => {
    return typeof window !== 'undefined' ? !sessionStorage.getItem(SESSION_KEY) : true;
  });

  useEffect(() => {
    if (!shouldShow) {
      onComplete?.();
      return;
    }

    sessionStorage.setItem(SESSION_KEY, 'true');

    // Auto-advance after 3.2s if no interaction
    const timer = setTimeout(() => dismiss(), 3200);
    return () => clearTimeout(timer);
  }, [shouldShow]);

  const dismiss = () => {
    if (isDismissing) return;
    setIsDismissing(true);
    setTimeout(() => {
      setShouldShow(false);
      onComplete?.();
    }, 450);
  };

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      <motion.div
        onClick={dismiss}
        initial={{ opacity: 1 }}
        animate={{ opacity: isDismissing ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#090D15] cursor-pointer select-none"
      >
        {/* Subtle, soft ambient backlight */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,180,216,0.08)_0%,transparent_60%)]" />

        <div className="relative z-10 flex flex-col items-center">
          {/* 1. Minimal Ball Icon (Floats in gently) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Ambient Volt Glow */}
            <div className="absolute w-16 h-16 rounded-full bg-[#4DE92A]/20 blur-xl" />

            <svg width="48" height="48" viewBox="-24 -24 48 48">
              <circle cx="0" cy="0" r="22" fill="#4DE92A" />
              {BALL_HOLES.map((h, i) => (
                <circle key={i} cx={h.cx} cy={h.cy} r={h.r} fill="#090D15" opacity="0.9" />
              ))}
            </svg>
          </motion.div>

          {/* 2. Expanding Court Laser Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-28 h-px bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent my-6"
          />

          {/* 3. Sleek Typography */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center gap-1.5"
          >
            <h1 className="text-2xl font-black italic tracking-wider text-white uppercase font-sans">
              SMASH <span className="text-[#E11D2A]">POINT</span>
            </h1>
            <p className="text-[10px] tracking-[0.35em] text-[#667FA5] uppercase font-mono">
              Court Reservations
            </p>
          </motion.div>
        </div>

        {/* 4. Minimal bottom hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.25, 0.65, 0.25] }}
          transition={{ delay: 1.0, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-[9px] tracking-[0.3em] uppercase text-[#667FA5]/60 font-mono"
        >
          Tap anywhere to continue
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}