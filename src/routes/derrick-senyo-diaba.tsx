import { createFileRoute } from '@tanstack/react-router';
import Leader from '~/features/leader';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/derrick-senyo-diaba')({
  head: () => ({
    meta: seo({
      title: 'Derrick Senyo Diaba',
      description:
        'Derrick Senyo Diaba is a dynamic leader who seamlessly blends two distinct yet deeply connected callings.',
      keywords:
        'The LeaDTribe Group, Executive Director, thrive family pastor, Mentor, book reading',
      image: 'https://myapp.com/og/about.png',
    }),
  }),
  component: Leader,
});
