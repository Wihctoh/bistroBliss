import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/Header";

const dM_Sans = DM_Sans({
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

// export default function RootLayout({ children }) {
//     return (
//         <html lang='en'>
//             <body className={dM_Sans.className}>{children}</body>
//         </html>
//     );
// }

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${dM_Sans.variable} ${playfair_Display.variable}`}>
            <body>
                <Header />
                <div>{children}</div>
            </body>
        </html>
    );
}
