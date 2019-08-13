module.exports = {
  siteMetadata: {
    title: 'PokeList',
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
    'gatsby-plugin-styled-components',
    'gatsby-plugin-ts',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          components: 'src/components',
          pages: 'src/pages',
          store: 'src/store',
          templates: 'src/templates',
          utils: 'src/utils',
          hooks: 'src/hooks',
          types: 'src/types',
        },
        extensions: ['js', 'tsx', 'ts'],
      },
    },
  ],
};
