
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"

library.add(faShoppingCart);

export default function Header({title, qtyProducts, click})
{
    return(
        <header>
            <h1>{title}</h1>
            <div>
            <Link to="cart" onClick={() => click("Cart")}>
                <FontAwesomeIcon icon="shopping-cart" />
                <span>{qtyProducts}</span>
            </Link>
            </div>
        </header>
    )
}