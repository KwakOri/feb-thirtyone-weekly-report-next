import { cva } from "class-variance-authority";

export const reportTabVariants = cva(`w-full py-2 font-bold`, {
  variants: {
    isActive: {
      true: "bg-white text-primary-95",
      false: "bg-primary-95 text-white hover:brightness-125",
    },
  },
});
