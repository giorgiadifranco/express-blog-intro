const express = require ('express')
const postsController = require ('./controllers/postcontroller')
const app = express ()
const port = 3000
const host = 'http://127.0.0.1'

app.get('/', (req, res) =>{
    res.send ('<h1>Benvenuto nel mio blog!<h1>')
})

app.listen(port, ()=>{
    console.log (`Exemple app listening on port ${host}:${port}`)
})

app.get('/posts', postsController.index)
