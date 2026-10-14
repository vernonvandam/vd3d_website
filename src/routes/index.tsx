import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, Box, Timer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ConsultationBand, SiteFooter, SiteHeader } from '@/components/site-shell'
import { consultationUrl, services } from '@/lib/services'
import hero from '@/assets/precision-hero.jpg'

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'VD3D | Design, 3D Printing & Laser Services Perth' },
    { name: 'description', content: 'From idea to product. Explore VD3D’s 3D printing, design, scanning and laser services in Perth, Western Australia.' },
    { property: 'og:title', content: 'VD3D | From Idea to Product' },
    { property: 'og:description', content: 'Your partner from concept to prototyping and production. Design, 3D printing and laser services in Perth.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
})

function Index() {
  return <><SiteHeader/><main id="main">
    <section className="hero" aria-label="VD3D design and manufacturing">
      <img className="hero-photo" src={hero} alt="Illustrative 3D printed lattice structures and precision mechanical parts" width={1920} height={1024} fetchPriority="high"/>
      <div className="hero-content"><div className="eyebrow"><span className="status-dot"/> VD3D · YOUR IDEAS, MADE REAL</div><h1>FROM IDEA.<br/>TO <span>PRODUCT.</span></h1><p className="hero-copy">Design. 3D printing. Laser services.<br/>Your partner from the first spark to the finished part.</p><div className="hero-ctas"><Button asChild variant="industrial" size="feature"><a href={consultationUrl}>Let’s create something <ArrowUpRight/></a></Button><Button asChild variant="industrialOutline" size="feature"><a href="#services">Explore our services <ArrowRight/></a></Button></div></div>
      <div className="hero-foot"><span>PRECISION MADE. POSSIBILITIES UNLIMITED.</span><a href="#services">DISCOVER VD3D <ArrowDown size={14}/></a></div>
    </section>
    <section className="benefits" aria-label="Why choose 3D printing"><div className="site-width benefit-grid"><div className="benefit"><Timer/><div><h3>From concept to creation. Faster.</h3><p>Rapid prototypes. Less waiting. More progress.</p></div></div><div className="benefit"><Box/><div><h3>Complexity without compromise.</h3><p>Intricate geometries. Fewer assembled parts.</p></div></div><div className="benefit"><BadgeCheck/><div><h3>Quality in every layer.</h3><p>Expert operators. Carefully inspected results.</p></div></div></div></section>
    <section id="services" className="section site-width"><div className="section-heading"><div><div className="eyebrow">THE POSSIBILITIES START HERE</div><h2>One partner.<br/>More ways to create.</h2></div><p>From digital design to physical reality, our services work together to move your project forward.</p></div><div className="service-grid">{services.map((service,index) => <Link key={service.slug} className="service-card" to="/services/$service" params={{ service: service.slug }}><div className="service-image"><img src={service.image} alt={service.alt} width={1024} height={768} loading="lazy"/></div><span className="service-number">0{index+1} / {service.eyebrow.toUpperCase()}</span><div className="service-title"><h3>{service.title}</h3><ArrowUpRight/></div><p>{service.description}</p></Link>)}</div></section>
    <section id="process" className="section process-section"><div className="site-width"><div className="section-heading"><div><div className="eyebrow">FROM YOUR MIND TO YOUR HANDS</div><h2>A clear path to your product.</h2></div><Button asChild variant="link"><a href={consultationUrl}>Start your project <ArrowUpRight/></a></Button></div><div className="process-grid"><div><span className="process-number">01 / DISCOVER</span><h3>Tell us your idea.</h3><p>A sketch, a digital file or a problem to solve. We’ll talk through what you need and find the right approach.</p></div><div><span className="process-number">02 / DEVELOP</span><h3>Refine. Test. Repeat.</h3><p>Turn your concept into a practical design. Prototype, review and refine before taking the next step.</p></div><div><span className="process-number">03 / CREATE</span><h3>Bring it into the real world.</h3><p>Move from design to a finished part, with expert production and attention to the details that matter.</p></div></div></div></section>
    <section id="about" className="section site-width about-band"><div><div className="eyebrow">PERTH BASED. POSSIBILITY DRIVEN.</div><h2>Big on ideas.<br/>Precise on the details.</h2></div><div className="about-copy"><p>We’re VD3D. Your local partner for design, 3D printing and laser services in Perth, Western Australia. We help turn ambitious ideas into tangible products — from early concepts to prototypes and production.</p><p>Whatever stage you’re at, we bring practical guidance, a considered approach and a passion for making things.</p><Button asChild variant="link" className="px-0"><a href={consultationUrl}>Meet your next project partner <ArrowUpRight/></a></Button></div></section>
    <ConsultationBand/>
  </main><SiteFooter/></>
}
