/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      price
      imageUrl
      category
      subcategory
      isNewArrival
      gender
      seasonalCollection
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        imageUrl
        category
        subcategory
        isNewArrival
        gender
        seasonalCollection
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
