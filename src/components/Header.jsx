export default function Header() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">Volunteer Connect</h1>
        <p className="text-gray-500 mt-2">Platform Sukarelawan Belia Berasaskan Akta 668</p>
      </div>
      <button className="mt-4 md:mt-0 bg-black text-white px-6 py-3 rounded-2xl hover:scale-105 transition">
        Daftar Sukarelawan
      </button>
    </div>
  );
}
