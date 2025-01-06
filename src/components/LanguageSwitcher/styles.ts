export const styles = {
  wrapper: "relative",
  button:
    "flex  w-[211px] justify-between items-center gap-2 px-4 py-2 rounded-lg bg-[#1A1A1A] hover:bg-[#262626] transition-colors text-white",
  dropdown:
    "absolute bottom-full left-0 md:bottom-auto md:top-full mt-2 w-[211px] bg-[#1A1A1A] rounded-lg shadow-lg overflow-hidden",
  option:
    "px-4 py-2 text-secondary hover:bg-[#262626] hover:text-white transition-colors cursor-pointer",
  optionActive: "text-white bg-[#262626]",
} as const;
