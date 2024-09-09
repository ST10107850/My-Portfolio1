import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import logoipsum1 from "../assets/Images/home/logoipsum1.svg";
import logoipsum2 from "../assets/Images/home/logoipsum2.svg";
import logoipsum3 from "../assets/Images/home/logoipsum3.svg";
import logoipsum4 from "../assets/Images/home/logoipsum4.svg";
import logoipsum5 from "../assets/Images/home/logoipsum5.svg";
import logoipsum6 from "../assets/Images/home/logoipsum6.svg";

export const Logoipsum = () => {
  return (
    <section className="logoipsum">
      <div className="container">
        <div className="flex flex-col gap-2">
          <hr className="hr1" />
          <h3 data-aos="zoom-in" className="mb-15">Technologies I Use</h3>
        </div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          totalSlides={6}
          isPlaying={true}
          infinite={true}
          visibleSlides={4}  // Number of logos visible at a time
        >
          <Slider className="logoipsum-slider" data-aos="zoom-in">
            <Slide index={0}><img src={logoipsum1} alt="logoipsum1" /></Slide>
            <Slide index={1}><img src={logoipsum2} alt="logoipsum2" /></Slide>
            <Slide index={2}><img src={logoipsum3} alt="logoipsum3" /></Slide>
            <Slide index={3}><img src={logoipsum4} alt="logoipsum4" /></Slide>
            <Slide index={4}><img src={logoipsum5} alt="logoipsum5" /></Slide>
            <Slide index={5}><img src={logoipsum6} alt="logoipsum6" /></Slide>
          </Slider>
        </CarouselProvider>
        <hr className="hr2" />
      </div>
    </section>
  );
};
