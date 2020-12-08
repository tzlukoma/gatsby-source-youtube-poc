module.exports = {
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
        channelId: ['UCFf1NVH4Awb07Ce4X5YIMOA'],
        apiKey: 'AIzaSyA238K-p86dEOy_S2U8XJKdv-YUjd-5IiM',
        maxVideos: 50 // Defaults to 50
      }
    }
  ]
}
