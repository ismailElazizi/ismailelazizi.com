module.exports = {
  siteMetadata: {
    hello: '👋',
    who: 'A human first UI/UX designer Ready to help! ',
  },



  plugins: [
    {
     resolve: `gatsby-plugin-typography`,
     options: {
       pathToConfigModule: `src/utils/typography`,
     }
    }
   ],

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: "src",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
  ]
  
}
