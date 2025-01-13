const {sequelize} = require('@core/db');
const {Model, DataTypes} = require('sequelize');
const {formatDate} = require('@core/utils');

/**
 * @title 用户模型
 */
class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            comment: '用户ID'
        },
        nickname: {
            type: DataTypes.STRING(25),
            allowNull: false,
            comment: '用户昵称'
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: '创建时间',
            get() {
                return formatDate(this.getDataValue('created_at'));
            }
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: '更新时间',
            get() {
                return formatDate(this.getDataValue('updated_at'));
            }
        }
    },
    {
        sequelize,
        modelName: 'user',
        tableName: 'user'
    }
);

module.exports = {
    User
};
