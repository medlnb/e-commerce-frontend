export const useSignUp = async (username: string, email: string, password: string) => {
  const API_Url = "http://localhost:4000/api/user/signup";
  const user = {
    username,
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
