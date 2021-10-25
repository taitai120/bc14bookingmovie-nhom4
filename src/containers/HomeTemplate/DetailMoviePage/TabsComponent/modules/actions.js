import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";

// Lấy thông tin lịch chiếu phim
export const actGetShowtimes = (id) => {
  return (dispatch) => {
    dispatch(actShowtimesRequest());

    api
      .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actShowtimesSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actShowtimesFailed(error));
      });
  };
};

const actShowtimesRequest = () => {
  return {
    type: ActionType.SHOWTIMES_REQUEST,
  };
};

const actShowtimesSuccess = (data) => {
  return {
    type: ActionType.SHOWTIMES_SUCCESS,
    payload: data,
  };
};

const actShowtimesFailed = (error) => {
  return {
    type: ActionType.SHOWTIMES_FAILED,
    payload: error,
  };
};
