import { articles,categories } from "../models/data.js";

export const getAllCategory = (req,res) => {
    res.json(categories)
}

export const getCategoryByID = (req, res) => {
    const catID = parseInt(req.params.id)
    const category = categories.find( c => c.id === catID)

    if(!category) return res.status(404).json({error: "Category not founded"})
    res.status(200).json(category)
}

export const createCategory = (req, res) => {
    const {name} = req.body
    if(!name) return res.status(404).json({error: "name of the category is require"})
    
    const newCategory = {
        id: categories.length + 1,
        "name": name
    }
    categories.push(newCategory)
    res.status(201).json(newCategory)
}

export const updateCategoryByID = (req, res) => {
    const catID =parseInt(req.params.id)
    const {name} = req.body
    const category = categories.find( c => c.id === catID)
    if(!category) return res.status(404).json({error: "category not found"})
    if (name) category.name = name
    res.status(200).json(category) 
}

export const deleteCategoryByID = (req,res) => {
    const catID = parseInt(req.params.id)
    
    const index = categories.findIndex( c => c.id === catID)
    if( index === -1) return res.status(404).json({error: "Category not founded"})
    
    categories.splice(index, 1)
    res.status(200).send()
}

export const articleBySpecificCategoryID = (req, res) => {
    const categoryID = parseInt(req.params.id)

    const article = articles.filter( a => a.categoryId === categoryID )
    if(!article) return res.status(200).json({error: "Article by specific category is not founded"})
    
    res.status(200).json(article)
}