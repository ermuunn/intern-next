import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["cyrillic-ext", "cyrillic", "latin"] })

export const metadata = {
  title: "Датаком ХХК - Домэйн хост & Вэб үйлчилгээ",
  description: "Датаком ХХК - Домэйн хост & Вэб үйлчилгээ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} subpixel-antialiased`}>
        {children}
      </body>
    </html>
  );
}
