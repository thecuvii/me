import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function get() {
  return rss({
    title: 'AqingCyan | Blog',
    description: 'AqingCyan Blog',
    site: 'www.aqingcyan.me',
    items: await pagesGlobToRssItems([
      ...import.meta.glob('./posts/*.{md,mdx}'),
      ...import.meta.glob('./weekly/*.{md,mdx}'),
    ]),
    customData: `<language>zh-CN</language>`,
  })
}
