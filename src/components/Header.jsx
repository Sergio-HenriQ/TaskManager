import PropTypes from "prop-types"
import { useState } from "react"

import { AddIcon, TrashIcon } from "../assets/icons"
import AddTaskDialog from "./AddTaskDialog"
import Button from "./Button"

const Header = ({ children }) => {
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false)

  return (
    <header>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-brand-primary">
            {children}
          </span>
          <h2 className="text-xl font-semibold">{children}</h2>
        </div>
        <div className="flex items-end gap-2">
          <Button color="ghost">
            Limpar tarefas
            <TrashIcon />
          </Button>
          <Button onClick={() => setAddTaskDialogIsOpen(true)}>
            Nova tarefa
            <AddIcon />
          </Button>

          <AddTaskDialog
            isOpen={addTaskDialogIsOpen}
            handleClose={() => setAddTaskDialogIsOpen(false)}
          />
        </div>
      </div>
    </header>
  )
}

Header.proptypes = {
  children: PropTypes.node.isRequired,
}

export default Header
