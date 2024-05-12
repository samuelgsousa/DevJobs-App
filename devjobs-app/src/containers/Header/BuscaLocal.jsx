import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';


const CustomMenu = React.forwardRef(
  ({ children }) => {
    const [value, setValue] = useState('');

    return (
     <>
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Filtrar"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value) || child.props.children.toUpperCase().startsWith(value),
          )}
        </ul>
     </>
    );
  },
);


const BuscaLocal = () =>{
    return(
        <>
  <DropdownButton title="Busca por Local">
    
    <Dropdown.Menu as={CustomMenu}>
      <Dropdown.Item eventKey="1" active>São paulo</Dropdown.Item>
      <Dropdown.Item eventKey="2">Rio de Janeiro</Dropdown.Item>
      <Dropdown.Item eventKey="3">Santa Catarina</Dropdown.Item>
      <Dropdown.Item eventKey="4">Curitiba</Dropdown.Item>
    </Dropdown.Menu>
  </DropdownButton>

        </>
    )
}

export default BuscaLocal