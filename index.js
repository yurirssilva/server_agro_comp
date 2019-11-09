const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");

const graphQlSchema = require("./schema/index");
const graphQlResolvers = require("./resolvers/index");
const isAuth = require("./middleware/is-auth");
import models from "./models";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);
// Express: Port
const PORT = 3002 || process.env;
const IP = "localhost";
// Express: Listener
models.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log(`The server has started on port: ${PORT}`);
    console.log(`http://${IP}:${PORT}/graphql`);
  });
});
