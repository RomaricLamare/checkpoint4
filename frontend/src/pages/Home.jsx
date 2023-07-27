import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import BandCard from "./BandCard";
import LoginContext from "../../navigation/LoginContext";

function Home() {
  const { bands, setBands } = useContext(LoginContext);

  const [selectedValue, setSelectedValue] = useState("...");

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

  function handleChange(e) {
    setSelectedValue(e.target.value);
  }

  return (
    <div className="Home">
      <select className="Home_select" onChange={handleChange}>
        <option>...</option>
        {bands &&
          bands.map((el) => {
            return <option key={el.id}>{el.name}</option>;
          })}
      </select>
      <ul className="Home_ul">
        {bands &&
          bands
            .filter(
              (el) => selectedValue === "..." || selectedValue === el.name
            )
            .map((el) => {
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
