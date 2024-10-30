const express = require ('express')
const postsController = require('./controllers/postcontroller.js')
const app = express()
const port = 3000
const host = 'http://127.0.0.1'



app.listen(port, ()=>{
    console.log (`Exemple app listening on port ${host}:${port}`)
})

app.get('/', (req, res) =>{
    res.send ('<h1>Benvenuto nel mio blog!</h1>')
})


/*const posts = [{
    titolo: 'Funzioni Esecutive',
    contenuto: 'cosa sono le funzioni esecutive',
    immagini: 'https://unsplash.com/it/foto/ramo-dalbero-marrone-coperto-di-neve-bianca-h5fsy4E4FMY?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash' ,

    tags : ['psicologia', 'neuropsicologia', 'attenzione', 'funzioni esecutive']
}, {
    titolo: 'Funzioni Esecutive',
    contenuto: 'cosa sono le funzioni esecutive',
    immagini: 'https://unsplash.com/it/foto/ramo-dalbero-marrone-coperto-di-neve-bianca-h5fsy4E4FMY?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash' ,

    tags : ['psicologia', 'neuropsicologia', 'attenzione', 'funzioni esecutive']
},{
    titolo: 'Funzioni Esecutive',
    contenuto: 'cosa sono le funzioni esecutive',
    immagini: 'https://unsplash.com/it/foto/ramo-dalbero-marrone-coperto-di-neve-bianca-h5fsy4E4FMY?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash' ,

    tags : ['psicologia', 'neuropsicologia', 'attenzione', 'funzioni esecutive']
}, {
    titolo: 'Funzioni Esecutive',
    contenuto: 'cosa sono le funzioni esecutive',
    immagini: 'https://unsplash.com/it/foto/ramo-dalbero-marrone-coperto-di-neve-bianca-h5fsy4E4FMY?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash' ,

    tags : ['psicologia', 'neuropsicologia', 'attenzione', 'funzioni esecutive']
},{
    titolo: 'Funzioni Esecutive',
    contenuto: 'cosa sono le funzioni esecutive',
    immagini: 'https://unsplash.com/it/foto/ramo-dalbero-marrone-coperto-di-neve-bianca-h5fsy4E4FMY?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash' ,

    tags : ['psicologia', 'neuropsicologia', 'attenzione', 'funzioni esecutive']
}]

app.get('/posts', (req, res)=>{

    res.json({
        data: posts,
        count: posts.length
    })
})*/
app.get('/posts', postsController.index)
   
