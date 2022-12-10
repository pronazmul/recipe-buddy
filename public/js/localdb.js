const getData = () => {
  const data = localStorage.getItem('foodItems')
    ? JSON.parse(localStorage.getItem('foodItems'))
    : []
  return data
}

const addData = (key, count) => {
  const currentCart = getDatabaseCart()
  currentCart[key] = count
  localStorage.setItem(getDataKey(), JSON.stringify(currentCart))
}

const removeData = (key) => {
  const currentCart = getDatabaseCart()
  delete currentCart[key]
  localStorage.setItem(getDataKey(), JSON.stringify(currentCart))
}

const destroyData = (key) => {
  localStorage.removeItem(getDataKey())
}

export { getData, addData, removeData, destroyData }
