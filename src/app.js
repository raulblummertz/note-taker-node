import express from 'express'
import conexao from '../infra/conexao.js'


const app = express()

// ler body com json
app.use(express.json())


// rotas

app.get ('/notes', (req,res) =>{
  
    const sql = "Select * FROM notes;"
    conexao.query(sql, (error, result) => {
        if(error){
            res.status(404).json({'erro': "Dados não encontrados!"})
        }else{
            res.status(200).json(result)
        }
    })
})

app.get('/notes/:id', (req,res) => {

    const id = req.params.id
    const sql = "Select * FROM notes WHERE id=?;"
    conexao.query(sql, id, (error, result) => {
        const linha = result[0]
        if(error){
            res.status(404).json({'erro': "Dados não encontrados!"})
        }else{
            res.status(200).json(linha)
        }
    })
})

app.post('/notes', (req,res) => {
    const note = req.body
    const sql = "INSERT INTO notes SET ?;"
    conexao.query(sql, note, (error, result) => {
        const linha = result[0]
        if(error){
            res.status(404).json({'erro': "Dados não encontrados!"})
        }else{
            res.status(201).json(result)
        }
    })
})

app.delete('/notes/:id', (req,res) => {
    const id = req.params.id
    const sql = "DELETE FROM notes WHERE id=?;"
    conexao.query(sql, id, (error, result) => {
        
        if(error){
            res.status(404).json({'erro': "Dados não encontrados!"})
        }else{
            res.status(200).json(result)
        }
    })
})

app.put('/notes/:id', (req,res) => {
    const note = req.body
    const id = req.params.id
    const sql = "UPDATE notes SET ? WHERE id=?;"
    conexao.query(sql, [note, id], (error, result) => {
        const linha = result[0]
        if(error){
            res.status(404).json({'erro': "Dados não encontrados!"})
        }else{
            res.status(201).json(result)
        }
    })
})


export default app