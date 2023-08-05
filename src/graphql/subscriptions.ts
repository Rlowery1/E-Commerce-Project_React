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
      image
      category {
        id
        name
        products {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      categoryId
      createdAt
      updatedAt
      owner
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
      image
      category {
        id
        name
        products {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      categoryId
      createdAt
      updatedAt
      owner
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
      image
      category {
        id
        name
        products {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      categoryId
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      name
      products {
        items {
          id
          name
          description
          price
          image
          categoryId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      name
      products {
        items {
          id
          name
          description
          price
          image
          categoryId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      name
      products {
        items {
          id
          name
          description
          price
          image
          categoryId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      username
      email
      orders {
        items {
          id
          userId
          total
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      username
      email
      orders {
        items {
          id
          userId
          total
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      username
      email
      orders {
        items {
          id
          userId
          total
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onCreateOrder(filter: $filter, owner: $owner) {
      id
      userId
      products {
        items {
          id
          orderId
          quantity
          productId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      total
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onUpdateOrder(filter: $filter, owner: $owner) {
      id
      userId
      products {
        items {
          id
          orderId
          quantity
          productId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      total
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onDeleteOrder(filter: $filter, owner: $owner) {
      id
      userId
      products {
        items {
          id
          orderId
          quantity
          productId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      total
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct(
    $filter: ModelSubscriptionOrderProductFilterInput
    $owner: String
  ) {
    onCreateOrderProduct(filter: $filter, owner: $owner) {
      id
      orderId
      product {
        id
        name
        description
        price
        image
        category {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        categoryId
        createdAt
        updatedAt
        owner
        __typename
      }
      quantity
      productId
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct(
    $filter: ModelSubscriptionOrderProductFilterInput
    $owner: String
  ) {
    onUpdateOrderProduct(filter: $filter, owner: $owner) {
      id
      orderId
      product {
        id
        name
        description
        price
        image
        category {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        categoryId
        createdAt
        updatedAt
        owner
        __typename
      }
      quantity
      productId
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct(
    $filter: ModelSubscriptionOrderProductFilterInput
    $owner: String
  ) {
    onDeleteOrderProduct(filter: $filter, owner: $owner) {
      id
      orderId
      product {
        id
        name
        description
        price
        image
        category {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        categoryId
        createdAt
        updatedAt
        owner
        __typename
      }
      quantity
      productId
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
