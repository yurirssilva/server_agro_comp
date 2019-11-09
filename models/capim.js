export default (sequelize, DataTypes) => {
    const Capim = sequelize.define("Capim", {
      tipo: {
        type: DataTypes.STRING
      },
      alturaEntrada: {
        type: DataTypes.FLOAT
      },
      alturaSaidaMaiorFert: {
        type: DataTypes.FLOAT,
      },
      alturaSaidaMenorFert: {
        type: DataTypes.FLOAT
      }
    });
  
    Capim.associate = models => {
      Capim.hasMany(models.Area, {
        foreignKey: "capimId"
      });
    };
  
    return Capim;
  };
  