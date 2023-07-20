import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function BandCard({ name, image, id }) {
  return (
    <li className="BandCard">
      <h3 className="BandCard_name">{name}</h3>
      <div className="BandCard_image">
        <img src={image} alt={name} />
      </div>
      <NavLink to={`/bands/${id}`}>
        <p className="BandCard_more">+</p>
      </NavLink>
    </li>
  );
}

BandCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BandCard;
