import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function get() {
  return rss({
    title: 'AqingCyan | Blog',
    description: 'AqingCyan Blog',
    site: 'https://www.aqingcyan.me',
    items: [
      ...(await pagesGlobToRssItems(import.meta.glob('./posts/*.{md,mdx}'))),
      ...(await pagesGlobToRssItems(import.meta.glob('./weekly/*.{md,mdx}'))),
    ],
    customData: `<language>zh-CN</language>`,
  })
}
