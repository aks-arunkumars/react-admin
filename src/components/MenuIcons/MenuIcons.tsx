
import { DashboardMenuItem,Menu, MenuItemLink } from "react-admin";
import BookIcon from "@mui/icons-material/Book";
import PeopleIcon from "@mui/icons-material/People";

export const MenuIcons = (props: any) => (
  <Menu {...props}>
    <DashboardMenuItem />
    <MenuItemLink to="/posts" primaryText="Posts" leftIcon={<BookIcon />} />
    <MenuItemLink to="/users" primaryText="Users" leftIcon={<PeopleIcon />} />
  </Menu>
);
