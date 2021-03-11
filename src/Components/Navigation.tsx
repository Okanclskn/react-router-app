import React from "react"
import { Link } from "react-router-dom"

export const Navigation =(): JSX.Element=> {
    return(
    <nav>
        <ul>
            <li><Link to="/">First Page</Link></li>
            <li><Link to="/second">First Page</Link></li>
            <li><Link to="/third">First Page</Link></li>
        </ul>
    </nav>)
}