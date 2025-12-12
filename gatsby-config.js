/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://psicologacastellettisilvia.it",
    title: "Silvia Castelletti Psicologa",
    description:
      "Psicologa clinica e psicoterapeuta sistemico-dialogica. Percorsi individuali, di coppia e per famiglie.",
    author: "marcocossali",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
          placeholder: "blurred",
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
        // Ignore files starting with a dot
        ignore: [`**/\.*`],
        // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
        fastHash: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `comelavoro`,
        path: `${__dirname}/comelavoro`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Silvia Castelletti Psicologa",
        short_name: "S. Castelletti",
        description: "Psicologa clinica e psicoterapeuta sistemico-dialogica.",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#f1fcfc",
        display: "standalone",
        icon: `${__dirname}/src/content/images/logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/dev-404-page/", "/404/", "/404.html"],
        createLinkInHead: true,
      },
    },
  ],
};
