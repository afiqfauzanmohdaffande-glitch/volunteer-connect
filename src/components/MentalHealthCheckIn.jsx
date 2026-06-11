import { useState } from 'react';
import './MentalHealthCheckIn.css';

export default function MentalHealthCheckIn() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [checkInHistory, setCheckInHistory] = useState([
    { mood: '😊', date: 'Hari ini, 9:00 AM', note: 'Berasa lebih baik selepas latihan' },
    { mood: '😐', date: 'Semalam, 6:00 PM', note: 'Agak penat selepas misi' },
    { mood: '🙂', date: '2 hari lalu, 8:00 AM', note: 'Motivasi tinggi untuk membantu' }
  ]);

  const moods = [
    { emoji: '😢', label: 'Sangat Bersedih', color: '#ef4444', value: 1 },
    { emoji: '😟', label: 'Sedih', color: '#f97316', value: 2 },
    { emoji: '😐', label: 'Biasa', color: '#f59e0b', value: 3 },
    { emoji: '🙂', label: 'Baik', color: '#10b981', value: 4 },
    { emoji: '😊', label: 'Sangat Baik', color: '#06b6d4', value: 5 }
  ];

  const selfcareRecommendations = {
    1: [
      { icon: '💬', title: 'Hubungi Penyelaras', desc: 'Bercakap dengan penyelaras program tentang perasaan anda' },
      { icon: '🧘', title: 'Meditasi Ringkas', desc: '5-10 minit meditasi mudah untuk menenangkan minda' },
      { icon: '🚶', title: 'Jalan Kaki', desc: 'Ambil rehat dan berjalan-jalan di udara segar' }
    ],
    2: [
      { icon: '🎵', title: 'Dengar Muzik', desc: 'Dengarkan muzik yang membuat anda rasa lebih baik' },
      { icon: '📞', title: 'Hubungi Rakan', desc: 'Berbual dengan rakan sebelah untuk mendapat sokongan' },
      { icon: '🌳', title: 'Masa dengan Alam', desc: 'Habiskan masa di taman atau tempat hijau' }
    ],
    3: [
      { icon: '💧', title: 'Minum Air', desc: 'Pastikan anda minum air yang cukup sepanjang hari' },
      { icon: '🍎', title: 'Makan Sihat', desc: 'Ambil makanan yang berkhasiat untuk tenaga' },
      { icon: '😴', title: 'Tidur Cukup', desc: 'Pastikan 7-8 jam tidur berkualiti setiap malam' }
    ],
    4: [
      { icon: '🏃', title: 'Olahraga Ringan', desc: 'Lakukan senaman ringan seperti yoga atau jogging' },
      { icon: '📚', title: 'Baca Inspirasi', desc: 'Baca artikel atau buku yang menginspirasi' },
      { icon: '🎯', title: 'Set Matlamat', desc: 'Tetapkan matlamat kecil untuk hari ini' }
    ],
    5: [
      { icon: '🤝', title: 'Bantu Orang Lain', desc: 'Terus membantu dan berkongsi kebaikan dengan orang lain' },
      { icon: '🎉', title: 'Rayakan Kejayaan', desc: 'Rayakan pencapaian anda hari ini' },
      { icon: '💪', title: 'Motivasi Diri', desc: 'Pertahankan semangat dan terus berjuang untuk kebaikan' }
    ]
  };

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    
    // Add to history
    const newEntry = {
      mood: mood.emoji,
      date: new Date().toLocaleString('ms-MY'),
      note: getMoodNote(mood.value)
    };
    setCheckInHistory([newEntry, ...checkInHistory]);
  };

  const getMoodNote = (moodValue) => {
    const notes = {
      1: 'Memerlukan sokongan emosi',
      2: 'Agak tertekan',
      3: 'Keadaan biasa',
      4: 'Berasa baik dan sihat',
      5: 'Sangat positif dan energik'
    };
    return notes[moodValue] || 'Semakan mood';
  };

  const checkStressLevel = () => {
    if (!selectedMood) return { level: 'unknown', color: '#999' };
    const value = selectedMood.value;
    if (value <= 2) return { level: 'Tinggi - ⚠️ Alert', color: '#ef4444' };
    if (value === 3) return { level: 'Sederhana', color: '#f59e0b' };
    return { level: 'Rendah', color: '#10b981' };
  };

  const stress = checkStressLevel();

  return (
    <div className="mental-health">
      <div className="mh-header">
        <h2>🧠 Mental Health Check-In</h2>
        <p>Pemeriksaan Kesihatan Mental Harian Sukarelawan</p>
      </div>

      {/* Daily Mood Check-in */}
      <div className="mood-section">
        <h3>Bagaimana perasaan anda hari ini?</h3>
        <div className="mood-grid">
          {moods.map(mood => (
            <button
              key={mood.value}
              onClick={() => handleMoodSelect(mood)}
              className={`mood-button ${selectedMood?.value === mood.value ? 'active' : ''}`}
            >
              <span>{mood.emoji}</span>
              <span className="mood-label">{mood.label}</span>
            </button>
          ))}
        </div>

        {selectedMood && (
          <div className="mood-description">
            <strong>Status Anda:</strong> {selectedMood.label}
            <br />
            <br />
            Anda telah memilih mood: <strong>{selectedMood.emoji}</strong>. Semakan status tekanan anda menunjukkan: <strong style={{ color: stress.color }}>{stress.level}</strong>
            {selectedMood.value <= 2 && (
              <div style={{ marginTop: '10px', color: '#ef4444', fontWeight: 'bold' }}>
                ⚠️ Sistem telah memaklumkan penyelaras anda tentang status ini.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mood Chart */}
      {selectedMood && (
        <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '30px', borderRadius: '15px', marginBottom: '30px', color: '#333' }}>
          <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📊 Trend Mood Minggu Ini</h3>
          <div className="mood-chart">
            <div className="chart-bar day-1" title="Isnin: 40%">40%</div>
            <div className="chart-bar day-2" title="Selasa: 60%">60%</div>
            <div className="chart-bar day-3" title="Rabu: 50%">50%</div>
            <div className="chart-bar day-4" title="Khamis: 70%">70%</div>
            <div className="chart-bar day-5" title="Jumaat: 80%">80%</div>
            <div className="chart-bar day-6" title="Sabtu: 75%">75%</div>
            <div className="chart-bar day-7" title="Ahad: 85%">85%</div>
          </div>
        </div>
      )}

      {/* Self-care Recommendations */}
      {selectedMood && (
        <div className="selfcare-section">
          <h3>💚 Cadangan Penjagaan Diri</h3>
          <div className="selfcare-recommendations">
            {selfcareRecommendations[selectedMood.value]?.map((rec, idx) => (
              <div
                key={idx}
                className={`recommendation-card ${['exercise', 'mindfulness', 'social', 'rest'][idx % 4]}`}
              >
                <div className="recommendation-icon">{rec.icon}</div>
                <h4>{rec.title}</h4>
                <p>{rec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Alert System */}
      {selectedMood && (
        <div className="alert-section">
          <h3>🚨 Sistem Penggera Penyelaras</h3>
          <div className="alert-status">
            <div className={`status-card ${selectedMood.value <= 2 ? 'alert' : ''}`}>
              <span className="status-label">Status Tekanan</span>
              <span className="status-value">{stress.level}</span>
            </div>
            <div className={`status-card ${selectedMood.value <= 2 ? 'alert' : selectedMood.value <= 3 ? 'warning' : ''}`}>
              <span className="status-label">Amaran Penyelaras</span>
              <span className="status-value">
                {selectedMood.value <= 2 ? '✅ Dihantar' : '✓ Tidak diperlukan'}
              </span>
            </div>
            <div className="status-card">
              <span className="status-label">Sokongan Diperlukan</span>
              <span className="status-value">{selectedMood.value <= 2 ? 'YA' : 'TIDAK'}</span>
            </div>
          </div>

          {selectedMood.value <= 2 && (
            <div style={{ background: '#fef2f2', padding: '15px', borderRadius: '10px', color: '#991b1b', marginTop: '20px' }}>
              <strong>⚠️ Notis Penting:</strong>
              <p style={{ marginTop: '8px' }}>
                Penyelaras program telah diberitahu tentang status mental anda. Mereka akan menghubungi anda dalam masa 1 jam untuk memberikan sokongan.
                <br /><br />
                <strong>Hotline Kecemasan Mental (24/7):</strong> 1-800-821-821
              </p>
            </div>
          )}
        </div>
      )}

      {/* Check-in History */}
      <div className="history-section">
        <h3>📋 Sejarah Semakan</h3>
        <div className="history-list">
          {checkInHistory.map((entry, idx) => (
            <div key={idx} className="history-item">
              <div className="history-mood">{entry.mood}</div>
              <div className="history-content">
                <div className="history-date">{entry.date}</div>
                <div className="history-note">{entry.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <div className="button-group">
          <button className="mh-btn" onClick={() => alert('📞 Menghubungi penyelaras...')}>
            📞 Hubungi Penyelaras
          </button>
          <button className="mh-btn secondary" onClick={() => setSelectedMood(null)}>
            🔄 Reset
          </button>
          <button className="mh-btn" style={{ background: '#10b981' }} onClick={() => alert('✅ Laporan telah disimpan')}>
            💾 Simpan Laporan
          </button>
        </div>
      </div>
    </div>
  );
}
