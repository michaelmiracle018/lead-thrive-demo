import { createFileRoute } from '@tanstack/react-router';
import BookDetail from '~/features/book-detail';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/books/$bookId')({
  head: () => ({
    meta: seo({
      title: 'Books – TribeLead',
      description:
        'Explore transformative books on finding purpose, identifying potential, building success habits and developing Kingdom mindsets.',
      keywords: 'Book reading, purpose driven',
      image: 'https://myapp.com/og/about.png',
    }),
  }),
  component: BookDetail,
});
