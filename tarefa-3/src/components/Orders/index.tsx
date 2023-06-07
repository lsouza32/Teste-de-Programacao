import { useEffect, useState } from "react";


interface ClientProductsProps {
    names: string[];
    products: string[];
  }

export function Orders({ names, products }:ClientProductsProps){

    const [clientProducts, setClientProducts] = useState<{ name: string, selectedProducts: string[] }[]>([]);

    const handleProductSelection = (clientName: string, selectedProducts: string[]) => {
        setClientProducts(prevClientProducts => {
            return prevClientProducts.map(clientProduct => {
                if (clientProduct.name === clientName) {
                return { ...clientProduct, selectedProducts: selectedProducts };
                }
                return clientProduct;
            });
        });
    };

    return (
        <div>
            <h3>Clientes:</h3>
            {names.map((clientName, index) => (
                <div key={index}>
                <h3>{clientName}</h3>
                {products.map((product, index) => (
                    <label key={index}>
                    <input
                        type="checkbox"
                        value={product}
                        onChange={(event) => handleProductSelection(clientName, event.target.checked)}
                    />
                    {product}
                    </label>
                ))}
                </div>
            ))}
        </div>
    );
}