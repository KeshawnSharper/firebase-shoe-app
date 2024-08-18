let {
    scanDB,putDB
}
= require('./basicConfig')

const express = require('express');
const router = express.Router();
// router.get('/', async(req, res) =>{
//   console.log("users")
//     let items = await scanDB("Heir-feet-users")
//     res.status(200).json(items.total_items)
//   })
router.get('/:id', async (req, res) => {
    if (isNaN(req.params.id)) {
      res.status(500).json({"message":"Invalid User"})
    return
    }
    let userOrders = await scanDB("Heir-Feet-Orders",Number(req.params.id),"user_id")
   userOrders = userOrders.selected_items
  res.status(200).json(userOrders)
  })
 

  module.exports = router;
