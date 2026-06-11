import { useState } from 'react';
import './BlockchainCertificate.css';

export default function BlockchainCertificate() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [verificationId, setVerificationId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const certificates = [
    {
      id: 'VC-001-2024',
      volunteerName: 'Ahmad Bin Mohamed',
      programName: 'CPR Training Program',
      date: '15 Mei 2024',
      duration: '15 jam',
      blockchainHash: '0x7f8a9c2d5e1b4a6f9c3e2d8a1b5f7c9e4a6d2f8b',
      issuer: 'Volunteer Connect Malaysia',
      status: 'Verified ✓',
      icon: '💓'
    },
    {
      id: 'VC-002-2024',
      volunteerName: 'Siti Nurhaliza',
      programName: 'Flood Rescue Operations',
      date: '22 Mei 2024',
      duration: '20 jam',
      blockchainHash: '0x3a7c1f8e5d9b2f6a4c8e1d3f7b9a2c5e8f1a4d6b',
      issuer: 'Volunteer Connect Malaysia',
      status: 'Verified ✓',
      icon: '🌊'
    },
    {
      id: 'VC-003-2024',
      volunteerName: 'Mohd Rizal',
      programName: 'Emergency First Aid',
      date: '28 Mei 2024',
      duration: '12 jam',
      blockchainHash: '0x9f4a2c7d1e8b5f3a6c9d2e7f1a4b8c3d6e9f2a5b',
      issuer: 'Volunteer Connect Malaysia',
      status: 'Verified ✓',
      icon: '🩹'
    },
    {
      id: 'VC-004-2024',
      volunteerName: 'Nur Aisyah',
      programName: 'Community Relief Distribution',
      date: '5 Jun 2024',
      duration: '25 jam',
      blockchainHash: '0x5b8e1f3a7c2d9f4a6e1b5c8d2f7a9e3c6f1a4d8b',
      issuer: 'Volunteer Connect Malaysia',
      status: 'Verified ✓',
      icon: '📦'
    }
  ];

  const generateCertificate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setSelectedCertificate(certificates[0]);
      setIsGenerating(false);
    }, 2000);
  };

  const handleVerify = () => {
    if (!verificationId) {
      setVerificationResult({ status: 'pending', message: 'Sila masukkan ID Blockchain' });
      return;
    }

    const found = certificates.find(cert => cert.blockchainHash === verificationId || cert.id === verificationId);
    
    if (found) {
      setVerificationResult({
        status: 'valid',
        message: '✓ Sijil Sah dan Belum Diubah',
        details: found
      });
    } else {
      setVerificationResult({
        status: 'invalid',
        message: '✗ Sijil Tidak Sah atau Tidak Dijumpai'
      });
    }
  };

  const downloadCertificate = () => {
    alert('📥 Sijil telah dimuat turun sebagai PDF');
  };

  const shareOnBlockchain = () => {
    alert('✓ Sijil telah dikongsi di Blockchain dengan ID: ' + selectedCertificate.blockchainHash.substring(0, 16) + '...');
  };

  return (
    <div className="blockchain-certificate">
      <div className="bc-header">
        <h2>🏅 Blockchain Volunteer Certificate</h2>
        <p>Sijil Digital Sukarelawan Tidak Boleh Dipalsukan</p>
      </div>

      {/* Blockchain Animation */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="blockchain-animation">
          <div className="chain-block">B1</div>
          <div className="chain-arrow">→</div>
          <div className="chain-block">B2</div>
          <div className="chain-arrow">→</div>
          <div className="chain-block">B3</div>
          <div className="chain-arrow">→</div>
          <div className="chain-block">B4</div>
          <div className="chain-arrow">→</div>
          <div className="chain-block">B5</div>
        </div>
        <p style={{ color: 'white', marginTop: '10px' }}>Teknologi Blockchain untuk Keamanan Maksimum</p>
      </div>

      {/* Certificate Display */}
      {selectedCertificate && (
        <div className="certificate-container">
          <div className="certificate-display">
            <div className="certificate-content">
              <div style={{ fontSize: '3rem', marginBottom: '10px' }}>
                {selectedCertificate.icon}
              </div>
              <div className="certificate-title">Sijil Pengiktirafan</div>
              <div className="certificate-subtitle">Volunteer Certificate of Achievement</div>
              
              <div className="certificate-divider"></div>

              <div className="certificate-details">
                <div className="detail-item">
                  <div className="detail-label">Nama Sukarelawan</div>
                  <div className="detail-value">{selectedCertificate.volunteerName}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Program</div>
                  <div className="detail-value">{selectedCertificate.programName}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Tarikh Selesai</div>
                  <div className="detail-value">{selectedCertificate.date}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Tempoh Latihan</div>
                  <div className="detail-value">{selectedCertificate.duration}</div>
                </div>
              </div>

              <div className="certificate-divider"></div>

              <div style={{ marginTop: '20px' }}>
                <div className="detail-label">Blockchain ID (Immutable)</div>
                <div className="blockchain-id">{selectedCertificate.blockchainHash}</div>
              </div>

              <div className="detail-label" style={{ marginTop: '15px' }}>Pengeluar: {selectedCertificate.issuer}</div>
              <div className="certificate-footer">
                Sijil ini telah didaftarkan secara kekal di Blockchain dan tidak boleh dipalsukan.
                <br />
                Status: <strong>{selectedCertificate.status}</strong>
              </div>
            </div>
          </div>

          <div className="button-group">
            <button className="bc-btn" onClick={downloadCertificate}>
              📥 Muat Turun PDF
            </button>
            <button className="bc-btn" onClick={shareOnBlockchain}>
              🔗 Kongsikan di Blockchain
            </button>
            <button className="bc-btn secondary" onClick={() => setSelectedCertificate(null)}>
              ← Kembali
            </button>
          </div>
        </div>
      )}

      {/* Generate Certificate Section */}
      {!selectedCertificate && !isGenerating && (
        <div className="info-section">
          <h3>📜 Hasilkan Sijil Baru</h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>
            Selepas menyelesaikan program sukarelawan, sistem akan secara automatik menjana sijil digital yang tidak boleh dipalsukan.
          </p>
          <button className="bc-btn" onClick={generateCertificate} style={{ width: '100%', padding: '15px' }}>
            🎯 Hasilkan Sijil Baru
          </button>
        </div>
      )}

      {isGenerating && (
        <div className="info-section" style={{ textAlign: 'center' }}>
          <h3>⏳ Menghasilkan Sijil...</h3>
          <div className="blockchain-animation" style={{ marginTop: '20px' }}>
            <div className="chain-block">...</div>
            <div className="chain-arrow">→</div>
            <div className="chain-block">...</div>
          </div>
          <p style={{ marginTop: '20px', color: '#666' }}>Sedang menulis ke Blockchain...</p>
        </div>
      )}

      {/* Certificate Information */}
      <div className="info-section">
        <h3>ℹ️ Tentang Sijil Blockchain</h3>
        <div className="info-grid">
          <div className="info-card security">
            <div className="info-icon">🔒</div>
            <h4>Keamanan Maksimum</h4>
            <p>Setiap sijil dilindungi oleh teknologi Blockchain yang menggunakan enkripsi cryptographic tingkat tinggi.</p>
          </div>
          <div className="info-card verification">
            <div className="info-icon">✅</div>
            <h4>Pengesahan Instan</h4>
            <p>Majikan dapat mengesahkan sijil secara langsung melalui sistem blockchain tanpa perantara.</p>
          </div>
          <div className="info-card storage">
            <div className="info-icon">💾</div>
            <h4>Penyimpanan Kekal</h4>
            <p>Sijil disimpan secara kekal di dalam rangkaian blockchain dan tidak dapat diubah atau dihapuskan.</p>
          </div>
        </div>
      </div>

      {/* QR Code Verification */}
      <div className="qr-section">
        <h3>📱 Scan untuk Mengesahkan</h3>
        <div className="qr-display">📲</div>
        <div className="qr-instructions">
          💡 Majikan boleh imbas QR code ini untuk mengesahkan keaslian sijil secara automatik.
        </div>
      </div>

      {/* Certificate Verification */}
      <div className="verification-section">
        <h3>🔍 Mengesahkan Sijil</h3>
        <div className="verification-form">
          <div className="form-group">
            <label>Masukkan Blockchain ID atau Sijil ID:</label>
            <input
              type="text"
              value={verificationId}
              onChange={(e) => setVerificationId(e.target.value)}
              placeholder="Contoh: 0x7f8a9c2d5e1b4a6f9c3e2d8a1b5f7c9e4a6d2f8b"
            />
          </div>
          <button className="bc-btn" onClick={handleVerify} style={{ width: '100%' }}>
            🔎 Sahkan Sijil
          </button>

          {verificationResult && (
            <div className={`verification-result ${verificationResult.status}`}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="result-icon">
                  {verificationResult.status === 'valid' && '✅'}
                  {verificationResult.status === 'invalid' && '❌'}
                  {verificationResult.status === 'pending' && '⏳'}
                </span>
                <span>{verificationResult.message}</span>
              </div>
              {verificationResult.details && (
                <div style={{ marginTop: '15px', textAlign: 'left' }}>
                  <p><strong>Nama:</strong> {verificationResult.details.volunteerName}</p>
                  <p><strong>Program:</strong> {verificationResult.details.programName}</p>
                  <p><strong>Tarikh:</strong> {verificationResult.details.date}</p>
                  <p><strong>Status:</strong> {verificationResult.details.status}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Certificate History */}
      <div className="history-section">
        <h3>📋 Sejarah Sijil</h3>
        <div className="certificate-list">
          {certificates.map(cert => (
            <div key={cert.id} className="certificate-item">
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-content">
                <div className="cert-title">{cert.programName}</div>
                <div className="cert-date">
                  {cert.volunteerName} • {cert.date} • {cert.duration}
                </div>
              </div>
              <div className="cert-status">Tersah ✓</div>
              <button
                className="bc-btn"
                style={{ padding: '8px 16px', fontSize: '0.9rem', marginLeft: '10px' }}
                onClick={() => setSelectedCertificate(cert)}
              >
                Lihat
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Features */}
      <div className="info-section">
        <h3>🎯 Ciri-Ciri Tambahan</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px'
        }}>
          <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>📧</div>
            <h4 style={{ marginBottom: '5px', color: '#333' }}>Hantar Sijil</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Hantar sijil terus ke majikan melalui email dengan pautan pengesahan.</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🏢</div>
            <h4 style={{ marginBottom: '5px', color: '#333' }}>API Korporat</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Majikan boleh mengintegrasikan sistem pengesahan ke dalam portal HR mereka.</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>📊</div>
            <h4 style={{ marginBottom: '5px', color: '#333' }}>Statistik Sah</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Paparan statistik keseluruhan sijil yang telah diverifikasi dan diakui.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '30px',
        borderRadius: '15px',
        textAlign: 'center',
        marginBottom: '0',
        color: '#333'
      }}>
        <h3 style={{ marginBottom: '15px', color: '#667eea' }}>Siap untuk Mula Perjalanan Sukarelawan Anda?</h3>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          Daftar sekarang dan dapatkan sijil blockchain yang boleh diakui oleh majikan di seluruh dunia!
        </p>
        <button className="bc-btn" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
          🚀 Daftar Sebagai Sukarelawan
        </button>
      </div>
    </div>
  );
}
