// 引入validator 验证用户信息
const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validatorPost(data) {
    let errors = {};

    data.text = !isEmpty(data.text) ? data.text : '';


    if (!validator.isLength(data.text, {
            min: 10,
            max: 300
        })) {
        errors.text = "评论不能少于10个字符且不能大于300个!";
    }

    if (validator.isEmpty(data.text)) {
        errors.text = "文本不能为空!";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}
