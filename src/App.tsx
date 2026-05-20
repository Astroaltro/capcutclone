import React from 'react';
import './App.css'; // Make sure this path matches where you saved the CSS file

export default function App() {
  return (
    <div className="app-container">
      
      {/* LEFT SIDEBAR: Templates & Media */}
      <aside className="sidebar-left">
        <div className="tabs">
          <button>Templates</button>
          <button>Media</button>
          <button>Audio</button>
        </div>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search templates" 
            className="search-input"
          />
        </div>

        <div className="template-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="template-item">
               <div className="template-label">Template {item}</div>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN WORKSPACE: Editor */}
      <main className="workspace">
        
        {/* Top Toolbar */}
        <header className="header">
          <div className="header-title">
            <span style={{ fontSize: '20px' }}>△</span> Stunning picture
          </div>
          <div className="header-controls">
            <button>Undo</button>
            <button>Redo</button>
            <span>100%</span>
          </div>
          <div>
            <button className="export-btn">Export</button>
          </div>
        </header>

        {/* Center Area: Preview + Properties panel */}
        <div className="center-area">
          
          {/* Canvas / Video Preview */}
          <section className="preview-section">
            <div className="video-preview">
               Video Preview Area
            </div>
          </section>

          {/* Right Sidebar: Text / Properties Panel */}
          <aside className="sidebar-right">
            <div className="sidebar-right-header">
              Text Layers
            </div>
            <div className="text-layers-list">
              {['I came across Curology', 'Breakouts', 'Redness', 'Hormonal Acne', 'Dark Spots'].map((text, i) => (
                <div key={i} className="text-layer-item">
                  <span className="layer-number">{i + 1}</span> {text}
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* BOTTOM TIMELINE */}
        <section className="timeline-section">
          
          {/* Timeline Time Ruler */}
          <div className="timeline-ruler">
            00:00 &nbsp; | &nbsp; 00:01 &nbsp; | &nbsp; 00:02 &nbsp; | &nbsp; 00:03 &nbsp; | &nbsp; 00:04
          </div>

          {/* Tracks Area */}
          <div className="tracks-area">
             
             {/* Playhead Line */}
             <div className="playhead">
                <div className="playhead-head"></div>
             </div>

             {/* Track 1: Video */}
             <div className="track">
                <div className="track-label">Video 1</div>
                <div className="track-content track-video">
                   <div className="clip clip-video" style={{ width: '33.33%' }}>Clip 1</div>
                   <div className="clip clip-video" style={{ width: '25%' }}>Clip 2</div>
                </div>
             </div>

             {/* Track 2: Text */}
             <div className="track">
                <div className="track-label">Text</div>
                <div className="track-content track-text">
                   <div className="clip clip-text" style={{ marginLeft: '48px', width: '25%' }}>Subtitle 1</div>
                </div>
             </div>

          </div>
        </section>
        
      </main>
    </div>
  );
}
