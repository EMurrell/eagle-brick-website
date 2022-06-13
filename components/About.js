export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col justify-center w-full px-10 pt-6 font-sans font-medium md:pt-20 md:pb-8 "
    >
      <h1 className="pt-16 pb-8 font-serif text-4xl font-bold text-center md:text-5xl">
        YOUR BRICK TINTING SPECIALISTS
      </h1>

      <div className="flex self-center w-32 border-t-2 border-black"></div>

      <div className="flex flex-col justify-center py-6 text-xl text-center md:text-3xl lg:text-4xl">
        <p className="py-3 ">Over 14 Years Experience</p>

        <p className="py-3">Family Owned and Operated</p>

        <p className="py-3 pb-8 md:pb-12 ">Fully Licensed and Insured</p>
      </div>

      <div className="flex flex-col justify-center px-8 py-8 mt-8 text-xl font-bold text-center bg-white shadow-lg place-self-center md:text-2xl lg:text-3xl shadow-black">
        <h2>WE OFFER FREE ESTIMATES</h2>
      </div>
    </section>
  );
}

