import { useState } from 'react';
import './ARTraining.css';

export default function ARTraining() {
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [completed, setCompleted] = useState(false);

  const trainings = [
    {
      id: 'cpr',
      name: 'CPR Training',
      icon: '💓',
      description: 'Belajar teknik CPR yang betul untuk menyelamatkan nyawa',
      duration: '15 minit',
      steps: [
        'Periksa kesedaran mangsa',
        'Panggil ambulans (999)',
        'Letakkan mangsa di permukaan rata',
        'Buka saluran udara',
        'Lakukan kompresi dada 100-120 per minit',
        'Berikan nafas bantuan 2x setiap 30 kompresi'
      ],
      model: '🏥'
    },
    {
      id: 'flood',
      name: 'Flood Rescue',
      icon: '🌊',
      description: 'Teknik penyelamatan mangsa banjir dengan selamat',
      duration: '20 minit',
      steps: [
        'Pastikan keselamatan diri sendiri',
        'Gunakan peralatan keselamatan',
        'Dekati mangsa dari belakang',
        'Gunakan tali penyelamat',
        'Gerakkan ke tempat yang lebih tinggi',
        'Berikan bantuan medis jika diperlukan'
      ],
      model: '🚤'
    },
    {
      id: 'distribution',
      name: 'Aid Distribution',
      icon: '📦',
      description: 'Cara mengagihkan bantuan dengan efisien dan adil',
      duration: '10 minit',
      steps: [
        'Daftar penerima bantuan',
        'Periksa keperluan asas',
        'Agih makanan dengan tertib',
        'Catat pengeluaran',
        'Pastikan semua mendapat bahagian sama',
        'Dokumentasi untuk laporan'
      ],
      model: '🎁'
    },
    {
      id: 'first-aid',
      name: 'First Aid',
      icon: '🩹',
      description: 'Pertolongan pertama untuk kecederaan biasa',
      duration: '12 minit',
      steps: [
        'Nilai luka atau cedera',
        'Cuci tangan dengan air bersih',
        'Bersihkan luka dengan lembut',
        'Gunakan ubat antiseptik',
        'Tutup dengan pembalut steril',
        'Pantau tanda-tanda jangkitan'
      ],
      model: '💊'
    }
  ];

  const handleScanQR = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setSelectedTraining('cpr');
    }, 2000);
  };

  const selectTraining = (id) => {
    setSelectedTraining(id);
    setRotation(0);
    setCompleted(false);
  };

  const rotateModel = () => {
    setRotation(prev => (prev + 45) % 360);
  };

  const completeTraining = () => {
    setCompleted(true);
  };

  const training = trainings.find(t => t.id === selectedTraining);

  return (
    <div className="ar-training">
      <div className="ar-header">
        <h2>📱 AR Volunteer Training</h2>
        <p>Latihan Interaktif Sebelum Misi</p>
      </div>

      {/* QR Scanner Section */}
      {!selectedTraining && !isScanning && (
        <div className="qr-scanner-section">
          <h3>Imbas QR Code untuk Memulai</h3>
          <div className="qr-placeholder">📲</div>
          <p>Atau pilih latihan dari bawah</p>
          <button onClick={handleScanQR} className="scan-btn">
            🔍 Imbas QR Code
          </button>
        </div>
      )}

      {isScanning && (
        <div className="qr-scanner-section">
          <h3>🔄 Mengimbas QR Code...</h3>
          <div className="qr-placeholder">
            <span style={{ animation: 'pulse 1s infinite' }}>📲</span>
          </div>
        </div>
      )}

      {/* Training Selection Grid */}
      {!completed && (
        <div className="training-grid">
          {trainings.map(train => (
            <div
              key={train.id}
              className={`training-card ${selectedTraining === train.id ? 'active' : ''}`}
              onClick={() => selectTraining(train.id)}
            >
              <div className="training-icon">{train.icon}</div>
              <h3>{train.name}</h3>
              <p>{train.description}</p>
              <span className="training-badge">⏱️ {train.duration}</span>
            </div>
          ))}
        </div>
      )}

      {/* AR Simulation */}
      {selectedTraining && !completed && training && (
        <div className="ar-simulation active">
          <h3 style={{ marginBottom: '20px', color: '#333' }}>
            🎮 Simulasi 3D - {training.name}
          </h3>

          <div className="ar-simulation-screen" style={{ transform: `rotateY(${rotation}deg)` }}>
            <div className="ar-model">{training.model}</div>
            <div className="ar-info">
              <h4>🎯 Langkah Latihan</h4>
              <p>Tekan butang putar untuk lihat model dari berbagai sudut</p>
            </div>
          </div>

          <div className="ar-controls">
            <button onClick={rotateModel} className="control-btn rotate">
              🔄 Putar Model (3D View)
            </button>
            <button onClick={() => setSelectedTraining(null)} className="control-btn">
              ← Kembali
            </button>
          </div>

          {/* Training Steps */}
          <div style={{ marginTop: '30px' }}>
            <h3 style={{ color: '#333', marginBottom: '20px' }}>
              📋 Langkah-Langkah Latihan
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '15px',
                marginBottom: '20px'
              }}
            >
              {training.steps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    background: '#f8f9fa',
                    padding: '15px',
                    borderRadius: '10px',
                    borderLeft: '4px solid #667eea'
                  }}
                >
                  <div style={{ fontWeight: 'bold', color: '#667eea', marginBottom: '5px' }}>
                    Langkah {index + 1}
                  </div>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              onClick={completeTraining}
              style={{
                padding: '12px 30px',
                background: 'linear-gradient(135deg, #10b981, #34d399)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s'
              }}
              onMouseOver={e => (e.target.style.transform = 'scale(1.05)')}
              onMouseOut={e => (e.target.style.transform = 'scale(1)')}
            >
              ✅ Tamat Latihan
            </button>
          </div>
        </div>
      )}

      {/* Completion Certificate */}
      {completed && (
        <div className="completion-section">
          <div className="completion-icon">🎉</div>
          <h3>Tahniah! Latihan Selesai</h3>
          <p>Anda telah berjaya menyelesaikan latihan {training?.name}</p>

          <div className="certificate-preview">
            <h4>📜 Sijil Latihan Digital</h4>
            <p style={{ marginBottom: '10px' }}>Latihan: {training?.name}</p>
            <p style={{ marginBottom: '10px' }}>Tarikh Selesai: {new Date().toLocaleDateString('ms-MY')}</p>
            <p style={{ fontSize: '0.8rem' }}>Blockchain ID: VC-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>

          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button
              onClick={() => {
                setSelectedTraining(null);
                setCompleted(false);
              }}
              style={{
                padding: '10px 20px',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600'
              }}
            >
              ← Latihan Lain
            </button>
            <button
              style={{
                padding: '10px 20px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              📥 Muat Turun Sijil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
