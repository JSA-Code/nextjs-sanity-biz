import Link from "next/link";
import ImageBox from "./ImageBox";
import type { SanityDocument } from "next-sanity";

export default function Contact({ data }: { data: SanityDocument }) {
  // console.log("CONTACT DATA:", data);
  // TODO should I add default values in object destruc or do {VAR || "DEFAULT TEXT"} in case one of them contains empty string?
  const {
    heading = "HEADING",
    subheading = "SUBHEADING",
    image = null,
    primaryButton = { label: "BUTTON1", link: "https://example.com" },
    secondaryButton = { label: "BUTTON2", link: "https://example.com" },
  } = data ?? {};
  return (
    <section id="contact-us">
      <div className="grid max-w-screen-xl mx-auto lg:gap-8 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6 lg:col-start-2">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {heading}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {subheading}
          </p>
          <Link
            href={primaryButton.link}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-lg font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            {primaryButton.label}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            href={secondaryButton.link}
            className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            {secondaryButton.label}
          </Link>
        </div>
        <ImageBox
          image={image}
          classesWrapper="hidden relative lg:mt-0 lg:col-span-5 lg:flex"
        />
      </div>
    </section>
  );
}