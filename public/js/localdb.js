const dataName = 'food'

function lsGetData() {
  const data = localStorage.getItem(dataName)
    ? JSON.parse(localStorage.getItem(dataName))
    : []
  return data
}

function lsAddData(data) {
  const currentData = lsGetData()
  data.quantity = 1
  let existData = currentData.find((v) => v._id === data._id)

  // If Already Added Just Increase Quantity
  if (existData?._id) {
    let updatedData = currentData.map((data) => {
      if (data._id === existData._id) {
        return { ...data, quantity: data.quantity + 1 }
      } else {
        return data
      }
    })
    localStorage.setItem(dataName, JSON.stringify(updatedData))
  } else {
    currentData.push(data)
    localStorage.setItem(dataName, JSON.stringify(currentData))
  }

  let result = JSON.parse(localStorage.getItem(dataName))
  return result
}

function lsRemoveData(id) {
  const currentData = lsGetData()
  let updatedData = currentData.filter((data) => data._id !== id)
  localStorage.setItem(dataName, JSON.stringify(updatedData))

  const data = localStorage.getItem(dataName)
    ? JSON.parse(localStorage.getItem(dataName))
    : []
  return data
}

function lsIncreaseQuantity(id) {
  const currentData = lsGetData()

  let updatedData = currentData.map((data) => {
    if (data._id === id) {
      return { ...data, quantity: data.quantity + 1 }
    } else {
      return data
    }
  })
  localStorage.setItem(dataName, JSON.stringify(updatedData))

  let data = JSON.parse(localStorage.getItem(dataName))
  return data
}

function lsDecreaseQuantity(id) {
  const currentData = lsGetData()
  let updatedData = currentData.map((data) => {
    if (data._id === id && data.quantity > 0) {
      return { ...data, quantity: data.quantity - 1 }
    } else {
      return data
    }
  })
  localStorage.setItem(dataName, JSON.stringify(updatedData))

  let data = JSON.parse(localStorage.getItem(dataName))
  return data
}
