import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { ImBin2 } from "react-icons/im";

function BandCard({ name, image, id, refreshBands }) {
  const deleteBandHandler = () => {
    axios
      .delete(
        `http://localhost:5000/bands/${id}`
        // {
        //   headers: {
        //     Authorization: `Bearer ${JSON.parse(
        //       localStorage.getItem("token")
        //     )}`,
        //   },
        // }
      )
      .then((response) => refreshBands(response))
      .catch((err) => console.error(err));
  };

  return (
    <li className="BandCard">
      <h3 className="BandCard_name">{name}</h3>
      <div className="BandCard_image">
        <img src={image} alt={name} />
      </div>
      <NavLink to={`/bands/${id}`}>
        <p className="BandCard_more" aria-hidden="true">
          +
        </p>
      </NavLink>
      <button
        className="BandCard_delete"
        type="button"
        onClick={deleteBandHandler}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            deleteBandHandler();
          }
        }}
      >
        <ImBin2 />
      </button>
    </li>
  );
}

BandCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  refreshBands: PropTypes.func.isRequired,
};

export default BandCard;
