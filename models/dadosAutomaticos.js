export default (sequelize, DataTypes) => {
    const DadosAutomaticos = sequelize.define("DadosAutomaticos", {
        imagem: {
            type: DataTypes.STRING
        },
        observacoes: {
            type: DataTypes.STRING
        }
    });

    return DadosAutomaticos;
};