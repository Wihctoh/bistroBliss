import { DM_Sans } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const dmSans = DM_Sans({
    subsets: ["latin"],
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
