export default function PenglibatanPage() {
  const activePrograms = ["Program Sukarelawan Komuniti", "Bantuan Banjir", "Program Belia Sihat", "Kem Motivasi Remaja"];
  const inactivePrograms = ["Program Gotong-Royong", "Kem Kepimpinan"];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📌 Penglibatan Aktif / Tidak Aktif</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-3xl p-6 border border-green-200">
          <h3 className="text-xl font-bold text-green-700 mb-4">Penglibatan Aktif</h3>
          <div className="space-y-3 text-gray-700">
            <p><strong>Status:</strong> Belia Aktif</p>
            <p><strong>Kekerapan:</strong> 2 - 3 program sebulan</p>
            <p><strong>Kategori:</strong> Orang Awam / Belia / Badan Gabungan</p>
          </div>
          <div className="mt-4 space-y-2">
            {activePrograms.map((program, index) => (
              <div key={index} className="bg-white p-3 rounded-2xl shadow-sm">{program}</div>
            ))}
          </div>
          <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-2xl hover:bg-green-700 transition" onClick={() => alert("Status sukarelawan aktif berjaya disemak!")}>Semak Aktiviti</button>
        </div>

        <div className="bg-red-50 rounded-3xl p-6 border border-red-200">
          <h3 className="text-xl font-bold text-red-700 mb-4">Penglibatan Tidak Aktif</h3>
          <div className="space-y-3 text-gray-700">
            <p><strong>Status:</strong> Tidak Aktif</p>
            <p><strong>Kekerapan:</strong> Kurang dari 2 program setahun</p>
            <p><strong>Kategori:</strong> Belia Berdaftar</p>
          </div>
          <div className="mt-4 space-y-2">
            {inactivePrograms.map((program, index) => (
              <div key={index} className="bg-white p-3 rounded-2xl shadow-sm">{program}</div>
            ))}
          </div>
          <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-2xl hover:bg-red-700 transition" onClick={() => alert("Rekod ketidakaktifan berjaya dipaparkan!")}>Semak Rekod</button>
        </div>
      </div>
    </div>
  );
}
