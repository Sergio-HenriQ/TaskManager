import PropTypes from "prop-types"

const Header = ({ children }) => {
  return <header>{children}</header>
}

Header.proptypes = {
  children: PropTypes.node.isRequired,
}

export default Header
