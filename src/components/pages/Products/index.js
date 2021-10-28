import { useEffect, useState } from "react";
import BuyButton from "./BuyButton";

export default function Products({CategoryId, addBuy})
{
    const [productsSelected, setProductsSelected] = useState([]);

    useEffect(()=>{
        function getProducts(){
            setProductsSelected(products.filter(product => product.CategoryId === CategoryId))
        }
        getProducts();
    }, [CategoryId])
    
    return(
        <div>
            <ul>
                {productsSelected.map(x => <li key={x.name}>{x.name}<BuyButton press={() => addBuy(x) }></BuyButton></li> )}
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