// ExamplePage.js

import React from 'react';
import Layout from './Layout';

const ExamplePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        {/* Your main content here */}
        <h1 className="text-2xl font-bold mt-8">Example Page</h1>
        <p>This is an example page content.</p>
      </div>
    </Layout>
  );
};

export default ExamplePage;
