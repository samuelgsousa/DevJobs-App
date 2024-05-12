import express from 'express'
import cors from 'cors'
import mysql from 'mysql'


const app = express();

// Adicionar middlewares
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'samuel',
  password: 'Prerigo42@',
  database: 'vagas_dev'
})

const buscarVaga = (id) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM vagas WHERE id = ?`
    connection.query(query, [id], (error, results) => {

      if (error){
        console.error('Erro ao buscar vaga por ID: ', error)
        return reject(error)
      }
      if(results.length === 0) return resolve(null)
      
      resolve(results[0])
      console.log(results[0])

    })
  })
}


const buscarVagasAll = () => {
  return new Promise((resolve, reject)=>{
    const query = `SELECT * FROM vagas`
    connection.query(query, (error, results) =>{

      if(error){
        console.error('Erro ao buscar vagas', error)
        return reject(error)
      }
      if(results.length === 0) return resolve([])
  
        resolve(results)
    })

  
})
}

const buscarRequisitos = (id) =>{
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM requisitos WHERE vaga_id = ?;`
    connection.query(query, [id], (error, results) => {
      if (error){
        console.error('Erro ao buscar requisitos por ID: ', error)
        return reject(error)
      }

        resolve(results)
    
    })
  })
}

//Rota para buscar os requisitos

app.get('/requisitos/:id', async (req, res) => {
  
  const id = req.params.id
  console.log(id)

  try{
    const requisitos = await buscarRequisitos(id)
   
    
    if(!requisitos) return res.json('Nenhum')
      
    res.json(requisitos)

  }
  catch(error){
    console.error('Erro ao buscar requisitos', error)
    res.status(500).json({error: 'Erro interno do servidor'})
  }

})


// Rota para buscar todas as vagas
app.get('/', async (req, res) => {

  try{
    const allVagas = await buscarVagasAll()

    if(!allVagas) return res.status(404).json({error: 'Nenhuma vaga encontrada'})
    res.json(allVagas)
  }
  catch(error){
    console.error('Erro ao buscar vagas', error)
    res.status(500).json({error: 'Erro interno do servidor'})
  }

})

// Rota para buscar uma vaga específica
app.get('/vagas_dev/:id', async (req, res) => {

  const {id} = req.params
 

  try{
    const vaga = await buscarVaga(id)

    if(!vaga) return res.status(404).json({error: 'Vaga não encontrada'})
    
    res.json(vaga)
  }
  catch(error){
    console.error('Erro ao buscar vaga por ID:', error)
    res.status(500).json({error: 'Erro interno do servidor'})
  }

  // Lógica para buscar e enviar uma vaga específica
})

// Rota para adicionar uma nova vaga
app.post('/vagas_dev', (req, res) => {
  // Lógica para adicionar uma nova vaga
})

// Rota para atualizar uma vaga existente
app.put('/vagas_dev/:id', (req, res) => {
  // Lógica para atualizar uma vaga existente
})

// Rota para deletar uma vaga existente
app.delete('/vagas_dev/:id', (req, res) => {
  // Lógica para deletar uma vaga existente
})

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
})

