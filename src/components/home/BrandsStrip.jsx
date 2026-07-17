import brands from "../../data/brands";
import SectionHeading from "../shared/SectionHeading";

export default function BrandsStrip() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="mb-10 text-center">Trusted Brands</SectionHeading>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
