import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

export const actRegisterUser = (infoUser) => {
  return (dispatch) => {
    dispatch(actRegisterRequest());

    api
      .post("QuanLyNguoiDung/DangKy", infoUser)
      .then((result) => {
        dispatch(actRegisterSuccess(result.content.data));
      })
      .catch((error) => {
        dispatch(actRegisterFailed(error));
      });
  };
};

const actRegisterRequest = () => {
  return {
    type: ActionType.REGISTER_USER_REQUEST,
  };
};

const actRegisterSuccess = (data) => {
  return {
    type: ActionType.REGISTER_USER_SUCCESS,
    payload: data,
  };
};

const actRegisterFailed = (error) => {
  return {
    type: ActionType.REGISTER_USER_FAILED,
    payload: error,
  };
};
