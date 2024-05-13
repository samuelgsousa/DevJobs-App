import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { filtrar } from './filtrarFunction';


const BuscaLocal = ({ locais }) =>{


  const [listaFiltrada, setListaFiltrada] = useState([...new Set(locais)])

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    const novaLista = filtrar(locais, inputValue);
    setListaFiltrada(novaLista);
  }



  const [value, setValue] = useState('');
  

    return(
      
        <>

  <DropdownButton title="Busca por Local" onClick={handleInputChange} value=''>

  <Form.Control autoFocus className="mx-3 my-2 w-auto" placeholder="Filtrar" onChange={handleInputChange}
        value={value} />

    <Dropdown.Menu >
      
    {
    listaFiltrada.map((localidade, index) => (
       
        <Dropdown.Item key={index} eventKey={index}>{localidade.localidade}</Dropdown.Item>))
}
      </Dropdown.Menu>
  </DropdownButton>

        </>
    )
    
}



export default BuscaLocal