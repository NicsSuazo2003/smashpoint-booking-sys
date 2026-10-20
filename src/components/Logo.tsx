import { useState } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'nav' | 'lg' | 'xl' | '2xl';
  withText?: boolean;
  to?: string;
}

export function Logo({ size = 'md', withText = true, to = '/' }: LogoProps) {
  const [imageFailed, setImageFailed] = useState(false);

  const sizes = {
    sm: { image: 40, text: 'text-lg' },
    md: { image: 50, text: 'text-xl' },
    nav: { image: 64, text: 'text-xl' },
    lg: { image: 65, text: 'text-3xl' },
    xl: { image: 80, text: 'text-4xl' },
    '2xl': { image: 120, text: 'text-5xl' },
  };
  const s = sizes[size];

  const content = (
    <div className="flex items-center gap-2.5">
      {/* ✅ Only render <img> if it hasn't failed yet — no broken-image icon */}
      {!imageFailed && (
        <img
          src="/images/SP.png"
          alt="Smash Point"
          width={s.image}
          height={s.image}
          className="object-contain"
          onError={() => setImageFailed(true)}
        />
      )}
      {withText && (
        <span className={`font-display ${s.text} font-bold tracking-tight`}>
          <span className="text-cream">Smash</span>{' '}
          <span className="text-accent-400">Point</span>
        </span>
      )}
    </div>
  );

  if (to) {
    return (
      <Link to={to} aria-label="Smash Point home">
        {content}
      </Link>
    );
  }
  return content;
}