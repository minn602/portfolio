import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image, { StaticImageData } from "next/image"

import Bacon1 from "../_assets/slides/bacon1.png"

const SwiperComponent = ({ slides }: { slides: StaticImageData[] }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} className="mt-7">
      {slides.map((s, i) => {
        return (
          <SwiperSlide key={i}>
            <Image src={Bacon1} alt="img" />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SwiperComponent
