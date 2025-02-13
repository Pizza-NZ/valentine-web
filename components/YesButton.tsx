"use client";

import { useRouter } from "next/navigation";
import React from "react";

const YesButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/celebration");
  };
  return (
    <button
      onClick={handleClick}
      className="w-full border-2 py-2 bg-custom-purple 
    text-slate-50 rounded-xl bg-card text-card-foreground shadow
    hover:drop-shadow-lg"
    >
      ✓ Yes, I&apos;d love to!
    </button>
  );
};

export default YesButton;
