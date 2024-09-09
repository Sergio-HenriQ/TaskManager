import PropTypes from "prop-types"
import { tv } from "tailwind-variants"

const SidebarButton = ({ children, color }) => {
  const sidebar = tv({
    base: "flex items-center gap-2 px-6 py-3",
  })

  return (
    <button className={sidebar({ color })} href="#">
      {children}
    </button>
  )
}

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SidebarButton
