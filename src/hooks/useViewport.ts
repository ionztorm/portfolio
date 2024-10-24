import type { TScreenSizes } from "@/lib/types";
import { useEffect, useState } from "react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config";

const twConfig = resolveConfig(tailwindConfig);
export const twScreens = twConfig.theme.screens;

const breakpoints = Object.fromEntries(
  Object.entries(twScreens).map(([key, value]) => [
    key,
    Number.parseInt(value.replace("px", ""), 10),
  ])
);

export function useViweport(breakpoint: TScreenSizes) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const bpVal = breakpoints[breakpoint];

      if (bpVal !== undefined) setIsMobile(window.innerWidth < bpVal);
      if (!bpVal) console.warn(`${breakpoint} is not defined`);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
}
