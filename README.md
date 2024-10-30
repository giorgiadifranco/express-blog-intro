# express-blog-intro


## Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.


1. Creiamo il progetto base con una rotta / che ritorna un h1 con scritto <h1> Benvenuto nel mio blog! <h1>
    a.  creazione file js
    b. installazione d node js 
    c. installazione di express
    d. avviare con run start 


2. Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
    a. creazione file js dove ci sarà un array di oggetti
    b. creare cartella controller> file js controller --> funzione index per richiamare array di oggetti


3. Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.


4. La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )

5. Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.



## N.B. : Testare nel browser.

------------------------------------------------------------------------------------------------------------------------------------------------------

## Bonus
Spostiamo l’array dei post in un file separato da importare poi dentro il controller
Creare una nuova rotta con cui stampare la lista in html come ul
Create una pagina statica html da cui far partire una chiamata ajax per consumare il vostro enpoint json.