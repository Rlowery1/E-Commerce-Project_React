/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderProduct = /* GraphQL */ `
  mutation CreateOrderProduct(
    $input: CreateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    createOrderProduct(input: $input, condition: $condition) {
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
export const updateOrderProduct = /* GraphQL */ `
  mutation UpdateOrderProduct(
    $input: UpdateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    updateOrderProduct(input: $input, condition: $condition) {
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
export const deleteOrderProduct = /* GraphQL */ `
  mutation DeleteOrderProduct(
    $input: DeleteOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    deleteOrderProduct(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
