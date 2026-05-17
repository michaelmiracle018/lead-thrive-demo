import { createFileRoute } from '@tanstack/react-router';
import Gallery from '~/features/gallery';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/gallery')({
  head: () => ({
    ...seo({
      title: 'Gallery –  LeadTribe',
      description:
        'Gallery of LeadTribe: Showcasing our events, programs, and community impact through photos and videos.',
      keywords: 'Gallery, LeadTribe, events, programs, community, photos, videos',
      image: 'https://myapp.com/og/gallery.png',
    }),
  }),
  component: Gallery,
});
