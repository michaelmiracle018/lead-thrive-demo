import { cn } from '~/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, subtitle, image, className, children }: PageHeroProps) {
  return (
    <section className={cn('relative min-h-[55vh] flex items-end overflow-hidden', className)}>
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      )}
      <div className="absolute inset-0 hero-overlay-center" />
      <div className="relative z-10 container-main py-16 lg:py-24 w-full">
        <span className="label-chip animate-fade-up opacity-0">The LeaDTribe Group</span>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-cream leading-[1.08] tracking-tight animate-fade-up max-w-3xl opacity-0 [animation-delay:100ms]">
          {title}
        </h1>
        <p className="mt-5 text-lg lg:text-xl text-cream/75 max-w-2xl animate-fade-up opacity-0 [animation-delay:180ms]">
          {subtitle}
        </p>
        {children && (
          <div className="mt-8 animate-fade-up opacity-0 [animation-delay:260ms]">{children}</div>
        )}
      </div>
    </section>
  );
}
