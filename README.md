## 🚀 Gatsby Proof of Concept - Integrating Youtube Videos
This is a small project to learn how to integrate youtube videos into a Gatsby site programmatically using the youtube api.

It uses the [gatsby-source-youtube-v2 plugin](https://www.gatsbyjs.com/plugins/gatsby-source-youtube-v2/)

**Getting Started**

Clone the repo.
   
Install all dependencies

    
    npm install
   
    
Add your channel ID and youtube API key

- Go to the gatsby-config.js file at the root of the project folder and replace YOUR_CHANNEL_ID and YOUR_YOUTUBE_API_KEY

```js
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['YOUR_CHANNEL_ID'],
        apiKey: 'YOUR_YOUTUBE_API_KEY',
        maxVideos: 50 // Defaults to 50
      }
    }
```

Start up the site
    
 
    gatsby develop


**Learn more**

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
