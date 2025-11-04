import { ThemeProvider as NextThemeProvider } from "next-themes"

const ThemeProvider = ({ children, ...props }: { children: React.ReactNode }) => {
  return (<NextThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    {...props}>
    {children}
  </NextThemeProvider>);
}

export default ThemeProvider;
