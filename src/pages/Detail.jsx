import axios from 'axios';
import React from 'react';
import ArticleDetailComponent from './ArticleDetailComponent';
import { API } from '../variable/API';
import { useParams } from 'react-router-dom';
import Page from '../components/Page';
import Navbar from '../layouts/Navbar';
import { CircularProgress, Container, Grid, Stack, Typography } from '@mui/material';
import Footer from '../layouts/Footer';
import { ArrowBack } from '@mui/icons-material';

const Detail = () => {
  const { slug } = useParams();
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const getData = async (e) => {
    await axios
      .get(`${API}article/show/${slug}`)
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((xhr) => {
        // console.log(xhr.response);
      })
      .finally(() => {
        setLoading(false)
      })
      
  };
  React.useEffect(() => {
    getData();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Page title="Detail">
        <Navbar type="article" />
        <Container sx={{ py: 12 }} id="Article">
          {!loading ? 
              <ArticleDetailComponent data={data} />
              :
              <Grid container>
                  <Grid item xs={12} md={12}>
                      <Stack direction='row' justifyContent='center'>
                          <CircularProgress />
                      </Stack>
                  </Grid>

              </Grid>
          }
        </Container>
        <Footer />
    </Page>
  )
};

export default Detail;
