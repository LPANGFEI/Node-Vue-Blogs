// 引入validator 验证用户信息
const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validatorEducation(data) {
    let errors = {};

    data.school = !isEmpty(data.school) ? data.school : '';
    data.degree = !isEmpty(data.degree) ? data.degree : '';
    data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
    data.form = !isEmpty(data.form) ? data.form : '';



    if (validator.isEmpty(data.school)) {
        errors.school = 'school不能为空！';
    }

    if (validator.isEmpty(data.degree)) {
        errors.degree = 'degree不能为空！';
    }

    if (validator.isEmpty(data.fieldofstudy)) {
        errors.fieldofstudy = 'fieldofstudy不能为空！';
    }

    if (validator.isEmpty(data.form)) {
        errors.form = 'form不能为空！';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
