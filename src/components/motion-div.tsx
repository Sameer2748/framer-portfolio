"use client";

import React from 'react'
import {motion, AnimationProps} from "motion/react"

const MotionDiv = (props:AnimationProps & {children?: React.ReactNode}) => {
  return (
    <motion.div {...props} />
  )
}

export default MotionDiv
