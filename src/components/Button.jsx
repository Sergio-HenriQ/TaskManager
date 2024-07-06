const Button = ({ children, variant = "primary", ...rest }) => {
  const setVariant = () => {
    if (variant === "ghost") {
      return "bg-transparent text-[#818181]"
    }

    if (variant === "primary") {
      return "bg-[#00ADB5] text-white"
    }

    if (variant === "danger") {
      return "bg-[#EF4444] text-white"
    }
  }

  return (
    <button
      className={`flex h-max items-center gap-1 rounded-md px-3 py-1 text-xs font-semibold hover:opacity-65 ${setVariant()}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
