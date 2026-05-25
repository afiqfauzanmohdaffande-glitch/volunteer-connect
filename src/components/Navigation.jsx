export default function Navigation({ activePage, setActivePage }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 flex flex-wrap gap-4 justify-center">
      <button
        onClick={() => setActivePage("profile")}
        className={`px-6 py-3 rounded-2xl transition font-semibold ${
          activePage === "profile"
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Profile Sukarelawan
      </button>

      <button
        onClick={() => setActivePage("penglibatan")}
        className={`px-6 py-3 rounded-2xl transition font-semibold ${
          activePage === "penglibatan"
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Penglibatan
      </button>

      <button
        onClick={() => setActivePage("aduan")}
        className={`px-6 py-3 rounded-2xl transition font-semibold ${
          activePage === "aduan"
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Aduan & Feedback
      </button>
    </div>
  );
}
