import "./globals.css";
import { Outfit, Ovo } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],weight: [ "400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],weight: [ "400"]
});

export const metadata = {
  title: "Fayaa - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">

<head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>

        
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
         overflow-x-hidden dark:bg-[#11001F] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
