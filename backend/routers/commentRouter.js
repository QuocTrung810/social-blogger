const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.get('/:id', commentController.getCommentsByPostId);
router.post('/:id', verifyToken, commentController.addCommentByPostId);

module.exports = router;
