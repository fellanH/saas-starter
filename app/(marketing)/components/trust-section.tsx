import Image from "next/image";
import { trustContent } from "../content";

export function TrustSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {trustContent.title}
            </h2>
            <p className="mt-4 text-lg text-gray-700 font-semibold">
              {trustContent.subtitle}
            </p>
            <p className="mt-4 text-gray-600">{trustContent.body}</p>
            <p className="mt-6 font-semibold text-gray-800 text-lg">
              {trustContent.conclusion}
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <Image
                src={trustContent.image.src}
                alt={trustContent.image.alt}
                width={500}
                height={320}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
