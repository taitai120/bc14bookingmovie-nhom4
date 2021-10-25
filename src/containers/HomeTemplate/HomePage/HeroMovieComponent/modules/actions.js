import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";

export const actGetBannerMovie = () => {
  return (dispatch) => {
    dispatch(actBannerMovieRequest());

    api
      .get("QuanLyPhim/LayDanhSachBanner")
      .then((result) => {
        dispatch(actBannerMovieSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actBannerMovieFailed(error));
      });
  };
};

const actBannerMovieRequest = () => {
  return {
    type: ActionType.BANNER_MOVIE_REQUEST,
  };
};

const actBannerMovieSuccess = (data) => {
  return {
    type: ActionType.BANNER_MOVIE_SUCCESS,
    payload: data,
  };
};

const actBannerMovieFailed = (error) => {
  return {
    type: ActionType.BANNER_MOVIE_FAILED,
    payload: error,
  };
};
