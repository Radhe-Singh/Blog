import React, { useState } from "react";
import axios from "axios";

const NewBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    featuredImage: null,
    isPublished: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else if (type === "file") {
      setFormData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("slug", formData.slug);
    data.append("content", formData.content);
    data.append("featured_image", formData.featuredImage);
    data.append("is_published", formData.isPublished);

    try {
      const response = await axios.post("http://localhost:8000/api/post/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Blog post created successfully!");
    } catch (error) {
      console.error("Error creating blog post:", error);
      setMessage("Failed to create blog post.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Create Blog Post</h1>
      {message && (
        <p
          className={`text-center mb-4 ${
            message.includes("successfully")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-medium">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg font-medium">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="5"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="featuredImage"
            className="block text-lg font-medium"
          >
            Featured Image:
          </label>
          <input
            type="file"
            id="featuredImage"
            name="featuredImage"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-full text-gray-500 border border-gray-300 rounded-md shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isPublished"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
          />
          <label
            htmlFor="isPublished"
            className="ml-2 text-lg font-medium text-gray-700"
          >
            Is Published
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg font-semibold focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
