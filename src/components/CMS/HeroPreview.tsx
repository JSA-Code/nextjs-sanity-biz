"use client";

import { HERO_QUERY } from "@/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import Hero from "@/components/Hero";
import type { SanityDocument } from "next-sanity";

export default function HeroPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(HERO_QUERY, {}, { initial });

  return data ? (
    <Hero data={data} />
  ) : (
    <div className="bg-red-100">No data found</div>
  );
}