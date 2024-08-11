import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { ArrowLeftIcon, ChevronRightIcon, TrashIcon } from "../assets/icons"
import Button from "../components/Button"
import Input from "../components/Input"
import Sidebar from "../components/sidebar"
import TimeSelect from "../components/TimeSelect"

const TaskDetailsPage = () => {
  const { taskId } = useParams()
  const [task, setTask] = useState()
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      })

      const data = await response.json()
      setTask(data)
    }

    fetchTask()
  }, [taskId])

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full space-y-6 px-8 py-16">
        {/* Cabeçalho */}
        <div className="flex w-full justify-between">
          {/*  Parte da esquerda */}
          <div>
            <button
              onClick={handleBackClick}
              className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary"
            >
              <ArrowLeftIcon />
            </button>

            <div className="flex items-center gap-1 text-xs">
              <span
                className="cursor-pointer text-brand-text-gray"
                onClick={handleBackClick}
              >
                Minhas tarefas
              </span>
              <ChevronRightIcon className="text-brand-text-gray" />
              <span className="font-semibold text-brand-primary">
                {task?.title}
              </span>
            </div>
            <h1 className="mt-2 text-2xl font-semibold">{task?.title}</h1>
          </div>

          {/* Parte da direita */}
          <Button className="self-end" color="danger">
            <TrashIcon />
            Deletar tarefa
          </Button>
        </div>

        {/* Detalhes da Tarefa */}

        <div className="w-full space-y-6 rounded-xl bg-brand-white p-6">
          <Input id="title" label="Titulo" value={task?.title} />
          <TimeSelect id="time" label="Horário" value={task?.time} />
          <Input id="description" label="Descrição" value={task?.description} />
        </div>

        <div className="mt-6 flex w-full justify-end gap-3">
          <Button color="secondary" size="large">
            Cancelar
          </Button>
          <Button size="large">Salvar</Button>
        </div>
      </div>
    </div>
  )
}

export default TaskDetailsPage
