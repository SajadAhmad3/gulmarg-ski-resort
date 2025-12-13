import React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  topLine: string;
  heading: string;
  className?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ topLine, heading, className = "" }) => {
  return (
    <div className={cn("flex flex-col items-center w-full mb-10", className)}>
      <div className="flex items-center w-full justify-center gap-4 mb-3">
        <span className="h-[2px] w-24 md:w-40 bg-primary rounded"></span>
        <span className="uppercase text-primary font-semibold tracking-widest text-center text-lg md:text-xl">{topLine}</span>
        <span className="h-[2px] w-24 md:w-40 bg-primary rounded"></span>
      </div>
      <h2 className="font-bold md:font-extrabold text-2xl md:text-5xl text-center text-neutral-900 ">
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeading;
