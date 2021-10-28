import { Link } from "react-router-dom";

export default function PageLink({ title, url })
{
    return <Link to={url}>{title}</Link>;
}