import { createFileRoute } from '@tanstack/react-router';
import Leader from '~/features/leader';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/derrick-senyo-diaba')({
  head: () => ({
    ...seo({
      title: 'Derrick Senyo Diaba',
      description:
        'Derrick Senyo Diaba is a dynamic leader who seamlessly blends two distinct yet deeply connected callings.',
      keywords:
        'The LeadTribe Group, Executive Director, thrive family pastor, Mentor, book reading',
      image: '/assets/derrick-6.jpg',
    }),
  }),
  component: Leader,
});
