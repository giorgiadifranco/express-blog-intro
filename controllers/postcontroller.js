const posts = require ('../data/posts');

function index(){

    resizeBy.json({
        data: posts,
        count: posts.length
    })
}

module.exports = {
    index
}