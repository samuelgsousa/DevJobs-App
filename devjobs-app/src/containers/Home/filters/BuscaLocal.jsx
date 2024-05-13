import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';

const CustomMenu = React.forwardRef(({ children }) => {
    const [value, setValue] = useState('');


    return (
     <>
        <Form.Control autoFocus className="mx-3 my-2 w-auto" placeholder="Filtrar" onChange={(e) => setValue(e.target.value)} value={value} />

        <ul className="list-unstyled">
        {React.Children.toArray(children)}
        </ul>
     </>
    )
  }
)


const BuscaLocal = ({ locais }) =>{

  const locaisFiltrados = [...new Set(locais)]
  //console.log(locaisFiltrados)

  //depois melhorar a questão do local, pois até o menor espaço pode fazer com que o valor fique duplicado

    return(
        <>

        
  <DropdownButton title="Busca por Local">
    <Dropdown.Menu as={CustomMenu}>
      
    {
    locaisFiltrados.map((localidade, index) => (
       
        <Dropdown.Item key={index} eventKey={index}>{localidade.localidade}</Dropdown.Item>))
}
      </Dropdown.Menu>
  </DropdownButton>

        </>
    )
}

export default BuscaLocal