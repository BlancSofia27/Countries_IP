const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

sequelize.define('Activity',{
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty:{
      type: DataTypes.ENUM("1","2","3","4","5"),
      allowNull: false,
    },
    duration:{
      type: DataTypes.INTEGER,
    },
    season:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {timestamps: false}
  );
};
