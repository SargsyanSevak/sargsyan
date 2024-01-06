"use client";
import React, { useRef } from "react";
import { motion as m } from "framer-motion";
import { useInView } from "framer-motion";

interface BackInUpProps {
  children: React.ReactNode;
  dur?: any;
}

const BackInUp = ({ children, dur = 0.9 }: BackInUpProps) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <>
      <m.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: `all ${dur}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s`,
        }}
      >
        {children}
      </m.div>
    </>
  );
};

export default BackInUp;
