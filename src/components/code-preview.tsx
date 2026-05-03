const dockerCompose = `services:
  sneilvpn-edge:
    image: sneilvpn/wireguard-edge:latest
    container_name: sneilvpn-edge
    cap_add:
      - NET_ADMIN
      - SYS_MODULE
    environment:
      REGION: us-east-1
      PEER_DNS: 10.13.13.1
      WG_PORT: 51820
    ports:
      - "51820:51820/udp"
    volumes:
      - ./wireguard:/etc/wireguard
    restart: unless-stopped`;

export function CodePreview() {
  return (
    <section id="deep-dive" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80">
            Technical Deep-Dive
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Cloud-native VPN deployment without bespoke infrastructure glue.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Reviewers can see the operating model immediately: Dockerized edge
            nodes, explicit network capabilities, UDP ingress, and WireGuard
            configuration mounted as infrastructure state.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/80" />
            </div>
            <span className="font-mono text-xs text-zinc-500">
              docker-compose.yml
            </span>
          </div>
          <pre className="overflow-x-auto p-5 text-sm leading-6 text-zinc-200">
            <code>{dockerCompose}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
