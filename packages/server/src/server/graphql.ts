import { ApolloServer, Config } from "apollo-server-koa";
import * as Koa from "koa";
import { typeDefs, resolvers } from "../graphql";
import { prisma as db } from "../prisma/generated/prisma-client"

export function init(server: Koa) {
  let apolloConfig: Config = { typeDefs, resolvers, context: {db} };

  const apiKey = process.env.APOLLO_ENGINE_KEY;
  const schemaTag = process.env.APOLLO_SCHEMA_KEY;

  if (apiKey && schemaTag) {
    apolloConfig = {
      ...apolloConfig,
      engine: {
        apiKey,
        schemaTag
      }
    };
  }

  const gqlServer = new ApolloServer(apolloConfig);

  server.use(gqlServer.getMiddleware());
}