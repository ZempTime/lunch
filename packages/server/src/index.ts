import dotenv from "dotenv";
dotenv.config();

import Koa from "koa";
import * as graphql from "./server/graphql"

const PORT = process.env.PORT || 3001;

const app = new Koa();

graphql.init(app)

app.listen(PORT);
