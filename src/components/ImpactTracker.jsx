import { useState } from 'react';
import './ImpactTracker.css';

export default function ImpactTracker() {
  const [impacts, setImpacts] = useState({
    beneficiaries: 1250,
    treesCrossed: 5840,
    foodDistributed: 3200,
    moneyRaised: 125000
  });

  const [showAnimation, setShowAnimation] = useState(false);

  const addImpact = (type, value) => {
    setImpacts(prev => ({
      ...prev,
      [type]: prev[type] + value
    }));
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 500);
  };

  return (
    <div className="impact-tracker">
      <div className="tracker-header">
        <h2>🎯 Volunteer Impact Tracker</h2>
        <p>Jejak Kesan Sukarelawan Anda</p>
      </div>

      <div className="impact-grid">
        {/* Beneficiaries */}
        <div className="impact-card beneficiaries">
          <div className="impact-icon">👥</div>
          <div className="impact-content">
            <h3>Penerima Bantuan</h3>
            <div className={`impact-number ${showAnimation ? 'animate' : ''}`}>
              {impacts.beneficiaries.toLocaleString()}
            </div>
            <p>orang telah mendapat manfaat</p>
          </div>
          <button onClick={() => addImpact('beneficiaries', 10)} className="add-btn">
            +10
          </button>
        </div>

        {/* Trees Planted */}
        <div className="impact-card trees">
          <div className="impact-icon">🌳</div>
          <div className="impact-content">
            <h3>Pokok Ditanam</h3>
            <div className={`impact-number ${showAnimation ? 'animate' : ''}`}>
              {impacts.treesCrossed.toLocaleString()}
            </div>
            <p>untuk masa depan hijau</p>
          </div>
          <button onClick={() => addImpact('treesCrossed', 100)} className="add-btn">
            +100
          </button>
        </div>

        {/* Food Distributed */}
        <div className="impact-card food">
          <div className="impact-icon">🍲</div>
          <div className="impact-content">
            <h3>Makanan Diagihkan</h3>
            <div className={`impact-number ${showAnimation ? 'animate' : ''}`}>
              {impacts.foodDistributed.toLocaleString()}
            </div>
            <p>hidangan berkualiti</p>
          </div>
          <button onClick={() => addImpact('foodDistributed', 50)} className="add-btn">
            +50
          </button>
        </div>

        {/* Money Raised */}
        <div className="impact-card money">
          <div className="impact-icon">💰</div>
          <div className="impact-content">
            <h3>Wang Dikumpulkan</h3>
            <div className={`impact-number ${showAnimation ? 'animate' : ''}`}>
              RM {(impacts.moneyRaised / 1000).toFixed(0)}K
            </div>
            <p>untuk program sosial</p>
          </div>
          <button onClick={() => addImpact('moneyRaised', 5000)} className="add-btn">
            +RM5K
          </button>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="progress-section">
        <h3>Target Bulanan</h3>
        <div className="progress-bars">
          <div className="progress-item">
            <label>Penerima Bantuan (Target: 2000)</label>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${Math.min((impacts.beneficiaries / 2000) * 100, 100)}%` }}
              ></div>
            </div>
            <span className="progress-text">{Math.round((impacts.beneficiaries / 2000) * 100)}%</span>
          </div>

          <div className="progress-item">
            <label>Pokok Ditanam (Target: 10000)</label>
            <div className="progress-bar">
              <div 
                className="progress-fill green"
                style={{ width: `${Math.min((impacts.treesCrossed / 10000) * 100, 100)}%` }}
              ></div>
            </div>
            <span className="progress-text">{Math.round((impacts.treesCrossed / 10000) * 100)}%</span>
          </div>

          <div className="progress-item">
            <label>Makanan Diagihkan (Target: 5000)</label>
            <div className="progress-bar">
              <div 
                className="progress-fill orange"
                style={{ width: `${Math.min((impacts.foodDistributed / 5000) * 100, 100)}%` }}
              ></div>
            </div>
            <span className="progress-text">{Math.round((impacts.foodDistributed / 5000) * 100)}%</span>
          </div>

          <div className="progress-item">
            <label>Wang Dikumpulkan (Target: RM200K)</label>
            <div className="progress-bar">
              <div 
                className="progress-fill purple"
                style={{ width: `${Math.min((impacts.moneyRaised / 200000) * 100, 100)}%` }}
              ></div>
            </div>
            <span className="progress-text">{Math.round((impacts.moneyRaised / 200000) * 100)}%</span>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="statistics">
        <h3>📊 Statistik Keseluruhan</h3>
        <div className="stats-grid">
          <div className="stat">
            <span className="stat-label">Purata Penerima Bantuan Setiap Hari</span>
            <span className="stat-value">{Math.round(impacts.beneficiaries / 30)}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Kesetaraan CO2 Diserap</span>
            <span className="stat-value">{(impacts.treesCrossed * 21).toLocaleString()} kg</span>
          </div>
          <div className="stat">
            <span className="stat-label">Nilai Makanan Diagihkan</span>
            <span className="stat-value">RM {(impacts.foodDistributed * 8).toLocaleString()}</span>
          </div>
          <div className="stat">
            <span className="stat-label">ROI Sosial</span>
            <span className="stat-value">1:3.2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
