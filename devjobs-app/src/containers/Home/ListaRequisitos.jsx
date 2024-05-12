import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaRequisitos = ({id}) => {
    
    const [requisitos, setRequisitos] = useState([])

    useEffect(() => {

        const fetchRequisitos = async(id) => {
          try{ 
              const response = await axios.get(`http://localhost:3000/requisitos/${id}`)
              setRequisitos(response.data)      
              
          } catch(error){
              console.error('Erro ao buscar requisitos:', error)
              throw error;
          }}
        
          fetchRequisitos(id)

        }, [id])
    
          return(
            <ul>
            {
                requisitos.length === 0 ? (
                    <li>Nenhum</li>
                  ) : (

            requisitos.map((requisito, index) => (
                <li key={index}>{requisito.requisito}</li>
            )))
            }
            </ul>
          )
}

export default ListaRequisitos

