const base = {
  menuLink: "text-sm font-medium transition-colors hover:text-gray-300",
  menuLinkDefault: "text-[#969696] leading-[1.05rem]",
  menuLinkActive: "text-white leading-[1.05rem]",
} as const;

const dropdown = {
  menu: `
    md:absolute md:left-0 md:mt-2 md:w-48 md:bg-black md:border 
    md:border-separator md:rounded-md md:shadow-lg md:transition-all md:duration-200
    max-h-[calc(90vh-4rem)] overflow-y-auto
    scrollbar scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-600
    hover:scrollbar-thumb-gray-500
  `,
  item: "block py-2 text-sm text-[#969696] leading-[1.05rem] hover:text-white",
} as const;

const mobile = {
  menu: `
    md:hidden absolute left-0 right-0 top-full bg-black transition-all duration-300 h-[calc(100vh-4rem)]
    overflow-y-auto scrollbar scrollbar-thin scrollbar-track-gray-900 
    scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 z-10
  `,
  menuList:
    "flex flex-col md:flex-row gap-[1.25rem] md:gap-[2.75rem] w-full md:w-auto",
} as const;

const nav = {
  wrapper: "relative font-sans",
  container: "w-full mx-auto px-6 md:px-[72px] fixed top-0 bg-transparent z-50",
  inner: "flex items-center justify-between h-[70px] md:h-[90px]",
  desktopMenu: "hidden md:flex items-center gap-6",
  mobileButton: "md:hidden p-2",
  loginWrapper: "hidden md:inline-flex",
} as const;

const loginLink = {
  wrapper: "inline-flex items-center py-2",
  link: "inline-flex items-center gap-2 px-1 py-2",
  text: "font-semibold",
} as const;

const mobileMenu = {
  wrapper: "px-6 py-4 space-y-4",
  loginContainer: "fixed bottom-0 left-0 right-0 pl-6",
} as const;

export const styles = {
  ...base,
  dropdown,
  mobile,
  nav,
  loginLink,
  mobileMenu,
} as const;
