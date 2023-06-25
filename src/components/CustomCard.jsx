import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Rating, Stack, Typography } from '@mui/material';
function NumberFormat(bilangan, prefix) {
  const numberString = String(bilangan)
    .replace(/[^,\d]/g, '')
    .toString();
  const split = numberString.split(',');
  const sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{1,3}/gi);

  if (ribuan) {
    const separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] !== undefined ? `${rupiah},${split[1]}` : rupiah;
  return prefix === undefined ? rupiah : prefix === 'Rp' ? `Rp${rupiah}` : `${rupiah}%`;
}
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
  if(type == 'product'){
    return (
      <Card sx={{ height: '100%', cursor: 'pointer' }}>
        <CardContent>
          <Stack 
            direction={{ xs: 'column', md: 'column' }} 
            alignItems={{ xs: 'flex-start', md: 'flex-start' }} 
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
            <Typography sx={{ fontSize: '0.8rem' }}>{title}</Typography>
          </Stack>
          <Stack justifyContent='space-between'>
            <Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
              {NumberFormat(description, 'Rp')}
            </Typography>
            <Stack direction='row' spacing={0.2}>
              <Typography sx={{ fontSize: '0.8rem'}}>
                5
              </Typography>
              <Rating size='small' readOnly defaultValue={1} max={1} />
              <Divider orientation='vertical' sx={{ bgcolor: 'black', height: 10, alignSelf: 'center' }} />
              <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary', alignSelf: 'center'}}>
                Lihat 
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: { md: 400 } }}
          component="img"
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
