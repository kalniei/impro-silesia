import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/dist/client/router';
import Colors from '../../helpers/Colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  main: {}
}));

interface IMenuObj {
  name: string;
  path: string;
  elements?: IMenuObj[];
}

const drawerWidth = 240;
const navItems: IMenuObj[] = [
  {
    name: 'Główna',
    path: 'https://improsilesia.pl',
    elements: []
  },
  {
    name: 'Na Scenie',
    path: 'https://improsilesia.pl/teatr_improwizowany',
    elements: []
  },
  {
    name: 'Szkoła',
    path: '/warsztaty',
    elements: [
      // {
      //   name: 'Zapisy',
      //   path: '/'
      // },
      // {
      //   name: 'Co? Po co?',
      //   path: '/'
      // },
      // {
      //   name: 'Opinie',
      //   path: '/'
      // },
      // {
      //   name: 'Trenerzy',
      //   path: '/'
      // },
      // {
      //   name: 'Kontakt',
      //   path: '/'
      // }
    ]
  },
  {
    name: 'Oferta',
    path: 'https://improsilesia.pl/oferta',
    elements: []
  },
  {
    name: 'Kontakt',
    path: 'https://improsilesia.pl/kontakt',
    elements: []
  }
];

const Navigation = (): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const goToPosition = (path: string | null) => {
    if (!path) return;
    //make routre later, when whole webpage is complete
    window.location.assign(path);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Button
                key={item.path}
                sx={{
                  fontSize: 16,
                  color: router?.asPath === item.path ? Colors.black : Colors.mainOrange,
                  mr: 2
                }}
                endIcon={item.elements && item.elements.length > 0 ? <KeyboardArrowDownIcon /> : ''}
                onClick={() => goToPosition(router?.asPath === item.path ? null : item.path)}
              >
                {item.name}
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }} id="back-to-top-anchor">
      <AppBar component="nav" color="simpleWhite">
        <Toolbar>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>

              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    sx={{
                      fontSize: 16,
                      color: router?.asPath === item.path ? Colors.black : Colors.mainOrange,
                      mr: 2
                    }}
                    endIcon={
                      item.elements && item.elements.length > 0 ? <KeyboardArrowDownIcon /> : ''
                    }
                    onClick={() => goToPosition(router?.asPath === item.path ? null : item.path)}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navigation;
