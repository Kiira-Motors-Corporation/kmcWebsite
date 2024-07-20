
module.exports =(sequelize,DataTypes) =>{
    const Evs = sequelize.define(
        "Evs",{
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
            exteriorColor:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
            interiorColor:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
            floorTrim:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },

            dimension:{
                type:DataTypes.INTEGER,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },

            wheelbase:{
                type:DataTypes.INTEGER,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },

            ranges:{
                type:DataTypes.INTEGER,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
            grossVehicleWeight:{
                type:DataTypes.INTEGER,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
            carryingCapacity:{
                type:DataTypes.INTEGER,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },


            power:{
                type:DataTypes.INTEGER,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
        }
    )

    return Evs;
}