const appearances = {
  solid: {
    blue: "bg-[#1040FF] hover:bg-blue-700 text-white  border-transparent",
    white: "bg-white hover:bg-gray-100 text-gray-900  border-transparent",
  },
  ghost: {
    blue: "bg-transparent hover:bg-blue-600/10 text-blue-600 border-none",
    white: "bg-transparent hover:bg-white/10 text-white border-none",
  },
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-[14.5px]",
  lg: "px-8 py-4 text-lg",
};

export const styles = {
  base: "inline-flex items-center justify-center gap-2 rounded-lg border transition-colors font-semibold",
  appearance: appearances,
  size: sizes,
};
