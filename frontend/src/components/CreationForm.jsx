import PropTypes from "prop-types";

function CreationForm({ handleChange, formData, handleSubmit }) {
  return (
    <form>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        name="genre"
        placeholder="Genre"
        onChange={handleChange}
        value={formData.genre}
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
      />
      <input
        name="link"
        placeholder="Link"
        onChange={handleChange}
        value={formData.link}
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
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

CreationForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CreationForm;
