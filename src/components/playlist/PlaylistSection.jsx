import PlaylistCard from "./PlaylistCard";

export default function PlaylistSection({ title, items }) {
    return (
        <section>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <h3 style={{ margin: 0 }}>{title}</h3>
            </div>

            <div className="grid-cards" style={{ marginTop: 12 }}>
                {items.map((p) => (
                    <PlaylistCard key={p.id} playlist={p} />
                ))}
            </div>
        </section>
    );
}
