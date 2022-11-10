import { Grid, Box, Typography, Avatar } from '@mui/material';
import Colors from '../../helpers/Colors';
import { IOpinionsObj } from '../../ts/interfaces';

const opinionsArr: IOpinionsObj[] = [
  {
    imgName: 'test',
    name: 'Tomasz Adamczewski',
    title: 'project manager',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odio animi sapiente tempore culpa obcaecati totam voluptate aperiam dolorum possimus rem, cupiditate itaque magnam sequi ducimus corporis, ut veniam ullam!'
  },
  {
    imgName: 'test',
    name: 'Barbara Janysek',
    title: 'psycholog',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odio animi sapiente tempore culpa obcaecati totam voluptate aperiam dolorum possimus rem, cupiditate itaque magnam sequi ducimus corporis, ut veniam ullam!'
  },
  {
    imgName: 'test',
    name: 'Kajetan Dobczyk',
    title: 'programista, freelancer',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odio animi sapiente tempore culpa obcaecati totam voluptate aperiam dolorum possimus rem, cupiditate itaque magnam sequi ducimus corporis, ut veniam ullam!'
  }
];

const TextOpinionsComponent = (): JSX.Element => {
  return (
    <Grid
      item
      xs={12}
      py={6}
      px={2}
      sx={{
        backgroundImage: `linear-gradient(${Colors.mainOrange}, ${Colors.lightOrange})`
      }}
    >
      <Box className="maxWidth">
        <Typography variant="h1" textAlign="center" color={Colors.white}>
          Opinie!!!
        </Typography>
        <Grid container>
          {opinionsArr.map((x: IOpinionsObj, key: number) => (
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
              <Grid container item textAlign="center">
                <Grid item xs={12}>
                  <Avatar
                    src={`/img/${x.imgName}.png`}
                    alt={x.imgName}
                    sx={{ width: '180px', height: '180px', margin: '0 auto' }}
                  />
                </Grid>
                <Grid item xs={12} mt={3}>
                  <Typography fontSize={16} fontWeight={600}>
                    {x.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography fontSize={16}>{x.title}</Typography>
                </Grid>
                <Grid item xs={12} mt={2}>
                  <Typography fontSize={16} color={Colors.white}>
                    "{x.content}"
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default TextOpinionsComponent;
