export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl flex-col justify-center px-5 pb-16 pt-10 sm:px-8 lg:pb-24">
      <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
            WireGuard edge infrastructure
          </div>

          <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl">
            High-Performance Networking for the Distributed Era.
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-zinc-400 sm:text-xl">
            Deploy multi-region VPN infrastructure in seconds. Powered by
            WireGuard and optimized for ultra-low latency cloud applications.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#deep-dive"
              className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              View Technical Stack
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-zinc-950/80 p-4 shadow-2xl shadow-black/50 backdrop-blur">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/80" />
              </div>
              <span className="font-mono text-xs text-zinc-500">
                sneilvpn://global-mesh
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {["us-east", "eu-west", "ap-northeast"].map((region) => (
                <div
                  key={region}
                  className="rounded-md border border-white/10 bg-white/[0.035] p-4"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase text-zinc-500">
                      {region}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.75)]" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-10/12 rounded-full bg-cyan-300" />
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-7/12 rounded-full bg-sky-300" />
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-9/12 rounded-full bg-white/70" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-md border border-white/10 bg-black/30 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-white">
                  Active encrypted path
                </span>
                <span className="font-mono text-xs text-cyan-200">12ms p95</span>
              </div>
              <div className="relative h-24 overflow-hidden rounded-md bg-grid-faint bg-[size:36px_36px]">
                <div className="absolute left-[12%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-300" />
                <div className="absolute left-[12%] right-[14%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-cyan-300 via-white/70 to-sky-300" />
                <div className="absolute right-[14%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-sky-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
