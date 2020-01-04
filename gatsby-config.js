require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'María Hernández | IoT Developer 👩🏼‍💻 | Maker 👩🏼‍🏭 | Community Builder 🤝🌎',
    url: 'https://mariahernandez.dev',
    image: 'preview.png',
    language: 'en',
    description: 'IoT Developer and Community Builder | Developer Advocate @Ubidots | @IoT Medellin Co-Organizer',
    socialLinks: {
      github: 'https://github.com/mariacarlinahernandez',
      twitter: 'https://twitter.com/makahernandez',
      web: 'https://www.linkedin.com/in/mariacarlinahernandezoberto/',
      mailto: 'mailto:mariacarlinahernandez@gmail.com',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'elevator-pitch-screens',
        path: 'content/elevator-pitch/screens',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'elevator-pitch-demo-screens',
    //     path: `${__dirname}/content/screens`,
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'elevator-pitch-images',
        path: 'content/elevator-pitch/images',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'elevator-pitch-demo-images',
    //     path: `${__dirname}/content/images`,
    //   },
    // },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-elevator-pitch'],
      },
    },
  ],
};
