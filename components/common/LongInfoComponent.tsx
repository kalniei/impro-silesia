import { Grid, Box, Card, CardContent, Typography, Button } from '@mui/material';
import { ILongInformationObj } from '../../ts/interfaces';

interface PageProps {
  infoObj: ILongInformationObj;
  scrollTo: () => void;
}

const LongInfoComponent = ({ infoObj, scrollTo }: PageProps): JSX.Element => {
  return (
    <Card>
      <CardContent sx={{ p: { xs: 2, sm: 2, md: 4 } }}>
        {infoObj.title && (
          <Typography variant="h1">
            <span dangerouslySetInnerHTML={{ __html: infoObj.title }} />
          </Typography>
        )}
        <Grid container my={4}>
          <Grid item xs={12} md={6}>
            <img src={`/img/info/${infoObj.imgName}`} alt="" style={{ maxWidth: '100%' }} />
          </Grid>
          <Grid item xs={12} md={6} sx={{ pl: { sm: 0, md: 2 }, pt: { xs: 4, sm: 4, md: 0 } }}>
            <Box sx={{ fontSize: { xs: 16, sm: 20, md: 18, lg: 20 } }}>
              <span dangerouslySetInnerHTML={{ __html: infoObj.textHtml }} />
            </Box>
            {infoObj.buttonText && (
              <Button
                variant="custom"
                onClick={scrollTo}
                sx={{ padding: '8px 68px', textTransform: 'uppercase', marginTop: 4 }}
              >
                {infoObj.buttonText}
              </Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default LongInfoComponent;
