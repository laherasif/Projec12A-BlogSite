/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vyxfcku6ktb1`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: `91ofux4OhB4HYXhjNfA4vZSHgBfEkARtFWc_-yZGpxk`,
        downloadLocal: true,
      },
    },
  ],
}
