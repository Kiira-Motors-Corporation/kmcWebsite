module.exports = (sequelize, DataTypes) => {
    const Vehicles = sequelize.define(
      'Vehicles',
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        model: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        length: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        kind: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        image_path: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
      }
    );


    Vehicles.associate = (models) => {
      Vehicles.hasOne(models.Specifications, {
        foreignKey: "vehicleId",
        as: "vehicle",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

    };
    return Vehicles;
  };
