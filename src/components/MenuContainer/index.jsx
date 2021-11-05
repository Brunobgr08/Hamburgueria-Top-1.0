import "./styles.css";
import { Product } from "../Product";

export const MenuContainer = ({
  products,
  filteredProducts,
  userInput,
  handleClick,
}) => {
  return (
    <>
      {filteredProducts.length > 0 ? (
        <div className="menu-filterContainer">
          <h3 className="menu-h3">
            Resultados para: <span className="menu-span">{userInput}</span>
          </h3>
          <div className="menu-filter">
            {filteredProducts.map((item, idx) => (
              <Product handleClick={handleClick} product={item} key={idx} />
            ))}
          </div>
        </div>
      ) : (
        <div className="menu-filterContainer">
          <>
            {userInput.length > 0 && (
              <h3 className="menu-h3">
                Resultados não encontrados para:{" "}
                <span className="menu-span">{userInput}</span>
              </h3>
            )}
          </>
          <div className="menu-all">
            {products.map((item, idx) => (
              <Product handleClick={handleClick} product={item} key={idx} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
