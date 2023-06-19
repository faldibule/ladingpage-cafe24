import { useEffect, useState } from 'react';
import { MenuRounded } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';

const menu = [
  { id: 'home', title: 'Home' },
  { id: 'feature', title: 'Promo' },
  { id: 'about', title: 'About' },
  { id: 'article', title: 'Article' },
];

export default function Navbar(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate()
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [drawer, setDrawer] = useState(false);
  const handleDrawer = (e, id) => {
    console.log(id)
    if (id !== undefined && id !== 'backdropClick') {
      setTimeout(() => {
        if(id === 'article'){
          navigate('/article')
        }else{
          document.getElementById(id).scrollIntoView({ behavior: 'smooth' }, true);
        }
      }, 100);
    }
    setDrawer(!drawer);
  };

  return (
    <AppBar
      position="fixed"
      color={!!props.type ? 'transparent' : scrollPosition > 10 ? 'inherit' : 'transparent'}
      sx={{ 
        transition: '0.2s', 
        boxShadow: scrollPosition < 10 && 'none',
        background: !!props.type ? 'linear-gradient(to right, #43cea2, #185a9d)' : null,
      }}
    >
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" py={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton onClick={handleDrawer}>
              <MenuRounded
                sx={{ display: { xs: 'flex', md: 'none' }, color: !!props.type ? 'inherit' : scrollPosition < 10 ? '#fff' : 'inherit' }}
              />
            </IconButton>
            <Drawer anchor="top" open={drawer} onClose={handleDrawer}>
              <Box sx={{ width: 'auto' }} role="presentation">
                <List>
                  {menu.map((value, index) => {
                    if(!!props.type){
                      return ;
                    }
                    return(
                    <ListItem key={index} disablePadding>
                      <ListItemButton onClick={(e) => handleDrawer(e, value.id)}>
                        <ListItemText primary={value.title} />
                      </ListItemButton>
                    </ListItem>
                    )
                  })}
                </List>
              </Box>
            </Drawer>
            {/* <Logo white={!!props.type ? true : !(scrollPosition > 10)} /> */}
            <Typography>Logo</Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menu.map((value, index) => {
              if(!!props.type){
                return ;
              }
              return (
                <Typography
                  key={index}
                  variant="body2"
                  fontWeight="bold"
                  component={Button}
                  color={!!props.type ? 'white' : scrollPosition > 10 ? 'inherit' : 'white'}
                  onClick={() => { 
                    if(value.id == 'article'){
                      navigate('/article')
                    }else if(document.getElementById(value.id) === null){
                      navigate('/')
                    }else{
                      document.getElementById(value.id).scrollIntoView({ behavior: 'smooth' }, true)
                    }
                  }}
                >
                  {value.title}
                </Typography>
              )
            })}
          </Stack>
          <Button
            variant="contained"
            color={!!props.type ? 'inherit' : scrollPosition > 10 ? 'primary' : 'inherit'}
            onClick={() => document.getElementById('download').scrollIntoView({ behavior: 'smooth' }, true)}
          >
            Download
          </Button>
        </Stack>
      </Container>
    </AppBar>
  );
}
