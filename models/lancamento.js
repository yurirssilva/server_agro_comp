export default (sequelize, DataTypes) => {
    const Lancamento = sequelize.define("Lancamento", {
      data: {
        type: DataTypes.STRING
      },
      tipo: {
        type: DataTypes.STRING
      }
    });
  
    Lancamento.associate = models => {
      Lancamento.hasMany(models.DadosManuais, {
        foreignKey: "lancamentoId"
      });
      Lancamento.hasMany(models.DadosAutomatico, {
        foreignKey: "lancamentoId"
      });
    };
  
    return Lancamento;
  };
  