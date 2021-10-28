export default function Carry({products})
{
    return(
        <div>
            <ul>
                {products.map(x => <li> x.name </li>)}
            </ul>
        </div>
    )
}