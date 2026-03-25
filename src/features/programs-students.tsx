import { Link } from '@tanstack/react-router';
import { BookOpen, Mic2, Users, Globe, ArrowRight, Check } from 'lucide-react';
import Layout from '~/components/layout';
import PageHero from '~/components/page-hero';
import ScrollReveal from '~/components/scroll-reveal';
import heroImg from '~/assets/hero-home.jpg';
import bookImg from '~/assets/activity-book-discipleship.jpg';
import summitImg from '~/assets/summit.jpg';
import studentsImg from '~/assets/students-seminar.jpg';
import mentoringImg from '~/assets/activity-mentoring.jpg';

const programs = [
  {
    icon: BookOpen,
    accent: 'bg-primary/10 text-primary',
    number: '01',
    title: '40-Day Book Discipleship Program',
    subtitle: 'BECE Graduates',
    audience: 'Final-year Junior High School students',
    desc: 'Guided mentorship through different books on finding purpose, identifying potential, building success habits and many more.',
    features: [
      'Weekly in-person review sessions onsite and online',
      'Guided discussions and mentorship',
      'Practical application exercises',
    ],
    image: bookImg,
  },
  {
    icon: Mic2,
    accent: 'bg-gold/12 text-gold',
    number: '02',
    title: 'School Evangelism & Seminars',
    audience: 'Junior and Senior High School students',
    desc: 'We partner with school fellowships (Scriptural Union, Christian Service, etc.) and chaplaincy units to deliver dynamic, Scripture-based messages tailored to teenagers on leadership, purpose, integrity, obedience, and many more Kingdom values.',
    features: [],
    extra:
      'Schools and fellowship leaders can request a preaching appointment by contacting us directly. We are happy to support your spiritual development programs.',
    cta: { label: 'Request a Speaker', to: '/register' },
    image: studentsImg,
  },
  {
    icon: Users,
    accent: 'bg-primary/10 text-primary',
    number: '03',
    title: 'Student Mentoring & Leadership Coaching',
    audience: 'Individual students or small groups',
    desc: 'Intentional one-on-one and group coaching sessions focused on breaking negative mindset patterns and developing Growth/Kingdom Mindsets.',
    features: [
      'Flexible duration based on student needs',
      'Parents or students can contact us to arrange mentoring sessions',
    ],
    image: mentoringImg,
  },
  {
    icon: Globe,
    accent: 'bg-gold/12 text-gold',
    number: '04',
    title: 'National Youth Summits',
    audience: 'Students from multiple schools across Ghana',
    desc: 'Large-scale gatherings designed to inspire, equip, and connect young leaders from across the region.',
    features: [
      'Inspirational messages from seasoned leaders',
      'Workshops on leadership, purpose, and personal growth',
      'Networking opportunities with like-minded peers',
    ],
    extra: 'Upcoming Summit: Details to be announced',
    image: summitImg,
  },
];

export default function ProgramsStudents() {
  return (
    <Layout>
      <PageHero
        title="Programs for Students"
        subtitle="Equipping the Next Generation of Kingdom Leaders"
        image={heroImg}
      />

      <section className="py-24 lg:py-36">
        <div className="container-main max-w-5xl">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our student programs are designed to help young people discover their identity,
                build their faith, and develop leadership skills that will serve them for a
                lifetime. We work with Junior High Schools, Senior High Schools, and individual
                students and parents.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 space-y-8">
            {programs.map((p, idx) => (
              <ScrollReveal key={p.title}>
                <div className="card-elevated overflow-hidden group">
                  <div
                    className={`flex flex-col lg:flex-row ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  >
                    {/* Image */}
                    <div className="lg:w-2/5 relative overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-56 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-card/30 to-transparent" />
                      <span className="absolute top-4 left-4 text-5xl font-display text-cream/40 select-none">
                        {p.number}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="lg:w-3/5 p-8 lg:p-10">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 rounded-xl ${p.accent} flex items-center justify-center shrink-0 transition-transform duration-400 group-hover:scale-110 icon-float`}
                        >
                          <p.icon size={26} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl lg:text-2xl font-display text-foreground">
                            <span className="text-gradient-forest">{p.title}</span>
                          </h3>
                          <span className="label-chip mt-2">{p.audience}</span>
                        </div>
                      </div>
                      <p className="mt-5 text-muted-foreground leading-relaxed">{p.desc}</p>
                      {p.features.length > 0 && (
                        <ul className="mt-5 space-y-2.5">
                          {p.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <Check size={18} className="text-primary mt-0.5 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      )}
                      {p.extra && (
                        <p className="mt-5 text-sm text-muted-foreground italic border-l-2 border-gold/40 pl-4">
                          {p.extra}
                        </p>
                      )}
                      {p.cta && (
                        <Link
                          to={p.cta.to}
                          className="btn-gold mt-6 text-sm px-6! py-3! inline-flex"
                        >
                          {p.cta.label} <ArrowRight size={16} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
