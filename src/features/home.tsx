import {
  BookOpen,
  Mic2,
  Users,
  GraduationCap,
  ArrowRight,
  Calendar,
  ChevronRight,
  Crown,
  Sparkles,
  Target,
  Award,
  Star,
} from 'lucide-react';
import Layout from '~/components/layout';
import ScrollReveal from '~/components/scroll-reveal';
import heroImg from '~/assets/hero-home.jpg';
import eventImg from '~/assets/event-seminar.jpg';
import eventFlyer from '~/assets/program-img/program-1.jpeg';
import actBookImg from '~/assets/activity-book-discipleship.jpg';
import actSeminarImg from '~/assets/activity-seminars.jpg';
import actMentorImg from '~/assets/activity-mentoring.jpg';
import actLeadImg from '~/assets/activity-leadership.jpg';
import communityImg from '~/assets/community.jpg';
import { Link } from '@tanstack/react-router';

const activities = [
  {
    icon: BookOpen,
    title: 'Book Discipleship',
    desc: 'Guided mentorship through transformative Christ-centered books to build spiritual foundations and moral excellence.',
    image: actBookImg,
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Mic2,
    title: 'Seminars & Summits',
    desc: 'Dynamic school engagements and national youth summits that ignite faith, cultivate leadership, and inspire societal impact.',
    image: actSeminarImg,
    color: 'bg-gold/12 text-gold',
  },
  {
    icon: Users,
    title: 'Mentoring & Coaching',
    desc: 'Intentional one-on-one and group coaching to develop Kingdom mindsets and practical leadership skills.',
    image: actMentorImg,
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: GraduationCap,
    title: 'Leadership Training',
    desc: 'Teaching on purpose, vision, success habits, financial wisdom, entrepreneurship, and effective communication.',
    image: actLeadImg,
    color: 'bg-gold/12 text-gold',
  },
];

const commitments = [
  {
    title: 'Community Development',
    desc: 'Building neighbourhoods where love, justice, and opportunity flourish',
  },
  {
    title: 'Government & Public Service',
    desc: 'Shaping policy and governance with wisdom and integrity',
  },
  { title: 'Corporate Leadership', desc: 'Leading organizations with Kingdom ethics and purpose' },
  { title: 'Kingdom Impact', desc: "Advancing God's purposes in every sphere of society" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 hero-gradient-mesh" />

        {/* Floating leadership tokens */}
        <div className="absolute top-24 right-[12%] hidden lg:block hero-token">
          <Crown size={52} className="text-gold" />
        </div>
        <div className="absolute top-48 right-[5%] hidden lg:block hero-token-delayed">
          <Sparkles size={36} className="text-gold" />
        </div>
        <div className="absolute top-36 right-[22%] hidden lg:block hero-token-slow">
          <Target size={40} className="text-gold" />
        </div>
        <div className="absolute bottom-40 right-[8%] hidden lg:block hero-token">
          <Award size={44} className="text-gold" />
        </div>
        <div className="absolute bottom-56 right-[18%] hidden lg:block hero-token-delayed">
          <Star size={32} className="text-gold" />
        </div>
        <div className="absolute top-[60%] right-[25%] hidden lg:block hero-token-slow">
          <div className="w-16 h-16 rounded-full border-2 border-gold/20" />
        </div>
        <div className="absolute top-[30%] right-[30%] hidden lg:block hero-token-delayed">
          <div className="w-3 h-3 rounded-full bg-gold/30" />
        </div>

        <div className="relative z-10 container-main py-32 lg:py-40">
          <span className="label-chip animate-fade-up opacity-0 pulse-ring">
            The LeaDTribe Group
          </span>
          <h1
            className="mt-8 text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight max-w-4xl animate-fade-up opacity-0 [animation-delay:100ms]"
            style={{ lineHeight: '1.05' }}
          >
            <span className="text-gradient-hero">Inspiring Kingdom Leadership</span>
            <br />
            <span className="text-cream">for Societal Transformation</span>
          </h1>
          <p className="mt-7 text-lg lg:text-xl text-cream/75 max-w-2xl animate-fade-up opacity-0 [animation-delay:200ms] leading-relaxed">
            Building a generation of Christian leaders who lead with vision, integrity, and
            purpose—transforming every aspect of society with Kingdom values.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up opacity-0 [animation-delay:300ms]">
            <a
              href="https://chat.whatsapp.com/FIXYLeEAllNGpSoHyDPu5R?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Join The Tribe <ArrowRight size={18} />
            </a>
            <Link to="/programs" className="btn-secondary-hero">
              Explore Programs <ChevronRight size={18} />
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg animate-fade-up opacity-0 [animation-delay:500ms]">
            {[
              { num: '1M+', label: 'Leaders Target' },
              { num: '4+', label: 'Core Programs' },
              { num: '2026', label: 'Maiden Seminar' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl lg:text-3xl font-display text-gold animate-count-up">
                  {s.num}
                </p>
                <p className="text-cream/40 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up opacity-0 [animation-delay:700ms]">
          <span className="text-cream/40 text-xs tracking-wider uppercase">Scroll</span>
          <div className="w-px h-8 bg-cream/20 relative overflow-hidden">
            <div className="w-full h-3 bg-gold absolute top-0 animate-shimmer" />
          </div>
        </div>
      </section>

      {/* Core Activities with images */}
      <section className="py-24 lg:py-36">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="label-chip">What We Do</span>
              <h2 className="mt-4 text-3xl lg:text-5xl text-foreground leading-[1.1] tracking-tight">
                Our Core <span className="text-gradient-gold">Activities</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 space-y-6">
            {activities.map((a, i) => (
              <ScrollReveal key={a.title} stagger={i + 1}>
                <div className="card-elevated overflow-hidden group">
                  <div
                    className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className="lg:w-2/5 relative overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-56 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-transparent to-card/20" />
                    </div>
                    <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                      <div
                        className={`w-14 h-14 rounded-xl ${a.color} flex items-center justify-center transition-transform duration-400 group-hover:scale-110 icon-float`}
                      >
                        <a.icon size={28} />
                      </div>
                      <h3 className="mt-5 text-xl lg:text-2xl font-display text-foreground">
                        <span className="text-gradient-forest">{a.title}</span>
                      </h3>
                      <p className="mt-4 text-muted-foreground leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 lg:py-36 bg-cream-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/3 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container-main relative">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <span className="label-chip">Who We Are</span>
                <h2 className="mt-4 text-3xl lg:text-5xl text-foreground leading-[1.08] tracking-tight">
                  The World Needs a{' '}
                  <span className="text-gradient-gold">Different Kind of Leader.</span>
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                  Not leaders who seek power for themselves, but Kingdom leaders—men and women whose
                  principles, values, and decisions are shaped by the life and person of Jesus
                  Christ.
                </p>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  The LeadTribe Group is a movement of passionate Christians dedicated to
                  transforming their societies into Kingdom communities. We believe that every
                  sphere of life—from the local community to the highest levels of government and
                  corporate leadership—is a platform for Kingdom impact.
                </p>
              </ScrollReveal>

              <ScrollReveal className="mt-8">
                <img
                  src={communityImg}
                  alt="Community impact"
                  className="w-full rounded-2xl aspect-video object-cover shadow-lg"
                  loading="lazy"
                />
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2">
              <ScrollReveal>
                <h3 className="text-xl font-display text-foreground mb-2">
                  Our <span className="text-gradient-gold">Commitment</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  We are committed to empowering individuals to take up active roles in:
                </p>
                <div className="space-y-3">
                  {commitments.map((c, i) => (
                    <ScrollReveal key={c.title} stagger={i + 1}>
                      <div className="card-elevated p-5 flex gap-4 items-start">
                        <div className="w-2.5 h-2.5 mt-2 rounded-full bg-gold shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{c.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Our Belief */}
          <ScrollReveal className="mt-20">
            <div className="relative overflow-hidden rounded-2xl bg-primary p-10 lg:p-14">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
              <div className="relative max-w-3xl">
                <h3 className="text-2xl font-display text-cream mb-5">
                  Our <span className="text-gradient-hero">Belief</span>
                </h3>
                <p className="text-cream/80 leading-relaxed text-lg">
                  We believe that the call to leadership is not reserved for a select few. Every
                  believer—whether student, professional, parent, or pastor—is called to influence
                  their world for Christ. At LeadTribe, we are raising a generation of leaders who
                  will not wait for permission to make a difference. They will rise, take
                  responsibility, and transform their world with Kingdom values.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming Events with flyer */}
      <section className="py-24 lg:py-36 bg-forest-dark text-cream relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={eventImg} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-forest-dark/85" />
        </div>
        <div className="container-main relative">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              {/* <span className="label-chip">Coming Soon</span> */}
              <h2 className="mt-4 text-3xl lg:text-5xl leading-[1.1] tracking-tight">
                <span className="text-gradient-hero">Upcoming Events</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-14">
            <div className="max-w-7xl mx-auto">
              <div className="card-glass p-6 lg:p-10 flex flex-col lg:flex-row gap-8 items-center">
                {/* Event Flyer with overlay */}
                <div className="w-full lg:w-1/2 shrink-0 relative group rounded-xl overflow-hidden">
                  <img
                    src={eventFlyer}
                    alt="The Maiden LeaDTribe Seminar Flyer"
                    className="w-full rounded-xl shadow-2xl border border-gold/20 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest-dark/60 via-transparent to-transparent rounded-xl" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="flex flex-col items-center justify-center bg-gold text-forest-dark rounded-2xl px-6 py-4 shrink-0 pulse-ring">
                      <span className="text-3xl font-display leading-none">30</span>
                      <span className="text-sm font-semibold mt-1">May</span>
                      <span className="text-xs font-medium">2026</span>
                    </div>
                    <div>
                      <div className="text-xl lg:text-xl font-display text-cream">
                        🔥 The Possibility Mindset:{' '}
                        <span className="text-gradient-hero">
                          Thinking Beyond Limit, Acting Despite Fear
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-cream/60">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={16} /> May 30, 2026
                        </span>
                        {/* <span className="flex items-center gap-1.5">
                          <GraduationCap size={16} /> BECE Graduates
                        </span> */}
                      </div>
                    </div>
                  </div>
                  <p className="text-cream/55 leading-relaxed">
                    An inspiring session designed to launch the next generation of Kingdom leaders
                    into their God-given purpose. Join us for a transformative experience of
                    biblical teaching, leadership development, and community building.
                  </p>
                  <a
                    href="https://forms.office.com/r/3GJyhF2QaN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold mt-6 text-sm inline-flex"
                  >
                    Register Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-16 text-center">
            <a
              href="https://chat.whatsapp.com/FIXYLeEAllNGpSoHyDPu5R?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-hero"
            >
              Join The Tribe Today <ArrowRight size={18} />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
