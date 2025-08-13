import { introContent } from "../content";

export function IntroSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-1 lg:gap-16 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              {introContent.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">{introContent.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
