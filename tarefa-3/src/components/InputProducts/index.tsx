import { useEffect, useState } from "react";

import { Container, Form } from './styles';


export function InputProducts() {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [productList, setProductList] = useState<{ name: string, price: string, quantity: string }[]>([]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleAddProduct = () => {
    if (name.trim() !== '' && price.trim() !== '' && quantity.trim() !== '') {
      const newProduct = {
        name: name,
        price: price,
        quantity: quantity
      };
      setProductList(prevProductList => [...prevProductList, newProduct]);
      setName('');
      setPrice('');
      setQuantity('');
    }
  };


  return (
    <Container>      
      <Form>
      <h3>Cadastro de produtos</h3>
      <input type="text" placeholder="Nome do produto" value={name} onChange={handleNameChange} />
      <input type="text" placeholder="Preço" value={price} onChange={handlePriceChange} />
      <input type="text" placeholder="Quantidade" value={quantity} onChange={handleQuantityChange} />
      <button onClick={handleAddProduct}>Adicionar Produto</button>
      </Form>

    </Container>
  );
}
