export const useLogin = async ( email: string, password: string) => {
  const API_Url = "http://localhost:4000/api/user/login";
  const user = {
    email,
    password,
  };

  try {
    const response = await fetch(API_Url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return await response.json();;


  } catch (err) {
    return { err: "An error occurred while making the request." };
  }
};
