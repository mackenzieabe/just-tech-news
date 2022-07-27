const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

// create our Post model (define post model:)
class Post extends Model {}

// create fields/columns for Post model
Post.init(//post schema
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      user_id: {//user id is foreign key
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'//primary key
        }
      }
    },
    {//In the second parameter of the init method, we configure the metadata, including the naming conventions.
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );

  module.exports = Post;