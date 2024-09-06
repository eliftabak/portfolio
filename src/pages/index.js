import React from 'react';
import { Link } from 'gatsby';

import Layout from './../components/layout';
import Projects from './../components/projects';

import SEO from './../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Elif Chorghay | Web Developer" description="Elif Chorghay &mdash; WebDeveloper based in Karlsruhe, Germany." />
    <section className="contain mb-32 md:mb-24 md:mt-20">
      <div className="inline-block bg-green-100 rounded px-4 py-2 mb-8 shadow-inner">
        <div className="flex items-center">
          {' '}
          <div className="h-2 w-2 bg-green-500 rounded-full mr-4" />
          <span className="text-sm md:text-base text-green-500">Open to new opportunities.</span>
        </div>
      </div>
      <h1 className="text-3xl md:text-5xl">Elif Chorghay &mdash; Web Developer based in Karlsruhe, Germany.</h1>
      <p className="text-mdgray my-8 md:text-lg max-w-2xl">Experienced Web Developer Specializing in Fintech and E-commerce Solutions &mdash; Creating Intuitive, High-Performance Web Applications.</p>
      <div>
        <Link className="link md:text-lg" to="/about">
          Learn more about me <span className="arrow">-&gt;</span>
        </Link>
      </div>
    </section>
    <section className="contain">
      <h2 className="text-2xl md:text-4xl mb-8">Some Things I've Built</h2>
      <Projects />
    </section>
  </Layout>
);

export default IndexPage;
