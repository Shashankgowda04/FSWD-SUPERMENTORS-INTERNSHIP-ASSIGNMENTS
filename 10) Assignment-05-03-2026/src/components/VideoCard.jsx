// This is one "hunted" component from YouTube
export default function VideoCard({ title, thumbnail }) {
  return (
    <div className="video-card">
      <div className="thumb-box">{thumbnail}</div>
      <div className="info">
        <h4>{title}</h4>
        <p>Dev Channel • 1.2M views</p>
      </div>
    </div>
  );
}