import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

const CustomCard = (props) => {
  const { src, title, description, width = 300 } = { ...props };
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
};

export default CustomCard;
