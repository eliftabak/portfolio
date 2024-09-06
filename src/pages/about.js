import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import './about.css';

const AboutPage = () => {
  const query = useStaticQuery(graphql`
    query {
      elif: file(relativePath: { eq: "elifchorghay.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wave: file(relativePath: { eq: "wave.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout className="about">
      <SEO title="About Me" description="I'm Elif Chorghay, a Web Developer with a specialized focus in fintech and e-commerce." />
      <div className="contain-md my-8 md:my-16">
        <Img className="elifImage" fluid={query.elif.childImageSharp.fluid} />
      </div>
      <div className="contain-sm">
        <h1 className="flex items-center text-3xl md:text-4xl lg:text-5xl">
          Hi!
          <span className="w-12 mx-3">
            <Img fluid={query.wave.childImageSharp.fluid} />
          </span>
          I&apos;m Elif Chorghay.
        </h1>
        <p className="text-mdgray my-8 md:text-lg">Welcome! I'm Elif, a Web Developer with a specialized focus in fintech and e-commerce. My career is dedicated to creating web applications that are not only efficient but also intuitively user-centric. I possess a deep understanding of technologies such as React, Next.js, Redux, and Tailwind CSS. This expertise allows me to deliver solutions that elevate both user experience and business objectives.</p>
        <p className="text-mdgray my-8 md:text-lg">In addition to my frontend skills, I bring robust backend expertise, working with Node.js and NoSQL to create full-stack solutions. This comprehensive skill set ensures seamless functionality and integration. I also emphasize quality assurance, employing advanced testing tools like Cypress and Jest to guarantee the highest standards in application performance.</p>
        <p className="text-mdgray my-8 md:text-lg">My journey in web development is a continuous pursuit of excellence. I am committed to staying abreast with the latest technological trends and industry best practices. This dedication not only enhances my skill set but also ensures that the solutions I develop are innovative and future-proof, effectively meeting the evolving needs of the digital landscape.</p>
        <div className="max-w-2xl">
          <h2 className="text-xl md:text-3xl mb-4">My Go-To Stack</h2>
          <ul className="flex flex-wrap md:text-lg text-mdgray">
            {stackItems.map((item) => (
              <li className="w-1/3 p-4" key={item.name}>
                <div>
                  <img src={require(`../images/Favorites/${item.image}`)} className="logo" alt={`${item.alt} logo`} />
                  <span>{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

const stackItems = [
  { image: 'next-js.png', alt: 'NextJS', name: 'NextJS' },
  { image: 'react.png', alt: 'React', name: 'React' },
  { image: 'typescript.png', alt: 'Typescript', name: 'Typescript' },
  { image: 'javascript.png', alt: 'JavaScript', name: 'JavaScript' },
  { image: 'redux.png', alt: 'Redux', name: 'Redux' },
  { image: 'nodejs.png', alt: 'Node.js', name: 'Node.js' },
  { image: 'mysql.png', alt: 'MySQL', name: 'MySQL' },
  { image: 'mongo.png', alt: 'MongoDB', name: 'MongoDB' },
  { image: 'tailwind.png', alt: 'Tailwind CSS', name: 'Tailwind CSS' },
  { image: 'bootstrap.png', alt: 'Bootstrap', name: 'Bootstrap' },
  { image: 'material-ui.png', alt: 'Material UI', name: 'Material UI' },
];

export default AboutPage;
