import React from 'react';

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
}

export default function WinModal({ currentItem, moves, secondsElapsed, onPlayNext, onBackHome }) {
  if (!currentItem) return null;

  return (
    <div className="modal-backdrop-custom" role="dialog" aria-modal="true" aria-labelledby="win-title">
      <div className="win-card">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
          style={{ width: 64, height: 64, background: 'rgba(16,185,129,0.12)' }}
        >
          <i className="bi bi-trophy-fill fs-3 text-success" />
        </div>

        <h3 id="win-title" className="fw-black mb-2">
          Puzzle reconstructed!
        </h3>
        <p className="text-muted-soft small mb-4">
          You perfectly matched the slots of{' '}
          <span className="fw-semibold text-warning">{currentItem.name}</span>.
        </p>

        <div className="row g-2 mb-4">
          <div className="col-6">
            <div className="panel py-2">
              <div className="text-muted-soft small text-uppercase fw-bold" style={{ fontSize: '0.65rem' }}>
                Time
              </div>
              <div className="fw-bold text-warning">{formatTime(secondsElapsed)}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="panel py-2">
              <div className="text-muted-soft small text-uppercase fw-bold" style={{ fontSize: '0.65rem' }}>
                Moves
              </div>
              <div className="fw-bold text-info">{moves}</div>
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-gradient-success w-100 py-2 rounded-3 mb-2" onClick={onPlayNext}>
          Play next puzzle
        </button>
        <button type="button" className="btn icon-btn w-100 py-2 rounded-3" onClick={onBackHome}>
          Back to dashboard
        </button>
      </div>
    </div>
  );
}
