import { Layout } from "react-admin";
import MyAppBar from "../AppBar/MyAppBar";
import { MenuIcons } from "../MenuIcons/MenuIcons";


export  const PageLayout = (props: any) => <Layout {...props} menu={MenuIcons} appBar={MyAppBar} />;
