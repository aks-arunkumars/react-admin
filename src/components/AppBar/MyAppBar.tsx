
import { AppBar } from "react-admin";
import Typography from "@mui/material/Typography";


const MyAppBar = (props: any) => (
  <AppBar
    sx={{
      "& .RaAppBar-title": {
        flex: 1,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      },
    }}
    {...props}
    >
    
    <Typography
      variant="h6"
      color="inherit"
      style={{flex: 1,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden"}}
      id="react-admin-title"> Admin Panel : </Typography>

  </AppBar>
);

export default MyAppBar;
