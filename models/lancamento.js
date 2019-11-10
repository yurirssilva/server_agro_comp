export default (sequelize, DataTypes) => {
    const Lancamento = sequelize.define("Lancamento", {
      data: {
        type: DataTypes.STRING
      },
      tipo: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.INTEGER
      }
    });
  
    Lancamento.associate = models => {
      Lancamento.hasMany(models.DadosManuais, {
        foreignKey: "lancamentoId"
      });
      Lancamento.hasMany(models.DadosAutomaticos, {
        foreignKey: "lancamentoId"
      });
    };
  
    return Lancamento;
  };
  