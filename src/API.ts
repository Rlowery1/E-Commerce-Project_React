/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  name: string,
  description: string,
  price: number,
  originalPrice?: number | null,
  salePrice?: number | null,
  imageUrl: string,
  category: string,
  subcategory?: string | null,
  isNewArrival?: boolean | null,
  isBestSeller?: boolean | null,
  isFeaturedGift?: boolean | null,
  gender?: string | null,
  seasonalCollection?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  originalPrice?: ModelFloatInput | null,
  salePrice?: ModelFloatInput | null,
  imageUrl?: ModelStringInput | null,
  category?: ModelStringInput | null,
  subcategory?: ModelStringInput | null,
  isNewArrival?: ModelBooleanInput | null,
  isBestSeller?: ModelBooleanInput | null,
  isFeaturedGift?: ModelBooleanInput | null,
  gender?: ModelStringInput | null,
  seasonalCollection?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  description: string,
  price: number,
  originalPrice?: number | null,
  salePrice?: number | null,
  imageUrl: string,
  category: string,
  subcategory?: string | null,
  isNewArrival?: boolean | null,
  isBestSeller?: boolean | null,
  isFeaturedGift?: boolean | null,
  gender?: string | null,
  seasonalCollection?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  originalPrice?: number | null,
  salePrice?: number | null,
  imageUrl?: string | null,
  category?: string | null,
  subcategory?: string | null,
  isNewArrival?: boolean | null,
  isBestSeller?: boolean | null,
  isFeaturedGift?: boolean | null,
  gender?: string | null,
  seasonalCollection?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateUserProfileInput = {
  id?: string | null,
  username: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  address?: AddressInput | null,
  birthDate?: string | null,
  gender?: string | null,
  preferences?: Array< string | null > | null,
  profilePic?: string | null,
};

export type AddressInput = {
  street?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  zipCode?: string | null,
};

export type ModelUserProfileConditionInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  birthDate?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  preferences?: ModelStringInput | null,
  profilePic?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  username: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  address?: Address | null,
  birthDate?: string | null,
  gender?: string | null,
  preferences?: Array< string | null > | null,
  profilePic?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Address = {
  __typename: "Address",
  street?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  zipCode?: string | null,
};

export type UpdateUserProfileInput = {
  id: string,
  username?: string | null,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  address?: AddressInput | null,
  birthDate?: string | null,
  gender?: string | null,
  preferences?: Array< string | null > | null,
  profilePic?: string | null,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  birthDate?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  preferences?: ModelStringInput | null,
  profilePic?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  originalPrice?: ModelFloatInput | null,
  salePrice?: ModelFloatInput | null,
  imageUrl?: ModelStringInput | null,
  category?: ModelStringInput | null,
  subcategory?: ModelStringInput | null,
  isNewArrival?: ModelBooleanInput | null,
  isBestSeller?: ModelBooleanInput | null,
  isFeaturedGift?: ModelBooleanInput | null,
  gender?: ModelStringInput | null,
  seasonalCollection?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  birthDate?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  preferences?: ModelSubscriptionStringInput | null,
  profilePic?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  originalPrice?: ModelSubscriptionFloatInput | null,
  salePrice?: ModelSubscriptionFloatInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  subcategory?: ModelSubscriptionStringInput | null,
  isNewArrival?: ModelSubscriptionBooleanInput | null,
  isBestSeller?: ModelSubscriptionBooleanInput | null,
  isFeaturedGift?: ModelSubscriptionBooleanInput | null,
  gender?: ModelSubscriptionStringInput | null,
  seasonalCollection?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    originalPrice?: number | null,
    salePrice?: number | null,
    imageUrl: string,
    category: string,
    subcategory?: string | null,
    isNewArrival?: boolean | null,
    isBestSeller?: boolean | null,
    isFeaturedGift?: boolean | null,
    gender?: string | null,
    seasonalCollection?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    originalPrice?: number | null,
    salePrice?: number | null,
    imageUrl: string,
    category: string,
    subcategory?: string | null,
    isNewArrival?: boolean | null,
    isBestSeller?: boolean | null,
    isFeaturedGift?: boolean | null,
    gender?: string | null,
    seasonalCollection?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    originalPrice?: number | null,
    salePrice?: number | null,
    imageUrl: string,
    category: string,
    subcategory?: string | null,
    isNewArrival?: boolean | null,
    isBestSeller?: boolean | null,
    isFeaturedGift?: boolean | null,
    gender?: string | null,
    seasonalCollection?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    username: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    birthDate?: string | null,
    gender?: string | null,
    preferences?: Array< string | null > | null,
    profilePic?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    username: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    birthDate?: string | null,
    gender?: string | null,
    preferences?: Array< string | null > | null,
    profilePic?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    username: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    birthDate?: string | null,
    gender?: string | null,
    preferences?: Array< string | null > | null,
    profilePic?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    username: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    birthDate?: string | null,
    gender?: string | null,
    preferences?: Array< string | null > | null,
    profilePic?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      username: string,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      address?:  {
        __typename: "Address",
        street?: string | null,
        city?: string | null,
        state?: string | null,
        country?: string | null,
        zipCode?: string | null,
      } | null,
      birthDate?: string | null,
      gender?: string | null,
      preferences?: Array< string | null > | null,
      profilePic?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    originalPrice?: number | null,
    salePrice?: number | null,
    imageUrl: string,
    category: string,
    subcategory?: string | null,
    isNewArrival?: boolean | null,
    isBestSeller?: boolean | null,
    isFeaturedGift?: boolean | null,
    gender?: string | null,
    seasonalCollection?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      price: number,
      originalPrice?: number | null,
      salePrice?: number | null,
      imageUrl: string,
      category: string,
      subcategory?: string | null,
      isNewArrival?: boolean | null,
      isBestSeller?: boolean | null,
      isFeaturedGift?: boolean | null,
      gender?: string | null,
      seasonalCollection?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    username: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    birthDate?: string | null,
    gender?: string | null,
    preferences?: Array< string | null > | null,
    profilePic?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    username: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    birthDate?: string | null,
    gender?: string | null,
    preferences?: Array< string | null > | null,
    profilePic?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    username: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      zipCode?: string | null,
    } | null,
    birthDate?: string | null,
    gender?: string | null,
    preferences?: Array< string | null > | null,
    profilePic?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    originalPrice?: number | null,
    salePrice?: number | null,
    imageUrl: string,
    category: string,
    subcategory?: string | null,
    isNewArrival?: boolean | null,
    isBestSeller?: boolean | null,
    isFeaturedGift?: boolean | null,
    gender?: string | null,
    seasonalCollection?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    originalPrice?: number | null,
    salePrice?: number | null,
    imageUrl: string,
    category: string,
    subcategory?: string | null,
    isNewArrival?: boolean | null,
    isBestSeller?: boolean | null,
    isFeaturedGift?: boolean | null,
    gender?: string | null,
    seasonalCollection?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    originalPrice?: number | null,
    salePrice?: number | null,
    imageUrl: string,
    category: string,
    subcategory?: string | null,
    isNewArrival?: boolean | null,
    isBestSeller?: boolean | null,
    isFeaturedGift?: boolean | null,
    gender?: string | null,
    seasonalCollection?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
