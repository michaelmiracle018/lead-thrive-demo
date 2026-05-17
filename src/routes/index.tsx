import { createFileRoute } from '@tanstack/react-router';
import Home from '~/features/home';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/')({
  head: () => ({
    ...seo({
      title: 'Home – Leadtribe',
      description:
        'Building a generation of Christian leaders who lead with vision, integrity, and purpose—transforming every aspect of society with Kingdom values.',
      keywords:
        'Empowerment, community initiatives, campaigns, events, youth empowerment, education, social impact, training, thrive family',
    }),
  }),
  component: Home,
});
