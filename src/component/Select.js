import React from "react";

const Select = ({ onChangeTrigger }) => {
  const handleChange = (event) => {
    onChangeTrigger(event.target.value);
  };
  return (
    <div className="flex items-center text-gray-500 gap-6 mb-4">
      <label
        htmlFor="sort"
        className="hidden xs:block mr-2 text-gray-secondary text-xs"
      >
        Urutkan
      </label>
      <div className="relative">
        <select
          id="sort"
          className="appearance-none border border-gray-line rounded-full px-4 py-2 text-xs text-gray-third text-center focus:outline-none focus:ring-1 focus:ring-gray-400 w-[169px]"
          onChange={handleChange}
        >
          <option value="terbaru">Terbaru</option>
          <option value="ulasan">Ulasan</option>
        </select>
        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-arrow text-xs">
          ▼
        </span>
      </div>
    </div>
  );
};

export default Select;
