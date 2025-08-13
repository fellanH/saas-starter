import Image from "next/image";
import { forWhomContent } from "../content";

export function ForWhomSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            {forWhomContent.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {forWhomContent.images.map((image, index) => (
            <div
              key={index}
              className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={320}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
