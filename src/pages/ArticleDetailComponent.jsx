import React from "react";
import { Container, Typography, Box, Grid, CircularProgress, Breadcrumbs, Link } from "@mui/material";
import { DateFormat, TimeFormat, YoutubeParser } from "../components/Format";
const fontSize = { 
   xs: '0.7rem', 
   md:  '0.9rem', 
}
const CustomBreadcrumbs = ({ data }) => {
   return (
      <Breadcrumbs separator='>' aria-label="breadcrumb" sx={{ my: 2, fontSize }}>
         <Link underline="hover" color="inherit" href="/">
            Home
         </Link>
         <Link
            underline="hover"
            color="inherit"
            href="/article"
         >
            Article
         </Link>
         <Typography fontSize='inherit' color="text.primary">{data.title}</Typography>
      </Breadcrumbs>
   )
}

export default function ArticleDetailComponent({ data }) {
   return (
      <Container sx={{ flex: 1 }}>
         {data !== undefined ? (
            <>
            {data.type == 'article' ?
            <Grid container>
               <Grid item sm={1} md={2} />
               <Grid item xs sm={10} md={8}>
                  <Box sx={{ mt: 3, mb: 2 }}>
                     <CustomBreadcrumbs data={data} />
                     <Typography variant="h5" fontWeight="bold" mb={1}>
                        {data.title}
                     </Typography>
                     <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize }}>
                        <Typography variant="body2" color="text.secondary" fontSize='inherit'>
                           {DateFormat(data.created_at, "day")} | {TimeFormat(data.created_at)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontSize='inherit'>
                           Artikel
                        </Typography>
                     </Box>
                  </Box>
                  <img alt={data.title} src={data.image_url} width="100%" />
                  <Typography
                     variant="body1"
                     dangerouslySetInnerHTML={{
                        __html: data.content,
                     }}
                  />
               </Grid>
            </Grid>
            :
            <Grid container>
                <Grid item sm={1} md={2} />
                <Grid item xs sm={10} md={8}>
                <Box sx={{ mt: 3, mb: 2 }}>
                    <CustomBreadcrumbs data={data} />
                    <Typography variant="h5" fontWeight="bold" mb={1}>
                        {data.title}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize }}>
                        <Typography variant="body2" color="text.secondary" fontSize='inherit'>
                            {DateFormat(data.created_at, "day")} | {TimeFormat(data.created_at)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontSize='inherit'>
                            Tutorial
                        </Typography>
                    </Box>
                </Box>
                <iframe
                    width="100%"
                    height="450"
                    src={`https://www.youtube.com/embed/${YoutubeParser(data.video_url)}?autoplay=1`}
                    title={data.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <Typography
                    variant="body1"
                    dangerouslySetInnerHTML={{
                        __html: data.content,
                    }}
                />
                </Grid>
            </Grid>
            }
            </>
         ) : (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
               
            </Box>
         )}
      </Container>
   );
}
