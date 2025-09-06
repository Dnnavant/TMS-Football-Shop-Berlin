import "../styles/globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import SocialFloat from "@/components/SocialFloat";

export const metadata = {
  title: "TMS Footballshop Berlin",
  description: "Ausrüstung, Service & Beratung — Berlin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="antialiased">
        <AnnouncementBar />
        <Navbar />
        <SocialFloat />
        {children}
      </body>
    </html>
  );
}
