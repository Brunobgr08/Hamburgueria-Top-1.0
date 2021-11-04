import "./styles.css";

export const ShoppingCart = ({
  currentSale,
  cartTotal,
  setCurrentSale,
  totalSale,
}) => {
  totalSale();
  //verificar se não seria uma alternativa
  //melhor trazer o state cartTotal e a função para este arquivo

  const removeAll = () => {
    setCurrentSale([]);
  };

  const removeItem = (idx) => {
    setCurrentSale(currentSale.filter((item, index) => index !== idx));
  };

  return (
    <div className="cart-Container">
      <header className="cart-header">
        <h3 className="cart-h3">Carrinho de compras</h3>
      </header>
      <section className="cart-sect">
        <>
          {currentSale.length > 0 ? (
            <>
              <ul className="cart-ul">
                {currentSale.map((product, idx) => (
                  <li className="cart-liItem" key={idx}>
                    <div className="cart-itemData">
                      <figure className="cart-itemFig">
                        <img
                          className="cart-itemImg"
                          src={product.img}
                          alt={product.name}
                        ></img>
                      </figure>
                      <div>
                        <h3 className="cart-itemH3">{product.name}</h3>
                        <p className="cart-itemP">{product.category}</p>
                      </div>
                    </div>
                    <button
                      className="cart-itemBtnRemove"
                      onClick={() => removeItem(idx)}
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
              <hr className="cart-hr" />
              <div className="cart-divValues">
                <label className="cart-total">Total</label>
                <label className="cart-price">
                  {cartTotal.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </label>
              </div>
              <button className="cart-btnRemoveAll" onClick={() => removeAll()}>
                Remover todos
              </button>
            </>
          ) : (
            <div className="cart-divEmpty">
              <h3 className="cart-h3Empty">Sua sacola está vazia</h3>
              <p className="cart-pEmpty">Adicione itens</p>
            </div>
          )}
        </>
      </section>
    </div>
  );
};
