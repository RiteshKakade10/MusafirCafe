
import { useRef, useState } from "react";
import "./MusicPlayer.css";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function toggleMusic() {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Unable to play music:", error);
      }
    }
  }

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src="./Kaafi Hai Na.mp3"
        loop
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <button onClick={toggleMusic} className="music-button">
        <span>{isPlaying ? "Ⅱ" : "♫"}</span>
        {isPlaying ? "PAUSE MUSIC" : "PLAY MUSIC"}
      </button>
    </div>
  );
}

export default MusicPlayer;
