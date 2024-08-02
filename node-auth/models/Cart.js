module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, // Default value to indicate a cart is active upon creation
      allowNull: false,
    },
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "user",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Cart.hasMany(models.CartItems, {
      foreignKey: "cartId",
      as: "cartItems",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Cart;
};
