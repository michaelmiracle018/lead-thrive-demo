import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import {
  ArrowRight,
  Phone,
  Mail,
  Building,
  Quote,
  ChevronLeft,
  ChevronRight,
  Award,
  Globe,
  Heart,
} from 'lucide-react';
import Layout from '~/components/layout';
import ScrollReveal from '~/components/scroll-reveal';
import leaderSpeaking from '~/assets/rev-derrick-img/derrick-8.jpeg';
import leaderPortrait from '~/assets/rev-derrick-img/derrick-1.jpeg';
import leaderSpeaking2 from '~/assets/rev-derrick-img/derrick-2.jpeg';
import leaderPortrait2 from '~/assets/rev-derrick-img/derrick-6.jpeg';
import leaderPortrait5 from '~/assets/rev-derrick-img/derrick-5.jpeg';

const heroSlides = [
  { src: leaderSpeaking, title: 'Executive Director', subtitle: 'The LeaDTribe Group' },
  { src: leaderPortrait, title: 'Corporate Leader', subtitle: 'Bayobab / MTN Group' },
  { src: leaderSpeaking2, title: 'Pastor & Speaker', subtitle: 'Kingdom Ministry' },
  { src: leaderPortrait2, title: 'Thought Leader', subtitle: 'Digital Infrastructure' },
];

const typingTitles = [
  'Executive Director',
  'Corporate Leader',
  'Pastor',
  'Thought Leader',
  'Mentor',
];

export default function Leader() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentTitle = typingTitles[typingIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
          if (displayText.length === currentTitle.length) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setTypingIndex((prev) => (prev + 1) % typingTitles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, typingIndex]);

  return (
    <Layout>
      {/* Hero Carousel */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.src}
              alt={`Derrick Senyo Diaba - ${slide.title}`}
              className="w-full h-full object-cover transition-transform duration-8000 ease-out"
              style={{ transform: i === currentSlide ? 'scale(1.05)' : 'scale(1)' }}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-cream/80 hover:text-cream transition-all duration-300"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-cream/80 hover:text-cream transition-all duration-300"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide info badges */}
        <div className="absolute top-28 right-8 z-20 hidden lg:flex flex-col gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`text-right px-4 py-2 rounded-lg transition-all duration-500 ${
                i === currentSlide
                  ? 'bg-gold/20 backdrop-blur-md border border-gold/30'
                  : 'opacity-40 hover:opacity-70'
              }`}
            >
              <p className="text-cream text-xs font-semibold">{slide.title}</p>
              <p className="text-cream/50 text-[10px]">{slide.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentSlide ? 'w-8 bg-gold' : 'w-3 bg-cream/30 hover:bg-cream/50'
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 container-main py-16 lg:py-24 w-full">
          <span className="label-chip animate-fade-up opacity-0">The Leader</span>
          <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight animate-fade-up opacity-0 [animation-delay:100ms]">
            <span className="text-gradient-hero">Derrick Senyo Diaba</span>
          </h1>
          <div className="mt-4 h-10 animate-fade-up opacity-0 [animation-delay:200ms]">
            <span className="text-2xl lg:text-3xl font-display text-gold typing-cursor">
              {displayText}
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 animate-fade-up opacity-0 [animation-delay:280ms]">
            <span className="px-3 py-1 rounded-full border border-cream/20 text-cream/70 text-xs">
              Executive Director
            </span>
            <span className="px-3 py-1 rounded-full border border-cream/20 text-cream/70 text-xs">
              Corporate Leader
            </span>
            <span className="px-3 py-1 rounded-full border border-cream/20 text-cream/70 text-xs">
              Pastor
            </span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 lg:py-36">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-2 relative">
              <ScrollReveal>
                <div className="relative">
                  <img
                    src={leaderPortrait5}
                    alt="Derrick speaking"
                    className="rounded-2xl w-full aspect-3/4 object-cover shadow-none"
                    loading="lazy"
                  />
                  {/* <div className="absolute -bottom-8 -right-4 lg:-right-8 w-2/5">
                    <img
                      src={leaderPortrait}
                      alt="Derrick portrait"
                      className="rounded-xl w-full aspect-3/4 object-cover shadow-2xl border-4 border-background"
                      loading="lazy"
                    />
                  </div> */}
                  <div className="absolute -top-4 -left-4 lg:-left-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-xl animate-float">
                    <div className="flex items-center gap-2 text-gold text-xs font-semibold">
                      <Award size={16} />
                      Executive Director
                    </div>
                    <p className="text-cream text-sm font-display mt-1">The LeaDTribe Group</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-3 mt-8 lg:mt-0">
              <ScrollReveal>
                <span className="label-chip">About the Founder</span>
                <h2 className="mt-4 text-3xl lg:text-4xl text-foreground leading-[1.1]">
                  A Leader of <span className="text-gradient-gold">Two Callings</span>
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                  Derrick Senyo Diaba is a dynamic leader who seamlessly blends two distinct yet
                  deeply connected callings: his expertise as a thought leader and corporate
                  executive in the digital infrastructure and connectivity industry, and his passion
                  for personal development and ministry. He views both as full-time
                  missions—building bridges of technology and bridges of the soul.
                </p>
              </ScrollReveal>

              <ScrollReveal className="mt-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center icon-float">
                    <Globe size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-display text-foreground">
                    A Career of <span className="text-gradient-gold">Global Impact</span>
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  With extensive experience working alongside global brands such as MTN, Huawei, and
                  Airtel, Derrick has been at the forefront of connecting Africa. He currently
                  serves as the Network Infrastructure Planning Manager for Sub-Saharan Africa at
                  Bayobab, a digital infrastructure company under the MTN Group. In this capacity,
                  he leads critical projects that bring unserved regions of the continent into the
                  global community, transforming lives through connectivity.
                </p>
              </ScrollReveal>

              <ScrollReveal className="mt-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/12 flex items-center justify-center icon-float">
                    <Heart size={24} className="text-gold" />
                  </div>
                  <h3 className="text-2xl font-display text-foreground">
                    A Heart for <span className="text-gradient-gold">People</span>
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Yet for Derrick, technology is only half the mission. His deeper calling is to
                  personal development and ministry—equipping individuals to discover their purpose,
                  renew their minds, and step into their God-given potential. Whether leading a
                  corporate strategy or delivering a message of hope, his mission remains the same:
                  to connect people to what matters most—to each other, to opportunity, and to God.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="container-main relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <Quote size={44} className="text-gold/40 mx-auto mb-6" />
              <p className="text-2xl lg:text-3xl text-cream leading-relaxed font-display italic">
                "Every connection—whether digital or divine—is an opportunity to transform lives."
              </p>
              <p className="mt-6 text-cream/50 font-medium">— Derrick Senyo Diaba</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Personal Statement */}
      <section className="py-24 lg:py-36 bg-cream-dark">
        <div className="container-main max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-display text-foreground text-center">
              Personal <span className="text-gradient-gold">Statement</span>
            </h2>
            <blockquote className="mt-10 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-gold to-primary rounded-full" />
              <div className="pl-8">
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  "For me, every connection—whether digital or divine—is an opportunity to transform
                  lives. With unwavering optimism and a clear sense of purpose, I continue to build
                  bridges that uplift communities, strengthen faith, and unlock Africa's God-given
                  potential. The best is yet to come!"
                </p>
                <p className="mt-6 text-foreground font-semibold">— Derrick Senyo Diaba</p>
              </div>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Speaking & Contact */}
      <section className="py-24 lg:py-36">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal stagger={1}>
              <div className="card-elevated p-8 h-full">
                <span className="label-chip mb-4">Speaking</span>
                <h3 className="text-2xl font-display text-foreground">
                  Speaking <span className="text-gradient-gold">Topics</span>
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Derrick is available to speak at schools, conferences, and corporate events. His
                  messages are practical, biblical, and inspiring.
                </p>
                <Link to="/register" className="btn-gold mt-6 text-sm inline-flex">
                  Book Derrick to Speak <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className="card-elevated p-8 h-full">
                <span className="label-chip mb-4">Contact</span>
                <h3 className="text-2xl font-display text-foreground">
                  Connect with <span className="text-gradient-gold">Derrick</span>
                </h3>
                <div className="mt-6 space-y-4">
                  <a
                    href="tel:+233244304761"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone size={18} className="text-primary" />
                    </div>
                    +233 24 430 4761
                  </a>
                  <a
                    href="mailto:derrick@leadtribe.africa"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail size={18} className="text-primary" />
                    </div>
                    derrick@leadtribe.africa
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building size={18} className="text-primary" />
                    </div>
                    The LeadTribe Group
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
