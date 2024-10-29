// Step1.js
import React from "react";

const Step1 = ({ formData, handleChange, nextStep }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Step 1: Basic Information
      </h2>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.name}
          onChange={handleChange("name")}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.email}
          onChange={handleChange("email")}
        />
      </div>
      <button
        onClick={nextStep}
        className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
