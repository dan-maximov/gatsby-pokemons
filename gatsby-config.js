module.exports = {
  siteMetadata: {
    title: 'Pokemons list built with gatsby :)',
    description: 'Pokemons list built with gatsby and graphql-pokemon endpoint',
    author: '@meatspincom',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'PokeList',
        short_name: 'PokeList',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#f44336',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'PokeAPI',
        fieldName: 'pokeApi',
        url: 'https://graphql-pokemon.now.sh/',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
