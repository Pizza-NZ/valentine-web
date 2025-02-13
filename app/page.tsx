import HeartImage from "@/components/HeartImage";
import Loading from "./loading";
import React from "react";
import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-custom-night">
      <Loading>
        <HeartImage width={200} height={200} />
      </Loading>
      <div className="flex-1 flex items-center justify-center">
        <InfoCard />
      </div>
    </div>
  );
}
