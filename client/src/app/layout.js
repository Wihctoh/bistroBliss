import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    style: "normal",
    variable: "--font-DM_Sans",
});
const playfair_Display = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    style: ["italic", "normal"],
    variable: "--font-Playfair_Display",
});

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={dmSans.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
