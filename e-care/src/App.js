import React from "react";

// IMPORT ICONS FROM REACT ICONS
import { FcSettings } from "react-icons/fc";
// CUSTOM CSS
import "./App.css";
import brain from "./Images/carousel-brain.png";
import heart from "./Images/carousel-heart.png";
import orthopaedic from "./Images/carousel-orthopaedic.png";
import robotics from "./Images/carousel-robotics.png";
import pharm from "./Images/carousel-pharm.png";
import article1 from "./Images/article-1.png";
import arcticle2 from "./Images/article-2.png";
import article3 from "./Images/article-3.png";
import healthtips01 from "./Images/healthtips01.png";
import healthtips02 from "./Images/healthtips02.png";
import logo_facebook from "./Images/icons8_facebook.png";
import logo_instagram from "./Images/icons8_instagram.png";
import logo_linkedin from "./Images/icons8_linkedin.png";
import logo_twitter from "./Images/icons8_twitter.png";
import ecare_transp from "./Images/ecare-transparent.png";

// IMPORTING NAVBAR
import PublicNav from "./Components/Partials/PublicNav/PublicNav";
import HomePageHeader from "./Components/Partials/HomePageHeader/HomePageHeader";

function App() {
  return (
    <div>
      <PublicNav />
      <HomePageHeader />
      <div className="container-fluid py-5">
        <header>
          <h3 className="text-center text-danger">Center of Excellence</h3>
          <p className="text-center">
            Combining the best specialists and equipment to provide you nothing
            short of the best in healthcare
          </p>
        </header>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner row w-10 mx-auto">
            <div className="carousel-item col-md-4 active">
              <img
                src={heart}
                className="d-block mx-auto img-fluid"
                alt="heart"
              />
              <p className="text-center lead text-primary font-weight-bold my-3">
                Heart
              </p>
            </div>
            <div className="carousel-item col-md-4">
              <img
                src={brain}
                className="d-block mx-auto img-fluid"
                alt="brain"
              />
              <p className="text-center lead text-primary font-weight-bold my-3">
                Brain
              </p>
            </div>
            <div className="carousel-item col-md-4">
              <img
                src={orthopaedic}
                className="d-block mx-auto img-fluid"
                alt="Bones"
              />
              <p className="text-center lead text-primary font-weight-bold my-3">
                Orthopaedics
              </p>
            </div>
            <div className="carousel-item col-md-4">
              <img
                src={pharm}
                className="d-block mx-auto img-fluid"
                alt="drugs"
              />
              <p className="text-center lead text-primary font-weight-bold my-3">
                Critical
              </p>
            </div>
            <div className="carousel-item col-md-4">
              <img
                src={robotics}
                className="d-block mx-auto img-fluid"
                alt="robotics"
              />
              <p className="text-center lead text-primary font-weight-bold my-3">
                Robotics
              </p>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="prj-carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="prj-carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
      <div className="container-fluid py-2">
        <div className="row row-cols-1">
          <h3 className="text-center text-danger">Register yourself</h3>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="container-fluid py-3">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col text-center py-3 py-md-0">
            <h4>I am a Doctor/Nurse</h4>
            <p>
              Sign in as a doctor or a nurse so you can be able to post tips on
              health and reach out to patients
            </p>
            <div className="mx-auto">
              <button className="btn btn-success">
                Register as a Doctor/Nurse
              </button>
            </div>
          </div>
          <div className="col text-center py-3 py-md-0">
            <h4>I am a Patient</h4>
            <p>
              Sign in as a candidate to be able to consult a doctor and get
              notification
            </p>
            <div className="mx-auto">
              <button className="btn btn-outline-success">
                Register as a Patient
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3">
        <div className="row row-cols-1">
          <h3 className="text-center text-danger">Health Articles</h3>
          <p className="text-center">
            Health and disease-related news and content posts everyday
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col my-3">
            <div className="border-0 card col px-0 shadow">
              <img src={article1} className="card-img-top" height="284" />
              <div className="card-body">
                <h5 className="card-title text-primary">
                  Get relevant information about Hepatitis-C
                </h5>
                <p className="small text-danger">March 26 | 0 comments</p>
                <p className="card-text text-muted">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="text-right">
                  <a href="#" className=" text-success">
                    Continue reading
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col my-3">
            <div className="border-0 card col px-0 shadow">
              <img src={arcticle2} className="card-img-top" height="284" />
              <div className="card-body">
                <h5 className="card-title text-primary">
                  How to Cure Alzimer disease with self care home tips?
                </h5>
                <p className="small text-danger">MARCH 29 | 5 comments</p>
                <p className="card-text text-muted">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="text-right">
                  <a href="#" className=" text-success">
                    Continue reading
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col my-3">
            <div className="border-0 card col px-0 shadow">
              <img src={article3} className="card-img-top" height="284" />
              <div className="card-body">
                <h5 className="card-title text-primary">
                  COVID-19 Fight - Work
                </h5>
                <p className="small text-danger">MARCH 29 | 5 comments</p>
                <p className="card-text text-muted">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="text-right ">
                  <a href="#" className=" text-success">
                    Continue reading
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col my-3">
            <div className="border-0 card col px-0 shadow">
              <img src={article3} className="card-img-top" height="284" />
              <div className="card-body">
                <h5 className="card-title text-primary">
                  COVID-19 Fight - Work From Home
                </h5>
                <p className="small text-danger">MARCH 29 | 5 comments</p>
                <p className="card-text text-muted">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="text-right">
                  <a href="#" className=" text-success">
                    Continue reading
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col text-center">
            <h3 className="text-danger">Health Tips Videos</h3>
            <p className="text-muted">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <img className="img-fluid" src={healthtips01} alt="" />
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <h4 className="text-success">Dr. M. Michael</h4>
            <p className="text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              vitae explicabo fugit commodi tempore, sit a aliquam dolor vel
              quidem natus eum earum idci officia in. Inventore, omnis
              reprehenderit!
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-end mr-3">
          <div>
            <a href="#">More {">>"}</a>
          </div>
        </div>
        <hr className="bg-success" />
        <div className="row row-cols-1 row-cols-md-2 d-flex flex-row-reverse">
          <div className="col">
            <img className="img-fluid" src={healthtips02} alt="" />
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <h4 className="text-success text-md-right">Dr. M. Michael</h4>
            <p className="text-secondary text-md-right">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              vitae explicabo fugit commodi tempore, sit a aliquam dolor vel
              quidem natus eum earum idci officia in. Inventore, omnis
              reprehenderit!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-success py-5">
        <footer className="container">
          <div className="row">
            <h3 className="col">E-Care</h3>
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            <ul className="col list-unstyled">
              <li className="font-weight-bold my-3">INFORMATION</li>
              <li className="py-2">
                <a href="#">About us</a>
              </li>
              <li className="py-2">
                <a href="#">Contact us</a>
              </li>
              <li className="py-2">
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
            <ul className="col list-unstyled">
              <li className="font-weight-bold my-3">RESPONSE LINKS</li>
              <li className="py-2">
                <a href="#">Careers</a>
              </li>
              <li className="py-2">
                <a href="#">Offers</a>
              </li>
            </ul>
            <ul className="col list-unstyled">
              <li>
                <ul className="list-unstyled d-flex justify-content-around justify-content-md-start">
                  <li>
                    <img
                      src={logo_facebook}
                      alt="facebook logo"
                      width="30"
                      height="30"
                    />
                  </li>
                  <li>
                    <img
                      src={logo_instagram}
                      alt="instagram logo"
                      width="30"
                      height="30"
                      className="ml-4"
                    />
                  </li>
                  <li>
                    <img
                      src={logo_twitter}
                      alt="twitter logo"
                      width="30"
                      height="30"
                      className="ml-4"
                    />
                  </li>
                  <li>
                    <img
                      src={logo_linkedin}
                      alt="linkedin logo"
                      width="30"
                      height="30"
                      className="ml-4"
                    />
                  </li>
                </ul>
              </li>
              <li className="d-flex justify-content-around justify-content-md-start align-items-center">
                <span className=" text-white d-inline-block">Powered by</span>
                <img
                  src={ecare_transp}
                  alt="ecare logo"
                  className="d-inline-block"
                />
              </li>
            </ul>
          </div>
          <hr className="bg-white" />
          <div className="row justify-content-center">
            Copyright | YYYY E-Care
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

// {
//   <header className="App-header">
//   <FcSettings style={{ fontSize: "250px" }} className="App-logo" />
//   <p className="text-dark display-4 font-weight-bold">
//     Sorry, we're doing some work on the site......
//   </p>
//   <code>
//     Thank you for being patient. We're working on the site and will be
//     back shortly. We're preparing something exciting for you.
//   </code>
// </header>
// }
