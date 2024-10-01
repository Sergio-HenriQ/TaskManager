import { render, screen } from "@testing-library/react"

import Input from "./Input"

describe("Input", () => {
  it("should render with label and error message", () => {
    render(
      <Input label="Titulo" errorMessage={true && "O título é obrigátorio."} />
    )

    const inputLabel = screen.getByText(/Titulo/i)
    const inputErrorMessage = screen.getByText(/O título é obrigátorio/i)

    expect(inputLabel).toBeInTheDocument()
    expect(inputErrorMessage).toBeInTheDocument()
  })
})
