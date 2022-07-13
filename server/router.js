const express = require('express')
const router = express.Router()
const validator = require('validator')
const isEmpty = require('lodash/isEmpty')

// 如果发生错误，则返回错误信息；如果不发生错误，则返回true
const validatorInput = (data) => {
  // validator.isEmpty方法验证是否为空
  let errors = {}
  if (validator.isEmpty(data.username)) {
    errors.username = "用户名不能为空"
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "邮箱格式不符合"
  }
  if (validator.isEmpty(data.password)) {
    errors.username = "用户名不能为空"
  }
  // equals: 验证字符串是否相同
  if (!validator.equals(data.password, data.passWordConfirmation)) {
    errors.passWordConfirmation = "两次密码不相同"
  }

  return {
    // 如果 value 为空，那么返回true，否则返回 false
    isValid: isEmpty(errors),
    errors
  }
}

/**
 * isValid: false,
 * errors: {}
 * 
 * isValid: true,
 * errors: {
 *  username:"用户名不能为空"
 * }
 */

router.post('/register', (req, res) => {
  const { isValid, errors } = validatorInput(req.body)
  if (isValid) {
    // 失败
    res.send(errors)
  } else {
    // 成功
    res.send({
      msg: 'success'
    })
  }
  res.send({
    isValid,
    errors
  })
})

module.exports = router
