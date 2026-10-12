'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = 'mailto:' + email;
    }
  };

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/50"
    >
      {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
      {copied ? 'Copied!' : email}
    </button>
  );
}
