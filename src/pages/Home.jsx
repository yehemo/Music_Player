import { playlistSections } from "../data/playlist.js";
import PlaylistSection from "../components/playlist/PlaylistSection";

export default function Home() {
    return (
        <div>
            <h1 style={{ marginBottom: 6 }}>Home</h1>
            <p className="muted" style={{ marginTop: 0 }}>
                Nothing here.
            </p>

            <div style={{ display: "grid", gap: 20, marginTop: 18 }}>
                {playlistSections.map((sec) => (
                    <PlaylistSection key={sec.title} title={sec.title} items={sec.items} />
                ))}
            </div>
        </div>
    );
}
