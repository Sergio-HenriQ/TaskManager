import PropTypes from "prop-types"

const InputErrorMessage = ({ children }) => {
  return <p className="text-start text-xs text-red-500">{children}</p>
}

export default InputErrorMessage

InputErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
}
