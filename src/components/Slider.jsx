import ScrollCarousel from 'scroll-carousel-react';
import image1 from '../assets/photo-1.svg'
import image2 from '../assets/photo-2.svg'
import image3 from '../assets/photo-3.svg'

const images = [image1, image2, image3];

const Slider = () => {
  return (
    <ScrollCarousel className='mt-3 z-0' autoplay autoplaySpeed={4
    }>
      {images.map((image, i) => (
        <img key={i} src={image} alt="slider" className="h-[310px] object-cover" />
      ))}
    </ScrollCarousel>
  )
}

export default Slider
