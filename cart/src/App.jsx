import "./App.css";
import { Cart } from "./Components/Cart";
import Login from "./Components/Login";
import Products from "./Components/Products";

function App() {
  return (
    <div>
      {/* <h1>Hii</h1> */}
      <Login />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
