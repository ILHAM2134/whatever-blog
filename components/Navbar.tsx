import * as React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useAppContext } from "@/state/RootContext";
import { useRouter } from "next/router";
import Dropdown from "./small-components/Dropdown";
import Client from "@/sanity-config";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
  { name: "Recent Post", id: "#about" },
  { name: "Categories", id: "#projects" },
  { name: "Writers", id: "#training" },
  { name: "Login", id: "#experience" },
];

export default function Navbar(props: Props) {
  const router = useRouter();
  const [context, setContext] = useAppContext();
  const { window, isDarkMode, setIsDarkMode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [state, setState] = React.useState({
    categories: [],
    authors: [],
  });

  React.useEffect(() => {
    const getData = async () => {
      const authors = await Client.fetch(
        `*[_type == "author"]{name, "img": image.asset->url }`
      );
      const categories = await Client.fetch(
        `*[_type == "category"]{'name': title}`
      );

      console.log(authors);

      setState((prev) => ({
        ...prev,
        authors,
        categories,
      }));
    };

    getData();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        style={{
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: context.darkMode ? "black" : "rgba(175, 175, 175, 0.5)",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1100,
            width: "100%",
            display: {
              sm: "flex",
            },
            justifyContent: {
              xs: "space-between",
            },
            my: {
              xs: 0,
            },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => router.push("/")}
            sx={{
              mr: { xs: 2, sm: 0 },
              // display: { sm: "none" },
              fontSize: {
                xs: "1em",
                sm: "1.25em",
              },
              fontWeight: 700,
            }}
            style={{ color: isDarkMode ? "white" : "black" }}
          >
            <ShuffleIcon />
            Whatever Blog
          </IconButton>
          <Box
            sx={{
              gap: "7px",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <Button sx={{ fontSize: "1rem", ml: { md: 3 } }}>
              Recent Post
            </Button>
            <Dropdown
              label="Categories"
              sx={{ fontSize: "1rem", ml: { md: 3 } }}
              data={state.categories}
            />
            <Dropdown
              label="Writers"
              sx={{ fontSize: "1rem", ml: { md: 3 } }}
              data={state.authors}
            />
            <Button sx={{ fontSize: "1rem", ml: { md: 3 } }}>Login</Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: { xs: 1, sm: 0 }, display: { sm: "none" } }}
            style={{ color: isDarkMode ? "white" : "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ display: { xs: "none", sm: "block", fontSize: "1.5rem" } }}
          >
            <IconButton
              sx={{ ml: { md: 5 } }}
              style={{ color: isDarkMode ? "white" : "black" }}
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                setContext((prev: { darkMode: boolean }) => ({
                  ...prev,
                  darkMode: !prev.darkMode,
                }));
              }}
            >
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 200,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              <ShuffleIcon />
              MyPersonalWeb
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }} href={item.id}>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
