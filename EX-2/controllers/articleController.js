import * as data from "../models/data.js"

export const getAllArticle = (req, res) => {
    res.json(data.articles)
}

export const getArticleByID = (req,res) => {
    const articleID = parseInt(req.params.id)
    const article = data.articles.find( a => a.id === articleID)
    if (!articleID) return res.status(404).json({error : "Article not found!"})
    res.status(200).json(article)

}

export const createArticle = (req, res) => {
    const {title, content} = req.body
    if (!title || !content) return res.status(400).json({error: "Title and content required"})
    
    const newArticle = {
        id: data.articles.length + 1,
        "title": title,
        "content": content,
        "journalistId" : data.articles.journalistId.length + 1,
        "categoryId" : data.articles.categoryId.length + 1 
    }
    data.articles.push(newArticle)
    res.status(201).json(newArticle)
}

export const updateArticleID = (req, res) => {
    const articleID =parseInt(req.params.id)
    const {title, content} = req.body   

    const article = data.articles.find( a => a.id === articleID)
    if(!article) return res.status(404).json({error : "Article ID not founded"})
    
    if(title) article.title = title
    if(content) article.content = content
    res.status(200).json(article)
}

export const deleteArticleByID = (req, res) => {
    const articleID = parseInt(req.params.id)
    const index = data.articles.findIndex( a => a.id === articleID)
    if(index === -1) return res.status(404).json({error : "Article not found"})
    
    data.articles.splice(index, 1)
    res.status(200).send('Deleted')
}
