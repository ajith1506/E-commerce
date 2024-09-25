const express = require("express");

const {
  getAllOrderOfAllUsers,
  getOrdersDetailsForAdmin,
  updateOrderStatus,
} = require("../../controllers/admin/order-controller");

const router = express.Router();

router.get("/get", getAllOrderOfAllUsers);
router.get("/details/:id", getOrdersDetailsForAdmin);
router.put("/update/:id", updateOrderStatus);

module.exports = router;
