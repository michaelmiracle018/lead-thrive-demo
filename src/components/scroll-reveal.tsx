import { useScrollReveal } from '~/hooks/useScrollReveal';
import { cn } from '~/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

export default function ScrollReveal({ children, className, stagger }: ScrollRevealProps) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={cn('section-reveal', stagger && `stagger-${stagger}`, className)}>
      {children}
    </div>
  );
}
