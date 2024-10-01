import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render, screen } from "@testing-library/react"

import AddTaskDialog from "./AddTaskDialog"

const queryClient = new QueryClient()

describe("AddTaskDialog", () => {
  it("should render when the isOpen prop is true", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AddTaskDialog isOpen={true} />
      </QueryClientProvider>
    )

    const dialogElement = screen.getByText(/Insira as informações abaixo/i) // Substitua pelo texto real que deve estar no diálogo
    expect(dialogElement).toBeInTheDocument()
  })
})
