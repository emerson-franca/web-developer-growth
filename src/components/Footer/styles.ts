export const styles = {
  footer: "px-10 py-20 bg-black",
  social: "flex gap-5 mt-8",
  container: "max-w-7xl mx-auto ",
  content: "flex flex-col md:flex-row justify-between gap-8 relative",
  bgOverlay:
    "block md:hidden md:bg-[radial-gradient(50%_50%_at_50%_50%,_#1040FF_0%,_rgba(1,_1,_1,_0)_100%)] bg-opacity-2 absolute inset-0 opacity-20",
  nav: "flex flex-col flex-wrap md:flex-row gap-8 md:gap-[100px]",
  section: "flex-1",
  sectionTitle: "uppercase tracking-[0.2em] mb-5 text-light font-semibold",
  linksList: "space-y-4",
  link: "text-secondary hover:text-white transition-colors",
  bottomBar:
    "mt-16 flex flex-col  md:flex-row justify-between gap-4 text-secondary border-t border-separator pt-8",
  copyright: "text-light font-medium text-base",
  status: "flex items-center gap-2",
  statusDot: "w-2 h-2 rounded-full",
  statusText: "text-light font-medium text-success",
  helpText: "text-light mt-2 mb-5",
} as const;
