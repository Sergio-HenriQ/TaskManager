import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import DailyWaterTarget from "./DailyWaterTarget"

const queryClient = new QueryClient()

describe("DailyWaterTarget", () => {
  const handleTaskCheckboxClick = jest.fn()
  it("should execute a map with array dailyTarget and display the progress", () => {
    const dailyTargetArray = [
      {
        id: "1",
        title: "500 ml",
        quantity: 500,
        percentage: 20,
        status: "done",
      },
      {
        id: "2",
        title: "1 litro",
        quantity: 1000,
        percentage: 40,
        status: "not_started",
      },
    ]

    const mapSpy = jest.spyOn(dailyTargetArray, "map")

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <DailyWaterTarget
            dailyTarget={dailyTargetArray}
            proguess={dailyTargetArray[1]}
            handleTaskCheckboxClick={handleTaskCheckboxClick}
          />
        </MemoryRouter>
      </QueryClientProvider>
    )

    const amountOfWaterConsumed = screen.getAllByText(/1 litro/)

    expect(mapSpy).toHaveBeenCalledTimes(1)

    expect(mapSpy).toHaveBeenCalledWith(expect.any(Function))

    expect(dailyTargetArray.length).toBe(2)

    amountOfWaterConsumed.forEach((element) => {
      expect(element).toBeInTheDocument()
    })

    mapSpy.mockRestore()
  })
})
