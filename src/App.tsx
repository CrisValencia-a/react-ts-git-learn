import { useState } from "react";
import { ProductList } from "./components/ProductList";
import type { IProduct } from "./types/Product";

function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      name: "Producto N1",
      price: 100,
      stock: 10,
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
      <ProductList products={products} addProduct={addProduct} />
    </>
  );
}

export default App;
