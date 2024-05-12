import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import BuscaLocal from './BuscaLocal';
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'


{/*Barra de pesquisa*/}

const Search = ({onSearch}) =>{

  const [searchText, setSearchText] = useState('')
  
  console.log(searchText)

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
          <Form.Control id="busca" placeholder="Filtrar por título, empresa, especialidade... " aria-label="Busca" aria-describedby="basic-addon1" onChange={handleChange}/> {/* barra de busca*/}
        </Navbar.Brand>

        <Navbar.Brand>
        
          <BuscaLocal id="local"/> {/*componente de busca por local*/}

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