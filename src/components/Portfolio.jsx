import Recipe from '../assets/portfolio/recipeappreact.png';
import Landing from '../assets/portfolio/landingpage.png';
import Instagram from '../assets/portfolio/instagramclone.png';

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: Recipe,
      link: 'https://newrecipe-reactapp.netlify.app/',
      code: 'https://github.com/Sarikalikhar11/recipeapp-new',
      style: {
        width: '250px',
        height: '180px',
        boxShadow: '0 10px 10px 10px var(--gray-700)',
        padding: '30px 30px',
      },
    },
    {
      id: 2,
      src: Landing,
      link: 'https://stirring-boba-962e82.netlify.app/',
      code: 'https://github.com/Sarikalikhar11/landing-pageJS',
      style: {
        width: '250px',
        height: '180px',
        boxShadow: '0 10px 10px 10px var(--gray-700)',
        padding: '30px 30px',
      },
    },
    {
      id: 3,
      src: Instagram,
      link: 'https://tangerine-pothos-5c67a0.netlify.app/',
      code: 'https://github.com/Sarikalikhar11/instagram-clone',
      style: {
        width: '250px',
        height: '180px',
        boxShadow: '0 10px 10px 10px var(--gray-700)',
        padding: '30px 30px',
      },
    },
  ];

  return (
    <div className="mb-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col col-lg-12">
            <div>
              <h2 className="text-center fw-bold">Portfolio</h2>
              <p className="text-center fw-semibold mt-3">
                Check out some of my work right here
              </p>
            </div>
            <div className="portfolio w-100 h-100 p-5 ms-5 d-flex flex-wrap gap-5 justify-content-between align-items-center">
              {portfolio.map(({ id, src, link, code, style }) => (
                <div key={id} className="card port-card d-flex" style={style}>
                  <img className="mx-auto" src={src} alt="project image" />
                  <div className="card-body d-flex justify-content-between p-2 mt-2">
                    <a
                      target="_blank"
                      className="text-decoration-none text-black"
                      href={link}
                    >
                      Link
                    </a>
                    <a
                      target="_blank"
                      className="text-decoration-none text-black"
                      href={code}
                    >
                      Code
                    </a>
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

export default Portfolio;
