import { Link } from "react-router-dom"
export default function SideNav({links, click})
{
    return(
        <nav>
            <ul>
                {links.map(x => <li key={x.id}><Link to={x.CategoryName}><button onClick={() => click(x.id)}>{x.CategoryName}</button></Link></li>)}
            </ul>
        </nav>
    )
}