import { createFileRoute } from '@tanstack/react-router';
import ProgramsProfessionals from '~/features/programs-professionals';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/programs-professionals')({
  head: () => ({
    ...seo({
      title: 'TribeLead Programs Professionals',
      description:
        'Our programs combine biblical wisdom with practical leadership skills to help you thrive in your workplace and beyond.',
      keywords:
        'Corporate training, youth training, thrive family, students training, book reading, professionals',
      image: 'https://myapp.com/og/about.png',
    }),
  }),
  component: ProgramsProfessionals,
});
