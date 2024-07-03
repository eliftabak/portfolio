import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import "./about.css"

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
        <h1 className="flex items-center text-3xl md:text-4xl md:text-5xl">
          Hi!
          <span className="w-12 mx-3">
            <Img fluid={query.wave.childImageSharp.fluid} />
          </span>
          I&apos;m Elif Chorghay.
        </h1>
        <p className="text-mdgray my-8 md:text-lg">Welcome! I'm Elif, a Web Developer with a specialized focus in fintech and e-commerce. My career is dedicated to creating web applications that are not only efficient but also intuitively user-centric. I possess a deep understanding of technologies such as React, Next.js, Redux, and Tailwind CSS. This expertise allows me to deliver solutions that elevate both user experience and business objectives.</p>
        <p className="text-mdgray my-8 md:text-lg">In addition to my frontend skills, I bring robust backend expertise, working with Node.js and NoSQL to create full-stack solutions. This comprehensive skill set ensures seamless functionality and integration. I also emphasize quality assurance, employing advanced testing tools like Cypress and Jest to guarantee the highest standards in application performance.</p>
        <p className="text-mdgray my-8 md:text-lg">
        My journey in web development is a continuous pursuit of excellence. I am committed to staying abreast with the latest technological trends and industry best practices. This dedication not only enhances my skill set but also ensures that the solutions I develop are innovative and future-proof, effectively meeting the evolving needs of the digital landscape.
        </p>
        <div className="max-w-xl">
          <h2 className="text-xl md:text-3xl mb-4">My Go-To Stack</h2>
          <ul className=" flex flex-wrap md:text-lg text-mdgray">
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/next-js.png')} className="logo" alt="logo-img" />
                <span>NextJS</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/react.png')} className="logo" alt="logo-img" />
                <span>React</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/javascript.png')} className="logo" alt="logo-img" />
                <span>JavaScript</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/redux.png')} className="logo" alt="logo-img" />
                <span>Redux</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/nodejs.png')} className="logo" alt="logo-img" />
                <span>Node.js</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/mysql.png')} className="logo" alt="logo-img" />
                <span>MySQL</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/mongo.png')} className="logo" alt="logo-img" />
                <span>MongoDB</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/bootstrap.png')} className="logo" alt="logo-img" />
                <span>Bootstrap</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/material-ui.png')} className="logo" alt="logo-img" />
                <span>Material UI</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
