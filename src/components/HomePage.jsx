// components/HomePage.js

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { selectShow } from "../redux/actions/showActions";
import "./HomePage.css";

const HomePage = ({ shows, selectShow }) => {
  return (
    <div className="container">
      <Typography variant="h1" className="home-page-heading">
        Welcome to Movie Booking
      </Typography>
      {shows.map((show) => (
        <div className="show-item" key={show.id}>
          <img src={show.image} alt={show.name} className="show-item-image" />
          <div className="show-item-details">
            <div>
              <div className="show-item-name">{show.name}</div>
              <div className="show-item-description">{show.description}</div>
            </div>
            <Link
              to={`/show/${show.id}`}
              className="show-item-link"
              onClick={() => {
                return selectShow(show);
              }}
            >
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shows: state.shows,
  };
};

const mapDispatchToProps = {
  selectShow,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
