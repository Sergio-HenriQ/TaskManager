export const calculateTotalWaterConsumption = (array) => {
  const quantityConsumed = array.filter((item) => item.status === "done")

  if (quantityConsumed.length == 0) {
    return {
      percentage: 0,
      title: "0",
    }
  }

  let largerQuantity = quantityConsumed[0]

  for (let index = 1; index <= quantityConsumed.length; index++) {
    let currentValue = quantityConsumed[index]

    if (currentValue?.quantity > largerQuantity?.quantity) {
      largerQuantity = currentValue
    }
  }
  return largerQuantity
}
