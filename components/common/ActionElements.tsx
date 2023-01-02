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
    border: `2px solid ${Colors.mainOrange}`,
    borderBottomWidth: '8px',
    borderRadius: '20px',
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
          md={6}
          sm={6}
          xs={12}
          sx={{ mt: { xs: 4, sm: 6, md: 8 }, px: 3 }}
        >
          <Grid item textAlign="center">
            <Card
              onClick={() => goTo(x?.actionPath)}
              className={classes.clickableCard}
              sx={{
                backgroundImage: !x.isOrange
                  ? 'none'
                  : `linear-gradient(${Colors.mainOrange}, ${Colors.lightOrange})`
              }}
            >
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
                    <Typography variant="h2" color={x.isOrange ? Colors.white : Colors.mainOrange}>
                      <span dangerouslySetInnerHTML={{ __html: x.mainText }} />
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <Typography
                      fontSize={16}
                      color={Colors.grey}
                      fontWeight={600}
                      textTransform="uppercase"
                    >
                      {x.secondaryText}
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
