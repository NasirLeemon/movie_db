import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] }); // Add this line

export const metadata = {
  title: "Movie Database",
  description: "Created with Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <div className="dark:bg-body bg-blaack dark:text-white text-dark">
          <Header />

          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar />
              {children}
            </div>
          </main>
          <div id="modal-root-content"></div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
