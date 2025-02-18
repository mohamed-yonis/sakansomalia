import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProject = ({
  isOpen,
  onRequestClose,
  fetchProjects,
  editingProject,
  setEditingProject,
}) => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    status: "pending",
    startDate: "",
    endDate: "",
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (editingProject) {
      setProject(editingProject);
      setImage(null); // Reset image when editing
    } else {
      setProject({
        name: "",
        description: "",
        status: "pending",
        startDate: "",
        endDate: "",
      });
      setImage(null);
    }
  }, [editingProject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    formData.append("name", project.name);
    formData.append("description", project.description);
    formData.append("status", project.status);
    formData.append("startDate", project.startDate);
    formData.append("endDate", project.endDate);

    try {
      if (editingProject) {
        await axios.put(`/api/projects/${editingProject._id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setEditingProject(null);
      } else {
        await axios.post("/api/projects", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      fetchProjects();
      onRequestClose();
      alert("Project saved successfully");
    } catch (error) {
      console.error(error);
      alert("Error saving project");
    }
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-content">
        <span className="close" onClick={onRequestClose}>
          &times;
        </span>
        <h2 className="text-3xl font-bold mb-8 text-center">
          {editingProject ? "Edit Project" : "Add Project"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Project Name</label>
            <input
              type="text"
              name="name"
              value={project.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Status</label>
            <select
              name="status"
              value={project.status}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="pending">Pending</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={project.startDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">End Date</label>
            <input
              type="date"
              name="endDate"
              value={project.endDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Project Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editingProject ? "Update Project" : "Add Project"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;