import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@constants/index";
import type { WindowConfig, FileItem, Location } from "@constants/types";

interface WindowStore {
  windows: WindowConfig;
  nextZIndex: number;
  openWindow: (windowKey: string, data?: FileItem | Location | null) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
  toggleMaximizeWindow: (windowKey: string) => void;
}

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey: string, data: FileItem | Location | null = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        win.isMaximized = false;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey: string) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
        win.isMaximized = false;
      }),

    focusWindow: (windowKey: string) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.zIndex = state.nextZIndex++;
      }),

    toggleMaximizeWindow: (windowKey: string) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isMaximized = !win.isMaximized;
      }),
  }))
);

export default useWindowStore;
