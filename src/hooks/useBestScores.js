import { useCallback, useEffect, useState } from 'react';
import { CATEGORY_LIST, DIFFICULTIES } from '../data/categories.js';

const STORAGE_PREFIX = 'snap_best_';

function readAllScores() {
  const scores = {};
  CATEGORY_LIST.forEach((cat) => {
    DIFFICULTIES.forEach(({ grid }) => {
      const key = `${STORAGE_PREFIX}${cat.key}_${grid}`;
      const raw = window.localStorage.getItem(key);
      if (raw) scores[`${cat.key}_${grid}`] = parseInt(raw, 10);
    });
  });
  return scores;
}

export function useBestScores() {
  const [scores, setScores] = useState({});

  useEffect(() => {
    setScores(readAllScores());
  }, []);

  const recordScore = useCallback((categoryKey, grid, moves) => {
    const key = `${STORAGE_PREFIX}${categoryKey}_${grid}`;
    const current = window.localStorage.getItem(key);
    if (!current || moves < parseInt(current, 10)) {
      window.localStorage.setItem(key, String(moves));
    }
    setScores(readAllScores());
  }, []);

  return { scores, recordScore, totalSolved: Object.keys(scores).length };
}
