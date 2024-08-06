const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === "ghost") {
      return "bg-transparent text-brand-dark-gray"
    }

    if (variant === "primary") {
      return "bg-brand-primary text-white"
    }

    if (variant === "danger") {
      return "bg-brand-danger text-white"
    }

    if (variant === "secondary") {
      return "bg-brand-light-gray text-[#35383E"
    }
  }

  const getSizeClasses = () => {
    if (size === "small") {
      return "py-1 text-xs"
    }

    if (size === "large") {
      return "py-2 text-sm"
    }
  }

  return (
    <button
      className={`flex h-max items-center justify-center gap-1 rounded-md px-3 font-semibold hover:opacity-65 ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
