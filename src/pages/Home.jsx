import { Box, Card, CardContent, CircularProgress, Container, Grid, Link, List, ListItem, Stack, Typography } from '@mui/material';
import Page from '../components/Page';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import CustomCard from '../components/CustomCard';
import CustomAccordion from '../components/CustomAccordion';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API } from '../variable/API';
import Carousel from 'react-material-ui-carousel';

export default function Home() {
  const [promoBanner, setPromoBanner] = useState([])
  const [hightlight, setHightlight] = useState([])
  const [loading, setLoading] = useState(true)
  const [empty, setEmpty] = useState(false)
  const getDataPromoBanner = () => {
    axios.get(`${API}promotion/fetch`, {
        params: {
            status: 'all',
            paginate: 0,
        }
    })
    .then(res => {
        setPromoBanner(res.data.data.data)
    })
    .catch(err => {
    })
  }
  const getDataHightlightProduct = () => {
    axios.get(`${API}product_slider/fetch`)
    .then(res => {
      setHightlight(res.data.data)
    })
    .catch(err => {
    })
  }
  
  useEffect(() => {
    let mounted = true
    if(mounted){
      Promise.all([getDataHightlightProduct(), getDataPromoBanner()]).then(res => {
        setLoading(false)
      })
    }
    return () => mounted = false
  }, [])

  if(loading){
    return <CircularProgress />
  }
  return (
    <Page title="Cafe24">
      <Navbar />
      <Stack
        id="home"
        sx={{
          color: '#fff',
          //  background: '#185a9d',
          //  background: '-webkit-linear-gradient(to right, #43cea2, #185a9d)',
          background: 'linear-gradient(to right, #43cea2, #185a9d)',
        }}
      >
        <Container>
          <Grid container alignItems="center" justifyContent="center" pt={15} pb={10}>
            <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }} order={{ xs: 2, md: 1 }}>
              <Typography variant="h2">Terpercaya & Cepat</Typography>
              <Typography variant="subtitle2">
                Solusi terbaik untuk kebutuhan Anda. Kecepatan dalam setiap langkah dengan kepercayaan sebagai pondasi. Hubungi kami sekarang dan rasakan hasil yang cepat, efisien, dan terpercaya.
              </Typography>
              <Stack direction="row" justifyContent={{ xs: 'center', md: 'left' }} spacing={2} mt={5}>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.gojek.app&hl=id"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/static/badges/GooglePlay.svg" alt="Download di Google Play" width={150} />
                </Link>
                {/* <Link href="https://apps.apple.com/id/app/gojek/id944875099?l=id" target="_blank" rel="noreferrer">
                  <img src="/static/badges/AppStore.svg" alt="Download di Google Play" width={150} />
                </Link> */}
              </Stack>
            </Grid>
            <Grid item xs={12} sm={8} md={6} order={{ xs: 1, md: 2 }}>
              <img
                src="https://mockuuups-web.ams3.cdn.digitaloceanspaces.com/web/images/header-iphone-mockups-2.png"
                alt="Download on the App Store"
                width="100%"
              />
            </Grid>
          </Grid>
        </Container>
      </Stack>

      {/* Promo */}
      <Container sx={{ pt: 12 }} id="feature">
        <Typography variant="h3" align="center" gutterBottom>
          Promo Terbaru
        </Typography>
        <Grid container spacing={3} mt={0}>
          <Grid item md={12} xs={12}>
            <Carousel>
            {promoBanner?.map((val, i) => {
            return (
                <CustomCard
                  key={val.id}
                  src={val.image_url}
                  title={val.name}
                  description={val.description}
                  width={600}
                  type="not_custom"
                />
            )
          })}
            </Carousel>

          </Grid>
          
        </Grid>
      </Container>

      {/* Product hightlight */}
      <Container sx={{ pt: 12 }} id="feature">
        <Typography variant="h3" align="center" gutterBottom>
          Highlight Produk
        </Typography>
        <Grid container spacing={3} mt={0}>
            {hightlight?.map((val, i) => {
            return (
              <Grid item md={3} xs={12} key={val.id}>
                <CustomCard
                  src={val.product.image}
                  title={val.product.product_name}
                  description={val.product.price}
                  width={200}
                  type="product"
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>

      {/* About */}
      <Container sx={{ pt: 12 }} >
        <Grid container alignItems="center" spacing={3} mb={3}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h3" gutterBottom>
              Tentang Kami
            </Typography>
            <Typography sx={{ color: '#a8afad' }}>
            Klinik café 24 adalah perusahaan retailer kebutuhan café dan resto berupa minuman dan kopi yang berdiri sejak 2016. Memiliki konsep penjualan secara online dan sudah memiliki  beberapa lokasi untuk pick up barang yang terdekat dengan lokasi konsumen guna memenuhi kebutuhan  dengan cepat dalam pengiriman secara instan.
Sesuai visi dan misi perusahaan agar konsumen mendapatkan produk dengan cepat dan aman serta harga yang sesuai.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6} order={{ xs: 1, md: 2 }}>
            <img src="/static/illustrations/about-us.svg" alt="Order" width="100%" />
          </Grid>
        </Grid>
      </Container>

      {/* Keunggulan */}
      <Container sx={{ pt: 12 }} id="feature">
        <Typography variant="h3" align="center" gutterBottom>
          Keunggulan
        </Typography>
        <Grid container spacing={3} mt={0}>
          <Grid item md={4} xs={12}>
            <Stack sx={{ textAlign: 'center' }}>
              <Box 
                component='img'
                sx={{ 
                  width: { xs: 300, md: 400 },
                  aspectRatio: 3/2, 
                  objectFit: 'contain'
                }}
                src={"/static/illustrations/delivery2.svg"} 
                alt="Illustration"
              />
              <Typography variant='h4'>
                Pengiriman Fleksibel
              </Typography>
              <Typography color="text.secondary">
                Menyediakan beberapa lokasi pengiriman sesuai dengan lokasi yang  konsumen inginkan
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={4} xs={12}>
            <Stack sx={{ textAlign: 'center' }}>
              <Box 
                component='img'
                sx={{ 
                  width: { xs: 300, md: 400 },
                  aspectRatio: 3/2, 
                  objectFit: 'contain'
                }}
                src={"/static/illustrations/payment.svg"} 
                alt="Illustration"
              />
              <Typography variant='h4'>
                MULTI PAYMENT
              </Typography>
              <Typography color="text.secondary">
               Menyediakan berbagai pembayaran sesuai dengan kebutuhan konsumen
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={4} xs={12}>
            <Stack sx={{ textAlign: 'center' }}>
              <Box 
                component='img'
                sx={{ 
                  width: { xs: 300, md: 400 },
                  aspectRatio: 3/2, 
                  objectFit: 'contain'
                }}
                src={"/static/illustrations/24hours.svg"} 
                alt="Illustration"
              />
              <Typography variant='h4'>
                LAYANAN 24 JAM
              </Typography>
              <Typography color="text.secondary">
                Dapat diakses 24 jam secara online untuk pembelian.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      {/* <Container sx={{ pt: 12 }} id="faq">
        <CustomAccordion />
      </Container> */}

      {/* Download */}
      <Container sx={{ pt: 12 }} id="download">
        <Card
          sx={{
            mb: 10,
            color: '#fff',
            background: 'linear-gradient(to right, #43cea2, #185a9d)',
          }}
        >
          <CardContent sx={{ px: { xs: 1, md: 2 } }}>
            <Typography variant="h3" textAlign={{ xs: 'center', md: 'left' }}>
              Download aplikasi Cafe24 sekarang!
            </Typography>
            <Stack direction="row" justifyContent={{ xs: 'center', md: 'left' }} spacing={{ xs: 1, md: 2 }} mt={2}>
              <Link
                href="https://play.google.com/store/apps/details?id=com.gojek.app&hl=id"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/static/badges/GooglePlay.svg" alt="Download di Google Play" width={150} />
              </Link>
              {/* <Link href="https://apps.apple.com/id/app/gojek/id944875099?l=id" target="_blank" rel="noreferrer">
                <img src="/static/badges/AppStore.svg" alt="Download di Google Play" width={150} />
              </Link> */}
            </Stack>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                top: 20,
                right: 0,
                width: 800,
                height: 800,
                background:
                  'url(https://mockuuups-web.ams3.cdn.digitaloceanspaces.com/web/images/header-iphone-mockups-2.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </CardContent>
        </Card>
      </Container>

      <Footer />
    </Page>
  );
}
