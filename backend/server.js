import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();


//express usar json ler json
app.use(express.json())

const users = []
/*
    1. tipo de rota/ metodo 
    2. endereço
*/



//rota para criar
app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.status(201).send('ok, os dados chegaram')
})

//rota para mostrar
app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})


/*
        1. Criar user
        2. Listar tds users
        3. Editar um user
        4. Deletar um user
*/

app.listen(8080)