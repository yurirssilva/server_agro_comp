export default (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  });

  User.associate = models => {
    User.hasMany(models.Fazenda, {
      foreignKey: "userId"
    });
  };

  return User;
};
