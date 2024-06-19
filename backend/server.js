import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()

const app = express();
app.use(cors());

//express usar json ler json
app.use(express.json());




/*
    1. tipo de rota/ metodo 
    2. endereço
*/



//rota para criar
app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            telefone: req.body.telefone,
            comentario: req.body.comentario,
        }
    })

    res.status(201).send('ok, os dados chegaram')
})

//rota para mostrar
app.get('/usuarios', async (req, res) => {
    let users = [] 

    if (req.query){
        users = await prisma.user.findMany({
            where:{ 
                name: req.query.name,
                email: req.query.email,
                telefone: req.query.telefone,
                comentario: req.query.comentario,
            }
           
        })
    } else {
       users = await prisma.user.findMany()
    }
    res.status(200).json(users)

   
})

app.put('/usuarios/:id', async (req, res) => {
           
            await prisma.user.update({ 
                
                where:{
                    id: req.params.id,
                },

                data:{
                    email: req.body.email,
                    name: req.body.name,
                    telefone: req.body.telefone,
                    comentario: req.body.comentario,
                }
            })

    res.status(200).send('ok, os dados chegaram')
})

app.delete('/usuarios/:id', async (req, res) => {
           
    await prisma.user.delete({ 
        
        where:{
            id: req.params.id,
        },
    })

res.status(200).send('usuario deletado com sucesso')
})




/*
        1. Criar user
        2. Listar tds users
        3. Editar um user
        4. Deletar um user
*/

/* 

 */
app.listen(8080)