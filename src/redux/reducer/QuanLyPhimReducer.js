import {
  SET_THONG_TIN_PHIM,
  SET_DANH_SACH_PHIM,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
  SET_CHI_TIET_PHIM,
} from "../types/QuanLyPhimType";

const stateDefault = {
  arrFilm: [],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
  filmDetail: {},

  thongTinPhim: {},
};

const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      return { ...state };
    }

    case SET_THONG_TIN_PHIM: {
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default QuanLyPhimReducer;
