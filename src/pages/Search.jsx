import { useState } from "react";
import { playlistSections } from "../data/playlist.js";

export default function Search() {
    const [q, setQ] = useState("");

    const all = playlistSections.flatMap((s) => s.items);
    const filtered = all.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));

    return (
        <div>
            <h1 style={{ marginBottom: 6 }}>Search</h1>
            <p className="muted" style={{ marginTop: 0 }}>Search playlists (demo)</p>

            <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Type playlist name…"
                style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: 12,
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    color: "var(--text)",
                    outline: "none",
                    marginTop: 12,
                }}
            />

            <div className="grid-cards" style={{ marginTop: 16 }}>
                {filtered.map((p) => (
                    <div key={p.id} className="card">
                        <div style={{ fontWeight: 700 }}>{p.name}</div>
                        <div className="muted" style={{ fontSize: 13 }}>Playlist</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
