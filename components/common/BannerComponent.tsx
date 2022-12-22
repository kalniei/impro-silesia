import { Grid, Box, Typography, Button } from '@mui/material';
import Colors from '../../helpers/Colors';
import { IBannerObj } from '../../ts/interfaces';

interface PageProps {
  bannerObj: IBannerObj;
  orangeButtonAction: () => void;
  whiteButtonAction: () => void;
}

const BannerComponent = ({
  bannerObj,
  orangeButtonAction,
  whiteButtonAction
}: PageProps): JSX.Element => {
  return (
    <Grid item xs={12} sx={{ backgroundColor: Colors.black, position: 'relative' }}>
      <img
        src={`/img/banners/${bannerObj.imgPath}`}
        alt={bannerObj.mainHeader}
        style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        <Grid container className="maxWidth" sx={{ pl: { xs: 4, sm: 6, md: 8 } }}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              color={Colors.mainOrange}
              sx={{ fontSize: { xs: 24, sm: 38, md: 50, lg: 60 } }}
            >
              {bannerObj.mainHeader}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              color={Colors.white}
              sx={{ fontSize: bannerObj.secondaryHeaderFont }}
            >
              {bannerObj.secondaryHeader}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
            <Typography
              variant="h3"
              textTransform="none"
              fontWeight="500"
              color={Colors.white}
              sx={{ fontSize: { xs: 14, sm: 20, md: 26, lg: 30 } }}
            >
              <span dangerouslySetInnerHTML={{ __html: bannerObj.bodyText }} />
            </Typography>
          </Grid>

          <Grid container sx={{ mt: { xs: 2, sm: 4, md: 8, lg: 16 } }}>
            <Grid item mr={6}>
              <Button
                variant="custom"
                onClick={orangeButtonAction}
                sx={{
                  textTransform: 'uppercase',
                  lineHeight: '1',
                  fontSize: { xs: 15, sm: 18 },
                  width: 240,
                  p: { xs: '7px', sm: '12px' }
                }}
              >
                {bannerObj.orangeButtonName}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="white"
                onClick={whiteButtonAction}
                sx={{
                  width: 240,
                  fontSize: 18,
                  p: '12px',
                  display: { xs: 'none', sm: 'inline-flex' }
                }}
              >
                {bannerObj.whiteButtonName}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default BannerComponent;
