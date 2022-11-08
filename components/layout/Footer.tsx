import { Grid, Typography } from '@mui/material';
import Colors from '../../helpers/Colors';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  footerIcon: {
    '&:hover svg': {
      fill: Colors.mainOrange
    }
  }
});

const Footer = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid
      container
      sx={{
        backgroundColor: Colors.black,
        justifyContent: { xs: 'center', md: 'space-between' },
        px: { xs: 2, md: 8 }
      }}
      alignItems="center"
      py={4}
    >
      <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography color={Colors.white} fontSize={16}>
          Szymon Paszek
        </Typography>
        <Typography color={Colors.white} fontSize={16}>
          tel.: 502 059 434
        </Typography>
        <Typography color={Colors.white} fontSize={16}>
          biuro@improsilesia.pl
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{ textAlign: { xs: 'center', md: 'right' }, mt: { xs: 3, md: 0 } }}
      >
        <Grid
          container
          sx={{
            justifyContent: { xs: 'center', md: 'flex-end' }
          }}
        >
          <Grid item mx={2} className={classes.footerIcon}>
            <a href="tel:502059434">
              <svg width="36" fill="#fff" height="36" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
              </svg>
            </a>
          </Grid>

          <Grid item mx={2} className={classes.footerIcon}>
            <a href="mailto:biuro@improsilesia.pl">
              <svg width="36" fill="#fff" height="36" viewBox="0 0 24 24">
                <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
              </svg>
            </a>
          </Grid>

          <Grid item mx={2} className={classes.footerIcon}>
            <a href="https://www.facebook.com/Impro.Silesia/" target="blank">
              <svg width="36" fill="#fff" height="36" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </a>
          </Grid>

          <Grid item mx={2} className={classes.footerIcon}>
            <a href="https://www.instagram.com/improsilesia/" target="blank">
              <svg width="36" fill="#fff" height="36" viewBox="0 0 24 24">
                <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
              </svg>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
