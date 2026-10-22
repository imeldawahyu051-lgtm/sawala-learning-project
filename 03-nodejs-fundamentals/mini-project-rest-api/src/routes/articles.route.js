const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles.controller');

// Ngarahin URL ke fungsi di Controller
router.get('/', articlesController.getAllArticles);      // GET /api/articles
router.post('/', articlesController.createArticle);     // POST /api/articles
router.delete('/:id', articlesController.deleteArticle); // DELETE /api/articles/:id

module.exports = router;