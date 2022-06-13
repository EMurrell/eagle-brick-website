import Image from 'next/image';

export default function Results() {
  return (
    <section className='flex flex-col w-full p-4 justify-evenly md:flex-row'>
      <Image
        src='/before-text.jpg'
        alt='before image'
        height={500}
        width={500}
      />
      <div></div>
      <Image src='/after-text.jpg' alt='after image' height={500} width={500} />
    </section>
  );
}
