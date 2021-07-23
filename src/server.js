const express = require("express") //for the routes
const morgan = require("morgan") // for the middleware logging

const app = express()

/* SETUP MIDDLEWARE */

app.use(morgan("dev"))
app.use(express.json())

/* SETUP ROUTES */

const hamburgerRouter = require("./resources/hamburgers/router.js")
const ordersRouter = require("./resources/orders/router.js")

app.use("/hamburgers", hamburgerRouter)

app.use("/orders", ordersRouter)

/* START SERVER */

const port = 3333
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`)
})
