'use client';

import { motion, MotionProps } from 'framer-motion';

interface AnimatedSectionProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedSection({
  children,
  className = '',
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 0.5 },
  viewport,
  whileInView,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      viewport={viewport}
      whileInView={whileInView}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedDiv({
  children,
  className = '',
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 0.5 },
  viewport,
  whileInView,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      viewport={viewport}
      whileInView={whileInView}
      {...props}
    >
      {children}
    </motion.div>
  );
}
