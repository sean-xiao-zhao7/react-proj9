import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <ul>
            <li>
                <NavLink to="/">Quotes</NavLink>
            </li>
            <li>
                <NavLink to="/quote/new">Add a quote</NavLink>
            </li>
        </ul>
    );
};

export default Header;
