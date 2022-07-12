const express = require('express')
const app = express()
const router =require('./router')
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({
  extended: true
}))

app.use('/api', router)


app.listen(3300, () => {
  console.log('服务器运行在3300端口...')
})