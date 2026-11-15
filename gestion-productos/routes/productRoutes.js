const express = require("express");

const router = express.Router();

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

const authMiddleware =
  require("../middleware/authMiddleware");

// Públicas
router.get("/", getProducts);
router.get("/:id", getProductById);

// Protegidas con JWT
router.post("/", authMiddleware, createProduct);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;