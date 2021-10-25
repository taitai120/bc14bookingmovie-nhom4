import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

// Giả sử back-end trả về thời gian exp time: 3600 * 1000 (1 giờ)
const TIME_EXP = 3600 * 1000;
// const TIME_EXP = 10000;

export const actAuthApi = (user, history) => {
    return (dispatch) => {
        // Call Api
        // Pending
        dispatch(actAuthRequest());

        api.post("QuanLyNguoiDung/DangNhap", user)
            .then((result) => {
                // Check type of user: Admin or User ?
                if (result.data.content.maLoaiNguoiDung === "KhachHang") {
                    return Promise.reject({
                        response: {
                            data: {
                                content: "Bạn không có quyền truy cập",
                            },
                        },
                    });
                }

                // Một tiếng sau tự động logout
                const data = new Date().getTime();
                const exp = data + TIME_EXP;
                localStorage.setItem("exp", exp);

                // setTimeOut để auto logout
                dispatch(actSetTimeLogout(history, TIME_EXP));

                // Lưu trạng thái login xuống localStorage
                localStorage.setItem(
                    "UserAdmin",
                    JSON.stringify(result.data.content)
                );

                // Redirect dashboard
                history.replace("/dashboard");

                // Success
                dispatch(actAuthSucess(result.data.content));
            })
            .catch((error) => {
                // Failed
                dispatch(actAuthFailed(error));
            });
    };
};

export const actLogout = (history) => {
    // xóa localStorage
    localStorage.removeItem("UserAdmin");
    localStorage.removeItem("exp");

    // Redirect về trang /auth
    history.replace("/auth");

    // return action type
    return {
        type: ActionType.AUTH_CLEAR_DATA,
    };
};

// Trường hợp reload lại trang web
export const actTryLogin = (history) => {
    return (dispatch) => {
        const user = JSON.parse(localStorage.getItem("UserAdmin"));
        // check is login or not
        if (!user) return;

        // Tính toán lại thời gian Logout
        // exp: thời gian logout
        // data: thời gian hiện tại khi reload
        const exp = localStorage.getItem("exp");
        const date = new Date().getTime();

        console.log(exp - date);

        if (date > exp) {
            // Logout
            dispatch(actLogout(history));
            return;
        }

        dispatch(actSetTimeLogout(history, exp - date));
        dispatch(actAuthSucess(user));
    };
};

const actSetTimeLogout = (history, exp) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(actLogout(history));
        }, exp);
    };
};

const actAuthRequest = () => {
    return {
        type: ActionType.AUTH_REQUEST,
    };
};

const actAuthSucess = (data) => {
    return {
        type: ActionType.AUTH_SUCCESS,
        payload: data,
    };
};

const actAuthFailed = (error) => {
    return {
        type: ActionType.AUTH_FAILED,
        payload: error,
    };
};
