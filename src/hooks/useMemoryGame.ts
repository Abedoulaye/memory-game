import {useState} from "react";

export function useMemoryGame() {
  const [flippedIndices, setFlippedIndices] = useState<Set<number>>(new Set());
  const [matchedIndices, setMatchedIndices] = useState<Set<number>>(new Set());
  const [isChecking, setIsChecking] = useState(false);
  const [moves, setMoves] = useState(0);
  const [emojis, setEmojis] = useState(() => {
  const initial = [
    "🌍", "🌍",
    "🌙", "🌙",
    "⭐", "⭐",
    "☀️", "☀️",
    "🪐", "🪐",
    "🚀", "🚀",
    "🌌", "🌌",
    "☄️", "☄️"
  ];
  return [...initial].sort(() => Math.random() - 0.5);
});




const handleFlip = (index: number) => {
  if (isChecking || matchedIndices.has(index) || flippedIndices.has(index)) {
    return;
  }

  const newFlipped = new Set(flippedIndices)
  newFlipped.add(index)
  setFlippedIndices(newFlipped)

  if (newFlipped.size === 2){
    setIsChecking(true)
    setMoves((prev)=> prev + 1)

    const [firstIndex, secondIndex] = [...newFlipped]

    if (emojis[firstIndex] === emojis[secondIndex]){
      setMatchedIndices((prev)=>{
        const updated = new Set(prev)
        updated.add(firstIndex)
        updated.add(secondIndex)
        return updated
      })
      setFlippedIndices(new Set());
      setIsChecking(false);
    }
    else{
      setTimeout(()=>{
        setFlippedIndices(new Set())
        setIsChecking(false)
      }, 800)
    }
  }


}


const shuffle = () => {
  setFlippedIndices(new Set());
  setMatchedIndices(new Set());
  setIsChecking(false);
  setEmojis((prev) => [...prev].sort(() => Math.random() - 0.5));
  setMoves(0)
};

const isGameWon = matchedIndices.size === emojis.length;

  return {
    flippedIndices,
    matchedIndices,
    isChecking,
    moves,
    emojis,
    handleFlip,
    shuffle,
    isGameWon
  };
}