export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-white/10 px-5 py-8 text-sm text-zinc-400 sm:px-8 md:flex-row md:items-center md:justify-between">
      <p>&copy; 2026 SneilVPN Infrastructure</p>
      <a
        className="text-white transition hover:text-cyan-200"
        href="mailto:bibek@sneilvpn.software"
      >
        Contact: bibek@sneilvpn.software
      </a>
    </footer>
  );
}
