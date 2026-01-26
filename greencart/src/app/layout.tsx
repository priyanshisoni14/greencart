
import type { Metadata } from "next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import "./globals.css";
import Provider from "@/Provider";
import StoreProvider from "@/redux/StoreProvider";
import InitUser from "@/InitUser";




export const metadata: Metadata = {
  title: "greencart | 10 minutes grocery Delivery App",
  description: "10 minutes grocery Delivery App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-full min-h-screen bg-linear-to-b from-green-50 to-white" suppressHydrationWarning>
        <Provider>
          <StoreProvider>
          
        <InitUser/>
        
        {children}
          </StoreProvider>
        </Provider>
      </body>
    </html>
  );
}
