import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Logo from "./components/Logo";
import NavList from "./components/NavList";
import UserMenu from "./components/UserMenu";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Logo />
          {/* Navlist */}
          <NavList />
          {/* User menu */}
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
