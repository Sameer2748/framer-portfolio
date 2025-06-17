'use client';
import { motion } from "motion/react";
import type { MotionProps } from "motion/react";
import React from "react";

const MotionDiv = (props: MotionProps & { children?: React.ReactNode }) => {
  return <motion.div {...props}>{props.children}</motion.div>;
};

export default MotionDiv;
