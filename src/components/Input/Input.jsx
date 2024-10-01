import PropTypes from "prop-types"
import { forwardRef } from "react"

import InputErrorMessage from "../InputErrorMessage"
import InputLabel from "../InputLabel"

const Input = forwardRef(({ errorMessage, label, ...rest }, ref) => {
  return (
    <div className="flex flex-col space-y-1">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
        {...rest}
        ref={ref}
      />
      {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </div>
  )
})

Input.displayName = "input"

Input.propTypes = {
  id: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

export default Input
