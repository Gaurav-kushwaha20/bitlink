
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata = {
  title: "Bitlinks - Your URL shortner",
  description: "Bitlinks shortener your URL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`text-black bg-purple-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
