import React from 'react';

const ModuleChecklist = () => {
  return (
    <div className="check--item-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Replace this array with your data or use a mapping function */}
      {moduleList.map((module) => (
        <div key={module.id} className="check-item">
          <div className="form-group form-check form--check">
            <input
              type="checkbox"
              name="modules[]"
              value={module.value}
              className="form-check-input"
              id={module.id}
              checked={module.checked}
            />
            <label htmlFor={module.id} className="form-check-label qcont text-dark">
              {module.label}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

// Example module data (replace this with your actual data)
const moduleList = [
  { id: 'collect_cash', value: 'collect_cash', label: 'Collect Cash' },
  { id: 'addon', value: 'addon', label: 'Addon',},
  { id: 'attribute', value: 'attribute', label: 'Attribute' },
  { id: 'Banner', value: 'Banner', label: 'Banner' },
  { id: 'Campaign', value: 'Campaign', label: 'Campaign' },

 
  


  // Add more modules as needed
];

export default ModuleChecklist;
