import { getTechIconUrl } from '../../lib/techIcons';
import { cn } from '../../lib/utils';

export function TechChip({ name, className }: { name: string; className?: string }) {
  const iconUrl = getTechIconUrl(name);
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground',
        className,
      )}
    >
      {iconUrl && (
        // eslint-disable-next-line @next/next/no-img-element -- tiny local SVG, nothing to optimise
        <img src={iconUrl} alt="" aria-hidden="true" loading="lazy" width={14} height={14} className="h-3.5 w-3.5" />
      )}
      {name}
    </span>
  );
}
