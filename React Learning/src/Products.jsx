import React from "react";
import groceryStore from "./groceryStore";
function Products(){
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {groceryStore.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products