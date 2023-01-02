import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import React from 'react';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
import {Button} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Link from 'next/link';

export default function Header({projects}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="relative"
      color={"transparent"}
    >
      <Toolbar sx={{display: 'flex'}}>
        <Link href={"/"} style={{textDecoration: 'none'}}>
          <Stack spacing={1} direction={"row"}>
            <img alt={"eisberg labs logo"}
                 src="https://www.eisberg-labs.com/assets/img/favicon-32x32.png"/>
            <Typography variant="h6"
                        noWrap
                        sx={{
                          mr: 2,
                          display: {xs: 'none', md: 'flex'},
                          textTransform: 'uppercase',
                          textDecoration: 'none'
                        }}>Eisberg Labs Reactive Components</Typography>
          </Stack>
        </Link>
        <Box sx={{flexGrow: 1}}></Box>
        <Box sx={{flexGrow: 0, display: 'flex', justifyContent: 'flex-end'}}>
          <Stack direction={"row"} spacing={3}>
            <Button variant={"text"} component={"a"} href={"https://www.eisberg-labs.com"}>About Us</Button>
            <Button variant={"text"} component={"a"} href={"https://www.amarjanica.com/blog"}>Blog</Button>
            <Button variant={"text"}
                    onClick={handleClickListItem}
                    endIcon={(!open) ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}>Components</Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}>
              {projects.map((option) => (
                <MenuItem
                  key={option}
                  component={"a"}
                  href={`${process.env.NEXT_PUBLIC_BASE}/${option}`}
                >{option}</MenuItem>
              ))}
            </Menu>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
