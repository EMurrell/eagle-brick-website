import Image from "next/image";
import { CheckIcon } from "@heroicons/react/outline";

export default function Services() {
  return (
    <section
      id="Services"
      className="py-24 -mt-16 overflow-hidden font-sans text-white bg-center bg-cover bg-quote md:-mt-20 md:py-28 "
    >
      <div className="px-8 ">
        <div className="flex flex-col justify-center ">
          <h1 className="pt-8 pb-8 text-3xl font-semibold text-center md:text-4xl">
            SERVICES:
          </h1>

          <div className="flex self-center w-24 border-t-2 border-white"></div>

          <div className="flex flex-col justify-center max-w-lg mx-auto mt-8">
            <ul className="max-w-3xl mx-auto text-xl font-medium leading-relaxed md:text-3xl ">
              <li className="pb-4 md:pb-8">&#x2713;&emsp;Brick Repairs</li>
              <li className="pb-4 md:pb-8">&#x2713;&emsp;Brick Tinting</li>
              <li className="pb-4 md:pb-8">&#x2713;&emsp;Chimney Repairs</li>
              <li className="pb-4 md:pb-8">&#x2713;&emsp;Masonry Repointing</li>
              <li className="pb-4 md:pb-8">
                &#x2713;&emsp;Chimney Replacement
              </li>
            </ul>
            <div className="mx-auto mt-16">
              <a href="tel:+1-416-888-7942">
                <button className="py-4 mx-auto text-lg font-bold bg-transparent border-4 border-white shadow-lg lg:mb-4 px-7 hover:border-white hover:bg-neutral-200 hover:text-black lg:px-6 shadow-neutral-800 w-max md:text-xl lg:py-4 hover:text-highlight1">
                  CALL NOW
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full px-12 pt-16 text-xl italic font-bold text-center lg:px-80 md:text-2xl lg:text-3xl md:px-52">
        &quot;We&apos;re Passionate About The Quality Of Our Work, And Our
        Friendly, Personalized Service.&quot;
      </div>
    </section>
  );
}

