import Sequelize from "sequelize";

const sequelize = new Sequelize("agro_comp", "root", "", {
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
