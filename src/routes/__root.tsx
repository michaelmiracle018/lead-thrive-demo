import type { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import type * as React from 'react';
import { Toaster } from 'sonner';
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary';
// import { ThemeInitScript } from '~/components/theme-init-script';
// import { ThemeProvider } from '~/components/theme-provider';
// import type { Theme } from '~/lib/theme';
import { seo } from '~/utils/seo';
import appCss from '../styles/app.css?url';
import customCss from '../styles/custom.css?url';
import NotFound from '~/features/NotFound';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  headers: () => {
    const isDev = import.meta.env.DEV;

    return {
      'Content-Security-Policy': [
        "default-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data:",
        "font-src 'self'",
        `connect-src 'self' ${isDev ? 'http://localhost:3000 ws://localhost:3000' : ''}`,
      ].join('; '),
    };
  },

  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...seo({
        title: 'Instructa Start',
        description: 'Building better applications, faster with Instructa Start',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'stylesheet', href: customCss },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),

  errorComponent: (props) => (
    <RootDocument>
      <DefaultCatchBoundary {...props} />
    </RootDocument>
  ),

  notFoundComponent: () => <NotFound />,

  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
      {import.meta.env.DEV ? (
        <>
          <ReactQueryDevtools buttonPosition="bottom-right" />
          <TanStackRouterDevtools />
        </>
      ) : null}
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="flex min-h-svh flex-col">{children}</div>
        <Toaster />
        <Scripts />
      </body>
    </html>
  );
}
