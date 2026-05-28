import {articles, categories, journalists} from "../models/data.js"

export const getAllArticle = (req, res) => {
    res.json(articles)
}

export const getArticleByID = (req,res) => {
    const articleID = parseInt(req.params.id)
    const article = articles.find( a => a.id === articleID)
    if (!articleID) return res.status(404).json({error : "Article not found!"})
    res.status(200).json(article)

}

export const createArticle = (req, res) => {
    const {title, content, journalistID, categoryID} = req.body
    if (!title || !content) return res.status(400).json({error: "Title and content required"})
    
    const newArticle = {
        id: articles.length + 1,
        "title": title,
        "content": content,
        "journalistId" : journalistID,
        "categoryId" : categoryID 
    }
    articles.push(newArticle)
    res.status(201).json(newArticle)
}

export const updateArticleID = (req, res) => {
    const articleID =parseInt(req.params.id)
    const {title, content,journalistID, categoryID} = req.body   

    const article = articles.find( a => a.id === articleID)
    if(!article) return res.status(404).json({error : "Article ID not founded"})
    
    if(title) article.title = title
    if(content) article.content = content
    if( journalistID === journalists.id ) article.journalistId = journalistID
    if( categoryID === categories.id ) article.categoryId = categoryID

    res.status(200).json(article)
}

export const deleteArticleByID = (req, res) => {
    const articleID = parseInt(req.params.id)
    const index = articles.findIndex( a => a.id === articleID)
    if(index === -1) return res.status(404).json({error : "Article not found"})
    
    articles.splice(index, 1)
    res.status(200).send('Deleted')
}
