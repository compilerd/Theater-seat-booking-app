// components/ShowDetailsPage.js

import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { selectTiming } from "../redux/actions/timingActions";
import "./ShowDetailsPage.css";

const ShowDetailsPage = ({ shows, selectTiming }) => {
  const [selectedTiming, setSelectedTiming] = useState(null);
  const { id } = useParams();
  const show = shows.find((show) => show.id === parseInt(id));

  if (!show) {
    return <div>Loading...</div>;
  }

  const handleTimingSelect = (timing) => {
    setSelectedTiming(timing);
    selectTiming(timing);
  };

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
            <div className="details-section-name">{show?.name}</div>
            <div className="details-section-description">
              {show?.description}
            </div>
            <div className="details-section-timings">
              Director: {show?.creator}
            </div>

            <ul className="timing-list">
              {show.timings.map((timing) => (
                <li key={timing}>
                  <button
                    onClick={() => handleTimingSelect(timing)}
                    className={selectedTiming === timing ? "selected" : ""}
                  >
                    {timing}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {selectedTiming && (
            <Link to="/seat-allocation">
              <Button variant="contained" className="book-now-button">
                Book Now
              </Button>
            </Link>
          )}
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
const mapDispatchToProps = {
  selectTiming,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailsPage);
