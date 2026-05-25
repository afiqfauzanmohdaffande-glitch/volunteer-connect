import { useState } from "react";
import ProfilePage from "./pages/ProfilePage";
import PenglibatanPage from "./pages/PenglibatanPage";
import AduanPage from "./pages/AduanPage";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function VolunteerApp() {
  const [activePage, setActivePage] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <Navigation activePage={activePage} setActivePage={setActivePage} />
        <Header />
        {activePage === "profile" && <ProfilePage />}
        {activePage === "penglibatan" && <PenglibatanPage />}
        {activePage === "aduan" && <AduanPage />}
        <Footer />
      </div>
    </div>
  );
}
