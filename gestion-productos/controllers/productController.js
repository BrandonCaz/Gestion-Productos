const Product = require("../models/Product");

// Obtener todos los productos
const getProducts = async (req, res) => {
  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    });

  }
};

// Obtener producto por ID
const getProductById = async (req, res) => {
  try {

    const product = await Product.findById(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        mensaje: "Producto no encontrado"
      });
    }

    res.json(product);

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    });

  }
};

// Crear producto
const createProduct = async (req, res) => {
  try {

    const {
      nombre,
      descripcion,
      precio,
      stock
    } = req.body;

    const product = new Product({
      nombre,
      descripcion,
      precio,
      stock
    });

    await product.save();

    res.status(201).json(product);

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    });

  }
};

// Actualizar producto
const updateProduct = async (req, res) => {
  try {

    const product =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    if (!product) {
      return res.status(404).json({
        mensaje: "Producto no encontrado"
      });
    }

    res.json(product);

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    });

  }
};

// Eliminar producto
const deleteProduct = async (req, res) => {
  try {

    const product =
      await Product.findByIdAndDelete(
        req.params.id
      );

    if (!product) {
      return res.status(404).json({
        mensaje: "Producto no encontrado"
      });
    }

    res.json({
      mensaje: "Producto eliminado"
    });

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    });

  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
