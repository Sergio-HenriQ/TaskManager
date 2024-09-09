import { NavLink } from "react-router-dom"

import { HomeIcon, TasksIcon } from "../assets/icons"
import SidebarButton from "./SidebarButton"

const Sidebar = () => {
  const activeLink =
    " rounded-lg bg-brand-primary bg-opacity-15 text-brand-primary"
  const unselected = "text-brand-dark-blue"

  return (
    <div className="h-screen w-72 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-brand-primary">
          Task Manager
        </h1>
        <p>
          Um simples{" "}
          <span className="text-brand-primary">organizador de tarefas.</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? activeLink : unselected)}
        >
          <SidebarButton>
            <HomeIcon />
            Inicio
          </SidebarButton>
        </NavLink>
        <NavLink
          to={"/tasks"}
          className={({ isActive }) => (isActive ? activeLink : unselected)}
        >
          <SidebarButton>
            <TasksIcon />
            Minhas Tarefas
          </SidebarButton>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
