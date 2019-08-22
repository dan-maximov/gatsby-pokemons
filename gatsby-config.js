/* eslint-disable */

module.exports = {
  siteMetadata: {
    title: 'PokeList',
    description: 'Pokemons list built with gatsby and graphql-pokemon endpoint',
    author: '@MaximovDanila',
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
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
};
