const features = [
  {
    label: "01",
    title: "Global Node Mesh",
    description:
      "Multi-region deployment across AWS availability zones keeps private traffic close to users and resilient during regional events.",
    className: "md:col-span-2",
    metric: "AWS AZ",
    metricLabel: "multi-region fabric",
  },
  {
    label: "02",
    title: "WireGuard Core",
    description:
      "Kernel-level security with modern encryption standards, lean tunnel negotiation, and predictable high-throughput paths.",
    className: "md:row-span-2",
    metric: "L3",
    metricLabel: "encrypted overlay",
  },
  {
    label: "03",
    title: "Containerized Edge",
    description:
      "Fully Docker-compatible for rapid, scalable deployment across repeatable cloud environments and edge-adjacent workloads.",
    className: "md:col-span-2",
    metric: "Docker",
    metricLabel: "portable runtime",
  },
];

export function BentoFeatures() {
  return (
    <section id="features" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80">
          Platform Capabilities
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Infrastructure primitives for latency-sensitive teams.
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-400">
          SneilVPN combines modern tunnel primitives with cloud-native routing
          so private networking stays fast, portable, and reviewer-ready.
        </p>
      </div>

      <div className="grid auto-rows-[minmax(260px,auto)] grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className={`${feature.className} group relative overflow-hidden rounded-lg border border-white/10 bg-zinc-950/80 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-white/[0.06]`}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
            <div className="relative flex h-full flex-col justify-between gap-10">
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-xs text-zinc-500">
                  {feature.label}
                </span>
                <div className="text-right">
                  <div className="text-2xl font-semibold tracking-tight text-white">
                    {feature.metric}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500">
                    {feature.metricLabel}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
