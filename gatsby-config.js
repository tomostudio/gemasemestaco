module.exports = {
    siteMetadata: {
        title: `Gema Semesta WIP`,
        siteUrl: `https://gemasemesta.co`,
    },
    plugins: [{
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/assets`,
                name: 'assets',
            },
        }, {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Gema Semesta",
                short_name: "gemasemesta",
                start_url: "/",
                background_color: "#333",
                theme_color: "#333",
                display: "standalone",
                icon: "src/images/icon/icon.png",
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-plugin-offline`,
        // `gatsby-plugin-remove-serviceworker`,
        'gatsby-plugin-netlify-cache',
        `gatsby-plugin-react-helmet`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                htmlTitle: `Content Manager | Gema Semesta`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-layout`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-XXXXXXXXX-X",
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-static-images`,
                    `gatsby-remark-unwrap-images`,
                    `gatsby-remark-relative-images`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280,
                            backgroundColor: 'transparent', // required to display blurred image first
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                generateMatchPathRewrites: false, // boolean to turn off automatic creation of redirect rules for client only paths
            },
        },
    ],
}
