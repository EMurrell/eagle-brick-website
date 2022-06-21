export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col justify-center w-full px-8 pt-6 font-sans font-medium md:pt-20 md:pb-8 "
    >
      <h1 className="pt-16 pb-4 font-serif text-4xl font-bold text-center md:text-5xl">
        A BRICK RESTORATION COMPANY
      </h1>
      <h3 className="pb-8 font-serif text-2xl font-bold text-center md:text-3xl lg:text-4xl">
        With Creative Options
      </h3>

      <div className="flex self-center w-32 border-t-2 border-black"></div>

      <div className="flex flex-col justify-center py-6 text-lg text-center md:text-xl lg:text-2xl">
        <p className="py-3 font-semibold">Over 20 Years Experience</p>

        <p className="py-3 font-semibold">Family Owned and Operated</p>

        <p className="pt-3 pb-8 font-semibold ">Fully Licensed and Insured</p>
        <div className="flex self-center w-32 border-t-2 border-black"></div>

        <p className="pt-6 pb-8 md:px-24 lg:px-54 xl:px-64">
          We specialize in the rehabilitation of brick structures older than two
          decades, that have deteriorated due to winter conditions, rain, and
          accumulation of moisture.
        </p>
      </div>

      <div className="flex flex-col justify-center px-8 py-8 mt-8 font-serif text-xl font-bold text-center bg-white shadow-lg place-self-center md:text-2xl lg:text-3xl shadow-black">
        <h2>WE OFFER FREE ESTIMATES</h2>
      </div>
    </section>
  );
}

