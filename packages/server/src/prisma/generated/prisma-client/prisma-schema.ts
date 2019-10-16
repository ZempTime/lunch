// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateMeal {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Meal {
  id: ID!
  name: String!
  satisfactionLevel: Int
}

type MealConnection {
  pageInfo: PageInfo!
  edges: [MealEdge]!
  aggregate: AggregateMeal!
}

input MealCreateInput {
  id: ID
  name: String!
  satisfactionLevel: Int
}

type MealEdge {
  node: Meal!
  cursor: String!
}

enum MealOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  satisfactionLevel_ASC
  satisfactionLevel_DESC
}

type MealPreviousValues {
  id: ID!
  name: String!
  satisfactionLevel: Int
}

type MealSubscriptionPayload {
  mutation: MutationType!
  node: Meal
  updatedFields: [String!]
  previousValues: MealPreviousValues
}

input MealSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MealWhereInput
  AND: [MealSubscriptionWhereInput!]
  OR: [MealSubscriptionWhereInput!]
  NOT: [MealSubscriptionWhereInput!]
}

input MealUpdateInput {
  name: String
  satisfactionLevel: Int
}

input MealUpdateManyMutationInput {
  name: String
  satisfactionLevel: Int
}

input MealWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  satisfactionLevel: Int
  satisfactionLevel_not: Int
  satisfactionLevel_in: [Int!]
  satisfactionLevel_not_in: [Int!]
  satisfactionLevel_lt: Int
  satisfactionLevel_lte: Int
  satisfactionLevel_gt: Int
  satisfactionLevel_gte: Int
  AND: [MealWhereInput!]
  OR: [MealWhereInput!]
  NOT: [MealWhereInput!]
}

input MealWhereUniqueInput {
  id: ID
}

type Mutation {
  createMeal(data: MealCreateInput!): Meal!
  updateMeal(data: MealUpdateInput!, where: MealWhereUniqueInput!): Meal
  updateManyMeals(data: MealUpdateManyMutationInput!, where: MealWhereInput): BatchPayload!
  upsertMeal(where: MealWhereUniqueInput!, create: MealCreateInput!, update: MealUpdateInput!): Meal!
  deleteMeal(where: MealWhereUniqueInput!): Meal
  deleteManyMeals(where: MealWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  meal(where: MealWhereUniqueInput!): Meal
  meals(where: MealWhereInput, orderBy: MealOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meal]!
  mealsConnection(where: MealWhereInput, orderBy: MealOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MealConnection!
  node(id: ID!): Node
}

type Subscription {
  meal(where: MealSubscriptionWhereInput): MealSubscriptionPayload
}
`