export const ShoppingCart = ({ currentSale, cartTotal, totalSale }) => {
  totalSale();
  //verificar se não seria uma alternativa
  //melhor trazer o state cartTotal e a função para este arquivo
  return (
    <div>
      <header>
        <h3>Carrinho de compras</h3>
      </header>
      <section>
        <ul>
          {currentSale.map((product) => (
            <li>
              <figure>
                <img src={product.img} alt={product.name}></img>
              </figure>
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <button>Remover</button>
            </li>
          ))}
        </ul>
        <hr />
        <div>
          <label>Total</label>
          <label>
            {cartTotal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </label>
        </div>
        <button>Remover todos</button>
      </section>
    </div>
  );
};

//warning devido a falta de key na li
//erro se coloco key na li e adiciono o mesmo item/ duplicidade de key
