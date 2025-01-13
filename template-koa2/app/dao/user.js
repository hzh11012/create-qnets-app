const {User} = require('@models/user');
const WhereFilter = require('@lib/where-filter');

class UserDao {
    /**
     * @title 用户创建
     * @param {string} nickname 昵称
     */
    static async create(params) {
        const {nickname} = params;

        const where = new WhereFilter()
            .setWhere('nickname', nickname)
            .getFilter();

        try {
            const user = await User.findOne({where});
            if (user) throw new Existing('用户已存在');
            await User.create({nickname});
            return [null, null];
        } catch (err) {
            return [err, null];
        }
    }
}

module.exports = {
    UserDao
};
