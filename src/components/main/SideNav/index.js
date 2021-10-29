import { Link } from "react-router-dom"
export default function SideNav({links, click})
{
    return(
        <nav>
            <ul>
                {links.map(x => <li key={x.id}><Link to={x.CategoryName} onClick={() => click(x.CategoryName)}>{x.CategoryName}</Link></li>)}
            </ul>
        </nav>
    )
}