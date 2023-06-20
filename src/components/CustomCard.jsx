import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';

const CustomCard = (props) => {
  const { src, title, description, width = 300, type = 'custom' } = { ...props };
  if(type == 'custom'){
    return (
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Stack 
            direction={{ xs: 'column', md: 'column' }} 
            alignItems={{ xs: 'center', md: 'flex-start' }} 
            spacing={2}
          >
            <Box 
              component='img'
              sx={{ 
                width: { xs: 300, md: width },
                aspectRatio: 3/2, 
                objectFit: 'contain'
              }}
              src={src} 
              alt="Illustration"
            />
            <Typography variant="h4">{title}</Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary" mt={2}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={src}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default CustomCard;
