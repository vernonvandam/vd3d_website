const services = [
  {
    number: '01',
    title: '3D Visualisation',
    description:
      'Give an idea shape with clear, considered imagery for products, spaces and concepts.',
  },
  {
    number: '02',
    title: '3D Modelling',
    description:
      'Build detailed digital models ready for presentation, refinement or production.',
  },
  {
    number: '03',
    title: 'Design Support',
    description:
      'Move from an early brief to a polished 3D outcome with practical design support.',
  },
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f4f0] text-[#171916]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <a href="#" className="text-xl font-black tracking-[-0.08em]">
          VD<span className="text-[#a7ed62]">3D</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#62645e] md:flex">
          <a className="transition hover:text-black" href="#services">Services</a>
          <a className="transition hover:text-black" href="#work">Selected work</a>
          <a className="transition hover:text-black" href="#about">About</a>
        </nav>

        <a
          href="mailto:hello@vd3d.com.au"
          className="rounded-full bg-[#171916] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#343831]"
        >
          Start a project <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 sm:px-10 md:grid-cols-2 md:gap-8 md:pb-28 md:pt-20">
        <div className="relative z-10">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#70736a]">
            <span className="h-2 w-2 rounded-full bg-[#78bd3d]" />
            Independent 3D design studio
          </p>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
            Make your next
            <br />
            idea <span className="text-[#78bd3d]">real.</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-[#666960]">
            VD3D turns ideas into thoughtful 3D design, models and visualisations
            that help you see what’s possible.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@vd3d.com.au"
              className="rounded-full bg-[#171916] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#343831]"
            >
              Tell us about your project <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#services"
              className="px-3 py-3 text-sm font-medium text-[#55584f] hover:text-black"
            >
              Explore services ↓
            </a>
          </div>

          <p className="mt-12 text-xs font-medium uppercase tracking-[0.16em] text-[#92948d]">
            Thoughtful design · Clear communication · Detail that matters
          </p>
        </div>

        <div
          aria-label="Abstract 3D form in green and charcoal"
          className="relative mx-auto aspect-square w-full max-w-[540px] overflow-hidden rounded-[2rem] bg-[#dce8d0]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#f4f7ed_0%,transparent_48%)]" />
          <div className="absolute left-[12%] top-[15%] h-28 w-28 rounded-full border border-white/60" />
          <div className="absolute bottom-[12%] right-[10%] h-40 w-40 rounded-full border border-[#80936f]/30" />

          <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-[34%] bg-gradient-to-br from-[#b9f178] via-[#8acb4c] to-[#54852d] shadow-[20px_35px_60px_rgba(47,72,33,0.28)]">
            <div className="absolute inset-[9%] rounded-[34%] border border-white/35" />
            <div className="absolute left-[16%] top-[12%] h-[24%] w-[48%] rounded-full bg-white/35 blur-xl" />
          </div>

          <div className="absolute bottom-6 left-6 rounded-full border border-white/70 bg-white/50 px-4 py-2 text-xs font-medium text-[#41493a] backdrop-blur">
            Ideas, made tangible.
          </div>
          <span className="absolute right-7 top-7 text-xs font-semibold tracking-[0.2em] text-[#5f6b54]">
            VD3D / 01
          </span>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-20 sm:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78a94f]">
                What we do
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                From first sketch
                <br className="hidden sm:block" /> to final form.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#70736a]">
              Practical, creative 3D support to help you explore an idea, explain
              it clearly and take the next step.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-[#e8e9e4] bg-[#fafaf8] p-7 transition hover:-translate-y-1 hover:border-[#c8d9b9]"
              >
                <p className="text-xs font-semibold tracking-[0.15em] text-[#8b8e85]">
                  {service.number}
                </p>
                <h3 className="mt-12 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-[#70736a]">
                  {service.description}
                </p>
                <a
                  href="mailto:hello@vd3d.com.au"
                  className="mt-7 inline-block text-sm font-medium"
                >
                  Discuss this service <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div
            aria-label="Abstract 3D object on a warm background"
            className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#e8e3d8]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,#c8c1b2_0%,transparent_55%)]" />
            <div className="absolute left-1/2 top-[46%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[2rem] bg-gradient-to-br from-[#51564c] to-[#191c18] shadow-[18px_24px_35px_rgba(25,28,24,0.25)] sm:h-56 sm:w-56">
              <div className="absolute inset-5 rounded-[1.5rem] border border-white/15" />
              <div className="absolute left-7 top-7 h-10 w-24 rounded-full bg-white/10 blur-md" />
            </div>
            <span className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-[0.16em] text-[#777468]">
              Selected work / 01
            </span>
          </div>

          <div id="about" className="md:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78a94f]">
              A considered approach
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
              Good work starts with understanding the idea.
            </h2>
            <p className="mt-6 leading-8 text-[#70736a]">
              Every project is different. We take time to understand what you’re
              trying to achieve, then shape the right 3D approach around your
              brief, timeline and next steps.
            </p>
            <a
              href="mailto:hello@vd3d.com.au"
              className="mt-8 inline-flex rounded-full border border-[#d8d9d3] px-6 py-4 text-sm font-medium transition hover:border-[#171916]"
            >
              Meet VD3D <span className="ml-3" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-6 mb-8 rounded-[2rem] bg-[#171916] px-6 py-16 text-white sm:mx-10 sm:px-12 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a7ed62]">
              Have an idea in mind?
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
              Let’s make something worth looking at.
            </h2>
          </div>
          <a
            href="mailto:hello@vd3d.com.au"
            className="inline-flex w-fit rounded-full bg-[#a7ed62] px-6 py-4 text-sm font-semibold text-[#171916] transition hover:bg-[#baf58a]"
          >
            Start a conversation <span className="ml-3" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-6 pb-8 text-xs text-[#81847a] sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© {new Date().getFullYear()} VD3D. All rights reserved.</p>
        <p>3D design & visualisation</p>
      </footer>
    </main>
  )
}

export default App