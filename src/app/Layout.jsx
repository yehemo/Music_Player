import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import BottomNav from "../components/navigation/BottomNav";
import { useTheme } from "../hooks/useTheme";

export default function Layout() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="app-shell">
            <aside className="sidebar">
                <Sidebar theme={theme} toggleTheme={toggleTheme} />
            </aside>

            <main className="main">
                <Outlet />
            </main>

            <nav className="bottom-nav">
                <BottomNav theme={theme} toggleTheme={toggleTheme} />
            </nav>
        </div>
    );
}
