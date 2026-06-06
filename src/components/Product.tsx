import type { IProduct } from "../types/Product";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <>
      <h1>Producto</h1>
      <h2>{product.name}</h2>
      <p>Precio: {product.price}</p>
      <p>Stock: {product.stock}</p>
    </>
  );
};
