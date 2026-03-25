import { Link } from '@tanstack/react-router';
import {
  Lightbulb,
  TrendingUp,
  Building,
  ArrowRight,
  Check,
  Heart,
  Wrench,
  Users,
  UserCheck,
} from 'lucide-react';
import Layout from '~/components/layout';
import PageHero from '~/components/page-hero';
import ScrollReveal from '~/components/scroll-reveal';
import heroImg from '~/assets/hero-programs.jpg';
import corporateImg from '~/assets/corporate-training.jpg';
import profImg from '~/assets/professionals-workshop.jpg';

const whyLeadtribe = [
  {
    icon: Heart,
    title: 'Faith-Integrated',
    desc: 'Grow your career without compromising your values',
  },
  { icon: Wrench, title: 'Practical', desc: 'Real-world skills you can apply immediately' },
  { icon: Users, title: 'Community', desc: 'Connect with like-minded professionals' },
  { icon: UserCheck, title: 'Mentorship', desc: 'Learn from experienced leaders' },
];

const personalGrowthTopics = [
  'Purpose: Discovering and Living Your Calling',
  'Vision: Casting and Achieving God-Sized Goals',
  'Potential: Unlocking What God Has Placed Within You',
  'Success Habits: Daily Disciplines of High-Impact Leaders',
  'Leadership Communications: Speaking with Clarity and Influence',
  'Entrepreneurship: Building Kingdom Businesses',
  'Financial Wisdom: Stewardship and Generosity',
];

const corporateModules = [
  'Building a Culture of Excellence',
  'Servant Leadership in Practice',
  'Ethical Decision-Making in the Workplace',
  'Team Dynamics and Collaboration',
  'Purpose-Driven Goal Setting',
];

const advancedOfferings = [
  {
    title: 'Effectively Leading Generation Z and Beyond',
    desc: 'Understanding the values, motivations, and communication styles of emerging generations to build cohesive, high-performing teams.',
  },
  {
    title: 'Leading in the Era of Artificial Intelligence',
    desc: 'Navigating the opportunities and ethical challenges of AI in the workplace while maintaining human-centered, values-driven leadership.',
  },
  {
    title: 'Advance Certificate in Agile Leadership',
    desc: 'Developing flexibility, responsiveness, and adaptive leadership skills for fast-changing environments.',
  },
];

export default function ProgramsProfessionals() {
  return (
    <Layout>
      <PageHero
        title="Programs for Workers & Professionals"
        subtitle="Leading with Purpose in the Marketplace"
        image={heroImg}
      />

      <section className="py-24 lg:py-36">
        <div className="container-main max-w-5xl">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your career is not separate from your calling. At The LeadTribe Group, we equip
                professionals to lead with integrity, influence, and Kingdom purpose—whether in the
                corporate world, entrepreneurship, or ministry.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our programs combine biblical wisdom with practical leadership skills to help you
                thrive in your workplace and beyond.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <img
              src={profImg}
              alt="Professional workshop"
              className="w-full rounded-2xl aspect-video object-cover shadow-lg"
              loading="lazy"
            />
          </ScrollReveal>

          {/* Program 1: Advanced Leadership */}
          <ScrollReveal className="mt-20">
            <div className="card-elevated overflow-hidden group">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 relative overflow-hidden">
                  <img
                    src={corporateImg}
                    alt="Advanced leadership"
                    className="w-full h-56 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card/30 to-transparent" />
                  <span className="absolute top-4 left-4 text-5xl font-display text-cream/40 select-none">
                    01
                  </span>
                </div>
                <div className="lg:w-3/5 p-8 lg:p-10">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 icon-float">
                      <Lightbulb size={26} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-display text-foreground">
                        <span className="text-gradient-forest">Advanced Leadership Series</span>
                      </h3>
                      <span className="label-chip mt-2">
                        Young professionals · Managers · Aspiring leaders
                      </span>
                    </div>
                  </div>
                  <p className="mt-5 text-muted-foreground leading-relaxed">
                    A series of specialized workshops designed to address the unique challenges of
                    modern leadership.
                  </p>

                  <div className="mt-6 space-y-4">
                    {advancedOfferings.map((item) => (
                      <div
                        key={item.title}
                        className="p-5 rounded-xl bg-muted/40 border border-border/50 transition-all duration-300 hover:bg-muted/60 hover:shadow-sm"
                      >
                        <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm text-muted-foreground italic border-l-2 border-gold/40 pl-4">
                    Format: Half-day workshops, full-day seminars, or multi-week certificate tracks.
                    Contact us for the current schedule.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Program 2: Personal Growth */}
          <ScrollReveal className="mt-8">
            <div className="card-elevated p-8 lg:p-10 relative overflow-hidden group">
              <span className="absolute top-6 right-8 text-7xl font-display text-muted/30 select-none">
                02
              </span>
              <div className="flex items-start gap-4 relative">
                <div className="w-14 h-14 rounded-xl bg-gold/12 flex items-center justify-center shrink-0 icon-float">
                  <TrendingUp size={26} className="text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl lg:text-2xl font-display text-foreground">
                    <span className="text-gradient-gold">
                      Personal Growth & Professional Development
                    </span>
                  </h3>
                  <span className="label-chip mt-2">
                    Individuals seeking personal & professional growth
                  </span>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Workshops and coaching sessions focused on the foundational principles of
                    success and significance.
                  </p>

                  <h4 className="mt-6 font-semibold text-foreground text-sm">Topics Include:</h4>
                  <div className="mt-3 grid sm:grid-cols-2 gap-2">
                    {personalGrowthTopics.map((t) => (
                      <div
                        key={t}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground p-2"
                      >
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm text-muted-foreground italic border-l-2 border-gold/40 pl-4">
                    Format: Monthly workshops · One-on-one coaching · Small group cohorts
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Program 3: Corporate Training */}
          <ScrollReveal className="mt-8">
            <div className="card-elevated p-8 lg:p-10 relative overflow-hidden group">
              <span className="absolute top-6 right-8 text-7xl font-display text-muted/30 select-none">
                03
              </span>
              <div className="flex items-start gap-4 relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 icon-float">
                  <Building size={26} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl lg:text-2xl font-display text-foreground">
                    <span className="text-gradient-forest">
                      Corporate & Organizational Training
                    </span>
                  </h3>
                  <span className="label-chip mt-2">Companies · Churches · Organizations</span>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    We bring our leadership training to your team. Customizable workshops designed
                    to meet the specific needs of your organization.
                  </p>

                  <h4 className="mt-6 font-semibold text-foreground text-sm">
                    Sample Training Modules:
                  </h4>
                  <div className="mt-3 grid sm:grid-cols-2 gap-2">
                    {corporateModules.map((t) => (
                      <div
                        key={t}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground p-2"
                      >
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm text-muted-foreground">
                    Contact us to discuss your organization's needs and schedule a training session.
                  </p>
                  <Link
                    to="/register"
                    className="btn-primary-hero mt-6 text-sm px-6! py-3! inline-flex"
                  >
                    Request Corporate Training <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why LeadTribe */}
      <section className="py-24 lg:py-36 bg-cream-dark">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="label-chip">For Professionals</span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-display text-foreground">
                Why <span className="text-gradient-gold">LeadTribe?</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyLeadtribe.map((w, i) => (
              <ScrollReveal key={w.title} stagger={i + 1}>
                <div className="card-elevated p-7 text-center h-full group">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center transition-transform duration-400 group-hover:scale-110 icon-float">
                    <w.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="mt-5 font-display text-foreground">{w.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
