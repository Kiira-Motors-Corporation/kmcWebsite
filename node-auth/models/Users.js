
module.exports =(sequelize,DataTypes) =>{
    const Users = sequelize.define(
        "Users",{
            name:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
            email:{
                type:DataTypes.STRING,
                allowNull:false,
                unique: true,
                validate:{
                    notEmpty:true
                }
            },
            contact:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
            password:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            },
        }
    )



    Users.associate = function(models) {
        Users.hasMany(models.Cart, {
          foreignKey: 'userId',

        });
      };



    return Users;
}