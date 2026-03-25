import { useState } from 'react';
import { Heart, BookOpen, Users, Star, ArrowRight, Mail, ChevronRight } from 'lucide-react';
import Layout from '~/components/layout';
import PageHero from '~/components/page-hero';
import ScrollReveal from '~/components/scroll-reveal';
import heroImg from '~/assets/hero-home.jpg';
import { toast } from 'sonner';

const benefits = [
  {
    icon: Heart,
    title: 'Clarity & Confidence',
    desc: "Discover your identity rooted in God's purpose (Psalm 139:14)",
  },
  {
    icon: BookOpen,
    title: 'Wisdom for Life',
    desc: 'Biblical principles to navigate decisions, relationships, and career goals',
  },
  {
    icon: Star,
    title: 'A Faith That Grows',
    desc: 'Practical tools to strengthen your walk with Christ through prayer, Scripture, and service',
  },
  {
    icon: Users,
    title: 'A Community of Peers',
    desc: 'A safe space to connect with others pursuing growth and godly influence',
  },
];

export default function ContactMe() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'student',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you for joining! We'll be in touch soon.");
      setForm({ name: '', email: '', phone: '', type: 'student', message: '' });
    }, 1000);
  };

  return (
    <Layout>
      <PageHero
        title="Join The LeaDTribe Group"
        subtitle="Become Part of a Community Committed to Kingdom Leadership"
        image={heroImg}
      />

      {/* Benefits */}
      <section className="py-24 lg:py-36">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="label-chip">Why Join?</span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-display text-foreground">
                Why Join <span className="text-gradient-gold">The Tribe?</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} stagger={i + 1}>
                <div className="card-elevated p-7 text-center h-full group">
                  <div className="w-13 h-13 mx-auto rounded-xl bg-primary/10 flex items-center justify-center transition-transform duration-400 group-hover:scale-110">
                    <b.icon size={22} className="text-primary" />
                  </div>
                  <h4 className="mt-5 font-display text-foreground">{b.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 lg:py-36 bg-cream-dark">
        <div className="container-main max-w-2xl">
          <ScrollReveal>
            <div className="text-center">
              <span className="label-chip">Register</span>
              <h2 className="mt-4 text-3xl font-display text-foreground">
                Register for Our <span className="text-gradient-gold">Upcoming Program</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">I am a...</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                >
                  <option value="student">Student</option>
                  <option value="professional">Working Professional</option>
                  <option value="school">School Representative</option>
                  <option value="church">Church / Organization</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Registration'}{' '}
                {!loading && <ArrowRight size={18} />}
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal className="mt-16">
            <div className="card-elevated p-8 lg:p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />
              <div className="relative">
                <span className="label-chip">Partnership</span>
                <h3 className="mt-4 text-xl font-display text-foreground">
                  Partnership <span className="text-gradient-gold">Inquiry</span>
                </h3>
                <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  Are you a school, church, or organization interested in partnering with The
                  LeaDTribe Group? We would love to hear from you. Contact us to discuss how we can
                  work together to shape the next generation of Kingdom leaders.
                </p>
                <a
                  href="mailto:derrick@leadtribe.africa"
                  className="btn-primary-hero mt-6 text-sm inline-flex"
                >
                  <Mail size={16} /> Contact Us for Partnership <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
