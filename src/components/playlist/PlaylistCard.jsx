export default function PlaylistCard({ playlist }) {
    return (
        <div className="card" style={{ cursor: "pointer" }} onClick={() => alert(`Open: ${playlist.name}`)}>
            <img
                src={playlist.cover}
                alt={playlist.name}
                style={{
                    width: "100%",
                    borderRadius: 12,
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    border: "1px solid var(--border)",
                }}
            />
            <div style={{ marginTop: 10, fontWeight: 700 }}>{playlist.name}</div>
            <div className="muted" style={{ fontSize: 13 }}>Playlist</div>
        </div>
    );
}
