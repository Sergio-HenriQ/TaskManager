import { render, screen } from "@testing-library/react"

import TimeSelect from "./TimeSelect"

describe("TimeSelect", () => {
  it("should render the label and the select", () => {
    render(<TimeSelect />)

    const inputLabel = screen.getByText("Horário")
    const select = document.getElementById("time")

    expect(inputLabel).toBeInTheDocument()
    expect(select).toBeInTheDocument()
  })
})
