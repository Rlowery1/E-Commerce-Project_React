/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
