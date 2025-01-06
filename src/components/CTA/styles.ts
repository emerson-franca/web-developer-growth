export const styles = {
  section: "md:py-20 px-6 text-center bg-black md:bg-[#212121]",
  container: "max-w-[742px] mx-auto ",
  title:
    "md:text-5xl font-medium md:leading-[3rem] mb-4 text-4xl leading-[2.5rem]",
  preTitle: "text-light-blue font-medium text-sm mb-3",
  description:
    "text-secondary text-[#737373] leading-[1.35rem] text-lg font-medium mb-8 max-w-2xl mx-auto",
  buttonsContainer: "flex items-center justify-center gap-4",
  button: {
    base: "inline-flex items-center justify-center font-medium rounded-lg transition-colors",
    fluid: "w-full",
    appearance: {
      solid: {
        blue: "bg-blue-600 text-white hover:bg-blue-700",
        white: "bg-white text-black hover:bg-gray-100",
        black: "bg-black text-white hover:bg-gray-900",
      },
      outline: {
        blue: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
        white:
          "border-2 border-white text-white hover:bg-white hover:text-black",
        black:
          "border-2 border-black text-black hover:bg-black hover:text-white",
      },
      ghost: {
        blue: "text-blue-600 hover:bg-blue-50",
        white: "text-white hover:bg-white/10",
        black: "text-black hover:bg-black/10",
      },
    },
    size: {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-3",
      lg: "text-lg px-8 py-4",
    },
  },
} as const;
