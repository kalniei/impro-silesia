import { Box, Fab, useScrollTrigger, Fade, Button } from '@mui/material';
import IPage from '../../ts/interfaces';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from './Navigation';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  main: {}
}));

const MainLayout = ({ children }: IPage): JSX.Element => {
  const classes = useStyles();

  const ScrollTop = ({ children }: IPage) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
        '#back-to-top-anchor'
      );

      if (anchor) {
        anchor.scrollIntoView({
          block: 'center'
        });
      }
    };

    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
  };

  return (
    <div>
      <Navigation />
      <Box component="main" className={classes.main}>
        {children}
      </Box>

      <Footer />

      <ScrollTop {...children}>
        <Fab size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default MainLayout;
