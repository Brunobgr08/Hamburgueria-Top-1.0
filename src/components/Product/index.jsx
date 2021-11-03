export const Product = ({ handleClick, product }) => {
  return (
    <div>
      <figure>
        <img src={product.img} alt={product.name}></img>
      </figure>
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <h4>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h4>
      <button onClick={() => handleClick(product.id)}>Adicionar</button>
    </div>
  );
};
