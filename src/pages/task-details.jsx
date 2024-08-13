import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"

import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LoaderIcon,
  TrashIcon,
} from "../assets/icons"
import Button from "../components/Button"
import Input from "../components/Input"
import Sidebar from "../components/sidebar"
import TimeSelect from "../components/TimeSelect"

const TaskDetailsPage = () => {
  const { taskId } = useParams()
  const [task, setTask] = useState()
  const [errors, setErrors] = useState([])
  const [saveIsLoading, setSaveIsLoading] = useState(false)

  const titleRef = useRef()
  const descriptionRef = useRef()
  const timeRef = useRef()

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

  const handleDeleteClick = async () => {
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "DELETE",
    })

    if (!response.ok) {
      return toast.error(
        "Erro ao deletar a tarefa. Por favor, tente novamente."
      )
    }
    navigate(-1)
    toast.success("Tarefa deletada com sucesso!")
  }

  const handleSaveClick = async () => {
    setSaveIsLoading(true)
    const newErrors = []

    const title = titleRef.current.value
    const description = descriptionRef.current.value
    const time = timeRef.current.value

    if (!title.trim()) {
      newErrors.push({ inputName: "title", message: "O titulo é obrigátorio" })
    }

    if (!description.trim()) {
      newErrors.push({
        inputName: "description",
        message: "A descrição é obrigátoria",
      })
    }

    if (!time.trim()) {
      newErrors.push({ inputName: "time", message: "O horário é obrigatorio" })
    }

    setErrors(newErrors)

    if (newErrors.length > 0) {
      return setSaveIsLoading(false)
    }

    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify({ title, description, time }),
    })

    if (!response.ok) {
      toast.error("Ocorreu um erro ao salvar a tarefa.")
      return setSaveIsLoading(false)
    }

    const newTask = await response.json()
    setTask(newTask)
    setSaveIsLoading(false)
    toast.success("Tarefa salva com sucesso!")
  }

  const titleError = errors.find((error) => error.inputName === "title")
  const timeError = errors.find((error) => error.inputName === "time")
  const descriptionError = errors.find(
    (error) => error.inputName === "description"
  )

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
          <Button
            className="self-end"
            color="danger"
            onClick={handleDeleteClick}
          >
            {saveIsLoading && (
              <LoaderIcon className="animate-spin text-brand-white" />
            )}
            <TrashIcon />
            Deletar tarefa
          </Button>
        </div>

        {/* Detalhes da Tarefa */}

        <div className="w-full space-y-6 rounded-xl bg-brand-white p-6">
          <Input
            id="title"
            label="Titulo"
            defaultValue={task?.title}
            ref={titleRef}
            errorMessage={titleError?.message}
            disabled={saveIsLoading}
          />
          <TimeSelect
            id="time"
            label="Horário"
            defaultValue={task?.time}
            ref={timeRef}
            errorMessage={timeError?.message}
            disabled={saveIsLoading}
          />
          <Input
            id="description"
            label="Descrição"
            defaultValue={task?.description}
            ref={descriptionRef}
            errorMessage={descriptionError?.message}
            disabled={saveIsLoading}
          />
        </div>

        <div className="mt-6 flex w-full justify-end gap-3">
          <Button
            size="large"
            onClick={handleSaveClick}
            disabled={saveIsLoading}
          >
            {saveIsLoading && (
              <LoaderIcon className="animate-spin text-brand-white" />
            )}
            Salvar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TaskDetailsPage
