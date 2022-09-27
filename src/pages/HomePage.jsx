import { Container, Grid, Typography } from "@mui/material";

// import Swiper JS
// import Swiper styles
import "swiper/css";
import HomeCard from "../components/Playlists/HomeCard";
import usePlaylist from "../hooks/usePlaylist";

const HomePage = () => {
  const { recentPlay, favoritePlay, playlistArray } = usePlaylist();

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      {recentPlay.length === 0 &&
      favoritePlay.length === 0 &&
      playlistArray.length === 0 ? (
        <Typography variant="h2">
          No Content Here. Please New Playlist
        </Typography>
      ) : (
        <>
          {/* <div className="ct_slider" style={{ height: "400px", display: "block" }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={true}
          navigation={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          style={{ height: "100%" }}
        >
          <SwiperSlide>
            <CardMedia
              component="img"
              height="100%"
              image={slide1}
              alt="Paella dish"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardMedia
              component="img"
              height="100%"
              image={slide2}
              alt="Paella dish"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardMedia
              component="img"
              height="100%"
              image={slide3}
              alt="Paella dish"
            />
          </SwiperSlide>
        </Swiper>
      </div> */}
          <section className="recentArea">
            {recentPlay.length > 0 && (
              <>
                <Typography className="heading" variant="h4">
                  Recent Playlists
                </Typography>

                <Grid container spacing={2}>
                  {recentPlay
                    .reverse()
                    .slice(0, 3)
                    .map((item) => (
                      <Grid
                        key={item.playlistId}
                        item
                        md={3}
                        lg={3}
                        xl={4}
                        xs={12}
                        sm={6}
                      >
                        <HomeCard item={item} />
                      </Grid>
                    ))}
                </Grid>
              </>
            )}
          </section>
          <section className="FavoriteArea">
            {favoritePlay.length > 0 && (
              <>
                <Typography className="heading" variant="h4">
                  Your All Favorite Playlists
                </Typography>

                <Grid container spacing={2}>
                  {favoritePlay
                    .reverse()
                    .slice(0, 3)
                    .map((item) => (
                      <Grid
                        key={item.playlistId}
                        item
                        md={3}
                        lg={3}
                        xl={4}
                        xs={12}
                        sm={6}
                      >
                        <HomeCard item={item} />
                      </Grid>
                    ))}
                </Grid>
              </>
            )}
          </section>
          <section className="FavoriteArea">
            {playlistArray.length > 0 && (
              <>
                <Typography className="heading" variant="h4">
                  Your Playlists
                </Typography>

                <Grid container spacing={2}>
                  {playlistArray
                    .reverse()
                    .slice(0, 3)
                    .map((item) => (
                      <Grid
                        key={item.playlistId}
                        item
                        md={3}
                        lg={3}
                        xl={4}
                        xs={12}
                        sm={6}
                      >
                        <HomeCard item={item} />
                      </Grid>
                    ))}
                </Grid>
              </>
            )}
          </section>
        </>
      )}
    </Container>
  );
};

export default HomePage;
