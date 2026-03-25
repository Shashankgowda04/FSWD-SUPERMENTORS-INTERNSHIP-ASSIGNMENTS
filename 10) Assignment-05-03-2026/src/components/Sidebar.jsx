export default function Sidebar() {
  const items = ["Home", "Shorts", "Subscriptions", "Library", "History"];
  return (
    <aside className="sidebar">
      {items.map(item => <div key={item} className="side-item">{item}</div>)}
    </aside>
  );
}