import { createFileRoute } from '@tanstack/react-router';
import Programs from '~/features/programs';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/programs')({
  head: () => ({
    ...seo({
      title: 'Programs – TribeLead Programs',
      description:
        'Program TribeLead: Our mission, vision, and the passionate team driving our community initiatives and social impact.',
      keywords:
        'Corporate training, youth training, thrive family, students training, book reading',
      image: 'https://myapp.com/og/about.png',
    }),
  }),
  component: Programs,
});
