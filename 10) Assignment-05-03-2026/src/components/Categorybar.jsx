export default function CategoryBar() {
  const tags = ["All", "React", "JavaScript", "Live", "Music", "Gaming"];
  return (
    <div className="category-bar">
      {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
    </div>
  );
}