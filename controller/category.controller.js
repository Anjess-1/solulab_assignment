const categoryModel = require('../model/category.model')

exports.createCategory = (req, res, next) => {
    try {
        const category = new categoryModel({
            categoryId: req.body.categoryId,
            categoryName: req.body.categoryName
        })
        category.save()
            .then(() => {
                console.log("category has created successfully")
                return res.status(200).json({
                    "code": 200,
                    "message": "category Created Successfully"
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

exports.readAllCategories = (req, res, next) => {
    try {
        categoryModel.find()
            .then((result) => {
                return res.status(200).json({
                    "code": 200,
                    "message": result
                })
            })
            .catch((err) => {
                return res.status(500).json({
                    "code": 500,
                    "message": "No category available",
                    "error": err
                })
            })
    } catch (error) {
        next(error)
    }
}

exports.readCategoryById = (req, res, next) => {
    try {
        categoryModel.findOne({
            categoryId: req.params.categoryId
        })
            .then((result) => {
                if (result) {
                    return res.status(200).send({
                        "code": 200,
                        "message": result
                    })
                }
                else {
                    return res.status(200).send({
                        "code": 200,
                        "message": "no category found"
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

exports.updateCategoryById = (req, res, next) => {
    try {
        categoryModel.updateOne({
            categoryId: req.params.categoryId
        },
            {
                $set: {
                    categoryName: req.body.categoryName
                }
            }
        )
        .then((result) => {
            if(result && result.matchedCount == 1) {
                return res.status(200).send({
                    "code": 200,
                    "message": "category updated successfully"
                })
            }
            else {
                console.log("else", result)
                return res.status(200).send({
                    "code": 200,
                    "message": "No categoryId found"
                })
            }
        })
        .catch((err) => {
            return res.status(500).json({
                "code": 500,
                "message": "Some error occured"
            })
        })
    } catch (error) {
        next(error)
    }
}

exports.deleteCategoryById = (req, res, next) => {
    try {
        categoryModel.remove({
            categoryId: req.params.categoryId
        })
            .then((result) => {
                return res.status(200).json({
                    "code": 200,
                    "message": "category has been deleted"
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