import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Head from "next/head"; // Import Head for setting meta

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Database",
  description: "Created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title> {/* Use the metadata for the title */}
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={sora.className}>
        <div className="dark:bg-body bg-blaack dark:text-white text-dark">
          <div>
            <Header />
          </div>
          <main>
            <div className="container grid gap-[3.5rem]">
              <div className="hidden md:block md:fixed">
                <Sidebar />
              </div>
              <div id="modal-root-content">
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
