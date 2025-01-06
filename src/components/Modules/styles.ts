export const styles = {
  section: "pb-20 bg-black",
  container: "max-w-7xl mx-auto px-6",
  header: "w-full mx-auto mb-16 flex justify-between",
  titleWrapper: "w-full md:w-[585px]",
  title: "text-[32px] leading-[38.4px] font-semibold mb-3",
  description: "text-white text-lg font-semibold",
  carouselWrapper: "overflow-hidden relative touch-pan-x",
  carousel:
    "flex will-change-transform cursor-grab active:cursor-grabbing select-none touch-none",
  card: "w-full flex-shrink-0 w-full md:w-1/2 lg:w-1/3 transition-all duration-300",
  cardInner:
    "bg-[#1A1A1A] rounded-2xl p-5 flex flex-col h-full group hover:bg-[#262626] transition-colors mx-3 touch-none",
  cardTitle: "text-xl font-medium mb-2.5",
  cardDescription: "font-medium text-secondary mb-2",
  cardButton:
    "mt-auto inline-flex items-center gap-5 text-link font-medium hover:text-blue-400 transition-colors",
  navigationWrapper: "hidden md:flex items-center justify-center gap-2 z-10",
  navigationButton:
    "w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-[#636363] transition-colors text-black",
} as const;
