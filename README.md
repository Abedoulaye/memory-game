# 🧠 Memory Match

A space-themed memory card matching game built with React and TypeScript.

## 🔴 Live Preview

Play the game here: [Live Demo](https://memory-game-gold-three-60.vercel.app/)

## 🎮 How to Play

Click cards to flip them over and reveal emojis. Find matching pairs to keep them face-up. Match all 8 pairs to win. Try to do it in as few moves as possible.

## ✨ Features

- **3D card flip animation** using CSS transforms
- **Move counter** to track your attempts
- **Glow effect** on matched pairs
- **Victory animation** when all pairs are found
- **Restart button** to shuffle and play again
- **Prevents double-clicking** during card comparison

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Abedoulaye/memory-game

# Navigate to the project
cd memory-match

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:5173`.

## 🛠️ Built With

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build tool

## 📁 Project Structure

```
src/
├── App.tsx          # Main game component and logic
├── main.tsx         # Entry point
└── index.css        # Tailwind imports
```

## 🧩 Key Concepts Demonstrated

- React state management with `useState`
- Immutable state updates with Sets
- CSS 3D transforms and `backface-visibility`
- Guard clauses for game logic
- Derived state (match count calculated from matched indices)
- Lazy state initialization for shuffled board

## 📝 License

This project is open source and available under the MIT License.