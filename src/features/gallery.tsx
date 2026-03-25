import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Layout from '~/components/layout';
import PageHero from '~/components/page-hero';
import ScrollReveal from '~/components/scroll-reveal';

import seminarImg from '~/assets/seminar.jpg';
import mentoringImg from '~/assets/mentoring.jpg';
import summitImg from '~/assets/summit.jpg';
import bookImg from '~/assets/book-reading.jpg';
import communityImg from '~/assets/community.jpg';
import corporateImg from '~/assets/corporate-training.jpg';
import galleryComm from '~/assets/gallery-community.jpg';
import gallerySchool from '~/assets/gallery-school.jpg';
import galleryNetwork from '~/assets/gallery-networking.jpg';
import actBookImg from '~/assets/activity-book-discipleship.jpg';
import actSeminarImg from '~/assets/activity-seminars.jpg';
import actMentorImg from '~/assets/activity-mentoring.jpg';
import actLeadImg from '~/assets/activity-leadership.jpg';
import heroImg from '~/assets/hero-about.jpg';

const allImages = [
  { src: actSeminarImg, alt: 'Leadership Seminar', category: 'Seminars' },
  { src: gallerySchool, alt: 'School Evangelism Program', category: 'Schools' },
  { src: actBookImg, alt: 'Book Discipleship Session', category: 'Discipleship' },
  { src: mentoringImg, alt: 'Mentoring Session', category: 'Mentoring' },
  { src: galleryComm, alt: 'Community Gathering', category: 'Community' },
  { src: summitImg, alt: 'Youth Summit', category: 'Summits' },
  { src: actMentorImg, alt: 'One-on-One Coaching', category: 'Mentoring' },
  { src: corporateImg, alt: 'Corporate Training', category: 'Training' },
  { src: bookImg, alt: 'Reading & Discussion', category: 'Discipleship' },
  { src: galleryNetwork, alt: 'Professional Networking', category: 'Training' },
  { src: seminarImg, alt: 'LeaDTribe Seminar', category: 'Seminars' },
  { src: actLeadImg, alt: 'Leadership Workshop', category: 'Training' },
  { src: communityImg, alt: 'Community Outreach', category: 'Community' },
];

const categories = [
  'All',
  'Seminars',
  'Schools',
  'Discipleship',
  'Mentoring',
  'Community',
  'Summits',
  'Training',
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? allImages : allImages.filter((i) => i.category === active);

  const open = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev = () =>
    setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <Layout>
      <PageHero
        title="Our Gallery"
        subtitle="Capturing Moments of Kingdom Impact"
        image={heroImg}
      />

      <section className="py-20 lg:py-32">
        <div className="container-main">
          {/* Category filter */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-14">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-400 active:scale-95 relative overflow-hidden ${
                    active === cat
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground hover:shadow-md'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={`${img.alt}-${i}`} stagger={(i % 5) + 1}>
                <button
                  onClick={() => open(i)}
                  className="gallery-item w-full block group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary break-inside-avoid"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Wave overlay content */}
                  <div className="gallery-content">
                    <span className="label-chip text-[10px] mb-2">{img.category}</span>
                    <p className="text-cream text-sm font-medium">{img.alt}</p>
                    <ZoomIn size={20} className="text-gold mt-2" />
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <p className="text-white/80 text-sm font-medium">{filtered[lightbox].alt}</p>
            <p className="text-white/40 text-xs">
              {lightbox + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
}
