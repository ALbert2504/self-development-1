import { gql } from '@apollo/client'

export const getContinentsQuery = gql`
  {
    continents {
      code
      name
    }
  }
`

export const getContinentQuery = gql`
  query($code: ID!) {
    continent(code: $code) {
      countries {
        code
        name
        native
        phone
        capital
        currency
        emoji
      }
    }
  }
`;