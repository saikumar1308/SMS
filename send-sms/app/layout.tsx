import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "./providers";
import { getServerSession } from "next-auth";
import { Appbar } from "@/components/Appbar";

export const metadata: Metadata = {
  title: "SMS",
  description: "Developed by Sai",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body
        className={""}
      >
        <SessionProvider session={session}>
          <Appbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
