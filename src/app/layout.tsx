import "./globals.css";
import { ReactNode } from "react";
import Shell from "@/components/Shell";
import { APP_NAME, APP_DESCRIPTION } from "./config";

export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="el" data-theme="dark">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
