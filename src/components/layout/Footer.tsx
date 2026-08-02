export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-8 text-[10px] uppercase tracking-widest font-mono opacity-50">
          <span>© {new Date().getFullYear()} Riski Hidayat</span>
          <span className="hidden sm:inline">Built with React & Supabase</span>
        </div>
        <div className="text-[10px] uppercase tracking-widest font-mono flex items-center gap-2 opacity-70">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          System operational
        </div>
      </div>
    </footer>
  );
}
