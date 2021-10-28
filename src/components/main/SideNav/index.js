
export default function SideNav({links, click})
{
    return(
        <nav>
            <ul>
                {links.map(x => <li key={x.id}><button onClick={() => click(x.id)}>{x.CategoryName}</button></li>)}
            </ul>
        </nav>
    )
}