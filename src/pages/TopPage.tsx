import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material";
import commonStyle from "../const/commonStyle";

export default function TopPage() {
  return (
    <ThemeProvider theme={commonStyle}>
      {/*AppBar*/}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            CANDY CHUPS Patisserie.
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
