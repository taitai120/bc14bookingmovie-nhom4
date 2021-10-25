import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

export const actLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());

    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        // Lưu trạng thái login xuống localStorage
        localStorage.setItem(
          "UserCustomer",
          JSON.stringify(result.data.content)
        );

        history.goBack();

        dispatch(actLoginSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actLoginFailed(error));
      });
  };
};

export const actLogout = (history) => {
  // Xóa localStorage
  localStorage.removeItem("UserCustomer");

  history.replace("/login");

  return {
    type: ActionType.LOGIN_CLEAR_DATA,
  };
};

const actLoginRequest = () => {
  return {
    type: ActionType.LOGIN_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: ActionType.LOGIN_SUCCESS,
    payload: data,
  };
};

const actLoginFailed = (error) => {
  return {
    type: ActionType.LOGIN_FAILED,
    payload: error,
  };
};
