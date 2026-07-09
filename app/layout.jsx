import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "VA Agency Sample — Find Reliable Virtual Assistants",
  description:
    "Helping businesses scale with skilled virtual professionals while creating meaningful remote career opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
