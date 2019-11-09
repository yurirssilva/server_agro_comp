export default (sequelize, DataTypes) => {
  const Fazenda = sequelize.define("Fazenda", {
    name: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER
    }
  });

  return Fazenda;
};
