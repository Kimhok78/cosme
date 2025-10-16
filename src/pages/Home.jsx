import { useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:656,cw:1688,ch:1688,q:80,w:1688/iPPVFW7WMGFZgRXKa7Cwed.jpg",
  "https://nutrinormwellness.com/cdn/shop/files/sunscreen-lotion-spf-30-6.webp?v=1718186897&width=1946",
  "https://www.skincare.com/-/media/project/loreal/brand-sites/sdc/americas/us/articles/2023/august/22-matte-sunscreens/sunscreens-for-a-non-greasy-finish-hero-sdc-030923.jpg?cx=0.5&cy=0.5&cw=705&ch=529&blr=False&hash=5B44F3EC55691527E5A15E5E288FDB81",
  "https://www.instyle.com/thmb/-oJlybI6Q_u3YRT51p11D30V3Rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ins-mineral-sunscreens-apr-25-test-dr-jart-every-sun-day-face-spf-50-jjuliao-0367-a27c8bc2479248ceaa7614cce0e144e5.jpeg",
  "https://media6.ppl-media.com//tr:h-235,w-235,c-at_max,dpr-2,q-40/static/img/product/360686/dot-and-key-vitamin-c-e-super-bright-sunscreen-spf-50-pa-50-g-51_01_display_1742468431_05f280fc.jpg",
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (idx) => setActiveIndex(idx);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-6 items-center  mr-3 ml-3">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Natural beauty, modern formulas
          </h1>
          <p className="mb-4">
            Discover clean, effective skincare for everyday use.
          </p>
          <Link
            to="/product"
            className="inline-block bg-blue-600 px-4 py-2 rounded"
          >
            Shop Products
          </Link>
        </div>
        <div>
          <div className="relative w-full">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={src}
                    className="block w-full h-full object-cover"
                    alt={`Slide ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === idx ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                  aria-current={activeIndex === idx}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => goToSlide(idx)}
                ></button>
              ))}
            </div>
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center  cursor-pointer group focus:outline-none"
              onClick={prevSlide}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 dark:bg-blue-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-blue-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-blue-300 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center   cursor-pointer group focus:outline-none"
              onClick={nextSlide}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 dark:bg-blue-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-blue-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-blue-300 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
