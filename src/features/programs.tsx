import { Link } from '@tanstack/react-router';
import {
  GraduationCap,
  Briefcase,
  ArrowRight,
  School,
  Church,
  BookOpen,
  Users,
  Mic2,
  Target,
} from 'lucide-react';
import Layout from '~/components/layout';
import PageHero from '~/components/page-hero';
import ScrollReveal from '~/components/scroll-reveal';
import heroImg from '~/assets/hero-programs.jpg';
import seminarImg from '~/assets/seminar.jpg';
import studentsImg from '~/assets/students-seminar.jpg';
import professionalsImg from '~/assets/professionals-workshop.jpg';

const highlights = [
  { icon: BookOpen, label: 'Biblical Foundation', desc: 'Every program is rooted in Scripture' },
  {
    icon: Target,
    label: 'Kingdom Mindsets',
    desc: 'Shifting from worldly to God-centered thinking',
  },
  { icon: Users, label: 'Community', desc: 'Growing together with like-minded leaders' },
  { icon: Mic2, label: 'Practical Skills', desc: 'Real-world leadership application' },
];

export default function Programs() {
  return (
    <Layout>
      <PageHero
        title="Our Programs"
        subtitle="Intentional Development for Every Stage of Life"
        image={heroImg}
      />

      {/* Intro */}
      <section className="py-24 lg:py-36">
        <div className="container-main">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground leading-relaxed text-lg">
                We offer a range of programs designed to nurture the next generation of
                change-makers and leaders. Whether you're a student preparing for the future or a
                professional seeking to grow in influence, The LeadTribe Group has a pathway for
                you.
              </p>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                All our programs are rooted in biblical principles and designed to build Kingdom
                Mindsets—shifting perspectives from worldly thinking to God-centered leadership.
              </p>
            </div>
          </ScrollReveal>

          {/* Program highlights strip */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.label} stagger={i + 1}>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-muted/50 border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 icon-float">
                    <h.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{h.label}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{h.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Program Tracks - Enhanced */}
      <section className="pb-24 lg:pb-36">
        <div className="container-main grid md:grid-cols-2 gap-6">
          <ScrollReveal stagger={1}>
            <div className="card-elevated overflow-hidden h-full flex flex-col group">
              <div className="relative overflow-hidden h-56">
                <img
                  src={studentsImg}
                  alt="Student programs"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/90 backdrop-blur-sm flex items-center justify-center icon-float">
                    <GraduationCap size={28} className="text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <h3 className="text-2xl lg:text-3xl font-display text-foreground">
                  For <span className="text-gradient-gold">Students</span>
                </h3>
                <span className="label-chip mt-3">Junior High · Senior High</span>
                <p className="mt-5 text-muted-foreground leading-relaxed flex-1">
                  Programs focused on identity, purpose, faith, and leadership development for young
                  people. Discover God's plan for your life and build the habits of a Kingdom
                  leader.
                </p>
                <Link to="/programs-students" className="btn-primary-hero mt-8 text-sm">
                  View Student Programs <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={2}>
            <div className="card-elevated overflow-hidden h-full flex flex-col group">
              <div className="relative overflow-hidden h-56">
                <img
                  src={professionalsImg}
                  alt="Professional programs"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-14 h-14 rounded-2xl bg-gold/90 backdrop-blur-sm flex items-center justify-center icon-float">
                    <Briefcase size={28} className="text-forest-dark" />
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <h3 className="text-2xl lg:text-3xl font-display text-foreground">
                  For <span className="text-gradient-gold">Workers & Professionals</span>
                </h3>
                <span className="label-chip mt-3">
                  Tertiary · Professionals · Corporate · Leaders
                </span>
                <p className="mt-5 text-muted-foreground leading-relaxed flex-1">
                  Programs focused on advanced leadership, personal growth, and professional
                  excellence. Lead with Kingdom values in the marketplace.
                </p>
                <Link to="/programs-professionals" className="btn-gold mt-8 text-sm">
                  View Professional Programs <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Image break */}
      <ScrollReveal>
        <div className="relative">
          <img
            src={seminarImg}
            alt="LeaDTribe Seminar"
            className="w-full aspect-21/9 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-r from-forest-dark/40 to-transparent" />
        </div>
      </ScrollReveal>

      {/* Partnership */}
      <section className="py-24 lg:py-36 bg-cream-dark">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="label-chip">Partnership Opportunities</span>
              <h2 className="mt-4 text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight">
                Partner <span className="text-gradient-gold">With Us</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <ScrollReveal stagger={1}>
              <div className="card-elevated p-8 lg:p-10 h-full group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transition-transform duration-400 group-hover:scale-110 icon-float">
                  <School size={26} className="text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-display text-foreground">
                  For <span className="text-gradient-forest">Schools</span>
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We partner with Junior and Senior High Schools to bring seminars, evangelism
                  programs, and mentoring sessions to your students. We collaborate with Scriptural
                  Union societies, chaplaincy units, and school administrations.
                </p>
                <Link to="/register" className="btn-primary-hero mt-6 text-sm px-6! py-3!">
                  Invite Us to Your School <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className="card-elevated p-8 lg:p-10 h-full group">
                <div className="w-14 h-14 rounded-xl bg-gold/12 flex items-center justify-center transition-transform duration-400 group-hover:scale-110 icon-float">
                  <Church size={26} className="text-gold" />
                </div>
                <h3 className="mt-5 text-xl font-display text-foreground">
                  For <span className="text-gradient-gold">Churches & Organizations</span>
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We collaborate with churches and community organizations to host youth summits,
                  leadership workshops, and discipleship programs.
                </p>
                <Link to="/register" className="btn-gold mt-6 text-sm px-6! py-3!">
                  Partner With Us <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
