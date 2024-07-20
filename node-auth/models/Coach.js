
module.exports =(sequelize,DataTypes) =>{
    const Coach = sequelize.define(
        "Coach",{
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
            image_path:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
        }
    )

    return Coach;
}