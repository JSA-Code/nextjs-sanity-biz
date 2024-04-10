import type { SanityDocument } from "next-sanity";

export default function Price({ data }: { data: SanityDocument }) {
  // TODO can I give heading or pricingList a type?
  const {
    heading = "HEADING",
    subheading = "SUBHEADING",
    priceList = [
      {
        heading: "HEADING",
        subheading: "SUBHEADING",
        frequency: "/FREQUENCY",
        button: "BUTTON",
        price: "PRICE",
        featureList: ["F1", "F2", "F3", "F4", "F5"],
        _key: 123,
      },
    ],
  } = data ?? {};
  // console.log("DATA:", data);
  return (
    <section id="pricing">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {heading}
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          {subheading}
        </p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {/* Pricing Card */}
        {/* TODO is there a diff when I add const = pricingList.map() above rather than here? */}
        {priceList.map((item: SanityDocument) => (
          <PriceComp unit={item} key={item._key} />
        ))}
      </div>
    </section>
  );
}
// TODO update param types
function PriceComp({
  unit: {
    heading = "HEADING",
    subheading = "SUBHEADING",
    frequency = "FREQUENCY",
    button = "BUTTON",
    price = "PRICE",
    featureList = ["G1", "G2", "G3", "G4", "G5"],
  },
}: {
  unit: SanityDocument;
}) {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-zinc-900 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{heading}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {subheading}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
        <span className="text-gray-500 dark:text-gray-400">{frequency}</span>
      </div>
      {/* List */}
      <ul role="list" className="mb-8 space-y-4 text-left">
        {/* TODO use unique id since each item does not contain a _key */}
        {featureList.map((item: string, index: number) => (
          <FeatureComp feature={item} key={index} />
        ))}
      </ul>
      <a
        href="#"
        className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
      >
        {button}
      </a>
    </div>
  );
}

function FeatureComp({ feature }: { feature: string }) {
  return (
    <li className="flex items-center space-x-3">
      {/* Icon */}
      <svg
        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span>{feature}</span>
    </li>
  );
}