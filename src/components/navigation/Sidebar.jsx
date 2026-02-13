import { NavLink } from "react-router-dom";

export default function Sidebar({ theme, toggleTheme }) {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ margin: 0 }}>Music</h2>
                <button className="btn" onClick={toggleTheme} style={{ padding: "8px 10px" }}>
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
            </div>

            <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
                <NavLink to="/" className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}>
                    Home
                </NavLink>
                <NavLink to="/library" className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}>
                    Library
                </NavLink>
                <NavLink to="/search" className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}>
                    Search
                </NavLink>
            </div>
        </div>
    );
}
