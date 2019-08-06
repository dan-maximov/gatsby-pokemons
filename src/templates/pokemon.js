import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const PokemonPage = ({ data }) => (
  <Layout>
    <p>{data.pokeApi.pokemon.name}</p>
    <p>{data.pokeApi.pokemon.classification}</p>
  </Layout>
)

PokemonPage.propTypes = {
  data: PropTypes.objectOf({
    pokeApi: PropTypes.objectOf({
      pokemon: PropTypes.objectOf({
        name: PropTypes.string,
        classification: PropTypes.string,
      }),
    }),
  }).isRequired,
}

export const query = graphql`
  query($slug: String!) {
    pokeApi {
      pokemon(name: $slug) {
        name
        classification
      }
    }
  }
`

export default PokemonPage
