// components/ShowDetailsPage.js

import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import "./ShowDetailsPage.css";

const ShowDetailsPage = ({ shows }) => {
  const { id } = useParams();
  const show = shows.find((show) => show.id === parseInt(id));

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Typography variant="h1" className="show-details-heading">
        {show.name}
      </Typography>
      <div className="details-section">
        <img
          src={show.image}
          alt={show.name}
          className="details-section-image"
        />
        <div className="details-section-details">
          <div>
            <div className="details-section-name">{show.name}</div>
            <div className="details-section-description">
              {show.description}
            </div>
            <div className="details-section-timings">
              Timings: {show?.timings?.join(", ")}
            </div>
          </div>
          <Button variant="contained" className="book-now-button">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shows: state.shows,
  };
};

export default connect(mapStateToProps)(ShowDetailsPage);
