import PropTypes from "prop-types";

function UpdateForm({ handleChange, formData, handleSubmit, formError }) {
  return (
    <form id="update_form">
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={formData.name}
        required
      />
      <input
        name="genre"
        placeholder="Genre"
        onChange={handleChange}
        value={formData.genre}
        required
      />
      <input
        name="country"
        placeholder="Country"
        onChange={handleChange}
        value={formData.country}
      />
      <input
        name="fav_album"
        placeholder="Favorite album"
        onChange={handleChange}
        value={formData.fav_album}
        required
      />
      <input
        name="link"
        placeholder="Link"
        onChange={handleChange}
        value={formData.link}
        required
      />
      <input
        name="facebook"
        placeholder="Facebook"
        onChange={handleChange}
        value={formData.facebook}
      />
      <input
        name="instagram"
        placeholder="Instagram"
        onChange={handleChange}
        value={formData.instagram}
      />
      <input
        name="album_link"
        placeholder="Album link"
        onChange={handleChange}
        value={formData.album_link}
      />
      <input
        name="image"
        placeholder="Image"
        onChange={handleChange}
        value={formData.image}
        required
      />
      {formError && (
        <li className="modifierOeuvre_message_error">
          <p>Veuillez remplir tous les champs requis.</p>
        </li>
      )}
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

UpdateForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formError: PropTypes.bool.isRequired,
};

export default UpdateForm;
