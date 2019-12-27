// 引入validator 验证用户信息
const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validatorProfile(data) {
    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';


    if (!validator.isLength(data.handle, {
            min: 2,
            max: 40
        })) {
        errors.handle = 'handle长度不能小于2位且不能大于40位！';
    }

    if (validator.isEmpty(data.handle)) {
        errors.handle = 'handle不能为空！';
    }

    if (validator.isEmpty(data.status)) {
        errors.status = 'status不能为空！';
    }

    if (validator.isEmpty(data.skills)) {
        errors.skills = 'skills不能为空！';
    }

    if (!isEmpty(data.website)) {
        if (!Validator.isURL(data.website)) {
            errors.website = "url不合法";
        }
    }

    if (!isEmpty(data.tengxunkt)) {
        if (!Validator.isURL(data.tengxunkt)) {
            errors.tengxunkt = "url不合法";
        }
    }

    if (!isEmpty(data.wangyikt)) {
        if (!Validator.isURL(data.wangyikt)) {
            errors.wangyikt = "url不合法";
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
