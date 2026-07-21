import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Mitha Dwi Pranindya — Portfolio",
    template: "%s — Mitha Dwi Pranindya",
  },
  description:
    "Applied Data Science undergraduate with experience in machine learning, computer vision, IoT analytics, and data visualization.",
};

// Runs before paint to set the theme class, preventing a light/dark flash.
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = (stored === 'light' || stored === 'dark')
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    var lang = localStorage.getItem('lang');
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'id');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <AppProvider>
          <div className="min-h-screen bg-paper grid-paper flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
