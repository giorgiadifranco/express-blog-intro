const posts = require ('../data/posts');


function index(req, res){

    res.json({
        data: posts,
        count: posts.length
    })
}

module.exports = {
    index
}