import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MenuNavegation from "@/components/menu-navegation";

const dmSerif = localFont({ src: "../fonts/DMSerifText-Regular.ttf" });

export const metadata: Metadata = {
  title: "Brief Services",
  description: "This web is for services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerif.className} antialiased`}>
        <MenuNavegation
          pages={[
            { textLink: "Home", route: "." },
            { textLink: "Login", route: "Login" },
          ]}
        />
        <div className="bg-blue-50 h-[92dvh] flex flex-col justify-center items-center p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
