
module.exports =(sequelize,DataTypes) =>{
    const Specifications = sequelize.define(
        "Specifications",{
            seats:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
            vehicleId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                  model: "Vehicles",
                  key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
              },

        }
    )

    Specifications.associate = (models) => {
        Specifications.belongsTo(models.Vehicles, {
          foreignKey: "vehicleId",
          as: "vehicle",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        });

      };

    return Specifications;
}