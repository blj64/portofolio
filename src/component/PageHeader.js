// PageHeader.js
import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <div className="bg-purpleLight text-white py-6 px-4">
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
};

export default PageHeader;
