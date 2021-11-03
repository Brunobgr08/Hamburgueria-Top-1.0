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
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);
  const [userInput, setUserInput] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (input) => {
    setFilteredProducts(
      products.filter((item) => item.category.includes(input))
    );
  };
  //tirar dúvida se no caso do filter, tenho que utilizar ...filteredProducts
  //tirar dúvida de como colocar duas condicionais, ex: ||item.nome.includes(input)

  const handleClick = (productId) => {
    //const newProd = products.find((item) => item.id === productId);
    //tirar dúvida sobre linha acima
    setCurrentSale([
      ...currentSale,
      products.find((item) => item.id === productId),
    ]);
  };

  const totalSale = () => {
    const sale = currentSale.reduce((acc, item) => acc + item.price, 0);
    setCartTotal(sale);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="App-main"></main>
    </div>
  );
}

export default App;
