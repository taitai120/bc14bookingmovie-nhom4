import React from "react";
import "./css/style.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetListTicket } from "./modules/actions";
import { SET_CHAIR } from "./modules/constants";
import { actOrderTicket } from "./OrderTicketModules/actions";

export default function CheckoutPage(props) {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const { data, list_chair_select } = useSelector(
    (state) => state.listTicketReducer
  );
  const userLogin = JSON.parse(localStorage.getItem("UserCustomer"));

  useEffect(() => {
    dispatch(actGetListTicket(id));
  }, []);

  const renderSeats = () => {
    const danhSachGhe = data?.danhSachGhe;

    return danhSachGhe?.map((ghe, index) => {
      let gheVip = ghe.loaiGhe === "Vip" ? "chair-vip" : "";
      let gheDaDat = ghe.daDat ? "chair-selected" : "";
      let indexChairSelect = list_chair_select.findIndex((chair) => {
        return chair.maGhe === ghe.maGhe;
      });

      let gheDangChon = indexChairSelect !== -1 ? "chair-select" : "";
      let gheMinhDat = "";

      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        gheMinhDat = "my-chair";
      }

      return (
        <>
          <button
            disabled={gheDaDat}
            key={index}
            className={`chair ${gheVip} ${gheDaDat} ${gheDangChon} ${gheMinhDat}`}
            onClick={() => {
              dispatch({
                type: SET_CHAIR,
                payload: ghe,
              });
            }}
          >
            {gheDaDat ? (
              gheMinhDat ? (
                <i className="bx bxs-user-check"></i>
              ) : (
                <i className="bx bx-window-close"></i>
              )
            ) : (
              ghe.stt
            )}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </>
      );
    });
  };

  const renderInfoChairSelect = () => {
    // Sắp xếp lại số ghế theo stt từ nhỏ -> lớn
    return list_chair_select
      .sort((a, b) => a.stt - b.stt)
      .map((chair) => {
        return (
          <div className="list-chair-item">
            <div className="chairNumber">
              {chair.stt} ({chair.loaiGhe})
            </div>
            <div className="chairNumber">
              {chair.giaVe.toLocaleString() + " VND"}
            </div>
          </div>
        );
      });
  };

  const totalPrice = () => {
    return list_chair_select.reduce((total, currentValue) => {
      return (total += currentValue.giaVe);
    }, 0);
  };

  return (
    <div className="checkout">
      <div className="row">
        <div className="checkout-left col-lg-8 col-md-12 col-sm-12">
          <h2>Danh Sách Ghế</h2>
          <div>{renderSeats()}</div>

          <div className="list-type-chair">
            <button className="chair"></button>
            <span>Ghế chưa đặt</span>

            <button className="chair chair-selected"></button>
            <span>Ghế đã đặt</span>

            <button className="chair chair-vip"></button>
            <span>Ghế VIP</span>

            <button className="chair chair-select"></button>
            <span>Ghế đang chọn</span>

            <button className="chair my-chair"></button>
            <span>Ghế mình đã đặt</span>
          </div>
        </div>

        <div className="checkout-right col-lg-4 col-md-12 col-sm-12">
          <div className="content-ticket">
            <div>
              <strong>Tên Phim:</strong> {data?.thongTinPhim?.tenPhim}
            </div>

            <div className="mt-2">
              <strong>Tên Cụm Rạp:</strong> {data?.thongTinPhim?.tenCumRap} /{" "}
              {data?.thongTinPhim?.tenRap}
            </div>

            <div className="mt-2">
              <strong>Thời Gian:</strong> {data?.thongTinPhim?.gioChieu} -{" "}
              {data?.thongTinPhim?.ngayChieu}
            </div>

            <div className="mt-2">
              <strong>Địa Chỉ:</strong> {data?.thongTinPhim?.diaChi}
            </div>

            <hr />

            <div className="user-info">
              <div>
                <strong>Tài Khoản:</strong> {userLogin.taiKhoan}
              </div>
              <div className="mt-2">
                <strong>SDT: </strong> {userLogin.soDT}
              </div>
            </div>

            <div className="content-ticket-info">
              <div className="text-center mb-3">
                <strong>Danh Sách Ghế</strong>
              </div>
              <div className="list-chair-select">
                {renderInfoChairSelect()}

                <div className="total-price">
                  <div>{totalPrice() ? <strong>Tổng Tiền</strong> : ""}</div>
                  <div>
                    {totalPrice() ? totalPrice().toLocaleString() + " VND" : ""}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 text-center">
              <button
                className="btn"
                onClick={() => {
                  const thongTinDatVe = {};

                  // id: mã lịch chiếu
                  thongTinDatVe.maLichChieu = id;
                  // list_chair_select: danh sách ghế đang đặt
                  thongTinDatVe.danhSachVe = list_chair_select;

                  dispatch(actOrderTicket(thongTinDatVe));
                }}
              >
                Đặt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
