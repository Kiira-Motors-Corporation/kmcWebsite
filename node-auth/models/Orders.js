
module.exports =(sequelize,DataTypes) =>{
    const Orders = sequelize.define(
        "Orders",{
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

            quantity:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
        }
    )

    return Orders;
}