import { gql } from '@apollo/client'

export const getCountryQuery = gql`
  query($code: ID!) {
    country(code: $code) {
      name
      native
      languages {
        name
        native
      }
      emoji
      states {
        code
        name
      }
      currency
    }
  }
`;