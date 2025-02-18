import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      const response = await axios.get(`/api/projects/${id}`);
      setProject(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={`https://sakansomalia-backend.onrender.com{project.image}`}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
