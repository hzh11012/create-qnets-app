const Router = require('koa-router');
const {UserDao} = require('@dao/user');
const {Resolve} = require('@lib/helper');
const {UserCreateValidator} = require('@validators/user');
const res = new Resolve();

const router = new Router({
    prefix: '/api/user'
});

router.get('/create', async ctx => {
    const parameter = UserCreateValidator(ctx.request.body);

    const [err] = await UserDao.create({
        nickname: parameter.nickname
    });

    if (!err) {
        ctx.response.status = 200;
        ctx.body = res.success('创建用户成功');
    } else {
        ctx.body = res.fail(err);
    }
});

module.exports = router;
