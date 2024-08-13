import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
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
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm()

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
      reset(data)
    }

    fetchTask()
  }, [taskId, reset])

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

  const handleSaveClick = async (data) => {
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: data.title.trim(),
        description: data.description.trim(),
        time: data.time,
      }),
    })

    if (!response.ok) {
      return toast.error("Ocorreu um erro ao salvar a tarefa.")
    }

    const newTask = await response.json()
    setTask(newTask)
    toast.success("Tarefa salva com sucesso!")
  }

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
            <TrashIcon />
            Deletar tarefa
          </Button>
        </div>

        {/* Detalhes da Tarefa */}

        <form onSubmit={handleSubmit(handleSaveClick)}>
          <div className="w-full space-y-6 rounded-xl bg-brand-white p-6">
            <Input
              id="title"
              label="Titulo"
              defaultValue={task?.title}
              {...register("title", {
                required: "O título é obrigatório.",
                validate: (value) => {
                  if (!value.trim()) {
                    return "O título não pode ser vazio."
                  }

                  return true
                },
              })}
              errorMessage={errors?.title?.message}
              disabled={isSubmitting}
            />
            <TimeSelect
              id="time"
              label="Horário"
              defaultValue={task?.time}
              {...register("time", {
                required: "O horário é obrigátorio.",
              })}
              errorMessage={errors?.time?.message}
              disabled={isSubmitting}
            />
            <Input
              id="description"
              label="Descrição"
              defaultValue={task?.description}
              {...register("description", {
                required: "A descrição é obrigátoria.",
                validate: (value) => {
                  if (!value.trim()) {
                    return "A descrição não pode ser vazia."
                  }
                  return true
                },
              })}
              errorMessage={errors?.description?.message}
              disabled={isSubmitting}
            />
          </div>

          <div className="mt-6 flex w-full justify-end gap-3">
            <Button size="large" disabled={isSubmitting} type="submit">
              {isSubmitting && (
                <LoaderIcon className="animate-spin text-brand-white" />
              )}
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskDetailsPage
