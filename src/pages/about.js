import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import "./about.css"

const AboutPage = () => {
  const query = useStaticQuery(graphql`
    query {
      elif: file(relativePath: { eq: "elif.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
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
      <SEO title="About Me" description="Currently, I'm pursuing a Bachelor's degree in Web Programming and Design, as well as a certificate in Entrepreneurship at Purdue University." />
      <div className="contain-md my-8 md:my-16">
        <Img className="elifImage" fluid={query.elif.childImageSharp.fluid} />
      </div>
      <div className="contain-sm">
        <h1 className="flex items-center text-3xl md:text-4xl md:text-5xl">
          Hi!
          <span className="w-12 mx-3">
            <Img fluid={query.wave.childImageSharp.fluid} />
          </span>
          I&apos;m Elif Tabak.
        </h1>
        <p className="text-mdgray my-8 md:text-lg">I'm a Full Stack Developer focused on building high-quality, thoughtful, and intuitive websites and web applications.</p>
        <p className="text-mdgray my-8 md:text-lg">I’m not an ordinary developer as unlike many others, I graduated from a non-related major and developed fascination for software engineering later on. Since I was a young girl, I love designing and creating things with my own hands. I thought of becoming an interior designer, however, I decided to major in Political Science as I became more interested in learning international politics and economy.</p>
        <p className="text-mdgray my-8 md:text-lg">Two years after graduation, my brother who is a software engineer rekindled my passion for design by introducing programming to me. The possibilities from coding on a computer to create complex yet beautiful websites became so satisfying that I decided to pursue web development full time. My story and sincere passion helped me secure a full scholarship at one of the world’s top 5 coding bootcamps based in New York. Fast forward to today, I have designed and built dozen of responsive web applications using HTML, CSS, Bootstrap, JavaScript, jQuery, React, Node.js, MongoDB, and more.</p>
        <p className="text-mdgray my-8 md:text-lg">
          As an apprentice at{' '}
          <a className="about link" href="https://www.re-coded.com/" target="_blank" rel="noopener noreferrer">
            Re:Coded
          </a>
          ,I'm implementing my training at the bootcamp into modern looking responsive web application projects.
        </p>
        <div className="max-w-xl">
          <h2 className="text-xl md:text-3xl mb-4">My Go-To Stack</h2>
          <ul className=" flex flex-wrap md:text-lg text-mdgray">
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/react.png')} className="logo" />
                <span>React</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/javascript.png')} className="logo" />
                <span>JavaScript</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/jquery.png')} className="logo" />
                <span>jQuery</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/redux.png')} className="logo" />
                <span>Redux</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/nodejs.png')} className="logo" />
                <span>Node.js</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/mysql.png')} className="logo" />
                <span>MySQL</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/mongo.png')} className="logo" />
                <span>MongoDB</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/bootstrap.png')} className="logo" />
                <span>Bootstrap</span>
              </div>
            </li>
            <li className="w-1/3 p-4">
              <div>
                <img src={require('../images/Favorites/material-ui.png')} className="logo" />
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
