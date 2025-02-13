"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/mystyle.module.css";

interface LoadingProps {
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      const cleanupTimer = setTimeout(() => {
        setShouldRender(false);
      }, 2000);

      return () => clearTimeout(cleanupTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50 ${
        isLoading ? "opacity-100 visible" : styles.fadeOut
      }`}
    >
      <div className="flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Loading;