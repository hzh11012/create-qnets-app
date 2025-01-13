const Zod = require('zod');
const {validate} = require('@validators/common');

const UserCreateValidator = parameter => {
    const schema = Zod.object({
        nickname: Zod.string({
            required_error: 'nickname 不能为空',
            invalid_type_error: 'nickname 类型错误'
        })
            .max(25, {
                message: 'nickname 长度不能超过25'
            })
            .min(1, 'nickname 不能为空')
    });
    return validate(schema, parameter);
};

module.exports = {
    UserCreateValidator
};
