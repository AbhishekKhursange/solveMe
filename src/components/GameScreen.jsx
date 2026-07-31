import React from 'react';
import PuzzleBoard from './PuzzleBoard.jsx';
import PiecePool from './PiecePool.jsx';
import { CATEGORIES } from '../data/categories.js';

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
}

export default function GameScreen({
  categoryKey,
  currentItem,
  gridSize,
  boardSlots,
  poolPieces,
  selectedPiece,
  moves,
  secondsElapsed,
  bestScore,
  showHint,
  imageLoaded,
  isRevealing,
  onToggleHint,
  onRestart,
  onDrop,
  onDragStart,
  onSelectSlot,
  onSelectPiece,
}) {
  const category = CATEGORIES[categoryKey];

  return (
    <div className="py-4">
      {/* Stats bar */}
      <div className="panel p-3 d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <div>
          <h5 className="fw-black mb-0">{currentItem?.name}</h5>
          <p className="text-muted-soft small mb-0">
            Category: <span style={{ color: category?.accent }}>{category?.title}</span>
          </p>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <div className="stat-pill">
            <i className="bi bi-clock text-warning" />
            <span className="small text-muted-soft">Time</span>
            <span className="fw-bold text-warning">{formatTime(secondsElapsed)}</span>
          </div>
          <div className="stat-pill">
            <i className="bi bi-cursor text-info" />
            <span className="small text-muted-soft">Moves</span>
            <span className="fw-bold text-info">{moves}</span>
          </div>
          <div className="stat-pill">
            <i className="bi bi-trophy text-success" />
            <span className="small text-muted-soft">Best</span>
            <span className="fw-bold text-success">{bestScore !== null ? `${bestScore} mv` : '—'}</span>
          </div>
        </div>

        <div className="d-flex gap-5 flex-shrink-0">
          <button type="button" className="btn icon-btn icon-btn-wide text-nowrap" onClick={onToggleHint}>
            <i className="bi bi-eye me-1" /> {showHint ? 'Hide hint' : 'Show hint'}
          </button>
          <button type="button" className="btn icon-btn icon-btn-wide text-nowrap" onClick={onRestart}>
            <i className="bi bi-arrow-clockwise me-1" /> Restart
          </button>
        </div>
      </div>

      {/* Board + pool */}
      <div className="row g-4">
        <div className="col-lg-7 d-flex justify-content-center">
          <PuzzleBoard
            gridSize={gridSize}
            boardSlots={boardSlots}
            currentItem={currentItem}
            showHint={showHint}
            selectedPiece={selectedPiece}
            onDrop={onDrop}
            onSelectSlot={onSelectSlot}
            imageLoaded={imageLoaded}
            isRevealing={isRevealing}
          />
        </div>
        <div className="col-lg-5">
          <PiecePool
            poolPieces={poolPieces}
            currentItem={currentItem}
            gridSize={gridSize}
            selectedPiece={selectedPiece}
            onDragStart={onDragStart}
            onSelectPiece={onSelectPiece}
          />
        </div>
      </div>
    </div>
  );
}
