import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CreationForm from "../components/CreationForm";

function Admin() {
  const [isDataSended, setIsDataSended] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    country: "",
    fav_album: "",
    link: "",
    album_link: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/bands", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      })
      .then(() => {
        setIsDataSended(true);

        setTimeout(() => {
          navigate("/");
        }, 4000);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ul className="admin-page">
      {!isDataSended && (
        <>
          <li className="admin-page_title">
            <h2>Add your fav</h2>
          </li>
          <li className="admin-page_form">
            <CreationForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formData={formData}
            />
          </li>
        </>
      )}
      {isDataSended && (
        <li className="admin-page_message_success">
          <div className="progress-bar" />
          <p>Personnage créé !</p>
        </li>
      )}
    </ul>
  );
}

export default Admin;
