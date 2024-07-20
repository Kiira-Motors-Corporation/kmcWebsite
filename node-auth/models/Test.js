
module.exports =(sequelize,DataTypes) =>{
    const Books = sequelize.define(
        "Books",{
            firstName:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
            age:{
                type:DataTypes.INTEGER,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            }
        }
    )

    return Books;
}