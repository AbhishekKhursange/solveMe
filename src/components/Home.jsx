import React from 'react';
import { CATEGORY_LIST, DIFFICULTIES } from '../data/categories.js';
import CategoryCard from './CategoryCard.jsx';

export default function Home({
  categoryKey,
  gridSize,
  onSelectCategory,
  onSelectGrid,
  onStart,
  scores,
  totalSolved,
}) {
  return (
    <div className="py-4 py-md-5">
      {/* Hero */}
      <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
        <span className="badge badge-soft px-3 py-2 mb-3 d-inline-flex align-items-center gap-2">
          <i className="bi bi-fire text-warning" /> Unleash your visual focus
        </span>
        <h1 className="display-4 fw-black mb-3">
          Reconstruct art,{' '}
          <span className="gradient-text d-block">piece by piece.</span>
        </h1>
        <p className="text-muted-soft fs-5">
          Pick a category, choose a difficulty, and match slices to rebuild the picture.
        </p>
      </div>

      <div className="row g-4">
        {/* Categories */}
        <div className="col-lg-8">
          <h6 className="text-uppercase text-muted-soft fw-bold small mb-3 border-bottom border-secondary-subtle pb-2">
            <i className="bi bi-grid-3x3-gap me-2" /> 1. Select a category
          </h6>
          <div className="row g-3">
            {CATEGORY_LIST.map((cat) => (
              <div className="col-sm-6 col-md-4" key={cat.key}>
                <CategoryCard
                  category={cat}
                  active={categoryKey === cat.key}
                  onSelect={onSelectCategory}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Settings + Leaderboard */}
        <div className="col-lg-4">
          <h6 className="text-uppercase text-muted-soft fw-bold small mb-3 border-bottom border-secondary-subtle pb-2">
            <i className="bi bi-trophy me-2" /> 2. Difficulty &amp; stats
          </h6>

          <div className="panel p-4 mb-3">
            <label className="small fw-semibold text-muted-soft mb-2 d-block">
              Grid size
            </label>
            <div className="row g-2 mb-3">
              {DIFFICULTIES.map((d) => (
                <div className="col-4" key={d.grid}>
                  <button
                    type="button"
                    className={`difficulty-btn w-100 ${gridSize === d.grid ? 'active' : ''}`}
                    onClick={() => onSelectGrid(d.grid)}
                  >
                    {d.label}
                    <div className="small fw-normal text-muted-soft">{d.tag}</div>
                  </button>
                </div>
              ))}
            </div>
            <button type="button" className="btn btn-gradient w-100 py-2 rounded-3" onClick={onStart}>
              <i className="bi bi-play-fill me-1" /> Start puzzle
            </button>
          </div>

          <div className="panel p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="small fw-semibold text-muted-soft">Total solved</span>
              <span className="fw-bold text-warning">
                {totalSolved} <i className="bi bi-trophy-fill" />
              </span>
            </div>
            <div className="d-flex flex-column gap-2" style={{ maxHeight: 150, overflowY: 'auto' }}>
              {Object.keys(scores).length === 0 ? (
                <p className="text-muted-soft small text-center mb-0 py-2">
                  No records yet. Solve your first puzzle!
                </p>
              ) : (
                Object.entries(scores).map(([k, v]) => {
                  const [catKey, grid] = k.split('_');
                  return (
                    <div className="leaderboard-row d-flex justify-content-between" key={k}>
                      <span>
                        {catKey} ({grid}×{grid})
                      </span>
                      <span className="fw-bold text-info">{v} moves</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Guide */}
      <div className="panel p-4 p-md-5 mt-5">
        <h5 className="text-center fw-bold mb-4">
          <i className="bi bi-question-circle me-2 text-primary" /> How to play
        </h5>
        <div className="row g-4 text-center text-md-start">
          {[
            ['Drag or tap', 'Drag a piece onto the board, or tap a piece then tap its target slot.'],
            ['Watch it snap', 'Pieces only lock into their correct position — no guesswork required.'],
            ['Chase efficiency', 'Fewer moves means a better score. Beat your personal best!'],
          ].map(([title, body], i) => (
            <div className="col-md-4" key={title}>
              <div
                className="rounded-circle d-flex align-items-center justify-content-center fw-bold mx-auto mx-md-0 mb-2"
                style={{ width: 40, height: 40, background: 'rgba(99,102,241,0.15)', color: '#a5b4fc' }}
              >
                {i + 1}
              </div>
              <h6 className="fw-bold">{title}</h6>
              <p className="text-muted-soft small">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
