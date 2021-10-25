import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

export const actAddUserApi = (user) => {
    return (dispatch) => {
        // Call Api
        dispatch(actAddUserRequest());

        api.post("QuanLyNguoiDung/ThemNguoiDung", user)
            .then((result) => {
                // Success
                dispatch(actAddUserSuccess(result.data.content));
            })
            .catch((error) => {
                // Failed
                dispatch(actAddUserFailed(error));
            });
    };
};

const actAddUserRequest = () => {
    return {
        type: ActionType.ADD_USER_REQUEST,
    };
};

const actAddUserSuccess = (data) => {
    return {
        type: ActionType.ADD_USER_SUCCESS,
        payload: data,
    };
};

const actAddUserFailed = (error) => {
    return {
        type: ActionType.ADD_USER_FAILED,
        payload: error,
    };
};
