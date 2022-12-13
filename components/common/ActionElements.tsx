import { Grid, Box, Card, CardContent, Button, Typography } from '@mui/material';
import Router from 'next/router';
import Image from 'next/image';
import Colors from '../../helpers/Colors';
import { IActionObj } from '../../ts/interfaces';
import makeStyles from '@mui/styles/makeStyles';

interface PageProps {
  infoArray: IActionObj[];
}

const useStyles = makeStyles({
  clickableCard: {
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      marginTop: '-16px'
    }
  }
});

const ActionElements = ({ infoArray }: PageProps): JSX.Element => {
  const classes = useStyles();

  const goTo = (path: string) => {
    Router.push(path);
  };

  return (
    <Grid container>
      {infoArray.map((x: IActionObj, key: number) => (
        <Grid
          key={key}
          container
          justifyContent="center"
          item
          md={4}
          sm={6}
          xs={12}
          sx={{ mt: { xs: 4, sm: 6, md: 8 }, px: 3 }}
        >
          <Grid item textAlign="center">
            <Card onClick={() => goTo(x?.actionPath)} className={classes.clickableCard}>
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    <Image
                      src={`/img/icons/${x.imgName}.png`}
                      width="100px"
                      height="100px"
                      alt={x.imgName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="custom"
                      sx={{
                        textTransform: 'uppercase',
                        lineHeight: '1',
                        fontSize: { xs: 15, sm: 18 },
                        width: 240,
                        p: { xs: '7px', sm: '12px' }
                      }}
                    >
                      {x.text}
                    </Button>
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <Typography fontSize={16} color={Colors.grey} fontWeight={600}>
                      {x.actionText}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default ActionElements;
