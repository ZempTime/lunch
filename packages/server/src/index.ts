import Koa from "koa";
import * as graphql from "./server/graphql"

const app = new Koa();

graphql.init(app)

app.listen(3001);
