"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import TransitionComponent from "../context/Transition";
import { TransitionProvider } from "../context/TransitionContext";

export const TransWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
    <TransitionProvider>
  <div
    className={classNames("min-h-screenHeightWithoutHeader", className)}
  >
    <TransitionComponent>{children}</TransitionComponent>
     
  </div>
    </TransitionProvider>

);
