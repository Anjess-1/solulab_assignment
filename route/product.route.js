module.exports = app => {
    const product = require('../controller/product.controller')

    app.post("/createProduct", product.createProduct)

    app.get("/readAllProducts", product.readAllProducts)

    app.get("/readProductById/:productId", product.readProductById)

    app.put("/updateProductById/:productId", product.updateProductById)

    app.delete("/deleteProductById/:productId", product.deleteProductById)
}