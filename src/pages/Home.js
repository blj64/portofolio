
import React from 'react';
import Layout from '../component/Layout';
import PageHeader from '../component/PageHeader';

const ExamplePage = () => {
  return (
    <Layout>
    <PageHeader title={"Jérémi Lioger--Bun Portfolio"}/>
      <div className="container mx-auto px-4">
        {/* Your main content here */}
        <h1 className="text-2xl font-bold mt-8">Jérémi Lioger--Bun Portfolio</h1>
      </div>
    </Layout>
  );
};

export default ExamplePage;