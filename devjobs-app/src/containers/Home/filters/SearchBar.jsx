import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import BuscaLocal from './BuscaLocal';
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

{/*Barra de pesquisa*/}

const Search = ({onSearch}) =>{

  const [locais, setLocais] = useState([])

  const fetchLocais = async () =>{
    try{
        const response = await axios.get('http://localhost:3000/locais')
        setLocais(response.data)
 
    }
    catch(error){
        console.error('Erro ao buscar locais', error)
    }

}

useEffect(() => {

fetchLocais() 

}, [])





  const [searchText, setSearchText] = useState('')
  
  const handleChange = (event) =>{
    const newText = event.target.value
    
    setSearchText(newText)

    onSearch(newText)
  }

    return(
<>
           
  <Navbar expand="lg" className="bg-body-tertiary">

    <Container>

        <Navbar.Brand>
          <Form.Control id="busca" placeholder="Filtrar por cargo ou nome da empresa " aria-label="Busca" aria-describedby="basic-addon1" onChange={handleChange}/> {/* barra de busca*/}
        </Navbar.Brand>

        <Navbar.Brand>
        
          <BuscaLocal id="local" locais={locais} /> {/*componente de busca por local*/}

        </Navbar.Brand>
       

        <Navbar.Brand>

          <FormCheck label="Apenas tempo Integral" id="periodo"/>

        </Navbar.Brand>

        <Navbar.Brand>
        
          <Button>Buscar</Button>
        
        </Navbar.Brand>
    </Container>

  </Navbar>
</>
    )
}




export default Search