import { Button } from "@/components/ui/button";
import { ctaContent } from "../content";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold">{ctaContent.title}</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">{ctaContent.body}</p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href={ctaContent.buttons.primary.link}>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg px-8 py-6">
              {ctaContent.buttons.primary.text}
            </Button>
          </Link>
          <Link href={ctaContent.buttons.secondary.link}>
            <Button
              size="lg"
              variant="outline"
              className="text-lg rounded-full border-white text-white hover:bg-white hover:text-black px-8 py-6">
              {ctaContent.buttons.secondary.text}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
