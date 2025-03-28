import { create } from "zustand";
import { LEFT_PANEL_SIZES } from "../constants/sizes";

type IGlobalPanelStore = {
  leftPanelOpen: boolean;
  setLeftPanelOpen: (v: boolean) => void;
};

export const useGlobalPanelStore = create<IGlobalPanelStore>((set) => ({
  leftPanelOpen: true,
  setLeftPanelOpen: (v: boolean) => set(() => ({ leftPanelOpen: v })),
}));

export const getLeftPanelW = (state: IGlobalPanelStore) =>
  state.leftPanelOpen ? LEFT_PANEL_SIZES.lgWidth : LEFT_PANEL_SIZES.smWidth;
