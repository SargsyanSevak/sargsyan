"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export default function index({ children }: any) {
  const magnetic = useRef<any>(null);
  const isMobileOrLaptop = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: isMobileOrLaptop ? "elastic.out(0, 0.3)" : "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: isMobileOrLaptop ? "elastic.out(0, 0.3)" : "elastic.out(1, 0.3)",
    });

    magnetic.current.addEventListener("mousemove", (e: any) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    });
    magnetic.current.addEventListener("mouseleave", (e: any) => {
      xTo(0);
      yTo(0);
    });
  }, [isMobileOrLaptop]);

  return React.cloneElement(children, { ref: magnetic });
}
