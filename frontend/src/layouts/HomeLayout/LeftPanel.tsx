import { Drawer } from "@mui/material";
import { useGlobalPanelStore } from "../../stores/global-panels";

export default function LeftPanel() {
  const leftPanelWidth = useGlobalPanelStore((s) => s.leftPanelWidth);

  return (
    <Drawer
      variant="permanent"
      hideBackdrop
      slotProps={{ paper: { sx: { width: leftPanelWidth + "px" } } }}
    >
      Drawer
    </Drawer>
  );
}
