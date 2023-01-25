module.exports = app => {
    const category = require('../controller/category.controller')

    app.post("/createCategory", category.createCategory)

    app.get("/readAllCategories", category.readAllCategories)

    app.get("/readCategoryById/:categoryId", category.readCategoryById)

    app.put("/updateCategoryById/:categoryId", category.updateCategoryById)

    app.delete("/deleteCategoryById/:categoryId", category.deleteCategoryById)

}