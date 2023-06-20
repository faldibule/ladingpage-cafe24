import { Box, Link, Container, Divider, Grid, Stack, Typography, Tooltip, IconButton } from '@mui/material';
// import { FacebookRounded, Instagram, Twitter } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../components/Logo';
import { API } from '../variable/API';
import React from 'react';
import { FacebookRounded, Instagram, Twitter, YouTube } from '@mui/icons-material';
import axios from 'axios';

export default function Footer() {
  const [setting, setSetting] = React.useState();
   const getSetting = async () => {
      await axios
         .get(`${API}setting`)
         .then((res) => {
            setSetting(res.data.data);
         })
         .catch((err) => {
            // console.log(err.response);
         });
   };
   React.useEffect(() => {
    let mounted = true
    if(!mounted) return
    getSetting();
    return () => mounted = false 
  }, []);
  return (
    <Box component="footer" bgcolor="#101820" color="#fff" pt={10} pb={5}>
      <Container>
        <Grid container spacing={{ xs: 5, md: 3 }} pb={5}>
          <Grid item xs={12} md={3}>
            {/* <Logo white /> */}
            <Typography>Logo</Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
                +62 {setting?.phone}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                  {setting?.email}
              </Typography>
              {setting?.address !== null && (
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {setting?.address}
                  </Typography>
              )}
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
            <Stack>
              <Link component={RouterLink} to="" color="inherit" underline="none">
                Social Media
              </Link>
              <Stack direction='row'>
                {setting?.fb_status !== 0 && (
                  <Tooltip title="Facebook" sx={{ ml: -1 }}>
                      <IconButton component={Link} href={setting?.fb} target="_blank">
                        <FacebookRounded fontSize="small" />
                      </IconButton>
                  </Tooltip>
                )}
                {setting?.ig_status !== 0 && (
                  <Tooltip title="Instagram">
                      <IconButton component={Link} href={setting?.ig} target="_blank">
                        <Instagram fontSize="small" />
                      </IconButton>
                  </Tooltip>
                )}
                {setting?.tw_status !== 0 && (
                  <Tooltip title="Twitter">
                      <IconButton component={Link} href={setting?.tw} target="_blank">
                        <Twitter fontSize="small" />
                      </IconButton>
                  </Tooltip>
                )}
                {setting?.yt_status !== 0 && (
                  <Tooltip title="YouTube">
                      <IconButton component={Link} href={setting?.yt} target="_blank">
                        <YouTube fontSize="small" />
                      </IconButton>
                  </Tooltip>
                )}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack spacing={1}>
              <Link component={RouterLink} to="privacy-policy" color="inherit" underline="none">
                Kebijakan Privasi
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
