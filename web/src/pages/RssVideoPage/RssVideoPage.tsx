import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useQuery } from '@redwoodjs/web'
import { Card, CardContent, Typography, Button, Container, Box } from '@mui/material'
import Video from 'src/components/Video'

const QUERY = gql`
  query FetchRssContent($rssUrl: String!) {
    rssContent: parseRss(rssUrl:  $rssUrl) {
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

const RssVideoPage = () => {
  const [rssUrl, setRssUrl] = useState('https://timesofindia.indiatimes.com/rssfeedstopstories.cms')
  const [rssData, setRssData] = useState([])
  const [contentLoading, setContentLoading] = useState(true)
  const [contentError, setContentError] = useState(null)

  const { loading, error, data } = useQuery(QUERY, {
    variables: { rssUrl },
    onCompleted: (data) => {
      setRssData(data.rssContent)
      setContentLoading(false)
    },
    onError: (error) => {
      setContentError(error)
      setContentLoading(false)
    },
  })

  const onSubmit = (data) => {
    setRssUrl(data.rssUrl)
  }

  return (
    <Container className="grid">
      <Box sx={{ my: 2 }}>
        <Form className='' onSubmit={onSubmit}>
          <div className='flex flex-row gap-4'>
            <TextField
            className='px-2 py-2 border-2 border-blue-200 rounded-lg w-9/12'
              name="rssUrl"
              placeholder="Enter RSS URL"
              validation={{ required: true }}
              defaultValue={rssUrl}
            />
            <Submit className='px-4  border-blue-400 border-2 rounded-lg '>Create Video</Submit>
            </div>

        </Form>
      </Box>
      {loading && <Typography variant="h6">Loading...</Typography>}
      {error && <Typography variant="h6" color="error">Error: {error.message}</Typography>}
      {data && <Video data={rssData} />}
    </Container>
  )
}

export default RssVideoPage
