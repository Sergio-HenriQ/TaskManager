const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === "ghost") {
      return "bg-transparent text-[#818181]"
    }

    if (variant === "primary") {
      return "bg-[#00ADB5] text-white"
    }

    if (variant === "danger") {
      return "bg-[#EF4444] text-white"
    }

    if (variant === "secondary") {
      return "bg-[#EEEEEE] text-[#35383E"
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
