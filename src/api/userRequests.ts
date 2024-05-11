import instance from "./instance";

export const registerUserRequest = async (data: Object) => {
  try {
    const response = await instance({
      url: "/users/register",
      method: "POST",
      data: data,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};

export const loginUserRequest = async (data: Object) => {
  try {
    const response = await instance.post("/users/login", data);
    return response.data;
  } catch (e) {
    return e;
  }
};
export const tokenRequest = async (token: string) => {
  try {
    const res = await instance({
      url: "/users/refresh",
      method: "POST",
      data: { token },
    });
    return res.data;
  } catch (e) {
    return e;
  }
};

export const getUserDataRequest = async (id: string) => {
  try {
    const response = await instance({
      url: `/users/${id}`,
      method: "GET",
    });
    return response.data;
  } catch (e) {
    return e;
  }
};
