import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "crimson" : "steelblue"}
        text={showAdd ? "close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "hello from titles without props",
};

//  CSS Styling in react components
// const headingStyle = {
//   color: "crimson",
//   backgroundColor: "goldrod",
// };
export default Header;
