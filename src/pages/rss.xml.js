import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function get() {
  return rss({
    title: 'AqingCyan | Blog',
    description: 'AqingCyan Blog',
    site: 'https://fabulous-croissant-b4f75b.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>zh-CN</language>`,
  })
}
