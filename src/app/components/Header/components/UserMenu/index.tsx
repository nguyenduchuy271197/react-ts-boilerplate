import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { Fragment, useState } from "react";
import UserMenuList from "./UserMenuList";

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Fragment>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>

        <UserMenuList handleCloseUserMenu={handleCloseUserMenu} />
      </Box>
    </Fragment>
  );
};

export default UserMenu;
