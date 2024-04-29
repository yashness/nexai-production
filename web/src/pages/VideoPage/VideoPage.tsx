import { Link, routes } from '@redwoodjs/router'
import { Metadata, useQuery } from '@redwoodjs/web'
import { useState } from 'react'
import Video from 'src/components/Video'

const QUERY = gql`
  query {
    newses {
      id
      title
      summary
      link
      author
      published
      image
      rss_title
      rss_image
    }
  }
`

const VideoPage = () => {
  const [data, setData] = useState([]) // [1
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const news = useQuery(QUERY, { onCompleted: (data) => setData(data.newses), onError: (error) => setError(error), suspense: true })

  return (
    <>
      <Metadata title="Video" description="Video page" />
      <div className='grid h-screen place-items-center'>
      {data && <Video news={data} /> }
      </div>
    </>
  )
}

export default VideoPage
