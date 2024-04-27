export const schema = gql`
  type News {
    id: String!
    title: String!
    summary: String!
    link: String!
    published: String!
    author: String!
    imageURL: String!
    titleDetailType: String!
    titleDetailLanguage: String!
    titleDetailBase: String!
    titleDetailValue: String!
    summaryDetailType: String!
    summaryDetailLanguage: String!
    summaryDetailBase: String!
    summaryDetailValue: String!
    linkRel: String!
    linkType: String!
    linkHref: String!
    linkLength: String!
    authorName: String!
  }

  type Query {
    newses: [News!]! @skipAuth
  }
`
