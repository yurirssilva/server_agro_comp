export default (sequelize, DataTypes) => {
    const DadosManuais = sequelize.define("DadosManuais", {
        altura: {
            type: DataTypes.FLOAT
        },
        localizacao: {
            type: DataTypes.STRING
        },
        observacoes: {
            type: DataTypes.STRING
        }
    });

    return DadosManuais;
};
