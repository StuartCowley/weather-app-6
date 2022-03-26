import PropTypes from "prop-types";

function SearchForm({ searchText, setSearchText, handleCitySearch }) {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <section className="search-form">
      <input
        type="text"
        className="search-form__input"
        value={searchText}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="search-form__button"
        onClick={handleCitySearch}
      >
        Search
      </button>
    </section>
  );
}

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  handleCitySearch: PropTypes.func.isRequired,
};

export default SearchForm;
