import PropTypes from "prop-types"
import { tv } from "tailwind-variants"

const Button = ({
  children,
  color = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const button = tv({
    base: "flex h-max items-center justify-center gap-2 rounded-md px-3 font-semibold hover:opacity-75",
    variants: {
      color: {
        primary: "bg-brand-primary text-white",
        secondary: "text-[#35383E bg-brand-light-gray",
        ghost: "bg-transparent text-brand-dark-gray",
        danger: "bg-brand-danger text-white",
      },
      size: {
        small: "py-1 text-xs",
        large: "py-2 text-sm",
      },
    },

    defaultVariants: {
      color: "primary",
      size: "small",
    },
  })

  return (
    <button className={button({ color, size, className })} {...rest}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "secondary", "ghost", "danger"]),
  size: PropTypes.oneOf(["small", "large"]),
  className: PropTypes.string,
}

export default Button
