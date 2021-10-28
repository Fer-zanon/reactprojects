export default function Carry({products})
{
    return(
        <div>
            <ul>
                {products.map(x => <li key={x.product}> {x.product} Quantity: {x.quantity}</li>)}
            </ul>
        </div>
    )
}