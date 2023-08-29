/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onCreateUserProfile(filter: $filter, owner: $owner) {
      id
      username
      name
      email
      phone
      firstTimeLogin
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onUpdateUserProfile(filter: $filter, owner: $owner) {
      id
      username
      name
      email
      phone
      firstTimeLogin
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onDeleteUserProfile(filter: $filter, owner: $owner) {
      id
      username
      name
      email
      phone
      firstTimeLogin
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
