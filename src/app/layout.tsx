import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import "@/styles/main.scss";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Colonees AI",
  description: "A Project Management Tool",
};

export default function RootLayout(props: PropsWithChildren<unknown>) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
