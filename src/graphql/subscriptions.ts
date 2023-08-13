/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
