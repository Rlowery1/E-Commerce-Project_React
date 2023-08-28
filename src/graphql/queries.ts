/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      username
      name
      email
      phone
      address {
        street
        city
        state
        country
        zipCode
        __typename
      }
      birthDate
      gender
      preferences
      profilePic
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        email
        phone
        address {
          street
          city
          state
          country
          zipCode
          __typename
        }
        birthDate
        gender
        preferences
        profilePic
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      price
      originalPrice
      salePrice
      imageUrl
      category
      subcategory
      isNewArrival
      isBestSeller
      isFeaturedGift
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
        originalPrice
        salePrice
        imageUrl
        category
        subcategory
        isNewArrival
        isBestSeller
        isFeaturedGift
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
