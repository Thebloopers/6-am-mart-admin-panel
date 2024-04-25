import React from 'react';

const ButtonContainer = ({ onReset, onSubmit }) => {
  return (
    <div className="flex justify-end mt-4">
      <button
        type="button"
        onClick={onReset}
        className="px-4 py-2 mr-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-lg focus:outline-none"
      >
        Reset
      </button>
      <button
        type="submit"
        onClick={onSubmit}
        className="px-4 py-2 bg-[#24bac3] hover:bg-[#20A7AF] text-white font-semibold rounded-lg focus:outline-none"
      >
        Submit
      </button>
    </div>
  );
};

export default ButtonContainer;
