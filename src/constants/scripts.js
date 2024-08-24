import { calculateTotalWaterConsumption } from "../helpers/calculateTotalWaterConsumption"

export const dailyWaterConsumption = [
  {
    id: 1,
    title: "500 ml",
    quantity: 500,
    percentage: 20,
    status: "not_started",
  },
  {
    id: 2,
    title: "1 litro",
    quantity: 1000,
    percentage: 40,
    status: "done",
  },
  {
    id: 3,
    title: "1,5 litros",
    quantity: 1500,
    percentage: 60,
    status: "done",
  },
  {
    id: 4,
    title: "2 litros",
    quantity: 2000,
    percentage: 80,
    status: "not_started",
  },
  {
    id: 5,
    title: "2,5 litros",
    quantity: 2500,
    percentage: 100,
    status: "not_started",
  },
]

export const amountOfWaterConsumed = calculateTotalWaterConsumption(
  dailyWaterConsumption
)
