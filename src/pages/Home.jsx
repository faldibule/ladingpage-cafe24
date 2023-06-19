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
              <Typography variant="h2">Lorem, ipsum dolor.</Typography>
              <Typography variant="h2">Lorem, ipsum.</Typography>
              <Typography variant="h2">Lorem, ipsum dolor.</Typography>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laudantium possimus, totam ipsum quisquam suscipit.
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
      <Container sx={{ pt: 12 }} id="about">
        <Grid container alignItems="center" spacing={3} mb={3}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h3" gutterBottom>
              Lorem, ipsum dolor.
            </Typography>
            <Typography color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus ipsam, minima iusto suscipit repellat cum nulla magni possimus quo odio? Fugit voluptatum, ex quae in temporibus corrupti quam quaerat repellendus ipsum, id eveniet quisquam sint blanditiis ipsa officia quasi est qui voluptatem? Eveniet sit libero impedit dicta corporis. Voluptates?
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
              Lorem, ipsum dolor.
            </Typography>
            <Typography color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolores assumenda at quisquam repellat repellendus quas alias dolorum ex, culpa ipsam in iusto. Commodi quas odio nobis architecto facilis dolorum, in quaerat dignissimos libero fugit reiciendis, atque, doloremque ratione! Omnis at ea, impedit debitis qui ad dolore aspernatur ipsa porro.
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={3} mb={3}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h3" gutterBottom>
              Lorem ipsum dolor sit amet.
            </Typography>
            <Typography color="text.secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sunt illo ducimus! Officiis maiores dolor porro aliquid assumenda similique consectetur repudiandae, qui velit? Voluptatum explicabo ex hic qui consequatur dicta a sed? Veniam a quis dignissimos? A laborum illum ullam fugit facilis, rerum numquam aliquid dolor veritatis soluta, maxime ex.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6} order={{ xs: 1, md: 2 }}>
            <img src="/static/illustrations/chat.svg" alt="Order" width="100%" />
          </Grid>
        </Grid>
      </Container>
      {/* <Container sx={{ pt: 12 }} id="faq">
        <CustomAccordion />
      </Container> */}
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
