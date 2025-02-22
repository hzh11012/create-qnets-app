const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        logging: false,
        timezone: '+08:00',
        define: {
            timestamps: true,
            paranoid: false,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            // 把驼峰命名转换为下划线
            underscored: true
        }
    }
);

// 创建模型
sequelize.sync({force: false});

sequelize
    .authenticate()
    .then(res => {
        console.log('已成功连接到MySQL');
    })
    .catch(err => {
        console.error('无法连接到MySQL:', err);
    });

module.exports = {
    sequelize
};