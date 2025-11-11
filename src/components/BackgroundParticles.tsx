'use client';

import { Particles } from '@/components/ui/shadcn-io/particles';
import { useTheme } from '@/contexts/ThemeContext';

export default function BackgroundParticles() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Subtle settings for background
  const color = isDark ? '#9CA3AF' : '#60A5FA'; // gray-400 for dark, blue-400 for light

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Particles
        className="absolute inset-0"
        quantity={120}
        staticity={60}
        ease={60}
        size={0.6}
        color={color}
        vx={0.02}
        vy={0.02}
      />
    </div>
  );
}


