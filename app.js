const express = require ('express')
const app = express ()
const port = 3000
const host = 'http://127.0.0.1'

app.get('/', (req, res) =>{
    res.send ('Benvenuto nel mio blog!')
})

app.listen(port, ()=>{
    console.log (`Exemple app listening on port ${port}`)
})
