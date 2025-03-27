import {
  AppBar as MuiAppBar,
  Stack,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { APP_BAR_H } from "../../constants/sizes";

export default function AppBar() {
  const theme = useTheme();

  return (
    <MuiAppBar
      variant="elevation"
      position="fixed"
      sx={{ height: APP_BAR_H, zIndex: theme.zIndex.drawer }}
    >
      <Container maxWidth="lg" className="content-container" sx={{ height: 1 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems="center"
          height={1}
        >
          <div className="logo-section">
            <Typography fontWeight={"bold"}>Let's read</Typography>
          </div>
        </Stack>
      </Container>
    </MuiAppBar>
  );
}
