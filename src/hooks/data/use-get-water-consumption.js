import { useQuery } from "@tanstack/react-query"

export const useGetWaterConsumption = () => {
  return useQuery({
    queryKey: "waterConsumption",
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:3000/dailyWaterConsumption",
        {
          method: "GET",
        }
      )

      const waterConsumption = await response.json()
      return waterConsumption
    },
  })
}
