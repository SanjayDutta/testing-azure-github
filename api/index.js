const express = require("express")
const app = express()
const router = express.Router()


router.use((req,res,next)=>{
  Object.setPrototypeOf(req,app.request)
  Object.setPrototypeOf(res,app.response)
  req.res = res
  res.req = req
  next()
})

const test = require("./test")
router.use("/test",test)

module.exports = {
  path:"/api",
  handler:router
}
