import React, { useEffect, useContext } from "react";
import axios from "axios";
import BandCard from "./BandCard";
import LoginContext from "../../navigation/LoginContext";

function Home() {
  const { bands, setBands } = useContext(LoginContext);

  const fetchBands = () => {
    axios
      .get("http://localhost:5000/bands")
      .then((res) => setBands(res.data))
      .catch((err) =>
        console.error("An error occured while retrieving data", err)
      );
  };

  useEffect(() => {
    fetchBands();
  }, []);

  return (
    <div className="Home">
      <ul className="Home_ul">
        {bands.map((el) => {
          return (
            <BandCard
              key={el.id}
              name={el.name}
              image={el.image}
              id={el.id}
              refreshBands={fetchBands}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
