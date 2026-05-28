import { Router } from "express";
import * as articleController from "../controllers/articleController.js"
import * as categoryController from "../controllers/categoryController.js"
import * as journalistController from "../controllers/journalistController.js"

const router = Router() 
// 1. Articles Resource 
// • GET /articles — Get all articles 
// • GET /articles/:id — Get a single article by ID 
// • POST /articles — Create a new article 
// • PUT /articles/:id — Update an existing article 
// • DELETE /articles/:id — Delete an article 

router.get('/articles', articleController.getAllArticle)
router.get('/articles/:id', articleController.getArticleByID)
router.post('/articles', articleController.createArticle)
router.put('/articles/:id', articleController.updateArticleID)
router.delete('/articles/:id', articleController.deleteArticleByID)


// 2. Journalists Resource 
// • GET /journalists — Get all journalists 
// • GET /journalists/:id — Get a single journalist 
// • POST /journalists — Create a new journalist 
// • PUT /journalists/:id — Update journalist info 
// • DELETE /journalists/:id — Delete a journalist 
// • GET /journalists/:id/articles — Article by specific journalist 

router.get('/journalists', journalistController.getAllJournalist)
router.get('/journalists/:id', journalistController.getJournalistByID)
router.post('/journalists', journalistController.createJournalist)
router.put('/journalists/:id', journalistController.updateJournalistByID)
router.delete('/journalists/:id', journalistController.deleteJournalistByID)
router.get('/journalists/:id/articles', journalistController.articleBySpecificJournalistID)

// 3. Categories Resource 
// • GET /categories — Get all categories 
// • GET /categories/:id — Get a single category 
// • POST /categories — Add a new category 
// • PUT /categories/:id — Update a category 
// • DELETE /categories/:id — Delete a category 
// • GET /categories/:id/articles — Articles from a categories 

router.get('/categories', categoryController.getAllCategory)
router.get('/categories/:id', categoryController.getCategoryByID)
router.post('/categories', categoryController.createCategory)
router.put('/categories/:id', categoryController.updateCategoryByID)
router.delete('/categories/:id', categoryController.deleteCategoryByID)
router.get('/categories/:id/articles', categoryController.articleBySpecificCategoryID)

export default router;