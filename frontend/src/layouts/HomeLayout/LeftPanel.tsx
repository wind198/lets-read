import { Drawer } from "@mui/material";
import { getLeftPanelW, useGlobalPanelStore } from "../../stores/global-panels";

export default function LeftPanel() {
  const leftPanelWidth = useGlobalPanelStore(getLeftPanelW);

  return (
    <Drawer
      variant="permanent"
      hideBackdrop
      slotProps={{
        paper: { sx: { width: leftPanelWidth + "px" }, elevation: 2 },
      }}
    >
      Drawer
    </Drawer>
  );
}
