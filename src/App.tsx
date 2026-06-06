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

  return (
    <>
      <div className="app">ts-react-learn</div>
      {products.map((prod) => (
        <Product key={prod.id} product={prod} />
      ))}
    </>
  );
}

export default App;
