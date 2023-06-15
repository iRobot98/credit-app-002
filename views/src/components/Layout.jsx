import { Outlet, Link } from "react-router-dom";



export default function Layout(props) {
    return (
        <>
            <nav id="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Search</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contracts</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};