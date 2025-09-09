import { server } from '../store';
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
console.log("Frontend sending:", { email, password });

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload:
        error.response?.data?.message || error.message || "Something went wrong",
    });
  }
};

