import { Box } from '@mui/material';
import IPage from '../../ts/interfaces';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    padding: '1em',
    paddingLeft: 0
  }
}));

const MainLayout = ({ children }: IPage): JSX.Element => {
  const classes = useStyles();
  return (
    <div>
      <Box component="main" className={classes.main}>
        {children}
      </Box>
    </div>
  );
};

export default MainLayout;
