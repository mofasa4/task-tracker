import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("heyyy");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="crimson" text="hey" onClick={onClick} />
      <Button color="brown" text="hey1" />
      <Button color="aqua" text="hey2" />
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
