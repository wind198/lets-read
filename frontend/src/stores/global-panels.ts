import { create } from "zustand";
import { LEFT_PANEL_SIZES } from "../constants/sizes";

type IGlobalPanelStore = {
  leftPanelOpen: boolean;
  setLeftPanelOpen: (v: boolean) => void;
  leftPanelWidth: number;
};

export const useGlobalPanelStore = create<IGlobalPanelStore>((set, get) => ({
  leftPanelOpen: true,
  setLeftPanelOpen: (v: boolean) => set(() => ({ leftPanelOpen: v })),
  leftPanelWidth: get().leftPanelOpen
    ? LEFT_PANEL_SIZES.lgWidth
    : LEFT_PANEL_SIZES.smWidth,
}));
