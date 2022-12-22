import { Grid, Box, Card, CardContent, Typography, Button } from '@mui/material';

const VideoOpinions = (): JSX.Element => {
  return (
    <Grid item xs={12} py={6} px={2}>
      <Box className="maxWidth">
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            px={3}
            sx={{ mb: { xs: 4, mb: 6, lg: 6 }, textAlign: 'center' }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gds3SLQH-Qg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            px={3}
            sx={{ mb: { xs: 4, mb: 6, lg: 0 }, textAlign: 'center' }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KegvS2qlvIY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default VideoOpinions;
