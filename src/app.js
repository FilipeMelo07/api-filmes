import express from 'express';
import filmesRoutes from './routesfilmes.js'


const app = express()

app.use(express.json())
app.use(filmesRoutes)
app.listen(8000,ola)
function ola(){
    console.log("executando na porta 8000")
}