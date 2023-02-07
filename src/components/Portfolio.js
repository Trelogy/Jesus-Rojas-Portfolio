import React from "react";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2">Portfolio</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Short title, long jacket
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  {/* <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  /> */}
                </li>
                <li className="d-flex align-items-center me-3">
                  {/* <svg className="bi me-2" width="1em" height="1em">
                    <use xlink:href="#geo-fill"></use>
                  </svg> */}
                  {/* <small>Earth</small> */}
                </li>
                <li className="d-flex align-items-center">
                  {/* <svg className="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3"></use>
                  </svg> */}
                  {/* <small>3d</small> */}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Much longer title that wraps to multiple lines
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  {/* <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  /> */}
                </li>
                <li className="d-flex align-items-center me-3">
                  {/* <svg className="bi me-2" width="1em" height="1em">
                    <use xlink:href="#geo-fill"></use>
                  </svg> */}
                  {/* <small>Pakistan</small> */}
                </li>
                <li className="d-flex align-items-center">
                  {/* <svg className="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3"></use>
                  </svg> */}
                  {/* <small>4d</small> */}
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
