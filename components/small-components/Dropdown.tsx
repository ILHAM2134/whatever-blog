import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Button, Divider, Menu, MenuItem } from "@mui/material";
import { MenuProps } from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/router";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

type DropdownProps = {
  label: string;
  sx: any;
  data: any[];
  type: string,
  callback?: any
};

export default function Dropdown({ label, sx, data, type, callback = console.log }: DropdownProps) {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const pushingTo = (id: string | number) => {
    callback()
    setAnchorEl(null);
    router.push(`/${type}/${id}`)
  };

  return (
    <div>
      <Button sx={sx} endIcon={<KeyboardArrowDownIcon />} onClick={handleClick}>
        {label}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {data.length != 0 &&
          data.map((item) => (
            <>
              <MenuItem onClick={() => pushingTo(item.id)} disableRipple>
                {item.name}
              </MenuItem>
              <Divider sx={{ my: 0 }} />
            </>
          ))}
      </StyledMenu>
    </div>
  );
}
