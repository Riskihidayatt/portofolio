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
      {iconUrl && <img src={iconUrl} alt="" aria-hidden="true" loading="lazy" className="h-3.5 w-3.5" />}
      {name}
    </span>
  );
}
