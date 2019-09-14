module.exports = {
  siteMetadata: {
    hello: '👋',
    who: 'I Use Design Magic To Turn Ideas Into Great Products.',
    title: 'Ismail Elazizi',
    name: `ismailelazizi`,
    siteUrl: `https://gatsby-theme-novela.netlify.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,

    // hero
    // A required key and will be displayed on the main page of Noveal
    hero: {
      heading: `You Know! <br> Readers are Leaders`,
      maxWidth: 652,
    },

    // social
    // Add in the social links that will be displayed in the footer
    social: [
      {
        url: `https://www.dribbble.com/ismailelazizi`,
      },
      {
        url: `https://www.instagram.com/ismail_elazizi`,
      },
      {
        url: `https://www.medium.com/@ismailelazizi`,
      },
      {
        url: `https://www.github.com/ismailElazizi`,
      },
      {
        url: `https://www.twitter.com/smailelazizi`,
      },
      {
        url: `https://www.facebook.com/smailElazizi`,
      },
      {
        url: `https://www.linkedin.com/in/ismail-el-azizi`,
      },
    ],
  },

  plugins: [

    'gatsby-plugin-react-helmet',
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPath: 'blog/posts',
        contentPosts: 'blog/posts',
        contentAuthors: 'blog/authors',
        basePath: 'blog/',
        authorsPage: true,
        sources: {
          local: true,
        },
      },
    },
    /* {
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
    }, */
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: 'projects',
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
  ],
}
