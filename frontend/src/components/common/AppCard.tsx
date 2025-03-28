import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

type IAppCardProps = PropsWithChildren<{
  title: string;
}>;
export default function AppCard(props: IAppCardProps) {
  return (
    <Paper
      sx={{
        p: 2,
      }}
    >
      <Stack alignItems={"center"} direction={"row"} sx={{ py: 1 }}>
        <Typography>{props.title}</Typography>
      </Stack>
      <Box className="card-content" sx={{ py: 1 }}>
        {props.children}
      </Box>
    </Paper>
  );
}
