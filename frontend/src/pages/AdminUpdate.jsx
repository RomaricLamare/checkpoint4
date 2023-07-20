import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UpdateForm from "../components/UpdateForm";

function AdminUpdate() {
  const [isDataSended, setIsDataSended] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    country: "",
    fav_album: "",
    link: "",
    facebook: "",
    instagram: "",
    album_link: "",
    image: "",
  });
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bands/${id}`)
      .then((res) => {
        setFormData({
          name: res.data.name,
          genre: res.data.genre,
          country: res.data.country,
          fav_album: res.data.fav_album,
          link: res.data.link,
          facebook: res.data.facebook,
          instagram: res.data.instagram,
          album_link: res.data.album_link,
          image: res.data.image,
        });
      })
      .catch((err) =>
        console.error(
          "Une erreur est survenue dans la récupération des données",
          err
        )
      );
  }, []);

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification de la validité des champs requis
    const form = document.getElementById("update_form");
    if (!form.checkValidity()) {
      setFormError(true);
      return;
    }

    const newData = new FormData(); // create new form object
    newData.append("name", formData.name);
    newData.append("genre", formData.genre);
    newData.append("country", formData.country);
    newData.append("fav_album", formData.fav_album);
    newData.append("link", formData.link);
    newData.append("facebook", formData.facebook);
    newData.append("instagram", formData.instagram);
    newData.append("album_link", formData.album_link);
    newData.append("image", formData.image);

    axios
      .put(`http://localhost:5000/bands/${id}`, formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(formData),
      })
      .then(() => {
        setIsDataSended(true);

        setTimeout(() => {
          navigate(`/bands/${id}`);
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
            <h2>Update your band card</h2>
          </li>
          <li className="admin-page_form">
            <UpdateForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formData={formData}
              formError={formError}
            />
          </li>
        </>
      )}
      {isDataSended && (
        <li className="admin-page_message_success">
          <div className="progress-bar" />
          <p>Band card updated !</p>
        </li>
      )}
    </ul>
  );
}

export default AdminUpdate;
