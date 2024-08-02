const  {Cart,Items} = require("../models")
module.exports = (sequelize, DataTypes) => {

  const CartItems = sequelize.define('CartItems', {
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cart,
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Items,
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image_path: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Cart.belongsToMany(Items,{through:CartItems})
  // Items.belongsToMany(Cart,{through:CartItems})
  CartItems.associate = (models) => {
    CartItems.belongsTo(models.Cart, {
      foreignKey: 'cartId',
      as: 'cart',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    CartItems.belongsTo(models.Items, {
      foreignKey: 'itemId',
      as: 'item',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return CartItems;
};
