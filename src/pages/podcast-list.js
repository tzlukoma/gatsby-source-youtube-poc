import React from 'react'
import moment from 'moment'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  max-width: 900px;
`

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
`
const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const PodcastList = ({ data }) => {
  //   console.log(data)
  const videos = data.allYoutubeVideo.edges
  console.log(videos)
  return (
    <Container>
      <h1>This is the podcast list</h1>
      {videos.map(video => {
        const { title, description, videoId, publishedAt } = video.node
        return (
          <>
            <h1>{title}</h1>
            <h2>{`Published on ${moment(publishedAt).format(
              'MMM DD, yyyy'
            )}`}</h2>
            <p>{description}</p>
            <VideoContainer>
              <Video
                width='420'
                height='315'
                src={`https://www.youtube.com/embed/${videoId}`}
              />
            </VideoContainer>
          </>
        )
      })}
    </Container>
  )
}

export const pageQuery = graphql`
  query {
    allYoutubeVideo(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          id
          title
          description
          videoId
          publishedAt
          privacyStatus
          channelTitle
        }
      }
    }
  }
`

export default PodcastList
