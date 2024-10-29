import React from "react";

const Step3 = ({ formData, handleChange, prevStep }) => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-700 mb-6">
      Step 3: Final Comments
    </h2>

    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2">
        Comments
      </label>
      <textarea
        placeholder="Your comments..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows="4"
        value={formData.comments}
        onChange={handleChange("comments")}
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
        onClick={() => alert("Form Submitted!")}
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
      >
        Submit
      </button>
    </div>
  </div>
);

export default Step3;
