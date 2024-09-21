import { render } from "@testing-library/react"

import Button from "./Button"

describe("Button", () => {
  it("should render with correct children", () => {
    const { getByText } = render(<Button>Lorem ipsum</Button>)

    getByText("Lorem ipsum")
  })
})
