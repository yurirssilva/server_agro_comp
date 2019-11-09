export default (sequelize, DataTypes) => {
  const Fazenda = sequelize.define("Fazenda", {
    name: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER
    }
  });

  Fazenda.associate = models => {
    Fazenda.hasMany(models.Area, {
      foreignKey: "fazendaId"
    });
  };

  return Fazenda;
};
