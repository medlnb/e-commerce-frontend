export const get_shoes = async () => {
  try {
    const response = await fetch("https://e-commerce-backend-5em8.onrender.com/api/shoe")
    const json = await response.json()
    // console.log(json)
    return json
  } catch (err) {
    return { err }
  }
}
export const get_shoe = async (id: string) => {
  try {
    const response = await fetch("https://e-commerce-backend-5em8.onrender.com/api/shoe/" + id)
    const json = await response.json()
    // console.log(json)
    return json
  } catch (err) {
    return { err }
  }
}

export const addReview = async (id: string, content: string, username: string) => {
  try {
    const response = await fetch("https://e-commerce-backend-5em8.onrender.com/api/shoe/reviews/" + id, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        text: content,
        rating: "10",
      })
    })
    const json = await response.json()
    return json
  } catch (err) {
    return { err }
  }
}
