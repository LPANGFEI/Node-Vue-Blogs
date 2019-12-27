// 引入validator 验证用户信息
const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validatorRegister(data) {
    let errors = {};

    // 确保返回的数据为字符串
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    if (validator.isEmpty(data.name)) {
        errors.name = '用户名不能为空！';
    }

    if (!validator.isLength(data.name, {
            min: 2,
            max: 30
        })) {
        errors.name = '用户名长度不能小于2位且不能大于30位！';
    }

    if (!validator.isEmail(data.email)) {
        errors.email = '邮箱不合法！';
    }

    if (validator.isEmpty(data.email)) {
        errors.email = '邮箱不能为空！';
    }

    if (validator.isEmpty(data.password)) {
        errors.password = '密码不能为空！';
    }

    if (!validator.isLength(data.password, {
            min: 6,
            max: 16
        })) {
        errors.password = '密码长度不能小于6位且不能大于16位！';
    }

    if (validator.isEmpty(data.password2)) {
        errors.password2 = '请确认密码！';
    }

    if (!validator.equals(data.password, data.password2)) {
        errors.password2 = '两次密码不一致！';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
