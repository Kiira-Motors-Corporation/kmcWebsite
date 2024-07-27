module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Items',
          key: 'id'
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      image_path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    Cart.associate = function(models) {
      Cart.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'user',
      });
      Cart.belongsTo(models.Items, {
        foreignKey: 'itemId',
        as: 'item',
      });
    };

    return Cart;
  };
