import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from '../../styles/Component Styles/ImageCarousel.module.css'

const ImageCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className={styles.container}>
        <Slider {...settings}>
          <div className={styles.image}>
            <img src={'https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/305090968_130976912995325_8042436427608708772_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=f66FwSDkCDAAX8d81sO&_nc_ht=scontent-iad3-1.xx&oh=00_AfAvDECDf780ircH83XagTa8ggACOY7ezMkAB9YjRWBMgQ&oe=6427FEC3'} />
          </div>
          <div className={styles.image}>
            <img src={'https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/289083021_102337689192581_6232133593280772778_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=d6HwVnZiaywAX-yXGdW&_nc_ht=scontent-iad3-1.xx&oh=00_AfCl_kD4DRUXFeXYk_FtuhBlwVWUah-G2OcTb1T3ykIA1g&oe=64267507'} />
          </div>
          <div className={styles.image}>
            <img src={'https://scontent.fric1-1.fna.fbcdn.net/v/t39.30808-6/288865820_102335702526113_2122491005311755448_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=mU5me6hZRHEAX-FBAMH&_nc_ht=scontent.fric1-1.fna&oh=00_AfAu4Q3Dzgkr_eAa95yy2PvnR8_Q7jl4I27OEheBTA3E7g&oe=64273240'} />
          </div>
          <div className={styles.image}>
            <img src={'https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/301468514_128831176543232_846748622890846474_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JvSfeIVlmNQAX-GJXJy&_nc_oc=AQnE0LzY-1--GcwWlCDBo8A-GHYhqk90X0gRMvbrLMThRGO54MSBA33Biv7YCOAn7tpIRVfbQ8wmsl-iERZa0cRz&_nc_ht=scontent-iad3-1.xx&oh=00_AfDsx3kwsUSSZ1wnPBTkhWwK3y1eJyfJKl_xjX-hbcnHqA&oe=642748B8'} />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ImageCarousel

