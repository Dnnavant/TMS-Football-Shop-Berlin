import "../styles/globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import SocialFloat from "@/components/SocialFloat";
import { LanguageProvider } from "@/contexts/LanguageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TMS Footballshop Berlin",
  description: "Ausrüstung, Service & Beratung — Berlin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="antialiased">
        <LanguageProvider>
          <AnnouncementBar />
          <Navbar />
          <SocialFloat />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
