
module.exports =(sequelize,DataTypes) =>{
    const Items = sequelize.define(
        "Items",{
            name:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
            price:{
                type:DataTypes.INTEGER,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
            description:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
            image_path:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
        }
    )

    // Items.associate = function(models) {
    //     // Items.hasMany(models.CartItems,{

    //     // });
    //   };

    return Items;
}