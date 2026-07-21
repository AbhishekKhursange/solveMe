import React from 'react';

export default function PuzzleBoard({
  gridSize,
  boardSlots,
  currentItem,
  showHint,
  selectedPiece,
  onDrop,
  onSelectSlot,
  imageLoaded,
}) {
  return (
    <div className="board-frame">
      {!imageLoaded && (
        <div className="spinner-overlay">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading image…</span>
          </div>
        </div>
      )}

      {showHint && currentItem && imageLoaded && (
        <div
          className="board-hint-layer"
          style={{ backgroundImage: `url(${currentItem.url})` }}
          aria-hidden="true"
        />
      )}

      <div
        className="board-grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {boardSlots.map((piece, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            aria-label={piece ? `Filled slot ${index + 1}` : `Empty slot ${index + 1}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, index)}
            onClick={() => onSelectSlot(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onSelectSlot(index);
            }}
            className={`board-slot ${piece ? 'filled' : ''} ${
              !piece && selectedPiece ? 'selectable' : ''
            }`}
          >
            {piece ? (
              <div
                className="board-slot-image"
                style={{
                  backgroundImage: `url(${currentItem?.url})`,
                  backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
                  backgroundPosition: `${piece.bgX}% ${piece.bgY}%`,
                }}
              />
            ) : (
              <div className="w-100 h-100 d-flex align-items-center justify-content-center opacity-25">
                <i className="bi bi-square text-secondary small" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
