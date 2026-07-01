import { useEffect, useState } from "react";

interface BootScreenProps {
  onBootComplete: () => void;
}

const BootScreen = ({ onBootComplete }: BootScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {

    // Fade in screen
    const fadeInTimeout = setTimeout(() => {
      setOpacity(1);
    }, 300);

    // Start progress after fade in
    const progressStartTimeout = setTimeout(() => {
      setProgress(100);
    }, 800);

    // Fade out after progress finishes
    const fadeOutTimeout = setTimeout(() => {
      setOpacity(0);
    }, 3000);

    // Trigger onBootComplete after fade out
    const bootCompleteTimeout = setTimeout(() => {
      // Add class to body to show wallpaper
      document.body.classList.add("boot-complete");
      onBootComplete();
    }, 3500);

    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(progressStartTimeout);
      clearTimeout(fadeOutTimeout);
      clearTimeout(bootCompleteTimeout);
    };
  }, [onBootComplete]);

  return (
    <div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="flex flex-col items-center">
        {/* Apple Logo */}
        <div className="relative mb-8">
          <svg
            className="w-20 h-20 text-white"
            viewBox="0 0 1024 1024"
            fill="currentColor"
          >
            <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-150.5-35.6-77.1 1.1-147.7 46.4-187.3 117.4-81.3 144.2-20.7 355.9 57.4 472.3 38.5 55.8 83.9 118.2 143.9 115.9 58.1-2.2 79.8-36.9 149.6-36.9 69.9 0 90.1 36.9 151.3 35.6 62.5-1.3 102-56.4 140-112.5 43.6-64.6 61.7-127.8 62.7-131-1.4-.6-120.4-47.3-121.7-188.3zm-121.6-349.2c31.5-39.8 52.8-94.9 46.9-150.5-45.3 6-101.9 34.1-134.7 75.3-29.5 35.8-54.1 95.1-47.5 150.7 50.3 4.1 101.6-25.8 135.3-75.5z" />
          </svg>
          <div className="absolute inset-0 blur-md bg-white/30 rounded-full -z-10"></div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-48 h-0.5 bg-white/20 rounded-full overflow-hidden">
          {/* Progress Bar */}
          <div
            className="h-full bg-white rounded-full transition-all ease-in-out"
            style={{
              width: `${progress}%`,
              transitionDuration: "2000ms",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
