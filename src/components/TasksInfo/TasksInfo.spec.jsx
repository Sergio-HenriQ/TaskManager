import { render, screen } from "@testing-library/react"

import { LayoutListIcon } from "../../assets/icons"
import TasksInfo from "./TasksInfo"
screen.debug()

describe("TasksInfo", () => {
  it("should display the props passed to the component in the interface ", () => {
    render(
      <TasksInfo
        icon={<LayoutListIcon data-testid="icon" />}
        quantity={5}
        text="Tarefas disponíveis"
      />
    )

    const textSpan = screen.getByText(5)
    const quantityParagraph = screen.getByText("Tarefas disponíveis")

    expect(screen.getByTestId("icon")).toBeInTheDocument()
    expect(textSpan).toBeInTheDocument()
    expect(quantityParagraph).toBeInTheDocument()
  })
})
