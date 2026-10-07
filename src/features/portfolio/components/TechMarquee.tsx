import { getTechIconUrl, isDarkTechIcon } from '../../../lib/techIcons';
import { cn } from '../../../lib/utils';

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  // The track holds the list twice and slides by half its width, so the loop is seamless.
  const loop = [...items, ...items];

  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul className={cn('flex w-max shrink-0 group-hover:[animation-play-state:paused]', reverse ? 'animate-marquee-reverse' : 'animate-marquee')}>
        {loop.map((tech, index) => {
          const iconUrl = getTechIconUrl(tech)!;
          const duplicate = index >= items.length;
          return (
            <li
              key={`${tech}-${index}`}
              aria-hidden={duplicate || undefined}
              title={tech}
              className="mx-3 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 sm:mx-4 sm:h-20 sm:w-20"
            >
              <img
                src={iconUrl}
                alt={duplicate ? '' : tech}
                loading="lazy"
                className={cn('h-9 w-9 sm:h-11 sm:w-11', isDarkTechIcon(tech) && 'dark:invert')}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function TechMarquee({ items }: { items: string[] }) {
  const withIcons = items.filter((tech) => getTechIconUrl(tech));
  const half = Math.ceil(withIcons.length / 2);

  return (
    <div className="relative left-1/2 mb-14 flex w-screen max-w-7xl -translate-x-1/2 flex-col gap-5">
      <MarqueeRow items={withIcons.slice(0, half)} />
      <MarqueeRow items={withIcons.slice(half)} reverse />
    </div>
  );
}
