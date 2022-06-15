import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="flex flex-col justify-center w-full h-screen px-6 font-serif tracking-wider text-white bg-fixed bg-cover shadow-xl scroll-smooth bg-hero bg-norepeat md:px-16 lg:px-32">
      {/* <div className="flex mx-auto">
        <Image src="/logo-sq.png" alt="logo" height={500} width={500} />
      </div> */}
      <div className="flex flex-col self-center justify-center p-6 md:mt-4 max-w-max">
        <Image
          src="/eagle-png-2.png"
          alt="logo"
          width={320}
          height={240}
        ></Image>
        <h1 className="pt-4 pb-2 font-black text-center text-7xl md:text-8xl lg:text-9xl">
          EAGLE
        </h1>
        <h2 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">
          -BRICK & MASONRY-
        </h2>
        <h3 className="text-xl font-bold text-center md:text-2xl lg:text-3xl">
          est 2010
        </h3>
      </div>
      <Link href={"/#Contact"} passHref>
        <button className="py-4 mx-auto mb-8 font-sans text-lg font-bold text-white bg-transparent border-4 border-white shadow-lg lg:mb-4 px-7 hover:border-white hover:bg-neutral-200 hover:text-black lg:px-6 shadow-neutral-800 w-max md:text-xl lg:py-4 hover:text-highlight1">
          CONTACT US
        </button>
      </Link>
    </section>
  );
}

