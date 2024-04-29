export const schema = gql`
  type News {
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
    newses: [News!]! @skipAuth
  }
`
