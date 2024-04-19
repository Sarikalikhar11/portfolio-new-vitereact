import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { FaWindows } from 'react-icons/fa';
import { RiTerminalWindowFill } from 'react-icons/ri';
import { MdWebStories } from 'react-icons/md';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: FaGlobe,
      title: 'Web Development',
      description: `Welcome to my portfolio! With a keen eye for detail, I craft
              exceptional digital experiences. Proficient in HTML5, CSS3,
              JavaScript, and React.js, I specialize in front-end development.
              Also skilled in back-end development.`,
      style: {
        width: '250px',
        height: '350px',
        boxShadow: '0 10px 10px 10px var(--cyan)',
        padding: '0px 10px',
        fontSize: '14px',
      },
    },
    {
      id: 2,
      icon: FaWindows,
      title: 'Front-End Development',
      description: `Crafting immersive digital experiences that captivate and engage
              users is my passion. With expertise in HTML5, CSS3, JavaScript,
              and ReactJS, I specialize in turning design mockups into stunning,
              responsive layouts.`,
      style: {
        width: '250px',
        height: '350px',
        boxShadow: '0 10px 10px 10px var(--purple)',
        padding: '0px 10px',
        fontSize: '14px',
      },
    },
    {
      id: 3,
      icon: RiTerminalWindowFill,
      title: 'UI Development',
      description: `  I'm a UI developer passionate about creating visually stunning
              interfaces that resonate with users. With expertise in UI design
              principles, color theory, and layout composition, I specialize in
              transforming design concepts into captivating digital experiences.`,
      style: {
        width: '250px',
        height: '350px',
        boxShadow: '0 10px 10px 10px var(--pink)',
        padding: '0px 10px',
        fontSize: '14px',
      },
    },
    {
      id: 4,
      icon: MdWebStories,
      title: 'Web Designing',
      description: `  Welcome! I specialize in crafting visually stunning websites with
              intuitive interfaces. Using HTML, CSS, and JavaScript, I bring
              designs to life that engage and inspire. Let's collaborate to
              create digital experiences that leave a lasting impression.`,
      style: {
        width: '250px',
        height: '350px',
        boxShadow: '0 10px 10px 10px var(--orange)',
        padding: '0px 10px',
        fontSize: '14px',
      },
    },
  ];

  return (
    <div className="services-sec mt-5 pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-lg-12">
            <div>
              <h2 className="text-center fw-bold">Services</h2>
            </div>
            <div>
              <div className="w-100 h-100 p-5 ms-3 d-flex flex-wrap gap-5 justify-content-between align-items-center">
                {services.map(({ id, title, icon, description, style }) => (
                  <div key={id} className="card d-flex" style={style}>
                    <div>
                      <p className="text-center pt-3 fs-3">
                        {React.createElement(icon)}
                      </p>
                    </div>
                    <div className="card-body">
                      <h5 className="fs-5 fw-semibold text-center mb-3">
                        {title}
                      </h5>
                      <p className="card-text text-justify">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
