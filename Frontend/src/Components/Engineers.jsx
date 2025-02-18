import React from "react";
import engineer1 from "../assets/worker-1.jpg";
import engineer2 from "../assets/worker-2.jpg";
import engineer3 from "../assets/worker-3.jpg";
import "tailwindcss/tailwind.css";

const Engineers = () => {
  const engineers = [
    {
      id: 1,
      image: engineer1,
      name: "Engineer One",
      title: "Senior Engineer",
    },
    {
      id: 2,
      image: engineer2,
      name: "Engineer Two",
      title: "Project Manager",
    },
    {
      id: 3,
      image: engineer3,
      name: "Engineer Three",
      title: "Site Supervisor",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Engineers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {engineers.map((engineer) => (
          <div
            key={engineer.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={engineer.image}
              alt={engineer.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold mb-2">{engineer.name}</h3>
              <p className="text-gray-700 mb-4">{engineer.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Engineers;
