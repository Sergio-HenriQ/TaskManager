const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === "unselected") {
      return "text-brand-dark-blue"
    }

    if (variant === "selected") {
      return "bg-brand-primary bg-opacity-15 text-brand-primary"
    }
  }

  return (
    <a
      className={`flex items-center gap-2 rounded-lg px-6 py-3 ${getVariantClasses()}`}
      href="#"
    >
      {children}
    </a>
  )
}

export default SidebarButton
