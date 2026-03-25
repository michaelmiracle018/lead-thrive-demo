import { createFileRoute } from '@tanstack/react-router';
import About from '~/features/about';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: seo({
      title: 'About – TribeLead',
      description:
        'About TribeLead: Our mission, vision, and the passionate team driving our community initiatives and social impact.',
      keywords:
        'Corporate training, youth training, thrive family, students training, book reading',
      image: 'https://myapp.com/og/about.png',
    }),
  }),
  component: About,
});
