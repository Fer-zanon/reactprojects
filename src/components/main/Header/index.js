
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);

export default function Header({title, qttyProducts})
{
    return(
        <header>
            <h1>{title}</h1>
            <div>
            <FontAwesomeIcon icon="shopping-cart" />
            <span>{qttyProducts}</span>
            </div>
        </header>
    )
}