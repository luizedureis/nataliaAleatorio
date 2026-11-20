
import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  const celebrate = () => {
    setShowMessage(true);

    const duration = 8000;
    const end = Date.now() + duration;

    const colors = [
      "#ff69b4",
      "#ff1493",
      "#ffd700",
      "#ffffff",
      "#a855f7"
    ];

    const frame = () => {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.7 },
        colors
      });

      confetti({
        particleCount: 6,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.7 },
        colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Grandes explosões de fogos
    const interval = setInterval(() => {
      confetti({
        particleCount: 100,
        spread: 160,
        startVelocity: 45,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.5
        },
        colors
      });
    }, 900);

    setTimeout(() => clearInterval(interval), duration);
  };

  return (
    <main className="container">
      {!showMessage ? (
        <div className="intro">
          <h1>Papo de surpresa...</h1>

          <button onClick={celebrate}>
            Clique aqui ❤️
          </button>
        </div>
      ) : (
        <div className="message">
          <h1>NATÁLIA MUITO LINDA ❤️</h1>

          <p>
            ✨ Você é simplesmente maravilhosa! ✨
          </p>

          <div className="hearts">
            💖 💗 💕 💘 💝
          </div>
        </div>
      )}
    </main>
  );
}