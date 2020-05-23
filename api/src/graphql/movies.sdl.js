export const schema = gql`
  type Asset {
    _ref: String!
  }

  type Movie {
    id: String!
    poster: Poster!
    slug: Slug!
    title: String!
  }

  type Poster {
    asset: Asset!
  }

  type Slug {
    current: String!
  }

  type Query {
    movies: [Movie!]!
    movie(slug: String!): Movie!
  }
`
