import { useState } from "react";
import { Product } from "./components/Product";
import type { IProduct } from "./types/Product";

function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      name: "Producto N1",
      price: 100,
      stock: 10,
    },
    {
      id: 2,
      name: "Producto N2",
      price: 200,
      stock: 20,
    },
  ]);

  const addProduct = () => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: "Producto N" + (products.length + 1),
        price: Math.floor(Math.random() * 100),
        stock: Math.floor(Math.random() * 100),
      },
    ]);
  };

  return (
    <>
      <div className="app">ts-react-learn</div>
      {products.map((prod) => (
        <Product key={prod.id} product={prod} />
      ))}
      <button onClick={addProduct}>Add Product</button>
    </>
  );
}

export default App;
