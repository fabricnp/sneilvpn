# SneilVPN Frontend

SneilVPN is a production-ready landing page for a multi-region VPN infrastructure platform built around WireGuard, Docker, and AWS. The site presents the project as a high-performance private networking layer for distributed teams, cloud gaming, secure remote access, and latency-sensitive cloud applications.

## Tech Stack

- Next.js 14 with the App Router
- TypeScript
- Tailwind CSS
- Modular React components
- Static image optimization with `next/image`

## Infrastructure Focus

SneilVPN is designed to communicate the value of a cloud-native VPN platform:

- Multi-region node mesh across AWS availability zones
- WireGuard-based encrypted networking
- Docker-compatible edge deployment
- Low-latency routing for real-time workloads
- Professional request-access flow through Google Forms

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The app is static-friendly and can be deployed on Vercel through the standard Next.js build pipeline.

## Project Structure

```text
src/app
  globals.css
  layout.tsx
  page.tsx

src/components
  bento-features.tsx
  code-preview.tsx
  hero-section.tsx
  site-footer.tsx
```

## Contact

Contact: bibek@sneilvpn.software
