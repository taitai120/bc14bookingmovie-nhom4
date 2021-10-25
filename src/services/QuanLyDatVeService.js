import { baseService } from "./baseServices";

export class QuanLyDatVeService extends baseService {
  constructor() {
    super();
  }

  layChiTietPhongVe = (maLichChieu) => {
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };

  //   datVe = (thongTinDatVe = new ThongTinDateVe()) => {
  //     return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe);
  //   };

  taoLichChieu = (thongTinLichChieu) => {
    return this.post(`api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu);
  };
}

export const quanLyDatVeService = new QuanLyDatVeService();
