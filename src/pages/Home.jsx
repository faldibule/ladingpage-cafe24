import { Box, Card, CardContent, Container, Grid, Link, Stack, Typography } from '@mui/material';
import Page from '../components/Page';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import CustomCard from '../components/CustomCard';
import CustomAccordion from '../components/CustomAccordion';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API } from '../variable/API';

export default function Home() {
  const [promoBanner, setPromoBanner] = useState([])
  const [loading, setLoading] = useState(false)
  const [empty, setEmpty] = useState(false)
  const getDataPromoBanner = () => {
    axios.get(`${API}promotion/fetch`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`
        },
        params: {
            status: 'all',
            paginate: 0,
        }
    })
    .then(res => {
        setPromoBanner(res.data.data.data)
        // if(res.data.data.length === 0){
        //     setEmpty(true)
        // }else{
        //     setEmpty(false)
        //     setPromoBanner([...res.data.data])
        // }
        // setLoading(false)
    })
    .catch(err => {
    })
  }
  
  useEffect(() => {
    let mounted = true
    if(mounted){
      getDataPromoBanner()
    }
    return () => mounted = false
  }, [])
  return (
    <Page title="Food Delivery .Within Building. Group Chat.">
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
              <Typography variant="h2">Food Delivery.</Typography>
              <Typography variant="h2">Within Building.*</Typography>
              <Typography variant="h2">Group Chat.</Typography>
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
              <Typography variant="body2" mt={5}>
                * Baru melayani gedung The Tower - by Alam Sutera, Jakarta.
              </Typography>
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
      <Container sx={{ pt: 12 }} id="feature">
        <Typography variant="h3" align="center" gutterBottom>
          Promo Terbaru
        </Typography>
        <Typography color="text.secondary" align="center">
          Berikut beberapa promo yang sedang berlangsung :
        </Typography>
        <Grid container spacing={3} mt={0}>
          {promoBanner?.map((val, i) => {
            return (
              <Grid item xs={12} md={6} key={val.id}>
                <CustomCard
                  src={val.image_url}
                  title={val.name}
                  description={val.description}
                  width={1000}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
      <Container sx={{ pt: 12 }}>
        <Grid container alignItems="center" spacing={3} mb={3}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h3" gutterBottom>
              Order 1 Klik
            </Typography>
            <Typography color="text.secondary">
              Fitur ini memungkinkan pengguna untuk memesan makanan dari restoran atau penjual makanan yang terdaftar
              dalam aplikasi. Pengguna dapat menjelajahi menu, memilih makanan yang diinginkan, menambahkannya ke
              keranjang belanja, dan memproses pembayaran melalui aplikasi. Setelah itu, pesanan akan dikirim ke
              restoran atau penjual makanan untuk diproses dan diantar ke lokasi pengguna.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6} order={{ xs: 1, md: 2 }}>
            <img src="/static/illustrations/select.svg" alt="Order" width="100%" />
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={3} mb={3}>
          <Grid item xs={12} sm={8} md={6}>
            <img src="/static/illustrations/wallet.svg" alt="Order" width="100%" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Bayar Masih Manual
            </Typography>
            <Typography color="text.secondary">
              Fitur ini memungkinkan pemilik restoran atau penjual makanan untuk memasarkan dan menjual produk makanan
              mereka melalui aplikasi. Mereka dapat membuat profil bisnis, mengunggah menu makanan, mengatur harga,
              mengelola persediaan, dan menerima pesanan dari pelanggan. Fitur ini memberikan platform bagi pemilik
              bisnis makanan untuk memperluas jangkauan mereka dan meningkatkan penjualan.
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={3} mb={3}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h3" gutterBottom>
              Group Chat per Topik
            </Typography>
            <Typography color="text.secondary">
              Fitur ini memungkinkan pengguna untuk berpartisipasi dalam percakapan yang terfokus pada topik tertentu
              yang berkaitan dengan makanan. Misalnya, topik seperti "Resep dan Masakan Rumahan," "Restoran Terbaik di
              Kota," atau "Makanan Sehat dan Gizi." Pengguna dapat bergabung dengan talks yang menarik bagi mereka,
              mengajukan pertanyaan, memberikan saran, atau berbagi pengetahuan mereka.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6} order={{ xs: 1, md: 2 }}>
            <img src="/static/illustrations/chat.svg" alt="Order" width="100%" />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ pt: 12 }} id="faq">
        <CustomAccordion />
      </Container>
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
              Download aplikasi CeploX sekarang!
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
