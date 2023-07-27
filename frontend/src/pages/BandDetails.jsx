import { useState, useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import {
  ImHeadphones,
  ImSpotify,
  ImFacebook2,
  ImInstagram,
  ImPencil2,
  ImArrowLeft2,
} from "react-icons/im";
import LoginContext from "../../navigation/LoginContext";

function BandDetails() {
  const [data, setData] = useState(undefined);

  const { user } = useContext(LoginContext);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bands/${id}`)
      .then((res) => setData(res.data))
      .catch((err) =>
        console.error("An error occured while retrieving data", err)
      );
  }, []);

  return (
    <ul className="BandDetails">
      {data !== undefined && (
        <li className="BandDetails_card">
          <h1>{data.name}</h1>
          <div className="BandCard_image">
            <img src={data.image} alt={data.name} />
          </div>
          <h2>{data.genre}</h2>
          <h3>{data.country}</h3>
          <div className="BandDetails_fav_album">
            <h2>My favorite album : </h2>
            <h2 className="BandDetails_fav_album_link">
              <ImSpotify />{" "}
              <a href={data.album_link} target="_blank" rel="noreferrer">
                {" "}
                {data.fav_album}{" "}
              </a>{" "}
              <ImHeadphones />{" "}
            </h2>
          </div>
          <div className="BandDetails_links">
            <h4 className="more_infos">
              More infos{" "}
              <a href={data.link} target="_blank" rel="noreferrer">
                <p className="links">here</p>
              </a>
            </h4>
            ||
            <h4>
              Follow{" "}
              <a href={data.facebook} target="_blank" rel="noreferrer">
                <ImFacebook2 className="links" />
              </a>{" "}
              <a href={data.instagram} target="_blank" rel="noreferrer">
                <ImInstagram className="links" />
              </a>
            </h4>
          </div>
          {user && (
            <NavLink to={`/bands/${id}/update`} className="BandDetails_update">
              <ImPencil2 />
            </NavLink>
          )}
          <NavLink to="/" className="BandDetails_exit">
            <ImArrowLeft2 />
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default BandDetails;
