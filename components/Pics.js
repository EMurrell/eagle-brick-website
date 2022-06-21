import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";

export default function Work() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="flex flex-col w-full py-2 overflow-hidden md:pb-4 bg-blueprint font-display text-neutral-900">
      <div className="flex flex-row justify-center py-2 mx-auto md:px-24 w-max">
        <div className="flex flex-row justify-center my-4">
          <button onClick={scrollPrev}>
            <ChevronLeftIcon className="w-10 h-10 mx-4 text-white bg-black" />
          </button>
          <h1 className="font-sans text-3xl font-bold text-center md:text-4xl lg:text-5xl">
            Portfolio
          </h1>
          <button onClick={scrollNext}>
            <ChevronRightIcon className="w-10 h-10 mx-4 text-white bg-black" />
          </button>
        </div>
      </div>

      <div className="flex overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row h-auto ">
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/chimney1.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/chimney2.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/chimney3.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/chimney4.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/scratch1.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/scratch2.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/scratch3.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/scratch4.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/scratch5.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image src="/carousel/side1.jpg" alt="" width={400} height={400} />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image src="/carousel/side2.jpg" alt="" width={400} height={400} />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image src="/carousel/side3.jpg" alt="" width={400} height={400} />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/stairs1.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/stairs2.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/stairs3.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/stairs4.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/carousel/stairs5.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image src="/carousel/truck1.jpg" alt="" width={400} height={400} />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image src="/carousel/truck2.jpg" alt="" width={400} height={400} />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image src="/carousel/truck3.jpg" alt="" width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
