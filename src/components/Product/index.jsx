import "./styles.css";

export const Product = ({ handleClick, product }) => {
  return (
    <div className="item-DivContainer">
      <div className="item-header">
        <figure className="item-figure">
          <img className="item-img" src={product.img} alt={product.name}></img>
        </figure>
      </div>
      <div className="item-main">
        <h3 className="item-h3">{product.name}</h3>
        <p className="item-p">{product.category}</p>
        <h4 className="item-h4">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h4>
        <button className="item-btnAdd" onClick={() => handleClick(product.id)}>
          Adicionar
        </button>
      </div>
    </div>
  );
};
