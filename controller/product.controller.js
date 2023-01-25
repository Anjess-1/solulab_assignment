const productModel = require('../model/product.model')
const categoryModel = require('../model/category.model')

exports.createProduct = (req, res, next) => {
    try {
        const product = new productModel({
            productId: req.body.productId,
            productName: req.body.productName,
            qtyPerUnit: req.body.qtyPerUnit,
            unitPrice: req.body.unitPrice,
            unitInStock: req.body.unitInStock,
            discontinued: req.body.discontinued,
            categoryId: req.body.categoryId
        })
        product.save()
            .then(() => {
                console.log("product has created successfully")
                return res.status(200).json({
                    "code": 200,
                    "message": "Product Created Successfully"
                })
            })
            .catch((err) => {
                return res.status(500).json({
                    "code": 500,
                    "message": "some error occured",
                    "error": err
                })
            })
    } catch (error) {
        next(error)
    }
}

exports.readAllProducts = (req, res, next) => {
    try {
        productModel.find()
            .then((result) => {
                return res.status(200).json({
                    "code": 200,
                    "message": result
                })

            })
            .catch((err) => {
                return res.status(500).json({
                    "code": 500,
                    "message": "No product available",
                    "error": err
                })
            })
    } catch (error) {
        next(error)
    }
}

exports.readProductById = (req, res, next) => {
    try {
        productModel.findOne({
            productId: req.params.productId
        })
            .then((result) => {
                if (result) {
                    return res.status(200).json({
                        "code": 200,
                        "message": result
                    })
                }
                else {
                    return res.status(200).json({
                        "code": 200,
                        "message": "product not found"
                    })
                }
            })
            .catch((err) => {
                return res.status(500).json({
                    "code": 500,
                    "message": "some error occured",
                    "error": err
                })
            })
    } catch (error) {
        next(error)
    }
}

exports.updateProductById = (req, res, next) => {
    try {
        productModel.updateOne(
            {
                productId: req.params.productId
            },
            {
                $set: {
                    productName: req.body.productName,
                    qtyPerUnit: req.body.qtyPerUnit,
                    unitPrice: req.body.unitPrice,
                    unitInStock: req.body.unitInStock,
                    discontinued: req.body.discontinued,
                    categoryId: req.body.categoryId
                }
            }
        )
            .then((result) => {
                if (result && result.matchedCount == 1) {
                    return res.status(200).json({
                        "code": 200,
                        "message": "product has been updated"
                    })
                }
                else {
                    return res.status(200).json({
                        "code": 200,
                        "message": "productId not found"
                    })
                }
            })
            .catch((err) => {
                return res.status(500).send({
                    "code": 500,
                    "message": "some error occured"
                })
            })
    } catch (error) {

    }
}

exports.deleteProductById = (req, res, next) => {
    try {
        productModel.remove({
            productId: req.params.productId
        })
            .then((result) => {
                return res.status(200).json({
                    "code": 200,
                    "message": "product has been deleted"
                })
            })
            .catch((err) => {
                return res.status(500).json({
                    "code": 500,
                    "message": "some error occured",
                    "error": err
                })

            })
    } catch (error) {
        next(error)
    }
}