import styled from "styled-components";
import PropTypes from "prop-types";

const StyledH1 = styled.h1`
	color: blue;
	text-align: center;
	text-decoration: underline;
`;

const H1 = function ({ text, size }) {
	return <StyledH1 className={`h1-styled--${size}`}>{text}</StyledH1>;
};

H1.propTypes = {
	/**
	 * Content of the text
	 */
	text: PropTypes.string.isRequired,
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(["small", "medium", "large"]),
};

H1.defaultProps = {
	size: "small",
};

export default H1;
