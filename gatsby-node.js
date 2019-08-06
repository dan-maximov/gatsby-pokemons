const path = require("path")
const POKEMONS_QUANTITY = require("./src/pokemonsQuantity")

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      pokeApi {
        pokemons(first: ${POKEMONS_QUANTITY}) {
          name
        }
      }
    }
  `)

  result.data.pokeApi.pokemons.forEach(({ name }) => {
    actions.createPage({
      path: name.toLowerCase(),
      component: path.resolve("./src/templates/pokemon.js"),
      context: {
        slug: name,
      },
    })
  })
}
