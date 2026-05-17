// src/utils/seo.ts

export const seo = ({
  title,
  description,
  keywords,
  image,
  path = '', // 1. Add an optional path fallback
}: {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
  path?: string; // Type safety for path
}) => {
  const siteUrl = 'https://leadtribe.africa';

  // 2. Ensure the image is a full absolute URL if it's a local path
  const fullImageUrl = image
    ? image.startsWith('http')
      ? image
      : `${siteUrl}${image.startsWith('/') ? image : `/${image}`}`
    : undefined;

  // 3. Construct the absolute canonical URL
  const fullUrl = `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;

  const tags = [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: 'leadtribe' },
    { name: 'twitter:site', content: 'leadtribe' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: fullUrl }, // Added to bind real URL
    ...(fullImageUrl
      ? [
          { name: 'twitter:image', content: fullImageUrl },
          { name: 'twitter:card', content: 'summary_large_image' },
          { property: 'og:image', content: fullImageUrl },
        ]
      : []),
  ];

  const meta = tags.filter((tag) => {
    if ('title' in tag) return !!tag.title;
    if ('content' in tag) return !!tag.content;
    return true;
  }) as any[];

  // Return both meta and links structure for TanStack
  return {
    meta,
    links: [{ rel: 'canonical', href: fullUrl }],
  };
};
