import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { useParams } from '@tanstack/react-router';
import {
  BookOpen,
  Clock,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Star,
  Quote,
  Calendar,
} from 'lucide-react';
import Layout from '~/components/layout';
import ScrollReveal from '~/components/scroll-reveal';

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
  { text: 'The greatest discovery in life is self-discovery.', author: 'Myles Munroe' },
];

interface Chapter {
  number: number;
  title: string;
  pages: string;
  summary: string;
  keyTakeaway: string;
  readingPlanDay: number;
}

interface BookData {
  id: string;
  title: string;
  author: string;
  cover: string;
  category: string;
  overview: string;
  chapters: Chapter[];
}

const booksData: Record<string, BookData> = {
  'understanding-purpose': {
    id: 'understanding-purpose',
    title: 'Understanding the Purpose and Power of Vision',
    author: 'Myles Munroe',
    cover: '📘',
    category: 'Purpose',
    overview:
      'This book is a transformative guide that helps you discover, develop, and fulfill your God-given vision. Through biblical principles and practical wisdom, Myles Munroe shows that every person was born with a purpose and that vision is the key to unlocking that purpose.',
    chapters: [
      {
        number: 1,
        title: 'The Power of Purpose',
        pages: '1-22',
        summary:
          'Discover why purpose is the foundation of a meaningful life and how God designed every person with a unique assignment.',
        keyTakeaway: 'You were not born by accident—you were born on purpose, for a purpose.',
        readingPlanDay: 1,
      },
      {
        number: 2,
        title: 'What Is Vision?',
        pages: '23-44',
        summary:
          'Understand the difference between sight and vision, and learn how vision connects you to your divine destiny.',
        keyTakeaway: 'Vision is the ability to see what God sees for your future.',
        readingPlanDay: 4,
      },
      {
        number: 3,
        title: 'The Source of Vision',
        pages: '45-68',
        summary:
          'Learn that true vision comes from God and is rooted in His purposes for your life and generation.',
        keyTakeaway:
          "Your vision is a gift from God—it's not something you invent, but something you discover.",
        readingPlanDay: 7,
      },
      {
        number: 4,
        title: 'Overcoming Obstacles to Vision',
        pages: '69-90',
        summary:
          'Identify and overcome the barriers that keep you from pursuing your God-given vision.',
        keyTakeaway: 'Every obstacle is an opportunity to strengthen your faith and commitment.',
        readingPlanDay: 10,
      },
      {
        number: 5,
        title: 'Principles of Vision',
        pages: '91-114',
        summary: 'Master the foundational principles that make vision effective and sustainable.',
        keyTakeaway: 'Vision without principles is like a ship without a rudder.',
        readingPlanDay: 13,
      },
      {
        number: 6,
        title: 'The Process of Vision',
        pages: '115-138',
        summary:
          'Understand that vision unfolds through a process and requires patience and faithfulness.',
        keyTakeaway: "Trust the process—God's timing is always perfect.",
        readingPlanDay: 16,
      },
      {
        number: 7,
        title: 'Writing the Vision',
        pages: '139-158',
        summary:
          'Learn the power of writing down your vision and creating a plan for its fulfillment.',
        keyTakeaway: 'A vision written down becomes a commitment to action.',
        readingPlanDay: 20,
      },
      {
        number: 8,
        title: 'Communicating Your Vision',
        pages: '159-178',
        summary:
          'Discover how to share your vision with others in a way that inspires and mobilizes support.',
        keyTakeaway: "A leader's vision must be communicated clearly to be realized.",
        readingPlanDay: 24,
      },
      {
        number: 9,
        title: 'Vision and Faith',
        pages: '179-198',
        summary:
          'Explore the connection between vision and faith, and how belief fuels accomplishment.',
        keyTakeaway: 'Faith is the fuel that keeps vision alive in the face of challenges.',
        readingPlanDay: 28,
      },
      {
        number: 10,
        title: 'Vision and Work',
        pages: '199-220',
        summary:
          'Understand that vision requires diligent work and that excellence is a Kingdom value.',
        keyTakeaway: 'Vision without work is just a dream—add discipline to make it reality.',
        readingPlanDay: 32,
      },
      {
        number: 11,
        title: 'Vision and Persistence',
        pages: '221-240',
        summary: 'Learn why persistence is essential and how to keep going when challenges arise.',
        keyTakeaway: 'The only way to fail is to quit. Keep pressing forward.',
        readingPlanDay: 36,
      },
      {
        number: 12,
        title: 'Living a Life of Vision',
        pages: '241-260',
        summary:
          'Bring everything together and commit to living a purpose-driven, vision-filled life.',
        keyTakeaway: 'Your life is your message—make it a story of Kingdom impact.',
        readingPlanDay: 40,
      },
    ],
  },
  'leadership-101': {
    id: 'leadership-101',
    title: 'Leadership 101: What Every Leader Needs to Know',
    author: 'John C. Maxwell',
    cover: '📗',
    category: 'Leadership',
    overview:
      'John Maxwell distills decades of leadership wisdom into this concise guide. Learn the essential qualities, practices, and mindsets that every effective leader needs to develop and maintain.',
    chapters: [
      {
        number: 1,
        title: 'The Definition of Leadership',
        pages: '1-18',
        summary:
          'Understanding what leadership truly means and why influence is the real measure of a leader.',
        keyTakeaway: 'Leadership is influence—nothing more, nothing less.',
        readingPlanDay: 1,
      },
      {
        number: 2,
        title: 'The Key to Leadership',
        pages: '19-36',
        summary:
          'Discover that priorities are the key to effective leadership and learn how to focus on what matters most.',
        keyTakeaway: 'The secret of your success is determined by your daily agenda.',
        readingPlanDay: 5,
      },
      {
        number: 3,
        title: 'The Most Important Trait',
        pages: '37-54',
        summary:
          'Integrity forms the foundation of all lasting leadership. Without it, everything else crumbles.',
        keyTakeaway: 'Integrity is not what we do but who we are.',
        readingPlanDay: 9,
      },
      {
        number: 4,
        title: 'Creating Positive Change',
        pages: '55-72',
        summary:
          'Learn how leaders create and manage change while keeping people engaged and motivated.',
        keyTakeaway: 'People change when they hurt enough, learn enough, or receive enough.',
        readingPlanDay: 13,
      },
      {
        number: 5,
        title: 'Problem Solving',
        pages: '73-90',
        summary:
          'Effective leaders are effective problem solvers. Learn frameworks for tackling challenges.',
        keyTakeaway:
          "The measure of success is not whether you have a tough problem but whether it's the same problem you had last year.",
        readingPlanDay: 17,
      },
      {
        number: 6,
        title: 'The Right Attitude',
        pages: '91-108',
        summary:
          'Your attitude determines your altitude. Learn how to cultivate the mindset of a leader.',
        keyTakeaway: 'Your attitude is a choice—choose one that serves your vision.',
        readingPlanDay: 21,
      },
      {
        number: 7,
        title: 'Developing People',
        pages: '109-128',
        summary: 'Great leaders develop other leaders. Learn the art of pouring into people.',
        keyTakeaway: 'There is no success without a successor.',
        readingPlanDay: 25,
      },
      {
        number: 8,
        title: 'Vision',
        pages: '129-146',
        summary:
          'Leaders see more, see farther, and see before others. Develop the vision that inspires.',
        keyTakeaway:
          'A leader is one who sees more than others see, farther than others see, and before others see.',
        readingPlanDay: 29,
      },
      {
        number: 9,
        title: 'Self-Discipline',
        pages: '147-164',
        summary:
          'Without self-discipline, no amount of talent or opportunity will lead to lasting success.',
        keyTakeaway: 'The first person you lead is yourself.',
        readingPlanDay: 33,
      },
      {
        number: 10,
        title: 'Staff Development',
        pages: '165-184',
        summary: 'Building a strong team is the ultimate test of leadership effectiveness.',
        keyTakeaway: "A leader's lasting value is measured by succession.",
        readingPlanDay: 37,
      },
    ],
  },
  'purpose-driven-life': {
    id: 'purpose-driven-life',
    title: 'The Purpose Driven Life',
    author: 'Rick Warren',
    cover: '📕',
    category: 'Purpose',
    overview:
      "This groundbreaking 40-day spiritual journey will transform the way you think about your life. Rick Warren guides you through God's five purposes for your life, helping you see the big picture of what life is all about and how the pieces fit together.",
    chapters: Array.from({ length: 40 }, (_, i) => ({
      number: i + 1,
      title: `Day ${i + 1}: ${['It All Starts with God', 'You Are Not an Accident', 'What Drives Your Life?', 'Made to Last Forever', "Seeing Life from God's View", 'Life Is a Temporary Assignment', 'The Reason for Everything', "Planned for God's Pleasure", 'What Makes God Smile?', 'The Heart of Worship', 'Becoming Best Friends with God', 'Developing Your Friendship with God', 'Worship That Pleases God', 'When God Seems Distant', "Formed for God's Family", 'What Matters Most', 'A Place to Belong', 'Experiencing Life Together', 'Cultivating Community', 'Restoring Broken Fellowship', 'Protecting Your Church', 'Created to Become Like Christ', 'How We Grow', 'Transformed by Truth', 'Transformed by Trouble', 'Growing Through Temptation', 'Defeating Temptation', 'It Takes Time', 'Shaped for Serving God', 'Understanding Your Shape', 'Accepting Your Assignment', 'Using What God Gave You', 'How Real Servants Act', 'Thinking Like a Servant', "God's Power in Your Weakness", 'Made for a Mission', 'Sharing Your Life Message', 'Becoming a World-Class Christian', 'Balancing Your Life', 'Living with Purpose'][i] || `Chapter ${i + 1}`}`,
      pages: `${i * 6 + 1}-${(i + 1) * 6}`,
      summary:
        "A daily reading that brings you closer to understanding God's purpose for your life.",
      keyTakeaway: "Every day is an opportunity to align with God's plan for you.",
      readingPlanDay: i + 1,
    })),
  },
  'success-habits': {
    id: 'success-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: '📙',
    category: 'Success Habits',
    overview:
      'Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
    chapters: Array.from({ length: 15 }, (_, i) => ({
      number: i + 1,
      title: [
        'The Surprising Power of Atomic Habits',
        'How Your Habits Shape Your Identity',
        'How to Build Better Habits in 4 Simple Steps',
        "The Man Who Didn't Look Right",
        'The Best Way to Start a New Habit',
        'Motivation Is Overrated',
        'The Secret to Self-Control',
        'How to Make a Habit Irresistible',
        'The Role of Family and Friends',
        'How to Find and Fix the Causes of Bad Habits',
        'Walk Slowly but Never Backward',
        'The Law of Least Effort',
        'How to Stop Procrastinating',
        'The Cardinal Rule of Behavior Change',
        'The Truth About Talent',
      ][i],
      pages: `${i * 16 + 1}-${(i + 1) * 16}`,
      summary: 'Practical strategies for building systems that deliver results.',
      keyTakeaway: 'Small habits, when compounded, create extraordinary outcomes.',
      readingPlanDay: Math.ceil((i + 1) * (40 / 15)),
    })),
  },
  mindset: {
    id: 'mindset',
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    cover: '📓',
    category: 'Mindset',
    overview:
      'Carol Dweck reveals how our beliefs about our abilities profoundly affect how we lead our lives. Discover the power of adopting a growth mindset—believing that your basic qualities can be cultivated through effort, strategy, and help from others.',
    chapters: Array.from({ length: 8 }, (_, i) => ({
      number: i + 1,
      title: [
        'The Mindsets',
        'Inside the Mindsets',
        'The Truth About Ability and Accomplishment',
        'Sports: The Mindset of a Champion',
        'Business: Mindset and Leadership',
        'Relationships: Mindsets in Love',
        'Parents, Teachers, and Coaches',
        'Changing Mindsets',
      ][i],
      pages: `${i * 30 + 1}-${(i + 1) * 30}`,
      summary: 'Exploring how mindset shapes every area of your life.',
      keyTakeaway: 'Growth comes from believing you can improve through dedication and hard work.',
      readingPlanDay: Math.ceil((i + 1) * 5),
    })),
  },
  potential: {
    id: 'potential',
    title: 'Releasing Your Potential',
    author: 'Myles Munroe',
    cover: '📔',
    category: 'Potential',
    overview:
      'Myles Munroe reveals the keys to discovering, developing, and deploying the untapped abilities that God has placed within you. You have more potential than you could ever imagine—this book shows you how to release it.',
    chapters: Array.from({ length: 14 }, (_, i) => ({
      number: i + 1,
      title: [
        'Everything Has Potential',
        'The Source of All Potential',
        'Understanding Your Potential',
        'Whose Potential Is It?',
        'Keys to Releasing Potential',
        'Limiting Your Potential',
        'Protecting Your Potential',
        'Cultivating Your Potential',
        'Sharing Your Potential',
        'Potential and Purpose',
        'Maximizing Your Potential',
        'The Enemy of Potential',
        'Recovering Your Potential',
        'Fulfilling Your Potential',
      ][i],
      pages: `${i * 18 + 1}-${(i + 1) * 18}`,
      summary: 'Unlocking the God-given potential within you.',
      keyTakeaway: "The wealthiest place is the cemetery—don't let your potential die with you.",
      readingPlanDay: Math.ceil((i + 1) * (40 / 14)),
    })),
  },
};

export default function BookDetail() {
  const { bookId } = useParams({ from: '/books/$bookId' });
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const book = booksData[bookId ?? ''];
  const todayQuote = dailyQuotes[new Date().getDay() % dailyQuotes.length];

  if (!book) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display text-foreground">Book Not Found</h1>
            <Link to="/books" className="btn-primary-hero mt-6 inline-flex">
              <ArrowLeft size={16} /> Back to Library
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const currentChapter = selectedChapter !== null ? book.chapters[selectedChapter] : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-forest-dark text-cream pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient-mesh opacity-50" />
        <div className="container-main relative">
          <Link
            to="/books"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-cream text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Library
          </Link>
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="text-8xl lg:text-9xl shrink-0 animate-float">{book.cover}</div>
            <div>
              <span className="label-chip">{book.category}</span>
              <h1 className="mt-3 text-4xl lg:text-5xl font-display leading-[1.08] tracking-tight">
                <span className="text-gradient-hero">{book.title}</span>
              </h1>
              <p className="mt-3 text-cream/60 text-lg font-medium">by {book.author}</p>
              <p className="mt-5 text-cream/70 leading-relaxed max-w-2xl">{book.overview}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-cream/50">
                <span className="flex items-center gap-1.5">
                  <BookOpen size={16} /> {book.chapters.length} Chapters
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} /> 40-Day Reading Plan
                </span>
                <span className="flex items-center gap-1.5">
                  <Star size={16} /> Guided Discussion
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <div className="bg-primary/5 border-y border-border/50 py-5">
        <div className="container-main flex items-center gap-4">
          <Quote size={20} className="text-gold/60 shrink-0" />
          <p className="text-sm text-muted-foreground italic">
            "{todayQuote.text}" —{' '}
            <span className="font-medium text-foreground">{todayQuote.author}</span>
          </p>
        </div>
      </div>

      {/* Chapter reading view */}
      {currentChapter ? (
        <section className="py-16 lg:py-24">
          <div className="container-main max-w-4xl">
            <button
              onClick={() => setSelectedChapter(null)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-8 transition-colors"
            >
              <ArrowLeft size={16} /> Back to all chapters
            </button>

            <div className="card-elevated p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-2">
                <span className="label-chip">Chapter {currentChapter.number}</span>
                <span className="text-xs text-muted-foreground">Pages {currentChapter.pages}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar size={12} /> Day {currentChapter.readingPlanDay} of 40
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-display text-foreground mt-4">
                <span className="text-gradient-forest">{currentChapter.title}</span>
              </h2>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-3">
                    Chapter Summary
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{currentChapter.summary}</p>
                </div>

                <div className="p-6 rounded-xl bg-gold/5 border border-gold/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Star size={18} className="text-gold" />
                    <h3 className="font-semibold text-foreground text-sm">Key Takeaway</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{currentChapter.keyTakeaway}"
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="font-semibold text-foreground text-sm mb-3">
                    📖 Reading Assignment
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Read pages{' '}
                    <span className="font-semibold text-foreground">{currentChapter.pages}</span> of
                    "{book.title}" by {book.author}. Take notes on the key concepts and prepare
                    discussion points for your mentoring session.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-muted/50 border border-border/50">
                  <h3 className="font-semibold text-foreground text-sm mb-3">
                    💭 Reflection Questions
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">1.</span> What stood out to you most
                      in this chapter?
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">2.</span> How does this relate to
                      your current life situation?
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">3.</span> What one action will you
                      take this week based on this reading?
                    </li>
                  </ul>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                <button
                  onClick={() => setSelectedChapter(Math.max(0, (selectedChapter ?? 0) - 1))}
                  disabled={selectedChapter === 0}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
                >
                  <ArrowLeft size={16} /> Previous
                </button>
                <span className="text-xs text-muted-foreground">
                  {(selectedChapter ?? 0) + 1} of {book.chapters.length}
                </span>
                <button
                  onClick={() =>
                    setSelectedChapter(
                      Math.min(book.chapters.length - 1, (selectedChapter ?? 0) + 1)
                    )
                  }
                  disabled={selectedChapter === book.chapters.length - 1}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
                >
                  Next <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Reading Plan */}
          <section className="py-16 lg:py-24 bg-cream-dark">
            <div className="container-main max-w-4xl">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center icon-float">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display text-foreground">
                      40-Day <span className="text-gradient-gold">Reading Plan</span>
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Complete this book in 40 days with structured guidance
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 gap-3">
                {book.chapters.map((ch, i) => (
                  <ScrollReveal key={ch.number} stagger={(i % 4) + 1}>
                    <button
                      onClick={() => setSelectedChapter(i)}
                      className="w-full text-left card-elevated p-5 flex items-center gap-4 group hover:border-primary/30"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="text-sm font-display text-primary">{ch.number}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground text-sm truncate group-hover:text-primary transition-colors">
                          {ch.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Pages {ch.pages} · Day {ch.readingPlanDay}
                        </p>
                      </div>
                      <ChevronRight
                        size={16}
                        className="text-muted-foreground group-hover:text-primary shrink-0 transition-colors"
                      />
                    </button>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 lg:py-28">
            <div className="container-main max-w-3xl text-center">
              <ScrollReveal>
                <h2 className="text-3xl font-display text-foreground">
                  Ready to <span className="text-gradient-gold">Start Reading?</span>
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Join the LeaDTribe Book Discipleship Program for guided mentorship, weekly review
                  sessions, and practical application exercises.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button onClick={() => setSelectedChapter(0)} className="btn-gold">
                    Start Chapter 1 <ArrowRight size={18} />
                  </button>
                  <Link to="/register" className="btn-outline">
                    Join the Program <ChevronRight size={18} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
}
