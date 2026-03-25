import Layout from '~/components/layout';
import PageHero from '~/components/page-hero';
import ScrollReveal from '~/components/scroll-reveal';
import heroImg from '~/assets/hero-about.jpg';
import mentoringImg from '~/assets/mentoring.jpg';
import communityImg from '~/assets/community.jpg';
import {
  Target,
  Eye,
  Crosshair,
  Brain,
  BookOpen,
  Users,
  Building,
  Mic2,
  Lightbulb,
  Sparkles,
} from 'lucide-react';

const philosophyShifts = [
  { from: 'Fear', to: 'Faith' },
  { from: 'Scarcity', to: 'Abundance' },
  { from: 'Passivity', to: 'Purpose' },
  { from: 'Worldly Thinking', to: 'Kingdom Thinking' },
];

const commitments = [
  {
    icon: Mic2,
    title: 'Strategic Outreach',
    desc: 'Public speaking and mentoring in Junior/Senior High Schools',
  },
  {
    icon: Users,
    title: 'National Youth Summits',
    desc: 'Gathering young leaders for inspiration and equipping',
  },
  {
    icon: BookOpen,
    title: 'Book Discipleship Programs',
    desc: 'Guiding students through transformative literature',
  },
  {
    icon: Building,
    title: 'Community Transformation',
    desc: 'Partnering with local institutions to reduce social vices and uplift lives',
  },
];

export default function About() {
  return (
    <Layout>
      <PageHero
        title="About The LeadTribe Group"
        subtitle="Building Kingdom Leaders for Societal Transformation"
        image={heroImg}
      />

      {/* Vision / Mission / Target */}
      <section className="py-24 lg:py-36">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                label: 'Our Vision',
                accent: 'bg-primary/10 text-primary',
                text: 'Building a generation of Christian leaders who lead with vision, integrity, and purpose—transforming every aspect of society with Kingdom values and mindsets.',
              },
              {
                icon: Target,
                label: 'Our Mission',
                accent: 'bg-gold/12 text-gold',
                text: 'Our mission is to build the very generation our vision declares—by empowering students and professionals through biblical teaching, discipleship, and intentional leadership development. We equip individuals to lead with vision, integrity, and purpose, sending them forth to transform every aspect of society with Kingdom values and mindsets.',
              },
              {
                icon: Crosshair,
                label: 'Our Target',
                accent: 'bg-primary/10 text-primary',
                text: 'To raise 1 million Kingdom Leaders who are transforming their domains into Kingdom communities by the year 2035.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.label} stagger={i + 1}>
                <div className="card-elevated p-8 h-full group">
                  <div
                    className={`w-13 h-13 rounded-xl ${item.accent} flex items-center justify-center transition-transform duration-400 group-hover:scale-110`}
                  >
                    <item.icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-display text-foreground">
                    <span className="text-gradient-gold">{item.label}</span>
                  </h3>
                  <div className="accent-line mt-3" />
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Target stat */}
          <ScrollReveal className="mt-16">
            <div className="relative overflow-hidden rounded-2xl bg-primary p-12 lg:p-16 text-center">
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
              <div className="relative">
                <p className="stat-number text-gold!">1,000,000</p>
                <p className="mt-3 text-cream text-xl font-display">
                  Kingdom Leaders by <span className="text-gradient-hero">2035</span>
                </p>
                <p className="mt-3 text-cream/60 max-w-lg mx-auto">
                  Transforming their domains into Kingdom communities across Africa and beyond.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-36 bg-cream-dark">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal>
                <span className="label-chip">Our Philosophy</span>
                <h2 className="mt-4 text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight">
                  Why We Focus on <span className="text-gradient-gold">Youth</span>
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                  In a world of distractions, peer pressure, and self-doubt, young people need
                  anchors for their identity and purpose. We believe that intentional investment in
                  youth today prevents the need for mending broken lives tomorrow.
                </p>
              </ScrollReveal>
              <ScrollReveal className="mt-8">
                <img
                  src={mentoringImg}
                  alt="Youth mentoring session"
                  className="rounded-2xl w-full aspect-16/10 object-cover shadow-lg"
                  loading="lazy"
                />
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Brain size={20} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-display text-foreground">
                    <span className="text-gradient-forest">Mindset Development</span>
                  </h3>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="card-elevated p-6 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb size={16} className="text-gold" />
                    <h4 className="font-semibold text-foreground text-sm">Why Mindset Matters</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We believe that every God-given idea has the potential to flourish—but only when
                    the soil of the mind is prepared to receive it. When the mindset is right, ideas
                    germinate, grow, and bear fruit that transforms communities. When the mindset is
                    wrong, even the most brilliant ideas wither and die before they ever see the
                    light of day.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="card-elevated p-6 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={16} className="text-gold" />
                    <h4 className="font-semibold text-foreground text-sm">Our Core Focus</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For this reason, mindset development is not just one part of our work—it is the
                    foundation. We are committed to identifying and transforming the unproductive,
                    limiting mindsets that hold people back, replacing them with empowered thinking
                    that fuels Kingdom impact.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <blockquote className="my-6 border-l-4 border-gold pl-6">
                  <p className="italic text-foreground/80 leading-relaxed">
                    "Do not be conformed to this world, but be transformed by the renewal of your
                    mind"
                  </p>
                  <cite className="mt-2 block text-sm text-muted-foreground not-italic">
                    — Romans 12:2
                  </cite>
                </blockquote>
              </ScrollReveal>

              <ScrollReveal>
                <div className="card-elevated p-6 mb-6">
                  <h4 className="font-semibold text-foreground text-sm mb-3">
                    Our Commitment to Transformation
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Through intentional teaching, discipleship, and mentoring, we guide our members
                    on a journey of mindset transformation—shifting them:
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {philosophyShifts.map((s) => (
                      <div
                        key={s.from}
                        className="flex items-center gap-2 text-sm p-3 rounded-xl bg-muted/50"
                      >
                        <span className="text-muted-foreground">{s.from}</span>
                        <span className="text-gold font-semibold">→</span>
                        <span className="text-foreground font-medium">{s.to}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our goal is simple: to turn unproductive mindsets into highly productive engines
                  for societal transformation—one heart, one mind, one leader at a time.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 lg:py-36">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="label-chip">Our Commitment</span>
              <h2 className="mt-4 text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight">
                We Are <span className="text-gradient-gold">Committed To</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commitments.map((c, i) => (
              <ScrollReveal key={c.title} stagger={i + 1}>
                <div className="card-elevated p-7 h-full text-center group">
                  <div className="w-13 h-13 mx-auto rounded-xl bg-primary/10 flex items-center justify-center transition-transform duration-400 group-hover:scale-110">
                    <c.icon size={22} className="text-primary" />
                  </div>
                  <h4 className="mt-5 font-display text-foreground">{c.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-14">
            <img
              src={communityImg}
              alt="Community transformation"
              className="w-full rounded-2xl aspect-21/9 object-cover shadow-lg"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
