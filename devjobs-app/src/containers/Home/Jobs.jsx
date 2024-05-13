import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { format, setWeek } from 'date-fns'
import Card from 'react-bootstrap/Card'
import ListaRequisitos from './ListaRequisitos'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import { Link } from 'react-router-dom';

const Jobs = ({ searchQuery }) => {


const [vagas, setVagas] = useState([])
const [open, setOpen] = useState([false])


    const fetchVagas = async () =>{
        try{
            const response = await axios.get('http://localhost:3000/')
            setVagas(response.data)
        }
        catch(error){
            console.error('Erro ao buscar vagas:', error)
        }
    }

useEffect(() => {


    fetchVagas() 
}, [])


const toggleText = (index) => {
    const newOpen = [...open]; // Cria uma cópia do array de estados
    newOpen[index] = !newOpen[index]; // Altera o estado do texto no índice especificado
    setOpen(newOpen); // Atualiza o estado com o novo array
}



    return(
        <>
        
       
             {
                /* filtro. por enquanto está só filtrando por nome da empresa. Alterar para filtrar por outros dados*/
             vagas.filter((vaga) => {
                return searchQuery.toLowerCase() === '' ? vaga : vaga.nome_empresa.toLowerCase().includes(searchQuery.toLowerCase()) || vaga.cargo.toLowerCase().includes(searchQuery.toLowerCase())
             }).map((vaga, index) => (

               

    <Card style={{ width: '22rem', minheight: '18rem'}} key={index}>
        <Card.Body class="indv_vag">
                <Card.Title> <img src="https://via.placeholder.com/50" alt="" /> {vaga.nome_empresa}</Card.Title>
                <Card.Title> {vaga.cargo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{format(new Date(vaga.data_pub), 'dd-MM-yyyy')} - {vaga.localidade}</Card.Subtitle>
            <Card.Text>
                {vaga.tipo} 
            </Card.Text> 
            
            <Collapse in={open[index]} id={`vagaNum${index}`}>
                <Card.Text> 
                    {vaga.descricao}
                    <ListaRequisitos key={index} id={index + 1}/>
                </Card.Text> 
            </Collapse>

            <div className="botoes">
                
                <Button onClick={() => toggleText(index)} aria-controls="ver-mais" aria-expanded={open}>V</Button>
                
               <Button><Link to={`/apply/${vaga.id}`}>Aplicar para vaga</Link></Button>
                                   
            </div>

            
        </Card.Body>
    </Card>
                
                
             ))}
                
                
             

                
        </>
    )
}

export default Jobs