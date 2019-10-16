import { importSchema } from "graphql-import";
import { resolvers} from "./resolvers"

const typeDefs = importSchema("src/graphql/schema.graphql");

export {
  resolvers,
  typeDefs
}