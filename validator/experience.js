// 引入validator 验证用户信息
const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validatorExperience(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.form = !isEmpty(data.form) ? data.form : '';


    if (validator.isEmpty(data.title)) {
        errors.title = 'title不能为空！';
    }

    if (validator.isEmpty(data.company)) {
        errors.company = 'company不能为空！';
    }

    if (validator.isEmpty(data.form)) {
        errors.form = 'form不能为空！';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
