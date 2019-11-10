export default (sequelize, DataTypes) => {
  const Fazenda = sequelize.define("Fazenda", {
    nome: {
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
