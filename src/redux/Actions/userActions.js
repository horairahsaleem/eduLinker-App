import { server } from '../store';
import axios from 'axios';


// ====================== AUTH ACTIONS ======================
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

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
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const register = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });

    const { data } = await axios.post(`${server}/register`, formdata, {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    });

    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "registerFail",
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
      console.log("LoadUser failed:", error.response?.data || error.message);
    dispatch({
      type: "loadUserFail",
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    dispatch({ type: "logoutSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response?.data?.message || error.message,
    });
  }
};






// BUY SUBSCRIPTION (redirects to Stripe checkout)
export const buySubscription = () => async (dispatch) => {
  try {
    dispatch({ type: "buySubscriptionRequest" });

    const { data } = await axios.get(`${server}/subscribe`, {
      withCredentials: true,
    });

    if (data?.checkoutUrl) {
      window.location.href = data.checkoutUrl; // ✅ redirect to Stripe
    } else {
      dispatch({
        type: "buySubscriptionFail",
        payload: "Checkout URL not returned from server",
      });
    }
  } catch (error) {
    dispatch({
      type: "buySubscriptionFail",
      payload: error.response?.data?.message || error.message,
    });
  }
};

// VERIFY PAYMENT (runs on PaymentSuccess page)
export const paymentVerification = (session_id) => async (dispatch) => {
  try {
    dispatch({ type: "buySubscriptionRequest" });

    const { data } = await axios.post(
      `${server}/paymentverification`,
      { session_id },
      { withCredentials: true }
    );

    dispatch({
      type: "buySubscriptionSuccess",
      payload: {
        subscriptionId: data.subscriptionId,
        subscriptionStatus: data.subscriptionStatus, // ✅ active
      },
    });
  } catch (error) {
    dispatch({
      type: "buySubscriptionFail",
      payload: error.response?.data?.message || error.message,
    });
  }
};

// CANCEL SUBSCRIPTION
export const cancelSubscription = () => async (dispatch) => {
  try {
    dispatch({ type: "cancelSubscriptionRequest" });

    const { data } = await axios.delete(`${server}/subscribe/cancel`, {
      withCredentials: true,
    });

    dispatch({ type: "cancelSubscriptionSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "cancelSubscriptionFail",
      payload: error.response?.data?.message || error.message,
    });
  }
};

// // ====================== SUBSCRIPTION ACTIONS ======================
// export const buySubscription = () => async (dispatch) => {
//   try {
//     dispatch({ type: "buySubscriptionRequest" });

//     const { data } = await axios.get(`${server}/subscribe`, {
//       withCredentials: true,
//     });

//     dispatch({ type: "buySubscriptionSuccess", payload: data.subscriptionId });
//   } catch (error) {
//     dispatch({
//       type: "buySubscriptionFail",
//       payload: error.response?.data?.message || error.message,
//     });
//   }
// };

// export const cancelSubscription = () => async (dispatch) => {
//   try {
//     dispatch({ type: "cancelSubscriptionRequest" });

//     const { data } = await axios.delete(`${server}/subscribe/cancel`, {
//       withCredentials: true,
//     });

//     dispatch({ type: "cancelSubscriptionSuccess", payload: data.message });
//   } catch (error) {
//     dispatch({
//       type: "cancelSubscriptionFail",
//       payload: error.response?.data?.message || error.message,
//     });
//   }
// };
