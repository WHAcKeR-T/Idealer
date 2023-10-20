"use client";
import { ThemeProvider } from "next-themes";

const TP = ({children}) => {
  return <ThemeProvider attribute="class" themes={['light', 'dark']}>{children}</ThemeProvider>;
};

export default TP;
