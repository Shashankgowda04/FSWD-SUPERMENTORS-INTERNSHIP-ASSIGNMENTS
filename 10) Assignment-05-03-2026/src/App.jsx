import Sidebar from "./components/Sidebar";
import CategoryBar from "./components/Categorybar"; // Fixed: Added /components/ and corrected spelling
import VideoCard from "./components/VideoCard";
import "./App.css";


function App() {
  const videoData = [
    { title: "React Router Tutorial", thumb: "🛤️" },
    { title: "Vite Setup Guide", thumb: "⚡" },
    { title: "State Management 101", thumb: "🧠" },
    { title: "Component Architecture", thumb: "🏗️" }
  ];

  return (
    <div className="app-layout">
      <header className="navbar">
        <div className="logo">YouTube</div>
        <input className="search" placeholder="Search" />
        <div className="user">🔔 👤</div>
      </header>

      <div className="main-container">
        <Sidebar />
        
        <main className="content">
          <CategoryBar />
          <div className="video-grid">
            {videoData.map((video, index) => (
              <VideoCard key={index} title={video.title} thumbnail={video.thumb} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App