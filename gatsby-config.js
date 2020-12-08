module.exports = {
  siteMetadata: {
    title: `GBT Importing Youtube P.O.C`,
    description: `An example to learn how to import videos from YouTube.`,
    siteUrl: `http://georgebthompson.com`,
    author: `@tzlukoma`
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress-experimental',
      options: {
        url: 'http://gbtcleanredesign.local/graphql'
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-LPND6DVJHQ'
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['YOUR_CHANNEL_ID'],
        apiKey: 'YOUR_YOUTUBE_API_KEY',

        maxVideos: 50 // Defaults to 50
      }
    }
  ]
}
