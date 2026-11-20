
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import videoSrc from "./assets/videoplayback.mp4";
import "./App.css";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const videoRef = useRef(null);

  const celebrate = () => {
    setShowMessage(true);

    // Inicia o vídeo após o clique
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((error) => {
        console.log("Não foi possível iniciar o vídeo:", error);
      });
    }

    const colors = ["#ff69b4", "#ff1493", "#ffd700", "#ffffff", "#c084fc"];

    // Fogos de artifício
    const duration = 8000;
    const end = Date.now() + duration;

    const fireworks = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.65 },
        colors,
        startVelocity: 55,
      });

      confetti({
        particleCount: 4,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.65 },
        colors,
        startVelocity: 55,
      });

      if (Date.now() < end) {
        requestAnimationFrame(fireworks);
      }
    };

    fireworks();

    // Grandes explosões
    setTimeout(() => {
      confetti({
        particleCount: 180,
        spread: 120,
        origin: { x: 0.5, y: 0.45 },
        colors,
        startVelocity: 45,
      });
    }, 400);

    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { x: 0.3, y: 0.35 },
        colors,
      });
    }, 1500);
  };

  return (
    <main className="container">
      <div className="background-glow"></div>

      {!showMessage ? (
        <div className="intro">
          <div className="intro-heart">💗</div>
          <p className="subtitle">Uma pequena surpresa para você</p>
          <h1>Prepare-se...</h1>

          <button onClick={celebrate}>
            Abrir surpresa <span>❤️</span>
          </button>
        </div>
      ) : (
        <div className="celebration">
          <div className="top-decoration">✨ 💖 ✨</div>

          <h1>NATÁLIA LINDA</h1>

          <p className="message-subtitle">
            Porque você merece o mundo! ❤️
          </p>

          <div className="video-container">
            <div className="video-glow"></div>

            <video
              ref={videoRef}
              className="surprise-video"
              src={videoSrc}
              controls
              playsInline
              preload="auto"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>

          <p className="footer-message">
            Feito com carinho especialmente para você 💕
          </p>
        </div>
      )}
    </main>
  );
}
