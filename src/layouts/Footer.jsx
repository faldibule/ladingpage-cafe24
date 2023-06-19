import { Box, Link, Container, Divider, Grid, Stack, Typography } from '@mui/material';
// import { FacebookRounded, Instagram, Twitter } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Footer() {
  return (
    <Box component="footer" bgcolor="#101820" color="#fff" pt={10} pb={5}>
      <Container>
        <Grid container spacing={{ xs: 5, md: 3 }} pb={5}>
          <Grid item xs={12} md={3}>
            {/* <Logo white /> */}
            <Typography>Logo</Typography>
            <Typography variant="body2" mt={2.2}>
              Lorem, ipsum dolor.
              <br />
              Lorem, ipsum dolor.
              <br />
              Lorem ipsum dolor sit.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack spacing={1}>
              <Link component={RouterLink} to="" color="inherit" underline="none">
                Home
              </Link>
              <Link component={RouterLink} to="" color="inherit" underline="none">
                Promo
              </Link>
              <Link component={RouterLink} to="" color="inherit" underline="none">
                About
              </Link>
              <Link component={RouterLink} to="/article" color="inherit" underline="none">
                Article
              </Link>
              <Link component={RouterLink} to="" color="inherit" underline="none">
                Download
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack spacing={1}>
              <Link component={RouterLink} to="" color="inherit" underline="none">
                Tentang Kami
              </Link>
              <Link component={RouterLink} to="" color="inherit" underline="none">
                Kontak Kami
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack spacing={1}>
              <Link component={RouterLink} to="privacy-policy" color="inherit" underline="none">
                Kebijakan Privasi
              </Link>
              <Link component={RouterLink} to="terms-condition" color="inherit" underline="none">
                Syarat & Ketentuan
              </Link>
              {/* <Tooltip title="Instagram">
                <IconButton>
                  <Instagram />
                </IconButton>
              </Tooltip>
              <Tooltip title="Facebook">
                <IconButton>
                  <FacebookRounded />
                </IconButton>
              </Tooltip>
              <Tooltip title="Twitter">
                <IconButton>
                  <Twitter />
                </IconButton>
              </Tooltip> */}
            </Stack>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant="caption" color="text.secondary">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
