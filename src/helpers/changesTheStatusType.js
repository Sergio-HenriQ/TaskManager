export const changesTheStatusType = (status, allStatusArr) => {
  if (status == "not_started") {
    return allStatusArr[1]
  }
  if (status == "in_progress") {
    return allStatusArr[2]
  }
  if (status == "done") {
    return allStatusArr[0]
  }
}
