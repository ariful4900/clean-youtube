import { CardMedia, Container, Grid, Typography } from "@mui/material";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import slide1 from "../assets/images/ct-slide-01.jpg";
import slide2 from "../assets/images/ct-slide-02.jpg";
import slide3 from "../assets/images/ct-slide-03.jpg";
import HomeCard from "../components/Playlists/HomeCard";
import usePlaylist from "../hooks/usePlaylist";

const HomePage = () => {
  const { recentPlay, favoritePlay, playlistArray } = usePlaylist();

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <div className="ct_slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={true}
          navigation={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <CardMedia
              component="img"
              height="300"
              image={slide1}
              alt="Paella dish"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardMedia
              component="img"
              height="300"
              image={slide2}
              alt="Paella dish"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardMedia
              component="img"
              height="300"
              image={slide3}
              alt="Paella dish"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <section className="recentArea">
        <Typography variant="h4">Recent Playlists</Typography>
        {recentPlay.length === 0 ? (
          <Typography>Sorry! Recently You don't Visit Any Playlists</Typography>
        ) : (
          <Grid container spacing={2}>
            {recentPlay.slice(0, 3).map((item) => (
              <Grid key={item.playlistId} item md={4}>
                <HomeCard item={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </section>
      <section className="FavoriteArea">
        <Typography variant="h4">Your All Favorite Playlists</Typography>
        {favoritePlay.length === 0 ? (
          <Typography>Sorry! You don't have favorite Any Playlists</Typography>
        ) : (
          <Grid container spacing={2}>
            {favoritePlay.slice(0, 3).map((item) => (
              <Grid key={item.playlistId} item md={4}>
                <HomeCard item={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </section>
      <section className="FavoriteArea">
        <Typography variant="h4">Your Playlists</Typography>
        {playlistArray.length === 0 ? (
          <Typography>Sorry! You don't have Any Playlists</Typography>
        ) : (
          <Grid container spacing={2}>
            {playlistArray.slice(0, 3).map((item) => (
              <Grid key={item.playlistId} item md={4}>
                <HomeCard item={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </section>
    </Container>
  );
};

export default HomePage;
