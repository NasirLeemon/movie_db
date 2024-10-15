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
          <div className="">
            <Header />
          </div>
          <main>
            <div className="container grid  gap-[3.5rem]">
              <div className="hidden md:block md:fixed ">
                <Sidebar />
              </div>
              <div className="" id="modal-root-content">
                <div className="overflow-auto md:ml-[218px]">{children}</div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
