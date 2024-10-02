import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { toast } from "sonner"

import { deleteAllTasks } from "../../hooks/data/use-delete-tasks"
import { useGetTasks } from "../../hooks/data/use-get-tasks"
import Header from "./Header"

// Mock da função deleteAllTasks
jest.mock("../../hooks/data/use-delete-tasks", () => ({
  deleteAllTasks: jest.fn(),
}))

// Mock do hook useGetTasks para retornar tarefas falsas
jest.mock("../../hooks/data/use-get-tasks", () => ({
  useGetTasks: jest.fn(),
}))

// Mock da biblioteca de toast
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
  },
}))

// Teste de renderização do componente Header
// Mock do hook useGetTasks para retornar tarefas falsas
jest.mock("../../hooks/data/use-get-tasks", () => ({
  useGetTasks: jest.fn(),
}))

describe("Header Component", () => {
  // Cria uma instância do QueryClient
  const queryClient = new QueryClient()

  beforeEach(() => {
    // Limpar mocks antes de cada teste
    jest.clearAllMocks()
  })

  // Helper para renderizar o componente com o QueryClientProvider
  const renderWithQueryClient = (component) => {
    return render(
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    )
  }

  it("should delete all tasks and show a success message", async () => {
    // Mock de dados retornados pelo useGetTasks
    useGetTasks.mockReturnValue({
      data: [
        { id: 1, title: "Task 1" },
        { id: 2, title: "Task 2" },
      ],
    })

    // Renderizar o componente com o QueryClientProvider
    renderWithQueryClient(<Header>Test Header</Header>)

    // Localizar o botão de limpar tarefas
    const deleteButton = screen.getByText(/Limpar tarefas/i)

    // Simular o clique no botão de deletar tarefas
    fireEvent.click(deleteButton)

    // Verificar se deleteAllTasks foi chamado para cada tarefa
    await waitFor(() => {
      expect(deleteAllTasks).toHaveBeenCalledTimes(2)
      expect(deleteAllTasks).toHaveBeenCalledWith(1)
      expect(deleteAllTasks).toHaveBeenCalledWith(2)
    })

    // Verificar se o toast de sucesso foi chamado
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        "Tarefas deletadas com sucesso."
      )
    })

    // Verificar se o cache do React Query foi atualizado
    expect(queryClient.getQueryData("tasks")).toEqual([])
  })

  it("should render children correctly", () => {
    // Mock do retorno do useGetTasks
    useGetTasks.mockReturnValue({
      data: [], // Retorna uma lista vazia de tarefas para evitar erros
    })

    render(
      <QueryClientProvider client={queryClient}>
        <Header>Início</Header>
      </QueryClientProvider>
    )

    const textElements = screen.getAllByText(/início/i)
    textElements.forEach((element) => {
      expect(element).toBeInTheDocument()
    })
  })
})
