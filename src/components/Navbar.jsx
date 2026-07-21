import React from 'react';

export default function Navbar({ screen, muted, onToggleMute, onExit }) {
  return (
    <nav className="app-navbar">
      <div className="container d-flex align-items-center justify-content-between py-2">
        <div
          className="d-flex align-items-center gap-2"
          role="button"
          onClick={onExit}
          style={{ cursor: 'pointer' }}
        >
          <div className="brand-icon">
            <i className="bi bi-stars text-white" />
          </div>
          <div>
            <span className="fw-bold fs-5 gradient-text">SnapPuzzle</span>
            <span className="badge badge-soft ms-2 d-none d-sm-inline-block">v1.0</span>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleMute}
            title={muted ? 'Unmute sounds' : 'Mute sounds'}
            aria-label={muted ? 'Unmute sounds' : 'Mute sounds'}
          >
            <i className={`bi ${muted ? 'bi-volume-mute' : 'bi-volume-up'}`} />
          </button>
          {screen === 'game' && (
            <button type="button" className="btn btn-sm icon-btn px-3" onClick={onExit}>
              <i className="bi bi-arrow-left me-1" /> Exit
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
