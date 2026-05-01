

export default function ProfileCards() {
  const data = [
    {
      dark: false,
      bio: "Product Designer who focuses on simplicity & usability.",
    },
    {
      dark: false,
      bio: "Product Designer who focuses on simplicity & usability.",
    },
    {
      dark: true,
      bio: "A Product Designer focused on intuitive user experiences.",
    },
  ];

  return (
    <div className="h-screen flex items-center justify-center gap-8 bg-[#e9ecef]">
      {data.map((card, i) => (
        <div
          key={i}
          className={`w-[260px] p-4 rounded-2xl transition-all duration-300
          ${
            card.dark
              ? "bg-gradient-to-br from-[#2b2b2b] to-[#1f1f1f] text-white shadow-[8px_8px_20px_#1a1a1a,-8px_-8px_20px_#333]"
              : "bg-[#eef1f4] text-gray-800 shadow-[8px_8px_20px_#d1d5db,-8px_-8px_20px_#ffffff]"
          }`}
        >
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="profile"
            className="w-full h-[180px] object-cover rounded-xl"
          />

          {/* Content */}
          <div className="mt-3">
            {/* Name + Verified */}
            <div className="flex items-center gap-2">
              <h3 className="text-[16px] font-semibold">
                Sophie Bennett
              </h3>
              <span className="text-green-500 text-sm">✔</span>
            </div>

            {/* Bio */}
            <p
              className={`text-[13px] mt-1 ${
                card.dark ? "text-gray-300" : "text-gray-500"
              }`}
            >
              {card.bio}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-3">
              <div
                className={`flex gap-3 text-[12px] ${
                  card.dark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span>👤 312</span>
                <span>❤ 48</span>
              </div>

              <button
                className={`text-[12px] px-3 py-1 rounded-full transition
                ${
                  card.dark
                    ? "bg-[#aaa7a7] shadow-[3px_3px_6px_#111,-3px_-3px_6px_#444]"
                    : "bg-white shadow-[3px_3px_6px_#ccc,-3px_-3px_6px_#fff]"
                }`}
              >
                Follow +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}