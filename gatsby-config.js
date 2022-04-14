module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "web",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["IBM Plex Mono", "Inconsolata"],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
  ],
};
