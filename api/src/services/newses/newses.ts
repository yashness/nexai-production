import type { QueryResolvers } from 'types/graphql'
import { read } from 'feed-reader'

const FEED_URL = "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"

export const newses = async () => {
  const data = await read(FEED_URL, {normalization: false}).then((feed) => {
    console.log(feed)
    let feed_items = feed.item.map((news, idx) => {
        return {
          id: idx,
          title: news.title,
          summary: news.description,
          link: news.link,
          published: news.pubDate,
          image: news.enclosure["@_url"],
          author: news["dc:creator"],
          rss_title: feed.image.title,
          rss_image: feed.image.url
      }
    })
    // console.log(feed_items)
    return feed_items
  })
  return data

}
