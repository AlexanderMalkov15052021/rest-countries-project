import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "store/provider";

import styles from './layout.module.scss';
import { MainHeader } from "modules";
import { PageSwitchTransition } from "services";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Страны мира",
  description: "Просмотры информации по странам в мире",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className={styles.headerContainer}>
            <MainHeader />
          </div>
          <div className={styles.mainContainer}>
            <PageSwitchTransition>
              {children}
            </PageSwitchTransition>
          </div>
        </Providers>
      </body>
    </html>
  );
}
