import bannerImage from '../assets/girl.png';
import bannerBackground from '../assets/banner_wallpaper.svg';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Front-End Developer',
        'Web Developer',
        'UI Developer',
        'Web Designer',
      ],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 60,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '!',
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: 'cover',
        height: '90vh',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="text-white">
              <h3 className="mt-3 text-3xl font-semibold ps-5 pe-5">
                Hi, I am
              </h3>
              <h1 className="mt-3 text-4xl font-bold ps-5 pe-5">
                Sarika K. Likhar
              </h1>
              <h2 className="mt-3 text-3xl ps-5 pe-5">
                I am a {''}
                <span
                  className="font-bold text-decoration-underline"
                  ref={el}
                ></span>
              </h2>
              <p className="mt-3 mb-5 text-white ps-5 pe-5">
                A passionate developer with over 1.2 years of experience in web
                development and designing user interfaces for A passionate
                developer with experience in building responsive and interactive
                web applications. Skilled in collaboration, HTML5, CSS,
                JavaScript, React.JS and Tailwind CSS, and problem-solving.
                Committed to delivering quality results and staying abreast of
                industry trends. Passionate about making a positive impact.
              </p>
              <div className="soc-icon flex flex-wrap gap-5 justify-content-center ps-5 pe-5">
                <a
                  href=""
                  className="cursor-pointer text-decoration-none text-bg-dark m-3 rounded-circle"
                >
                  <i className="ri-facebook-circle-fill"></i>
                </a>
                <a
                  href=""
                  className="cursor-pointer text-decoration-none text-bg-dark m-3 rounded-circle"
                >
                  <i className="ri-whatsapp-fill"></i>
                </a>
                <a
                  href=""
                  className="cursor-pointer text-decoration-none text-bg-dark m-3 rounded-circle"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
                <a
                  href=""
                  className="cursor-pointer text-decoration-none text-bg-dark m-3 rounded-circle"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                <a
                  href=""
                  className="cursor-pointer text-decoration-none text-bg-dark m-3 rounded-circle"
                >
                  <i className="ri-twitter-fill"></i>
                </a>
              </div>
              <div className="contact-btn mt-5 ps-5 pe-5">
                <a
                  href="/"
                  className="cursor-pointer text-decoration-none text-black-100 fw-semibold text-bg-warning rounded-pill px-3 py-2"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="home-img">
              <img
                className="rounded-circle shadow-lg mt-lg-5 ms-5"
                src={bannerImage}
                alt="Profile Picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
