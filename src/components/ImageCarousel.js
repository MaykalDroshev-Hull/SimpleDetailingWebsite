import Image from './Image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/ImageCarousel.module.css'


const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <div className={styles.background}>
        <Slider className={styles.slider} {...settings}>
          <Image
            image1={'https://scontent.fric1-1.fna.fbcdn.net/v/t39.30808-6/329152021_657043842885280_284808803225267983_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ekr9agotVZ4AX-cUmId&_nc_ht=scontent.fric1-1.fna&oh=00_AfBNLT_bCcQAUnp5yOHvwytpTSy17maRUqKc8VvYKRyGLA&oe=6421D15A'}
            image2={"https://scontent.fric1-1.fna.fbcdn.net/v/t39.30808-6/329136637_1194695151405915_3751898109519339109_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Mj-hTr806hIAX_FMiWF&_nc_ht=scontent.fric1-1.fna&oh=00_AfAIv8pUweNhVF4vBD5dOtr5GRxSsmc4npmrZ0evRhibdw&oe=64224508"}
          />
          <Image
            image1={'https://scontent.fric1-1.fna.fbcdn.net/v/t39.30808-6/329152021_657043842885280_284808803225267983_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ekr9agotVZ4AX-cUmId&_nc_ht=scontent.fric1-1.fna&oh=00_AfBNLT_bCcQAUnp5yOHvwytpTSy17maRUqKc8VvYKRyGLA&oe=6421D15A'}
            image2={"https://scontent.fric1-1.fna.fbcdn.net/v/t39.30808-6/329136637_1194695151405915_3751898109519339109_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Mj-hTr806hIAX_FMiWF&_nc_ht=scontent.fric1-1.fna&oh=00_AfAIv8pUweNhVF4vBD5dOtr5GRxSsmc4npmrZ0evRhibdw&oe=64224508"}
          />
        </Slider>
      </div>
    </>
  );
};

export default ImageCarousel

