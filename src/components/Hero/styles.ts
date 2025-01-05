export const styles = {
  section:
    "flex items-center bg-no-repeat bg-[url('/assets/bg-moises-developer.svg')] before:absolute before:inset-y-0 before:right-0 before:w-[30%] before:bg-gradient-to-l before:from-black before:to-transparent",
  backgroundWrapper: "absolute inset-10 overflow-hidden",
  backgroundImage: "object-cover",
  container: "relative max-w-7xl mx-auto px-6 py-24 md:py-32",
  content: "max-w-[600px]",
  heading:
    "md:text-[3.25rem] text-5xl leading-[3.25rem] font-medium mb-5 text-center",
  description: "text-gray-400 font-medium text-lg text-center",
  tryNowSection: "py-10",
  tryNowText: "text-sm text-gray-400 mb-3",
  playerWrapper:
    "flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-[#262626]",
  playButton:
    "flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-100 transition-colors",
  waveformContainer: "flex-grow",
  waveform: "w-full h-8 rounded-lg overflow-hidden",
  waveformImage:
    "w-full h-full bg-[url('/images/waveform.svg')] bg-repeat-x bg-center opacity-40",
  separator: "w-[1px] h-[52px] bg-[#1D1D1D]",
  uploadButton:
    "w-[101px] text-sm font-medium text-white/60 hover:text-white transition-colors",
  buttonsContainer: "flex flex-row align-center justify-center gap-3",
} as const;
