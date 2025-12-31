import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { CAROUSEL_SLIDES } from '@/lib/mockData'

export function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])

  return (
    <div className="overflow-hidden rounded-lg shadow-sm" ref={emblaRef}>
      <div className="flex">
        {CAROUSEL_SLIDES.map((slide) => (
          <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 aspect-[21/9] md:aspect-[3/1]">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
