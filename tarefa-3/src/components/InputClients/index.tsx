import { useEffect, useState } from "react";

import { Container, Form } from "./styles";

export function InputClients(){


    const [name, setName] = useState('');
    const [nameList, setNameList] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleAddName = () => {
        if (name.trim() !== '') {
        setNameList((prevNameList) => [...prevNameList, name]);
        setName('');
        }
    };


    return(
        <Container>
            
            <Form >
                <h3>Cadastro de clientes</h3>
                <input type="text" 
                    placeholder="Digite um cliente por vez" 
                    onChange={handleInputChange}/>    
                <button onClick={handleAddName}>Add cliente</button>            
            </Form>

            

        </Container>
    )
}