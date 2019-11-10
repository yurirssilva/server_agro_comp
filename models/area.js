export default (sequelize, DataTypes) => {
    const Area = sequelize.define("Area", {
        nome: {
            type: DataTypes.STRING,
        },
        mapa: {
            type: DataTypes.TEXT,
        },
        fertilidadeSolo: {
            type: DataTypes.BOOLEAN,
        },
        observacao: {
            type: DataTypes.STRING,
        }
    });

    Area.associate = models => {
        Area.hasMany(models.Lancamento, {
            foreignKey: "areaId"
        });
    };

    return Area;
};
