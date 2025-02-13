"use client";
import React, { useEffect, useState } from "react";
import HeartImage from "@/components/HeartImage";

const Page = () => {
  const [showHearts, setShowHearts] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHearts(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-custom-night relative overflow-hidden">
      {showHearts && <FloatingHearts />}
      
      <div className="text-center z-10">
        <HeartImage width={300} height={300} />
        <h1 className="text-4xl font-bold text-custom-purple mb-6">
          Yay! You said Yes! ❤️
        </h1>
        <p className="text-xl text-gray-700 max-w-md mx-auto leading-relaxed">
          Thank you for making my day special! You&apos;re the best valentine I could ask for.
          Get ready for lots of hugs, kisses, love shaped pizza, and wonderful moments together!
        </p>
      </div>
    </div>
  );
};

interface HeartProps {
  id: number;
  left: string;
  delay: number;
  size: number;
}

const FloatingHearts = () => {
  const hearts: HeartProps[] = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 0.5,
    size: Math.random() * 20 + 10,
  }));

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 text-custom-purple animate-float-up"
          style={{
            left: heart.left,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </>
  );
};

export default Page;