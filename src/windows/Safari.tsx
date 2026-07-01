import { useEffect, useRef, useState } from "react";
import { WindowControls } from "@components/index";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";
import type { FileItem } from "@constants/types";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  RotateCw,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const Safari = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { windows } = useWindowStore();
  const safariData = windows.safari?.data as FileItem | null;
  const [currentUrl, setCurrentUrl] = useState("https://www.google.com/webhp?igu=1");
  const [history, setHistory] = useState<string[]>(["https://www.google.com/webhp?igu=1"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputUrl, setInputUrl] = useState("https://www.google.com/webhp?igu=1");

  const normalizeUrl = (url: string) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return `https://${url}`;
    }

    return url;
  };

  const handleNavigate = (url: string) => {
    let targetUrl = normalizeUrl(url);

    if (targetUrl === history[currentIndex]) {
      handleRefresh();
      return;
    }

    const newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(targetUrl);
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
    setCurrentUrl(targetUrl);
    setInputUrl(targetUrl);
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setCurrentUrl(history[newIndex]);
      setInputUrl(history[newIndex]);
    }
  };

  const handleForward = () => {
    if (currentIndex < history.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setCurrentUrl(history[newIndex]);
      setInputUrl(history[newIndex]);
    }
  };

  const handleRefresh = () => {
    if (iframeRef.current) {
      iframeRef.current.src = currentUrl;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleNavigate(inputUrl);
    }
  };

  useEffect(() => {
    if (safariData?.href) {
      handleNavigate(safariData.href);
    }
  }, [safariData?.href]);

  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div id="window-header" className="flex-none">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className={`p-1 rounded ${currentIndex === 0 ? 'opacity-30 cursor-default' : 'hover:bg-gray-200 active:bg-gray-300'}`}
          >
            <ChevronLeft className="icon" />
          </button>
          <button
            onClick={handleForward}
            disabled={currentIndex === history.length - 1}
            className={`p-1 rounded ${currentIndex === history.length - 1 ? 'opacity-30 cursor-default' : 'hover:bg-gray-200 active:bg-gray-300'}`}
          >
            <ChevronRight className="icon" />
          </button>
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search flex-1 flex items-center bg-gray-100 rounded-md px-2 py-1">
            <Search className="icon w-6 h-6 text-gray-500 mr-2" />

            <input
              type="text"
              value={inputUrl}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              onMouseDown={(e) => e.stopPropagation()}
              placeholder="Search or enter website name"
              className="flex-1 bg-transparent outline-none text-sm select-text cursor-text"
            />

            <button onClick={handleRefresh} className="ml-2 hover:bg-gray-200 p-1 rounded">
              <RotateCw className="icon w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="flex-1 w-full h-full overflow-hidden relative">
        <iframe
          ref={iframeRef}
          id="safari-iframe"
          src={currentUrl}
          title="Safari Browser"
          className="w-full h-full border-none"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>
    </div>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
