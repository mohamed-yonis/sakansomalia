import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProject from "./AddProject";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const pendingProjects = projects.filter(
    (project) => project.status === "pending"
  );
  const doneProjects = projects.filter((project) => project.status === "done");

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Dashboard</h2>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-8"
      >
        Add Project
      </button>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={`http://localhost:3000${project.image}`}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-gray-700 mb-4">Status: {project.status}</p>
                <p className="text-gray-700 mb-4">
                  Start Date: {new Date(project.startDate).toLocaleDateString()}
                </p>
                <p className="text-gray-700 mb-4">
                  End Date: {new Date(project.endDate).toLocaleDateString()}
                </p>
                <button
                  onClick={() => handleEdit(project)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h4 className="text-xl font-bold mb-2">Pending Projects</h4>
            <ul>
              {pendingProjects.map((project) => (
                <li key={project._id}>{project.name}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h4 className="text-xl font-bold mb-2">Done Projects</h4>
            <ul>
              {doneProjects.map((project) => (
                <li key={project._id}>{project.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <AddProject
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        fetchProjects={fetchProjects}
        editingProject={editingProject}
        setEditingProject={setEditingProject}
      />
    </div>
  );
};

export default Dashboard;
