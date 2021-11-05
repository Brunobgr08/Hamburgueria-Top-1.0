import "./styles/App.css";
import { useState } from "react";
import { MenuContainer } from "./components/MenuContainer";
import { ShoppingCart } from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "McShake Ovomaltine",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (input) => {
    const treatedUserInput = input.toLowerCase();
    setUserInput(input);
    setFilteredProducts(
      products.filter(
        (item) =>
          item.category.toLowerCase().includes(treatedUserInput) ||
          item.name.toLowerCase().includes(treatedUserInput)
      )
    );
  };

  const handleClick = (productId) => {
    const newProd = products.find((item) => item.id === productId);

    !currentSale.some((item) => item.id === newProd.id) &&
      setCurrentSale([...currentSale, newProd]);
    //Verificar se já existe o item no carrinho e só insere caso não exista
  };

  const totalSale = () => {
    const sale = currentSale.reduce((acc, item) => acc + item.price, 0);
    setCartTotal(sale);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-headerDiv">
          <h1 className="App-h1">
            Burger<span className="App-span"> Kenzie</span>
          </h1>
        </div>
        <nav className="App-nav">
          <input
            className="App-Input"
            type="text"
            placeholder="Digitar pesquisa"
            value={userInput}
            onChange={(event) => showProducts(event.target.value)}
          />
          <button
            className="App-btnSearch"
            onClick={() => showProducts(userInput)}
          >
            Pesquisar
          </button>
        </nav>
      </header>
      <main className="App-main">
        <MenuContainer
          products={products}
          filteredProducts={filteredProducts}
          userInput={userInput}
          handleClick={handleClick}
        />
        <ShoppingCart
          currentSale={currentSale}
          cartTotal={cartTotal}
          setCurrentSale={setCurrentSale}
          totalSale={totalSale}
        />
      </main>
    </div>
  );
}

export default App;
