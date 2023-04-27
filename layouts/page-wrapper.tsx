"use client";

import {clsxm} from "../context/clsxm";
import { motion } from "framer-motion";


export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, paddingTop: '4.5rem', paddingBottom: '3rem' }}
    animate={{ opacity: 1, y: 0, paddingTop: '4.5rem', paddingBottom: '3rem' }}
    exit={{ opacity: 0, y: 20, paddingTop: '4.5rem', paddingBottom: '3rem' }}
    className={clsxm("min-h-screenHeightWithoutHeader", className)}
  >
    {children}
  </motion.div>
);
