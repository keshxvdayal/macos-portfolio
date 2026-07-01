import { Maximize, Minimize } from "lucide-react";
import { useState } from "react";

const FullscreenButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  return (
    <div className="group relative flex items-center">
      <button
        onClick={toggleFullscreen}
        id="fullscreen-btn"
        title="Toggle fullscreen"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all duration-200 hover:bg-white/20 hover:scale-105 active:scale-95"
      >
        {isFullscreen ? (
          <Minimize className="w-4 h-4" />
        ) : (
          <Maximize className="w-4 h-4" />
        )}
      </button>

      <span className="pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-md bg-black/70 px-2 py-1 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
        {isFullscreen ? "Exit fullscreen" : "Click for fullscreen experience"}
      </span>
    </div>
  );
};

export default FullscreenButton;