import type { Metadata } from "next";
import LABELS from "./constants/label";
import "./globals.css";
import NavigationBar from "./layout/navbar";

export const metadata: Metadata = {
  title: LABELS.SHOP_NAME,
  description: LABELS.DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>
        <div className="m-auto w-100 bg-gray-100 text-black border-4 min-w-full min-h-full">
          <header className="flex flex-col items-center min-w-screen bg-black justify-between px-4">
            <p className=" text-xl text-white font-extrabold uppercase">
              {LABELS.SHOP_NAME}
            </p>
            <form action="searchPage" className="gap-1">
              <input
                type="text"
                name="search"
                className="text-white w-auto rounded-sm px-2 capitalize"
              />
              <button
                className="h-6 my-3 bg-slate-500 text-white rounded-sm px-2 text-bold"
                type="submit"
              >
                Buscar
              </button>
            </form>
          </header>
          <nav className="text-center font-bold text-sm uppercase text-slate-950  bg-stone-50">
            <NavigationBar />
          </nav>
          <div className="flex items-center min-h-screen justify-center">
            {children}
          </div>
          <footer className="flex items-center justify-center font-mono bg-gray-50 text-black">
            {LABELS.FOOT_LABEL}
          </footer>
        </div>
      </body>
    </html>
  );
}
