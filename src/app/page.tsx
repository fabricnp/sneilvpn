import { BentoFeatures } from "@/components/bento-features";
import { CodePreview } from "@/components/code-preview";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import logo from "../../logo.png";

const requestAccessUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSc4a1nPh7zdGcBCG2ua06w8nCBZWzn7jiqKJkrVrNUAXfOlrw/viewform?usp=sharing&ouid=102458015498823849764";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(103,232,249,0.16),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(56,189,248,0.11),transparent_26%),linear-gradient(180deg,#020617_0%,#09090b_48%,#020617_100%)]" />
        <div className="absolute inset-0 bg-grid-faint bg-[size:36px_36px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="SneilVPN home">
          <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-md border border-white/15 bg-white/[0.06] shadow-glow">
            <Image
              src={logo}
              alt=""
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="text-sm font-semibold tracking-wide text-white">
            SneilVPN
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          <a className="transition hover:text-white" href="#features">
            Features
          </a>
          <a className="transition hover:text-white" href="#deep-dive">
            Deep-Dive
          </a>
          <a
            className="transition hover:text-white"
            href="mailto:bibek@sneilvpn.software"
          >
            Contact
          </a>
        </nav>

        <a
          href={requestAccessUrl}
          className="rounded-md border border-white/15 bg-white px-4 py-2 text-sm font-medium text-zinc-950 shadow-[0_12px_40px_rgba(255,255,255,0.14)] transition hover:bg-zinc-200"
        >
          Request Access
        </a>
      </header>

      <HeroSection />
      <BentoFeatures />
      <CodePreview />
      <SiteFooter />
    </main>
  );
}
