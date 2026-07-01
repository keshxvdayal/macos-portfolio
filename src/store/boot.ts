import { create } from "zustand";

interface BootStore {
  isBooting: boolean;
  bootComplete: boolean;
  startBoot: () => void;
  completeBoot: () => void;
}

const useBootStore = create<BootStore>((set) => ({
  isBooting: true,
  bootComplete: false,

  startBoot: () => set({ isBooting: true, bootComplete: false }),

  completeBoot: () => set({ isBooting: false, bootComplete: true }),
}));

export default useBootStore;
