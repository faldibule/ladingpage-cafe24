import { Box, Button, Card, CardContent, CircularProgress, Container, Grid, Link, Stack, Typography } from '@mui/material';
import Page from '../components/Page';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import CustomCard from '../components/CustomCard';
import CustomAccordion from '../components/CustomAccordion';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API } from '../variable/API';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

export default function Article() {
  const navigate = useNavigate(  )
  const [article, setArticle] = useState()
  const [dataArticle, setDataArticle] = useState([])
  const [loading, setLoading] = useState(true)
  const [empty, setEmpty] = useState(false)
  const [params, setParams] = useState({
    type: '',
    limit: 4,
    page: 1
  })
  const getArticle = async (params) => {
    try {
        const res = await axios.get(`${API}article/fetch`, {
            params,
        })
        return res.data
    } catch (err) {
    } finally {
        setLoading(false)
    }
  }

  const getMoreArticle = async () => {
    setLoading(true)
    try {
        const newData = await getArticle({
            type: '',
            limit: 4,
            page: params.page + 1
        })
        const newArr = [...dataArticle, ...newData.data.data]
        setArticle(newData)
        setDataArticle([...newArr])
        setParams({
            ...params,
            page: params.page + 1
        })
    } catch (error) {
        
    }finally{
        setLoading(false)
    }
    
  }

  const youtubeParser = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };
  
  useEffect(() => {
    let mounted = true
    if(mounted){
      getArticle(params).then(res => {
        if(res.data.data.length == 0){
            setEmpty(true)
        }
        setArticle(res)
        setDataArticle(res.data.data)
      })
    }
    return () => mounted = false
  }, [])
  return (
    <Page title="Food Delivery .Within Building. Group Chat.">
      <Navbar type="article" />
      <Container sx={{ py: 12 }} id="Article">
        <Stack direction='row' sx={{ cursor: 'pointer' }} onClick={() => navigate('/')} >
            <Typography component='span'>
                <ArrowBack />
            </Typography>
            <Typography color="text.secondary">
                Kembali
            </Typography>
        </Stack>
        <Typography variant="h3" gutterBottom>
          Daftar Artikel
        </Typography>
        <Typography color="text.secondary">
          Berikut beberapa kemudahan yang bisa kamu dapatkan:
        </Typography>
        <Grid container spacing={3} mt={0}>
            {dataArticle.length > 0 && dataArticle.map((val, i) => {
                return (
                    <Grid key={i} item xs={12} md={4} sx={{ cursor: 'pointer' }} onClick={() => navigate(`/article/${val.slug}`)} >
                        <CustomCard
                            title={val.title}
                            src={val.type === 'video' ? `https://img.youtube.com/vi/${youtubeParser(val.video_url)}/0.jpg` : val.image_url}
                            description=""
                        />
                    </Grid>
                )
            })}
            {dataArticle.length === 0 && !empty &&
            <Grid item xs={12} md={12}>
                <CircularProgress />
            </Grid>
            }
            {empty &&
            <Grid item xs={12} md={12}>
                Artikel Kosong
            </Grid>
            }
            {article?.data.meta.last_page !== params.page ?
            <Grid item xs={12} md={12}>
                <Stack justifyContent='center'>
                    <LoadingButton onClick={getMoreArticle} loading={loading} variant='contained'>
                        Muat Lebih banyak
                    </LoadingButton>
                </Stack>
            </Grid>
        
            :
            null
            }
        </Grid>
      </Container>
      <Footer />
    </Page>
  );
}
