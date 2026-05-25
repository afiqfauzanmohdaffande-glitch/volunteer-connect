export default function ProfilePage() {
  const profiles = [
    {
      name: "Afiq Fauzan",
      age: 21,
      occupation: "Mahasiswa",
      skills: "Pengurusan Program, Media, Fotografi",
      organization: "Majlis Belia Negeri",
      involvement: "Aktif",
      frequency: "8 program / tahun",
      status: "Layak bawah Akta 668"
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-2xl font-bold text-gray-800">📌 Profile Sukarelawan</h2>
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          Akta 668 : Umur 17 - 30 Tahun
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {profiles.map((profile, index) => (
          <div key={index} className="border rounded-3xl p-6 hover:shadow-xl transition bg-gray-50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold">
                {profile.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{profile.name}</h3>
                <p className="text-gray-500">{profile.occupation}</p>
              </div>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Umur:</strong> {profile.age} tahun</p>
              <p><strong>Kemahiran:</strong> {profile.skills}</p>
              <p><strong>Badan Gabungan:</strong> {profile.organization}</p>
              <p><strong>Status:</strong> {profile.status}</p>
              <p><strong>Penglibatan:</strong> {profile.involvement}</p>
              <p><strong>Kekerapan:</strong> {profile.frequency}</p>
            </div>
            <button className="mt-6 w-full bg-gray-900 text-white py-3 rounded-2xl hover:bg-gray-700 transition" onClick={() => alert("Maklumat sukarelawan berjaya dipaparkan!")}>Lihat Profil Lengkap</button>
          </div>
        ))}
      </div>
    </div>
  );
}
