
export default function Header({title, qttyProducts}) 
{
    return(
        <header>
            <h1>{title}</h1>
            <div>
            <span>{qttyProducts}</span>
            </div>
        </header>
    )
}