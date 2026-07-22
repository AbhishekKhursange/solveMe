import React from 'react';

export default function CategoryCard({ category, active, onSelect }) {
  return (
    <div
      className={`category-card ${active ? 'active' : ''}`}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(category.key)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelect(category.key);
      }}
      aria-pressed={active}
    >
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div
          className="category-icon"
          style={{ background: `linear-gradient(135deg, ${category.accent}, ${category.accentTo})` }}
        >
          <i className={`bi ${category.icon}`} />
        </div>
        <span className="text-muted-soft small">{category.items.length} images</span>
      </div>
      <h5 className="fw-bold text-white mb-1">{category.title}</h5>
      <p className="text-muted-soft small mb-2">{category.description}</p>
      <div className="d-flex align-items-center gap-1 small fw-bold" style={{ color: active ? category.accent : undefined }}>
        {active ? (
          <>
            <i className="bi bi-check-circle-fill" /> Selected
          </>
        ) : (
          <span className="text-muted-soft fw-normal">Tap to select</span>
        )}
      </div>
    </div>
  );
}
