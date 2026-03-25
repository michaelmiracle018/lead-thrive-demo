import { createFileRoute } from '@tanstack/react-router';
import ProgramsStudents from '~/features/programs-students';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/programs-students')({
  head: () => ({
    meta: seo({
      title: 'TribeLead Programs Students',
      description:
        '                Our student programs are designed to help young people discover their identity, build their faith, and develop leadership skills that will serve them for a lifetime. We work with Junior High Schools, Senior High Schools, and individual students and parents.',
      keywords:
        'Corporate training, youth training, thrive family, students training, book reading, Students',
      image: 'https://myapp.com/og/about.png',
    }),
  }),
  component: ProgramsStudents,
});
