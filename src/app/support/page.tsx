import { loadSupport } from "@/loader/loadQuery";
import { draftMode } from "next/headers";
import SupportPreview from "./SupportPreview";
import Support from "./Support";

export default async function SupportPage() {
  const initial = await loadSupport();

  return (
    <main className="mx-auto max-w-screen-2xl px-10 xl:px-16 mt-6 md:mt-12 space-y-16 md:space-y-20 lg:space-y-24 mb-16 sm:mb-36">
      {draftMode().isEnabled ? (
        <SupportPreview initial={initial} />
      ) : (
        <Support data={initial.data} />
      )}
    </main>
  );
}
