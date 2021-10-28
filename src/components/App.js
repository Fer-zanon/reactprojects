import { BrowserRouter as Router } from "react-router-dom";
import styles from './App.module.css';
import Header from './main/Header';
import SideNav from './main/SideNav';
import Footer from './main/Footer';
import Products from "./pages/Products";
import { useState } from "react";

function App() {
  const [CategoryId, setCategoryId] = useState(1);
  const [categorySelected, setCategorySelected] = useState(categories.filter(category => category.id === 1));
  
  function getCategoryId(id)
  {
    setCategoryId(id);
    setCategorySelected(categories.filter(category => category.id === id))
  }

  return (
    <div className={styles.application}>
      <Router>
        <Header title={categorySelected.map(x => x.CategoryName)}></Header>
        <SideNav links={categories} click={getCategoryId}></SideNav>
        <Products CategoryId={CategoryId}></Products>
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
