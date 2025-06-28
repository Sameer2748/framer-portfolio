"use client";
import React from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

const Scales = () => {
  const { theme } = useTheme();

  const leftClasses = clsx(
    "absolute left-0 top-0 w-4 md:w-8 h-full",
    "bg-[size:10px_14px] bg-fixed z-10 transition-all duration-300 ease-in-out",
    theme === "dark" ? "border-x-[var(--pattern-fg)] bgpattern-dark" : "border-x-[var(--pattern-sm)] bg-pattern"
  );

  const rightClasses = clsx(
    "absolute right-0 top-0 w-4 md:w-8 h-full",
    "bg-[size:10px_14px] bg-fixed z-10 transition-all duration-300 ease-in-out",
    theme === "dark" ? "border-x-[var(--pattern-fg)] bgpattern-dark" : "border-x-[var(--pattern-sm)] bg-pattern"
  );

  return (
    <>
      <div className={leftClasses} />
      <div className={rightClasses} />
    </>
  );
};

export default Scales;
