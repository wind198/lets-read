import { Box } from "@mui/material";
import AppBar from "./HomeLayout/AppBar";
import { APP_BAR_H } from "../constants/sizes";
import LeftPanel from "./HomeLayout/LeftPanel";
import { Outlet } from "react-router";
import { useGlobalPanelStore } from "stores/global-panels";

export default function HomeLayout() {
  const leftPanelWidth = useGlobalPanelStore((s) => s.leftPanelWidth);

  return (
    <div className="home-layout">
      <LeftPanel />
      <AppBar />
      <Box
        component={"main"}
        sx={{
          mt: APP_BAR_H + "px",
          ml: leftPanelWidth + "px",
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
}
