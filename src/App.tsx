import { useMemoryGame } from "./hooks/useMemoryGame";

function App() {
  const {
    flippedIndices,
    matchedIndices,
    moves,
    emojis,
    handleFlip,
    shuffle,
    isGameWon
  } = useMemoryGame();

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8 tracking-wide">
        Memory Match
      </h1>

    <div className="flex gap-12 mb-6 text-white text-lg font-semibold">
      <div className="flex items-center gap-2">
        <span className="text-yellow-400">🔄</span>
        <span>Moves: {moves}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-400">✅</span>
        <span>Matches: {matchedIndices.size / 2}</span>
      </div>
    </div>

    <div className="mb-6 flex flex-col items-center gap-3">
      {isGameWon && (
        <div className="text-2xl font-bold text-yellow-300 animate-bounce">
          🎉 You Win! 🎉
        </div>
      )}
      <button
        onClick={shuffle}
        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors cursor-pointer active:scale-95"
      >
        {isGameWon ? "Play Again" : "Restart"}
      </button>
    </div>

      <div className="grid grid-cols-4 gap-3">
        {emojis.map((emoji, index) => {
          const isFlipped = flippedIndices.has(index);
          const isMatched = matchedIndices.has(index);


        return (
          <div
            key={index}
            onClick={() => handleFlip(index)}
            className={`w-20 h-20 cursor-pointer select-none [perspective:1000px] rounded-xl ${
              isMatched 
                ? "ring-2 ring-green-400 ring-offset-2 ring-offset-gray-900 shadow-lg shadow-green-400/50" 
                : ""
            }`}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                isFlipped || isMatched ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-4xl rounded-xl bg-gray-700 [backface-visibility:hidden]">
                ?
              </div>

              <div className="absolute inset-0 flex items-center justify-center text-4xl rounded-xl bg-gray-600 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                {emoji}
              </div>
            </div>
          </div>
        );
      })}

      </div>
    </div>
  );
}

export default App