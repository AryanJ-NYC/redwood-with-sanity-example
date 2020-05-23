export const schema = gql`
  type Movie {
    id: String!
    slug: Slug!
    title: String!
  }

  type Slug {
    current: String!
  }

  type Query {
    movies: [Movie!]!
    movie(id: String!): Movie!
  }
`
