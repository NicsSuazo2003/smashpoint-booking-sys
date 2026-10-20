/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },

      colors: {
        /* ─────────────────────────────────────────────
         * PRIMARY — Court Blue
         * ───────────────────────────────────────────── */
        primary: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        // Alias — codebase uses `court-*` and `brand-blue-*`
        court: {
          50:  '#EFF6FF', 100: '#DBEAFE', 200: '#BFDBFE', 300: '#93C5FD',
          400: '#60A5FA', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8',
          800: '#1E40AF', 900: '#1E3A8A', 950: '#172554',
        },
        'brand-blue': {
          50:  '#EFF6FF', 100: '#DBEAFE', 200: '#BFDBFE', 300: '#93C5FD',
          400: '#60A5FA', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8',
          800: '#1E40AF', 900: '#1E3A8A', 950: '#172554',
        },

        /* ─────────────────────────────────────────────
         * NEUTRAL — Rich Navy (spec: page bg + cards + borders)
         * ───────────────────────────────────────────── */
        neutral: {
          50:  '#F5F7FA',
          100: '#E8EDF4',
          200: '#CBD5E1',
          300: '#A6B3C5',
          400: '#7D8CA3',
          500: '#596A82',
          600: '#40516A',
          700: '#2C3A50',
          800: '#1D293D',
          900: '#121C2E',
          950: '#0B1220',
        },
        // Alias — old code uses `forest-*` for BOTH bg and border.
        // Map it to navy so those surfaces stay dark.
        forest: {
          50:  '#F5F7FA',
          100: '#E8EDF4',
          200: '#CBD5E1',
          300: '#A6B3C5',
          400: '#7D8CA3',
          500: '#596A82',
          600: '#40516A',
          700: '#2C3A50',
          800: '#1D293D',
          900: '#121C2E',
          950: '#0B1220',
        },

        /* ─────────────────────────────────────────────
         * ACCENT — Pickleball Lime (spec: prices, selected slots)
         * ───────────────────────────────────────────── */
        accent: {
          50:  '#F7FEE7', 100: '#ECFCCB', 200: '#D9F99D', 300: '#BEF264',
          400: '#A3E635', 500: '#84CC16', 600: '#65A30D', 700: '#4D7C0F',
          800: '#3F6212', 900: '#365314', 950: '#1A2E05',
          DEFAULT: '#A3E635',
          light: '#BEF264',
          dark: '#65A30D',
          muted: '#A3E63520',
        },
        // Alias — codebase uses `accentGreen-*` and `gold-*`
        accentGreen: {
          50:  '#F7FEE7', 100: '#ECFCCB', 200: '#D9F99D', 300: '#BEF264',
          400: '#A3E635', 500: '#84CC16', 600: '#65A30D', 700: '#4D7C0F',
          800: '#3F6212', 900: '#365314', 950: '#1A2E05',
        },
        gold: {
          50:  '#F7FEE7', 100: '#ECFCCB', 200: '#D9F99D', 300: '#BEF264',
          400: '#A3E635', 500: '#84CC16', 600: '#65A30D', 700: '#4D7C0F',
          800: '#3F6212', 900: '#365314', 950: '#1A2E05',
        },

        /* ─────────────────────────────────────────────
         * SECONDARY — Outfield Green (spec-mandated, used sparingly)
         * ───────────────────────────────────────────── */
        secondary: {
          50:  '#F3FBE8', 100: '#E5F5C9', 200: '#CBEA9A', 300: '#A9D965',
          400: '#86C83C', 500: '#65B51F', 600: '#4D9417', 700: '#3D7418',
          800: '#315B1A', 900: '#294B1B', 950: '#172B10',
        },

        /* ─────────────────────────────────────────────
         * CREAM / OFF-WHITE — Cool Chalk
         * ───────────────────────────────────────────── */
        cream: {
          DEFAULT: '#F8FAF7',
          dark: '#EEF2EC',
          muted: '#A2B09F',
          50:  '#FCFDFB', 100: '#F8FAF7', 200: '#EEF2EC', 300: '#DDE4DA',
          400: '#C3CDC0', 500: '#A2B09F', 600: '#7C8D7A', 700: '#5C6C5A',
          800: '#3F4C3E', 900: '#293328', 950: '#171E17',
        },

        /* ─────────────────────────────────────────────
         * CANVAS
         * ───────────────────────────────────────────── */
        charcoal: '#0B1220',

        /* ─────────────────────────────────────────────
         * SEMANTIC
         * ───────────────────────────────────────────── */
        success: {
          50:  '#ECFDF5', 100: '#D1FAE5', 200: '#A7F3D0', 300: '#6EE7B7',
          400: '#34D399', 500: '#10B981', 600: '#059669', 700: '#047857',
          800: '#065F46', 900: '#064E3B', 950: '#022C22',
          DEFAULT: '#10B981',
        },
        error: {
          50:  '#FEF2F2', 100: '#FEE2E2', 200: '#FECACA', 300: '#FCA5A5',
          400: '#F87171', 500: '#EF4444', 600: '#DC2626', 700: '#B91C1C',
          800: '#991B1B', 900: '#7F1D1D', 950: '#450A0A',
          DEFAULT: '#EF4444',
        },
        warning: {
          50:  '#FFFBEB', 100: '#FEF3C7', 200: '#FDE68A', 300: '#FCD34D',
          400: '#FBBF24', 500: '#F59E0B', 600: '#D97706', 700: '#B45309',
          800: '#92400E', 900: '#78350F', 950: '#451A03',
          DEFAULT: '#F59E0B',
        },

        /* ─────────────────────────────────────────────
         * BRAND RED — promo only
         * ───────────────────────────────────────────── */
        brand: {
          red: '#F04452',
          redHover: '#DC2626',
          redDeep: '#991B1B',
        },
      },

      boxShadow: {
        // Spec token names
        'court-blue':      '0 0 18px rgba(37, 99, 235, 0.22)',
        'pickleball-lime': '0 0 0 1px rgba(132, 204, 22, 0.55), 0 0 16px rgba(132, 204, 22, 0.10)',
        'elevated':        '0 12px 32px rgba(0, 0, 0, 0.22)',

        // Aliases used across the codebase
        'glow-court':      '0 0 18px rgba(37, 99, 235, 0.22)',
        'glow-blue':       '0 0 18px rgba(37, 99, 235, 0.22)',
        'glow-accent':     '0 0 0 1px rgba(132, 204, 22, 0.55), 0 0 16px rgba(132, 204, 22, 0.10)',
        'glow-green':      '0 0 0 1px rgba(132, 204, 22, 0.55), 0 0 16px rgba(132, 204, 22, 0.10)',
        'glow-lime':       '0 0 0 1px rgba(163, 230, 53, 0.55), 0 0 16px rgba(163, 230, 53, 0.15)',
        'card-elevated':   '0 12px 32px rgba(0, 0, 0, 0.22)',
      },
    },
  },
  plugins: [],
};