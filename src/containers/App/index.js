import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const App = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" idName="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container">
      <h1 className="my-4">
        Page Heading
        <small>Secondary Text</small>
      </h1>
      <div className="row">
        <div className="col-md-8">
          <img className="img-fluid" src="http://placehold.it/750x500" alt="" />
        </div>
        <div className="col-md-4">
          <h3 className="my-3">Project Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem,
            adipiscing in adipiscing et, interdum nec metus. Mauris ultricies,
            justo eu convallis placerat, felis enim.
          </p>
          <h3 className="my-3">Project Details</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul>
        </div>
      </div>
      <h3 className="my-4">Related Projects</h3>
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img
              className="img-fluid"
              src="http://placehold.it/500x300"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img
              className="img-fluid"
              src="http://placehold.it/500x300"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img
              className="img-fluid"
              src="http://placehold.it/500x300"
              alt=""
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img
              className="img-fluid"
              src="http://placehold.it/500x300"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">
          Copyright &copy; Your Website 2018
        </p>
      </div>
    </footer>
  </div>
);

export default App;
