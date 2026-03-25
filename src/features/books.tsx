import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { BookOpen, Clock, ArrowRight, Quote } from 'lucide-react';
import Layout from '~/components/layout';
import PageHero from '~/components/page-hero';
import ScrollReveal from '~/components/scroll-reveal';
import heroImg from '~/assets/book-open-reading.jpg';

const dailyQuotes = [
  {
    text: 'The mind is the battleground. Win there first, and every other victory will follow.',
    author: 'Myles Munroe',
  },
  {
    text: 'Your purpose is not what you do, but who you become in the process.',
    author: 'John C. Maxwell',
  },
  {
    text: 'Do not be conformed to this world, but be transformed by the renewal of your mind.',
    author: 'Romans 12:2',
  },
  {
    text: 'Leadership is not about titles or positions. It is about one life influencing another.',
    author: 'John C. Maxwell',
  },
  {
    text: 'The greatest discovery in life is self-discovery. Until you find yourself you will always be someone else.',
    author: 'Myles Munroe',
  },
];

const books = [
  {
    id: 'understanding-purpose',
    title: 'Understanding the Purpose and Power of Vision',
    author: 'Myles Munroe',
    cover: '📘',
    chapters: 12,
    category: 'Purpose',
    description:
      'Discover how to find, develop, and fulfill your God-given vision. This book will help you understand that you were created with a unique purpose and equip you to pursue it with passion.',
    color: 'bg-primary/10 border-primary/20',
  },
  {
    id: 'leadership-101',
    title: 'Leadership 101: What Every Leader Needs to Know',
    author: 'John C. Maxwell',
    cover: '📗',
    chapters: 10,
    category: 'Leadership',
    description:
      'A concise, impactful guide to the fundamentals of leadership. Learn the principles that separate effective leaders from the rest and how to apply them daily.',
    color: 'bg-gold/10 border-gold/20',
  },
  {
    id: 'purpose-driven-life',
    title: 'The Purpose Driven Life',
    author: 'Rick Warren',
    cover: '📕',
    chapters: 40,
    category: 'Purpose',
    description:
      "A groundbreaking manifesto on the meaning of life. This 40-day spiritual journey will help you understand God's incredible plan for your life.",
    color: 'bg-primary/10 border-primary/20',
  },
  {
    id: 'success-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: '📙',
    chapters: 15,
    category: 'Success Habits',
    description:
      'Discover how tiny changes in your daily habits can lead to remarkable results. A practical guide to building good habits and breaking bad ones.',
    color: 'bg-gold/10 border-gold/20',
  },
  {
    id: 'mindset',
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    cover: '📓',
    chapters: 8,
    category: 'Mindset',
    description:
      'Discover how your beliefs about your abilities shape your life. Learn the difference between a fixed mindset and a growth mindset—and how to develop the one that leads to Kingdom impact.',
    color: 'bg-primary/10 border-primary/20',
  },
  {
    id: 'potential',
    title: 'Releasing Your Potential',
    author: 'Myles Munroe',
    cover: '📔',
    chapters: 14,
    category: 'Potential',
    description:
      'You have more potential than you realize. This book unlocks the keys to discovering, developing, and deploying the untapped abilities God has placed within you.',
    color: 'bg-gold/10 border-gold/20',
  },
];

const categories = ['All', 'Purpose', 'Leadership', 'Success Habits', 'Mindset', 'Potential'];

export default function Books() {
  const [activeCategory, setActiveCategory] = useState('All');
  const todayQuote = dailyQuotes[new Date().getDay() % dailyQuotes.length];
  const filtered =
    activeCategory === 'All' ? books : books.filter((b) => b.category === activeCategory);

  return (
    <Layout>
      <PageHero
        title="LeaDTribe Library"
        subtitle="Transformative Books for Kingdom Leaders"
        image={heroImg}
      />

      {/* Quote of the Day */}
      <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="container-main relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="label-chip bg-gold/20! mb-4">Quote of the Day</span>
              <Quote size={36} className="text-gold/40 mx-auto mb-4" />
              <p className="text-xl lg:text-2xl text-cream leading-relaxed font-display italic">
                "{todayQuote.text}"
              </p>
              <p className="mt-4 text-cream/50 font-medium text-sm">— {todayQuote.author}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Book Library */}
      <section className="py-24 lg:py-36">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="label-chip">Book Discipleship</span>
              <h2 className="mt-4 text-3xl lg:text-4xl text-foreground leading-[1.1] tracking-tight">
                Our Reading <span className="text-gradient-gold">Collection</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Explore transformative books on finding purpose, identifying potential, building
                success habits and developing Kingdom mindsets.
              </p>
            </div>
          </ScrollReveal>

          {/* Category filter */}
          <ScrollReveal className="mt-10">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-400 active:scale-95 ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Book grid */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((book, i) => (
              <ScrollReveal key={book.id} stagger={(i % 3) + 1}>
                <Link to="/books/$bookId" params={{ bookId: book.id }} className="block h-full">
                  <div
                    className={`card-elevated p-8 h-full flex flex-col group border-l-4 ${book.color}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-5xl">{book.cover}</span>
                      <span className="label-chip text-[10px]">{book.category}</span>
                    </div>
                    <h3 className="mt-5 text-lg font-display text-foreground group-hover:text-primary transition-colors leading-snug">
                      {book.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground font-medium">{book.author}</p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                      {book.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <BookOpen size={14} /> {book.chapters} Chapters
                      </span>
                      <span className="flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                        Read Now <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Plan CTA */}
      <section className="py-20 lg:py-28 bg-cream-dark">
        <div className="container-main max-w-3xl text-center">
          <ScrollReveal>
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 icon-float">
              <Clock size={30} className="text-primary" />
            </div>
            <h2 className="text-3xl font-display text-foreground">
              40-Day <span className="text-gradient-gold">Reading Plan</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Join our structured 40-day book discipleship program. Each book comes with a reading
              plan, discussion guides, and mentorship sessions to help you internalize and apply
              Kingdom principles.
            </p>
            <Link to="/register" className="btn-gold mt-8 inline-flex">
              Join the Program <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
