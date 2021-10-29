import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styles from './App.module.css';
import Header from './main/Header';
import SideNav from './main/SideNav';
import Footer from './main/Footer';
import Products from "./pages/Products";
import { useState } from "react";
import Carry from "./pages/Carry";

function App() {

  const [boughtProducts, setBoughtProducts] = useState([]);
  const [headerTitle, setHeaderTitle] = useState("Pick a Category");
  const [qtyProducts, setQtyProducts] = useState(0);

  function AddTitle(title)
  {
    setHeaderTitle(title);
  }

  function addBuy(products)
  {
    if(boughtProducts.filter(prod => prod.product === products.name).length >= 1)
    {
      let index = boughtProducts.findIndex(el => el.product === products.name);
      let prd = boughtProducts.filter(el => el.product === products.name);
      prd[0].quantity = prd[0].quantity + 1;
      let newBoughtProducts = boughtProducts;
      newBoughtProducts[index] = prd[0];
      setBoughtProducts(newBoughtProducts);
    }
    else
    {
      setBoughtProducts(boughtProducts => [...boughtProducts, {product: products.name, quantity: 1}]);
    }
    setQtyProducts(qtyProducts + 1);
  }

  return (
    <div className={styles.application}>
      <Router>
        <Header title={headerTitle} qtyProducts={qtyProducts} click={AddTitle}></Header>
        <SideNav links={categories} click={AddTitle}/>
        <Switch>
          <Route path="/Consoles" component={() => <Products CategoryId={1} addBuy={addBuy} />}/>
          <Route path="/Accesories" component={() => <Products CategoryId={2} addBuy={addBuy} />}/>
          <Route path="/Hardware" component={() => <Products CategoryId={3} addBuy={addBuy} />}/>
          <Route path="/Cart" component={() => <Carry products={boughtProducts}/>} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}
const categories = [
  {CategoryName: "Consoles", id: 1},
  {CategoryName: "Accesories", id: 2},
  {CategoryName: "Hardware", id: 3}
]


export default App;
