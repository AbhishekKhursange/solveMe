import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import GameScreen from './components/GameScreen.jsx';
import WinModal from './components/WinModal.jsx';
import { CATEGORIES } from './data/categories.js';
import { playSound } from './utils/sound.js';
import { useBestScores } from './hooks/useBestScores.js';
import { useImagePreload } from './hooks/useImagePreload.js';

function buildPieces(gridSize) {
  const total = gridSize * gridSize;
  const pieces = [];
  for (let index = 0; index < total; index++) {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    pieces.push({
      id: `piece-${index}`,
      correctIndex: index,
      bgX: gridSize === 1 ? 0 : (col / (gridSize - 1)) * 100,
      bgY: gridSize === 1 ? 0 : (row / (gridSize - 1)) * 100,
    });
  }
  return pieces;
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function App() {
  const [screen, setScreen] = useState('home');
  const [categoryKey, setCategoryKey] = useState('wildKingdom');
  const [gridSize, setGridSize] = useState(3);
  const [muted, setMuted] = useState(false);

  const [currentItem, setCurrentItem] = useState(null);
  const [boardSlots, setBoardSlots] = useState([]);
  const [poolPieces, setPoolPieces] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [moves, setMoves] = useState(0);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const { scores, recordScore, totalSolved } = useBestScores();
  const imageStatus = useImagePreload(currentItem?.url);

  // Timer
  useEffect(() => {
    if (screen !== 'game' || isWon) return undefined;
    const timer = setInterval(() => setSecondsElapsed((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [screen, isWon]);

  const startGame = useCallback(
    (catKey = categoryKey, grid = gridSize) => {
      const category = CATEGORIES[catKey];
      const item = category.items[Math.floor(Math.random() * category.items.length)];
      setCurrentItem(item);
      setCategoryKey(catKey);
      setGridSize(grid);
      setBoardSlots(new Array(grid * grid).fill(null));
      setPoolPieces(shuffle(buildPieces(grid)));
      setSelectedPiece(null);
      setMoves(0);
      setSecondsElapsed(0);
      setIsWon(false);
      setShowHint(false);
      setScreen('game');
    },
    [categoryKey, gridSize]
  );

  // Unlike startGame, this keeps the same picture — "Restart" should mean
  // "retry this puzzle", not "give me a different one".
  const restartPuzzle = useCallback(() => {
    setBoardSlots(new Array(gridSize * gridSize).fill(null));
    setPoolPieces(shuffle(buildPieces(gridSize)));
    setSelectedPiece(null);
    setMoves(0);
    setSecondsElapsed(0);
    setIsWon(false);
    setShowHint(false);
  }, [gridSize]);

  const placePiece = useCallback(
    (piece, targetIndex) => {
      setMoves((m) => m + 1);

      if (piece.correctIndex !== targetIndex) {
        playSound('error', muted);
        setSelectedPiece(null);
        return;
      }

      playSound('snap', muted);
      setPoolPieces((prev) => prev.filter((p) => p.id !== piece.id));
      setSelectedPiece(null);

      // Compute win condition from the updater callback so we always read
      // the freshest board state, avoiding stale-closure race conditions.
      setBoardSlots((prev) => {
        const updated = [...prev];
        updated[targetIndex] = piece;

        const isComplete = updated.every(Boolean);
        if (isComplete) {
          setTimeout(() => {
            setIsWon(true);
            playSound('win', muted);
          }, 250);
        }
        return updated;
      });
    },
    [muted]
  );

  // Record the score once the win state actually flips to true.
  useEffect(() => {
    if (isWon) {
      recordScore(categoryKey, gridSize, moves);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWon]);

  const handleDragStart = (e, piece) => {
    e.dataTransfer.setData('application/json', JSON.stringify(piece));
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    try {
      const data = e.dataTransfer.getData('application/json');
      if (!data) return;
      placePiece(JSON.parse(data), targetIndex);
    } catch (err) {
      console.error('Failed to parse dropped piece', err);
    }
  };

  const handleSelectPiece = (piece) => {
    playSound('click', muted);
    setSelectedPiece((prev) => (prev?.id === piece.id ? null : piece));
  };

  const handleSelectSlot = (targetIndex) => {
    if (!selectedPiece) return;
    placePiece(selectedPiece, targetIndex);
  };

  const goHome = () => {
    playSound('click', muted);
    setIsWon(false);
    setScreen('home');
  };

  const bestScore = scores[`${categoryKey}_${gridSize}`] ?? null;

  return (
    <div className="min-vh-100 d-flex flex-column position-relative">
      <div className="glow-decoration glow-indigo" />
      <div className="glow-decoration glow-pink" />

      <Navbar screen={screen} muted={muted} onToggleMute={() => setMuted((m) => !m)} onExit={goHome} />

      <main className="container flex-grow-1 position-relative" style={{ zIndex: 1 }}>
        {screen === 'home' ? (
          <Home
            categoryKey={categoryKey}
            gridSize={gridSize}
            onSelectCategory={setCategoryKey}
            onSelectGrid={setGridSize}
            onStart={() => startGame(categoryKey, gridSize)}
            scores={scores}
            totalSolved={totalSolved}
          />
        ) : (
          <GameScreen
            categoryKey={categoryKey}
            currentItem={currentItem}
            gridSize={gridSize}
            boardSlots={boardSlots}
            poolPieces={poolPieces}
            selectedPiece={selectedPiece}
            moves={moves}
            secondsElapsed={secondsElapsed}
            bestScore={bestScore}
            showHint={showHint}
            imageLoaded={imageStatus === 'loaded'}
            onToggleHint={() => setShowHint((h) => !h)}
            onRestart={restartPuzzle}
            onDrop={handleDrop}
            onDragStart={handleDragStart}
            onSelectSlot={handleSelectSlot}
            onSelectPiece={handleSelectPiece}
          />
        )}
      </main>

      <footer className="border-top border-secondary-subtle py-3 text-center text-muted-soft small mt-4">
        <div className="container d-flex flex-column flex-sm-row justify-content-between gap-2">
          <span>© 2026 SolveMe</span>
          <button type="button" className="btn btn-link btn-sm text-muted-soft text-decoration-none" onClick={goHome}>
            Home
          </button>
        </div>
      </footer>

      {isWon && (
        <WinModal
          currentItem={currentItem}
          moves={moves}
          secondsElapsed={secondsElapsed}
          onPlayNext={() => startGame(categoryKey, gridSize)}
          onBackHome={goHome}
        />
      )}
    </div>
  );
}
