import { createFileRoute } from '@tanstack/react-router';
import Register from '~/features/register';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/register')({
  head: () => ({
    ...seo({
      title: 'Register – TribeLead',
      description:
        'Register for TribeLead: Join our community and gain access to our resources, events, and initiatives.',
      keywords:
        'Corporate training, youth training, thrive family, students training, book reading',
      image: 'https://myapp.com/og/register.png',
    }),
  }),
  component: Register,
});
