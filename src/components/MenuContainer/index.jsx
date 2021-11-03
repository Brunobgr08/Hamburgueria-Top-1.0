import { Product } from "../Product";

export const MenuContainer = ({ products, handleClick }) => {
  return (
    <div>
      {products.map((item, idx) => (
        <Product handleClick={handleClick} product={item} key={idx} />
      ))}
    </div>
  );
};
