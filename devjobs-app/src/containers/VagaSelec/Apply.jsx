import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { format, setWeek } from 'date-fns'
import Button from 'react-bootstrap/Button'
import ListaRequisitos from '../Home/ListaRequisitos'
import "./Apply.css"
import { useParams } from 'react-router-dom';

const Apply = () => {

const {id} = useParams()

    const [vaga, setVaga] = useState() 


    const buscarVaga = async (id) =>{
        try{
            const response = await axios.get(`http://localhost:3000/vagas_dev/${id}`)
            setVaga(response.data)
            
        }catch(error){
            console.error('Erro ao buscar vaga:', error)
        }
    }

useEffect(() =>{
    buscarVaga(id)
}, [])

    return(
        <>
        {vaga && (
    <>
            <div class="title">
               <img src="https://via.placeholder.com/120" alt="" /> 

               <div className="website">
                   <h1>{vaga.nome_empresa}</h1>
                   <h2> <a href="https://portifolio-seven-wine.vercel.app/content/index.html" target='_blank'>{vaga.nome_empresa}.com</a> </h2>
               </div>

            </div>
            
            <article>
                <div className="cabecalho_vaga">
                    <div>
                        <h2 id="data">{format(new Date(vaga.data_pub), 'dd-MM-yyyy')}</h2>
                        <h1>{vaga.cargo}</h1>
                        <h2 id="local">{vaga.localidade}</h2>
                    </div>

                    <Button size="sm">Aplicar para a vaga</Button>
                </div>


                <p>{vaga.descricao}</p>
                <ListaRequisitos key={id} id={id}/>
            </article> 
    </>
        )}
        </>
    )
    
}

export default Apply