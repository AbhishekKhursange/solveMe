import React from 'react';

export default function PiecePool({
  poolPieces,
  currentItem,
  gridSize,
  selectedPiece,
  onDragStart,
  onSelectPiece,
}) {
  return (
    <div className="pool-panel">
      <h6 className="fw-bold mb-1">
        <i className="bi bi-stars me-2 text-primary" /> Unplaced pieces
      </h6>
      <p className="text-muted-soft small mb-3">
        Drag a piece onto the board, or tap a piece then tap its destination slot.
      </p>

      <div className="pool-tray">
        {poolPieces.length === 0 ? (
          <div className="pool-success">
            <div className="pool-success-glow" />
            <i className="bi bi-trophy-fill pool-success-trophy" />
            <p className="fw-bold mb-1 pool-success-title">Fantastic matching!</p>
            <p className="text-muted-soft small mb-0">Every slot is filled correctly.</p>
          </div>
        ) : (
          <div className="row g-2">
            {poolPieces.map((piece) => {
              const isSelected = selectedPiece?.id === piece.id;
              return (
                <div className="col-4 col-sm-3" key={piece.id}>
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label={`Puzzle piece ${piece.id}`}
                    draggable
                    onDragStart={(e) => onDragStart(e, piece)}
                    onClick={() => onSelectPiece(piece)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') onSelectPiece(piece);
                    }}
                    className={`puzzle-piece ${isSelected ? 'selected' : ''}`}
                    style={{
                      backgroundImage: `url(${currentItem?.url})`,
                      backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
                      backgroundPosition: `${piece.bgX}% ${piece.bgY}%`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
