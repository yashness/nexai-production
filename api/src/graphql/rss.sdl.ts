export const schema = gql`
  type Rss {
    id: Int!
    title: String!
    summary: String!
    link: String!
    published: String!
    image: String!
    author: String!
    rss_image: String!
    rss_title: String!
  }

  type Query {
    parseRss(rssUrl: String!): [Rss!]! @skipAuth
  }
`
