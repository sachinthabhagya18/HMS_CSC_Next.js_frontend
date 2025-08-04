
import Header from "@/component/comman/Header";
import Bottom from "@/component/comman/Bottom";
import Footer from "@/component/comman/Footer";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";




export const metadata = {
  title: "Hotel Management System",
  description: "Hotel Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Header />
        {children}
        <Footer/>
        <Bottom />
      </body>
    </html>
  );
}
