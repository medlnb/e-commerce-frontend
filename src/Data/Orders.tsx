import { Cart_item } from "../Types/Cart_item"

export const getOrders = async (token: string, email: string) => {
  try {
    const response = await fetch(`https://e-commerce-backend-5em8.onrender.com/api/order/${email}`, {
      headers: {
        "authorization": `${token}`
      }
    })
    const json = await response.json()
    return json
  } catch (err) {
    throw err
  }
}

export const PostOrder = async (token: string, order: Cart_item) => {

  const response = await fetch("https://e-commerce-backend-5em8.onrender.com/api/order/create", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "authorization": `bearer ${token}`
    },
    body: JSON.stringify(order)
  })
  const json = await response.json()
  return json
}

export const removeOrder = (token: string, orderId: string | undefined) => {
  fetch("https://e-commerce-backend-5em8.onrender.com/api/order/delete/" + orderId, {
    method: "DELETE",
    headers: {
      "authorization": `bearer ${token}`
    }
  })
  
}

export const changeQuantity = async (id: string, quantity: number) => {
  await fetch("https://e-commerce-backend-5em8.onrender.com/api/order/quantity/" + id, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "authorization": `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQ5MGM3YWNmZDE0ZmRmYTM2YjNjMmUiLCJpYXQiOjE2OTI2NDM0MzksImV4cCI6MTY5MjkwMjYzOX0._dOJFQoIvYboMVtnIqTDFi5IhjzG2Ka0HluiS1algs4`
    },
    body: JSON.stringify({ quantity: quantity })
  })
}