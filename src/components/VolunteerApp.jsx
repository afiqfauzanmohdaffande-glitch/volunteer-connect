import { useState } from "react";
import ProfilePage from "./pages/ProfilePage";
import PenglibatanPage from "./pages/PenglibatanPage";
import AduanPage from "./pages/AduanPage";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import ImpactTracker from "./ImpactTracker";
import ARTraining from "./ARTraining";
import MentalHealthCheckIn from "./MentalHealthCheckIn";
import BlockchainCertificate from "./BlockchainCertificate";

export default function VolunteerApp() {
  const [activePage, setActivePage] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <Navigation activePage={activePage} setActivePage={setActivePage} />
        <Header />
        
        {/* Original Pages */}
        {activePage === "profile" && <ProfilePage />}
        {activePage === "penglibatan" && <PenglibatanPage />}
        {activePage === "aduan" && <AduanPage />}
        
        {/* New Advanced Features */}
        {activePage === "impact" && <ImpactTracker />}
        {activePage === "training" && <ARTraining />}
        {activePage === "mental" && <MentalHealthCheckIn />}
        {activePage === "certificate" && <BlockchainCertificate />}
        
        {/* Home/Dashboard */}
        {activePage === "home" && (
          <div style={{ background: 'white', padding: '40px', borderRadius: '15px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>
              🎯 Selamat Datang ke Volunteer Connect
            </h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              Platform sukarelawan modern dengan teknologi terdepan untuk meningkatkan pengalaman sukarelawan anda.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎯</div>
                <h3>Impact Tracker</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Jejak kesan sukarelawan</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📱</div>
                <h3>AR Training</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Latihan interaktif 3D</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🧠</div>
                <h3>Mental Health</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Kesihatan mental sukarelawan</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏅</div>
                <h3>Blockchain Cert</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Sijil tidak boleh dipalsukan</p>
              </div>
            </div>
          </div>
        )}
        
        <Footer />
      </div>
    </div>
  );
}
