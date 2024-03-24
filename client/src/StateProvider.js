import "./styles.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
  generatePath
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

/**
 * https://stackoverflow.com/questions/71923595/how-can-i-add-the-item-to-cart-page-in-react
 */

// const Home = () => <h1>Home</h1>;

function ItemDetail({ handleClick, products }) {
  const { productCode, vendor, value } = useParams();
  // const item = { productCode, vendor, value };
  const item = products.find((item) => item.productCode === productCode);

  return (
    <div>
      <p>product id: {item.productCode}</p>
      <p>Description: {item.value}</p>
      <p>vendor: {item.vendor}</p>
      <button onClick={() => handleClick(item)}>Add to Cart</button>
    </div>
  );
}

const Cart = ({ cart, setCart, handleChange }) => {
  const handleRemove = (productCode) => {
    setCart((cart) => cart.filter((item) => item.productCode !== productCode));
  };

  const price = cart.reduce(
    (total, item) => total + item.amount * item.price,
    0
  );

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <p>{item.value}</p>
          <div>
            <button onClick={() => handleChange(item.ProductCode, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item.ProductCode, -1)}>
              -
            </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.ProductCode)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>R - {price}</span>
      </div>
    </article>
  );
};

const data = Array.from({ length: 50 }, () => ({
  productCode: uuidV4(),
  value: `product ${Math.floor(Math.random() * 1000)}`,
  vendor: (Math.floor(Math.random() * 3) + 100).toString(),
  price: Math.floor(Math.random() * 10000) / 100
}));

const Products = ({ products }) => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((item) => {
          console.log({ item });
          return (
            <li key={item.productCode}>
              <Link
                to={generatePath(
                  "/itemDetail/:productCode/:value/:vendor",
                  item
                )}
              >
                {item.value}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  const handleClick = (item) => {
    if (cart.some((cartItem) => cartItem.productCode === item.productCode)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.productCode === item.productCode
            ? {
                ...cartItem,
                amount: cartItem.amount + 1
              }
            : cartItem
        )
      );
      return;
    }

    setCart((cart) => [
      ...cart,
      { ...item, amount: 1 } // <-- initial amount 1
    ]);
  };

  const handleChange = (productCode, d) => {
    setCart((cart) =>
      cart.flatMap((cartItem) =>
        cartItem.productCode === productCode
          ? cartItem.amount + d < 1
            ? [] // <-- remove item if amount will be less than 1
            : [
                {
                  ...cartItem,
                  amount: cartItem.amount + d
                }
              ]
          : [cartItem]
      )
    );
  };

  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="all-categories" element={<AllCategories />} />
          <Route path="entertainment" element={<Entertainment />} />
          <Route path="login" element={<Login />} />
          <Route path="discover" element={<Discover />} />
          <Route path="netflix" element={<Netflix />} />
          <Route path="orders" element={<Orders />} />
          <Route path="sign-up" element={<SignUp />} /> */}
          <Route path="products" element={<Products products={products} />} />
          <Route
            path="/itemDetail/:productCode/:value/:vendor"
            element={
              <ItemDetail products={products} handleClick={handleClick} />
            }
          />
          <Route
            path="/Cart/"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
