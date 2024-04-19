import Html from '../assets/expertise/html.png';
import Css from '../assets/expertise/css.png';
import Bootstrap from '../assets/expertise/Bootstrap.png';
import Js from '../assets/expertise/javascript.png';
import React from '../assets/expertise/react.png';
import Tailwind from '../assets/expertise/tailwind.png';
import Node from '../assets/expertise/node.png';
import Github from '../assets/expertise/github.png';
// import Angular from '../assets/expertise/angular.png';

const Expertise = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: 'HTML',
      style: {
        width: '200px',
        height: '150px',
        boxShadow: '0 10px 10px 10px var(--orange)',
        padding: '30px 30px',
      },
    },
    {
      id: 2,
      src: Css,
      title: 'CSS',
      style: {
        width: '200px',
        height: '150px',
        boxShadow: '0 10px 10px 10px var(--blue)',
        padding: '30px 30px',
      },
    },
    {
      id: 3,
      src: Bootstrap,
      title: 'Bootstrap',
      style: {
        width: '200px',
        height: '150px',
        boxShadow: '0 10px 10px 10px var(--purple)',
        padding: '30px 30px',
      },
    },
    {
      id: 4,
      src: Js,
      title: 'JavaScript',
      style: {
        width: '200px',
        height: '150px',
        boxShadow: '0 10px 10px 10px var(--yellow)',
        padding: '30px 30px',
      },
    },
    {
      id: 5,
      src: React,
      title: 'React',
      style: {
        width: '200px',
        height: '150px',
        boxShadow: '0 10px 10px 10px var(--cyan)',
        padding: '30px 30px',
      },
    },
    {
      id: 6,
      src: Tailwind,
      title: 'Tailwind',
      style: {
        width: '200px',
        height: '150px',
        boxShadow: '0 10px 10px 10px var(--teal)',
        padding: '30px 30px',
      },
    },
    {
      id: 7,
      src: Node,
      title: 'Node',
      style: {
        width: '200px',
        height: '150px',
        boxShadow: '0 10px 10px 10px var(--parrot-green)',
        padding: '30px 30px',
      },
    },
    {
      id: 8,
      src: Github,
      title: 'Github',
      style: {
        width: '200px',
        height: '150px',
        boxShadow: '0 10px 10px 10px var(--gray-600)',
        padding: '30px 30px',
      },
    },
  ];

  return (
    <div className="expertise p-5">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <div>
              <h2 className="text-center fw-bold text-white">Expertise</h2>
              <p className="text-center fw-semibold text-white mt-3">
                These are technologies I've worked with
              </p>
            </div>
            <div className="w-100 h-100 p-5 card-sec d-flex flex-wrap gap-5 justify-content-between">
              {techs.map(({ id, src, title, style }) => (
                <div key={id} className="card d-flex" style={style}>
                  <img
                    className="w-20 mx-auto"
                    src={src}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-text text-center fs-6 fw-semibold ">
                      {title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
