import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import AllHolidays from "./AllHolidays";

const SearchBar = ({onChange, placeholder}) => {



  return (
    <div className="Search">
      <span className="SearchSpan">
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        className="SearchInput"
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

// SearchBar.propTypes = {
  
//   onChange: PropTypes.func.isRequired,

//   placeholder: PropTypes.string.isRequired,

// }

export default SearchBar