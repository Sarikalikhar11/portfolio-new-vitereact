import girlImage1 from '../assets/girl1.png';

const About = () => {
  return (
    <div className="container">
      <div className="row flex flex-wrap">
        <h2 className="text-center mt-5 fw-bold fs-1">About Me</h2>
        <div className="col-lg-6 col-md-8">
          <div className="mt-3 mb-3">
            <img
              src={girlImage1}
              alt="About Image"
              className="rounded-circle shadow-lg mt-lg-5 ms-5"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="mt-5 flex flex-wrap justify-content-center align-items-center md:justify-content-start ps-5 pe-5">
            <h2>Front End Developer</h2>
            <p className="md:text-wrap">
              A passionate developer with over 1.2 years of experience in web
              development. Creating web and mobile applications. Maintaining,
              optimizing, troubleshooting, and improving websites.
              Implementation of apps and landing pages from concept through
              deployment
            </p>
            <p>
              Skilled in collaboration, HTML5, Css, Javascript, ReactJS and
              Tailwind CSS, and problem-solving. Committed to delivering quality
              results and staying abreast of industry trends. Passionate about
              making a positive impact.
            </p>
            <div className="about-contact mt-5">
              <a
                href=""
                className="cursor-pointer text-decoration-none text-black-100 fw-semibold text-bg-warning rounded-pill px-3 py-2"
              >
                Read More...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
