import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <Typography
        sx={{ color: "red", position: "absolute", left: "12px", fontSize: {xs: '10px', md: "40px" ,lg: "50px"} , fontWeight: {xs: '900',md:"700",  lg: "700"} }}
      >
        VibeVision
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
