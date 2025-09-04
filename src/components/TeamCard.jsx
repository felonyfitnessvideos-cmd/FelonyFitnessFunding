// src/components/TeamCard.jsx
export default function TeamCard({ img, name, role, bio }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow text-center transform transition-transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
      <img src={img} alt={name} className="mx-auto rounded-full mb-4" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-orange-400 mb-2">{role}</p>
      <p className="text-gray-400 text-sm">{bio}</p>
    </div>
  );
}
