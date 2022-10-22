const router = require('express').Router();
const {Comment} = require('../../models');
const withAuth = require('../../utils/auth');
// GET REQUESTS
// get all comments
router.get('/', (req, res)=> {
    Comment.findAll()
    .then(commentData => res.json(commentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// POST REQUESTS
// post a comment
router.post('/', withAuth, (req, res)=> {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
    .then(commentData => res.json(commentData))
    .catch(err => {
        res.status(400).json(err)
    });
});
// DELETE REQUESTS
// user wants to delete a comment
router.delete('/:id', withAuth, (req, res)=> {
    Comment.destroy({
        where: { id: req.params.id}
    })
    .then(commentData => {
        if (!commentData) {
            res.status(404).json({message: ' no comment exists with that id'});
        return;
        }
        res.json(commentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
module.exports = router;