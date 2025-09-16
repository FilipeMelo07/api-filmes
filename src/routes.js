import routes, { Router } from 'express'

const filmesRoutes = Router()

filmesRoutes.get('api/filmes', obterfilmes)

const filmes = [
    {
        id: 0,
        filme:  "pica pau"
    },
    {
        id: 1,
        filme:  "ben 10"
    }
]
function obterfilmes(req,res){
    return res.status(200).json(filmes)

}
export default filmesRoutes;