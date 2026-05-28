import { articles, journalists } from "../models/data.js";

export const getAllJournalist = (req, res) => {
    res.status(200).json(journalists)
}

export const getJournalistByID = (req, res) => {
    const jID = parseInt(req.params.id)
    const journalist = journalists.find( j => j.id === jID)
    if(!journalist) return res.status(404).json({error : "Jounalist not founded"})
    
    res.status(200).json(journalist)
}

export const createJournalist = (req, res) => {
    const {name, email} = req.body

    if(!name || !email) return res.status(404).json({error: "Name and email required"})
    const newJournalist = {
        id: journalists.length + 1,
        "name": name,
        "email": email
    }
    journalists.push(newJournalist)
    res.status(201).json(newJournalist)
}

export const updateJournalistByID = (req, res) => {
    const jID = parseInt(req.params.id)
    const {name, email} = req.body
    const journalist = journalists.find( j => j.id === jID)

    if(!journalist) return res.status(404).json({error : "Journalist not founded"})
    if (name) journalist.name = name
    if (email) journalist.email = email
    res.status(200).json(journalist)
}

export const deleteJournalistByID = (req, res) => {
    const jID = parseInt(req.params.id)
    const index = journalists.findIndex( j => j.id === jID)

    if(index === -1) return res.status(404).json({error: "Journalist not founded"})
    
    journalists.splice(index, 1)
    res.status(200).send()
}

export const articleBySpecificJournalistID = (req, res) => {
    const journalistID = parseInt(req.params.id)

    const article = articles.filter( a => a.journalistId === journalistID)
    if(!article) return res.status(200).json({error: "Article by specific journalist is not founded"})
    
    res.status(200).json(article)
}


