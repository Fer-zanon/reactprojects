import { useEffect, useState } from "react";
import BuyButton from "./BuyButton";
import Header from "../../main/Header";

export default function Products({CategoryId})
{
    const [productsSelected, setProductsSelected] = useState([]);
    const [productsBuy, setProductsBuyed] = useState([]);

    useEffect(()=>{
        function getProducts(){
            setProductsSelected(products.filter(product => product.CategoryId === CategoryId))
        }
        getProducts();
    }, [CategoryId])
    
    useEffect(()=>{
        <Header qttyProducts= {productsBuy.length}></Header>
    }, [productsBuy.length])

    function addProduct(product)
    {
        setProductsBuyed(productsBuy => [...productsBuy, product]);
    }
    
    return(
        <div>
            <ul>
                {productsSelected.map(x => <li key={x.name}>{x.name}<BuyButton press={() => addProduct(x) }></BuyButton></li> )}
            </ul>
        </div>
    )
}

const products = [
    {CategoryId: 1, name: "Genesis"},
    {CategoryId: 1, name: "Snes"},
    {CategoryId: 1, name: "Jaguar"},
    {CategoryId: 1, name: "Psx"},
    {CategoryId: 1, name: "Xbox"},
  
    {CategoryId: 2, name: "joystick"},
    {CategoryId: 2, name: "keyboard"},
    {CategoryId: 2, name: "mouse"},
    {CategoryId: 2, name: "headphones"},
    {CategoryId: 2, name: "monitors"},
  
    {CategoryId: 3, name: "motherboard"},
    {CategoryId: 3, name: "processors"},
    {CategoryId: 3, name: "ram"},
    {CategoryId: 3, name: "video cards"}
  ]