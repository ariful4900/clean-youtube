import { CardMedia, Container } from "@mui/material";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import slide1 from "../assets/images/ct-slide-01.jpg";
import slide2 from "../assets/images/ct-slide-02.jpg";
import slide3 from "../assets/images/ct-slide-03.jpg";

const HomePage = () => {
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
          // modules={[navigation]}
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
    </Container>
  );
};

export default HomePage;
