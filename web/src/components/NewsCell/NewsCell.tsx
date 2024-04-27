import type { FindNewsQuery, FindNewsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindNewsQuery,
  FindNewsQueryVariables
> = gql`
  query FindNewsQuery($id: Int!) {
    news: newses {
      id,
      title,
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindNewsQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  news,
  setNews
}: CellSuccessProps<FindNewsQuery, FindNewsQueryVariables>) => {
  console.log(news)
  setNews(news)
  return <div>Hello {JSON.stringify(news)}</div>
}
