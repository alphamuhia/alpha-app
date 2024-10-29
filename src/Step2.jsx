import React from "react";

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-700 mb-6">
      Step 2: Additional Information
    </h2>

    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2">
        Age
      </label>
      <input
        type="number"
        placeholder="Age"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={formData.age}
        onChange={handleChange("age")}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2">
        Address
      </label>
      <input
        type="text"
        placeholder="Address"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={formData.address}
        onChange={handleChange("address")}
      />
    </div>

    <div className="flex justify-between mt-6">
      <button
        onClick={prevStep}
        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
      >
        Back
      </button>
      <button
        onClick={nextStep}
        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
);

export default Step2;
