import type { IProduct } from "../types/Product";
import { Product } from "./Product";

interface ProductListProps {
  products: IProduct[];
  addProduct: () => void;
}

export const ProductList = ({ products, addProduct }: ProductListProps) => {
  return (
    <>
      <div>Lista de productos</div>
      {products.map((prod) => (
        <Product key={prod.id} product={prod} />
      ))}
      <button onClick={addProduct}>Add Product</button>
    </>
  );
};
