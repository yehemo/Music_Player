import { NavLink } from "react-router-dom";

export default function BottomNav({ theme, toggleTheme }) {
    return (
        <>
            <NavLink to="/" className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}>
                Home
            </NavLink>

            <NavLink to="/library" className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}>
                Library
            </NavLink>

            <NavLink to="/search" className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}>
                Search
            </NavLink>

            <button className="btn" onClick={toggleTheme} style={{ padding: "8px 10px" }}>
                {theme === "dark" ? "☀️" : "🌙"}
            </button>
        </>
    );
}
