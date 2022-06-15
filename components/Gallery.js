import Image from "next/image";

export default function Gallery() {
  return (
    <section id="Gallery" className="w-full">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full p-2 lg:w-1/2">
          <Image
            src="/after2.jpg"
            alt="photo of chimney repair"
            height={500}
            width={500}
            layout="responsive"
          />
        </div>
        <div className="w-full p-2 pt-0 lg:pt-2 lg:w-1/2">
          <Image
            src="/angle2.jpg"
            alt="photo of chimney repair"
            height={500}
            width={500}
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full p-2 pt-0 lg:w-1/2 lg:pt-2">
          <Image
            src="/atint.jpg"
            alt="photo of tinted bricks"
            height={500}
            width={500}
            layout="responsive"
          />
        </div>
        <div className="w-full p-2 pt-0 lg:pt-2 lg:w-1/2">
          <Image
            src="/4bricks.jpg"
            alt="photo of new bricks"
            height={500}
            width={500}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}
