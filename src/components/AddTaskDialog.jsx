import "./AddTaskDialog.css"

import PropTypes from "prop-types"
import { useRef } from "react"
import { createPortal } from "react-dom"
import { useForm } from "react-hook-form"
import { CSSTransition } from "react-transition-group"
import { toast } from "sonner"
import { v4 } from "uuid"

import { LoaderIcon } from "../assets/icons"
import { useAddTask } from "../hooks/data/use-add-task"
import Button from "./Button"
import Input from "./Input"
import TimeSelect from "./TimeSelect"

const AddTaskDialog = ({ isOpen, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  const { mutate: addTask } = useAddTask()

  const nodeRef = useRef()

  const handleSaveClick = async (data) => {
    const task = {
      id: v4(),
      title: data.title.trim(),
      time: data.time,
      description: data.description.trim(),
      status: "not_started",
    }

    addTask(task, {
      onSuccess: () => {
        handleClose()
        reset({
          title: "",
          time: "morning",
          description: "",
        })
      },
      onError: () =>
        toast.error("Erro ao adicionar a tarefa. Por favor, tente novamente."),
    })
  }
  const handleCancelClick = () => {
    reset({
      title: "",
      time: "morning",
      description: "",
    })
    handleClose()
  }

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            <div className="gap-4 rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-xl font-semibold text-brand-dark-blue">
                Nova Tarefa
              </h2>
              <p className="mb-4 mt-1 text-sm text-brand-text-gray">
                Insira as informações abaixo
              </p>

              <form
                onSubmit={handleSubmit(handleSaveClick)}
                className="flex w-[336px] flex-col space-y-4"
              >
                <Input
                  placeholder="Título da tarefa"
                  label="Titulo"
                  id="title"
                  errorMessage={errors?.title?.message}
                  disabled={isSubmitting}
                  {...register("title", {
                    required: "O título é obrigátorio.",
                    validate: (value) => {
                      if (!value.trim()) {
                        return "O título não pode ser vazio."
                      }

                      return true
                    },
                  })}
                />

                <TimeSelect
                  errorMessage={errors?.time?.message}
                  disabled={isSubmitting}
                  {...register("time", {
                    required: true,
                  })}
                />

                <Input
                  placeholder="Descreva a tarefa"
                  label="Descrição"
                  id="description"
                  errorMessage={errors?.description?.message}
                  disabled={isSubmitting}
                  {...register("description", {
                    required: "A descrição é obrigátoria.",
                    validate: (value) => {
                      if (!value.trim()) {
                        return "A descrição não pode ser vazia."
                      }

                      return true
                    },
                  })}
                />
                <div className="flex gap-3">
                  <Button
                    size="large"
                    color="secondary"
                    className="w-full"
                    onClick={handleCancelClick}
                    type="button"
                  >
                    Cancelar
                  </Button>
                  <Button
                    size="large"
                    className="w-full"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting && (
                      <LoaderIcon className="animate-spin text-brand-white" />
                    )}
                    Salvar
                  </Button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  )
}

AddTaskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onSubmitSuccess: PropTypes.func.isRequired,
  onSubmitError: PropTypes.func.isRequired,
}

export default AddTaskDialog
