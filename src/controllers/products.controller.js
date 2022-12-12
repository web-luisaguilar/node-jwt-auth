import Product from '../models/Product.js'

export const createProduct = async (req, res) => {
  console.log(req.body)

  const { name, category, price, imgURL } = req.body
  const newProduct = new Product({ name, category, price, imgURL })
  const productSaved = await newProduct.save()
  res.status(201).json(productSaved)
}
export const getProducts = async (req, res) => {
  const products = await Product.find()
  res.status(200).json(products)
}
export const getProductById = async (req, res) => {
  const productId = req.params.productId
  const product = await Product.findById(productId)
  res.status(200).json(product)
}
export const updateProductById = async (req, res) => {
  const productId = req.params.productId
  const { name, category, price, imgURL } = req.body
  const updateProduct = {
    name,
    category,
    price,
    imgURL,
  }
  const productUpdated = await Product.findByIdAndUpdate(
    productId,
    updateProduct
  )
  res.status(200).json(productUpdated)
}
export const deleteProductById = async (req, res) => {
  const productId = req.params.productId
  const deletedProduct = await Product.findByIdAndDelete(productId)
  res.status(204).json(deletedProduct)
}
