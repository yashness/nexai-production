import type { QueryResolvers } from 'types/graphql'
import { read } from 'feed-reader'

const findFirstAvailable = (objPaths) => {
  for (let objPath of objPaths) {
    const { obj, paths } = objPath;
    for (let path of paths) {
      const keys = path.split('.');
      let value = obj;
      for (let key of keys) {
        value = value ? value[key] : undefined;
        if (value === undefined) break;
      }
      if (value !== undefined) {
        return value;
      }
    }
  }
  return undefined;
}

const stripHtml = (html) => {
  return html.replace(/<[^>]*>?/gm, '');
}

export const parseRss = async ({rssUrl}) => {
  const FEED_URL = rssUrl
  const data = await read(FEED_URL, {normalization: false}).then((feed) => {
    // console.log(feed)
    let feed_items = feed['item'].map((news, idx) => {

        return {
          id: idx,
          title: findFirstAvailable([{ obj: news, paths: ['title'] }]),
          summary: stripHtml(findFirstAvailable([{ obj: news, paths: ['description', 'summary', 'content:encoded'] }])).substring(0, 300) + '..',
          link: findFirstAvailable([{ obj: news, paths: ['link'] }]),
          published: findFirstAvailable([{ obj: news, paths: ['pubDate'] }]),
          image: findFirstAvailable([{ obj: news['media:thumbnail'], paths: ["@_url"] }, { obj: news['enclosure'], paths: ["@_url"] }, { obj: feed['image'], paths: ['url'] }]),
          author: findFirstAvailable([{ obj: news, paths: ['dc:creator'] }, { obj: feed, paths: ['title'] }]),
          rss_title: findFirstAvailable([{ obj: feed['image'], paths: ['title'] }]),
          rss_image: findFirstAvailable([{ obj: feed['image'], paths: ['url'] }])
      }
    })
    console.log(feed_items)
    return feed_items
  })
  return data
}
