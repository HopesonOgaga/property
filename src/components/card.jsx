export default function Card() {
  return (
    <section className=" w-full p-10   " >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl mx-auto mb-12">
        {/* Text */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="flex flex-col gap-4 text-left">
            <p className="text-2xl md:text-3xl font-semibold leading-snug">
              Go beyond <br /> expectations.
            </p>
            <p className="text-lg md:text-xl text-gray-700 tracking-wide">
              Grounded in trust, driven by expertise, and <br /> committed to
              excellence in every detail.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            className="w-full max-h-96 object-cover rounded-md shadow-md"
            src="/image/card.jpg"
            alt="Card"
          />
        </div>
      </div>
      {/* second */}
      <div className="flex  flex-col md:flex-row-reverse justify-between items-center gap-10 max-w-7xl mx-auto mb-12">
        {/* Text */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="flex flex-col gap-4 text-left">
            <p className="text-2xl md:text-3xl font-semibold leading-snug">
              Go beyond <br /> expectations.
            </p>
            <p className="text-lg md:text-xl text-gray-700 tracking-wide">
              Grounded in trust, driven by expertise, and <br /> committed to
              excellence in every detail.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            className="w-full max-h-96 object-cover rounded-md shadow-md"
            src="/image/card2.jpg"
            alt="Card"
          />
        </div>
      </div>
      {/* third  */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl mx-auto mb-12">
        {/* Text */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="flex flex-col gap-4 text-left">
            <p className="text-2xl md:text-3xl font-semibold leading-snug">
              Go beyond <br /> expectations.
            </p>
            <p className="text-lg md:text-xl text-gray-700 tracking-wide">
              Grounded in trust, driven by expertise, and <br /> committed to
              excellence in every detail.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            className="w-full max-h-96 object-cover rounded-md shadow-md"
            src="/image/card3.jpg"
            alt="Card"
          />
        </div>
      </div>
      {/* fourth */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 max-w-7xl mx-auto mb-12">
        {/* Text */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="flex flex-col gap-4 text-left">
            <p className="text-2xl md:text-3xl font-semibold leading-snug">
              Go beyond <br /> expectations.
            </p>
            <p className="text-lg md:text-xl text-gray-700 tracking-wide">
              Grounded in trust, driven by expertise, and <br /> committed to
              excellence in every detail.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            className="w-full max-h-96 object-cover rounded-md shadow-md"
            src="/image/card4.jpg"
            alt="Card"
          />
        </div>
      </div>
    </section>
  );
}
