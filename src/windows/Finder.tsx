import { WindowControls } from "@components/index";
import { Search } from "lucide-react";
import WindowWrapper from "@hoc/WindowWrapper";
import { locations } from "@constants/index";
import useLocationStore from "@store/location";
import clsx from "clsx";
import useWindowStore from "@store/window";
import type { FileItem, Location } from "@constants/types";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item: FileItem) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item as Location);
    if (item.fileType === "url" && item.href) {
      // Open GitHub links in new tab, others in Safari
      if (item.href.includes("github.com")) {
        return window.open(item.href, "_blank");
      }
      return openWindow("safari", item);
    }

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (name: string, items: (Location | FileItem)[]) => (
    <div>
      <h3>{name}</h3>

      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item as Location)}
            className={clsx(
              item.id === activeLocation?.id ? "active" : "not-active"
            )}
          >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-[450px]">
  <div className="sidebar h-full overflow-y-auto overscroll-contain">
    {renderList("Favorites", Object.values(locations))}
    {renderList("My Projects", locations.work.children)}
  </div>

  <ul className="content flex-1 h-full overflow-y-auto overscroll-contain">
    {activeLocation?.children.map((item) => (
      <li key={item.id} onClick={() => openItem(item)}>
        <img src={item.icon} alt={item.name} />
        <p>{item.name}</p>
      </li>
    ))}
  </ul>
</div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
