import Sequelize from "sequelize";
require('dotenv/config');

const sequelize = new Sequelize(process.env.DB_HOST, process.env.DB_NAME, process.env.DB_PASSWORD, {
  dialect: "mysql"
});

const models = {
  User: sequelize.import("./user"),
  Fazenda: sequelize.import("./fazenda")
};

Object.keys(models).forEach(modelName => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;

export default models;
