const express = require("express")

const ordersRouter = express.Router()

let orders = []
// {order_id : 1,
//    items: [
//       {hamburger_id: 1, quantity: 2},
//       {hamburger_id: 3, quantity: 1},
//       ],
//   status: "pending" or "served"
//   created_at: 1627020599070
//   }

ordersRouter.get("/", (req, res) => {
  let response = null
  if (orders) {
    response = { orders: orders, timestamp: Date.now() }
  } else {
    response = { msg: "These are not the orders you are looking for." }
  }
  res.json(response)
})

module.exports = ordersRouter
