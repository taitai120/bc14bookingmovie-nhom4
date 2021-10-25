import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Cascader,
  DatePicker,
  InputNumber,
  Select,
} from "antd";
import { quanLyRapService } from "../../../../services/QuanLyRapService";
import { quanLyDatVeService } from "../../../../services/QuanLyDatVeService";
import { useFormik } from "formik";
import moment from "moment";

export default function ShowTime(props) {
  const { history } = props;
  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (values) => {
      try {
        const result = await quanLyDatVeService.taoLichChieu(values);
        alert("Tạo lịch chiếu thành công");
      } catch (error) {
        console.log("error", error.response?.data);
      }
    },
  });

  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });

  useEffect(async () => {
    try {
      let result = await quanLyRapService.layThongTinHeThongRap();
      setState({
        ...state,
        heThongRapChieu: result.data.content,
      });
    } catch (errors) {
      console.log(errors);
    }
  }, []);

  const handleChangeHeThongRap = async (value) => {
    try {
      let result = await quanLyRapService.layThongTinCumRap(value);
      setState({
        ...state,
        cumRapChieu: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };

  const handleChangeCumRap = (value) => {
    formik.setFieldValue("maRap", value);
  };

  const onOk = (value) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
    console.log(moment(value).format("DD/MM/YYYY hh:mm:ss"));
  };

  const onChangeDate = (value) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
  };

  const onChangeInputNumber = (value) => {
    formik.setFieldValue("giaVe", value);
  };

  const converSelectHTR = () => {
    // state.heThongRapChieu?.map((htr, index) => ({label: htr.tenHeThongRap, value: htr.tenHeThongRap}))}
    return state.heThongRapChieu?.map((htr, index) => {
      return { label: htr.tenHeThongRap, value: htr.maHeThongRap };
    });
  };

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      onSubmitCapture={formik.handleSubmit}
    >
      <h3 className="text-2xl">Tạo Lịch Chiếu</h3>
      <Form.Item label="Hệ thống rạp">
        <Select
          options={converSelectHTR()}
          onChange={handleChangeHeThongRap}
          placeholder="Please select"
        />
      </Form.Item>
      <Form.Item label="Cụm rạp">
        <Select
          options={state.cumRapChieu?.map((rap, index) => ({
            label: rap.tenCumRap,
            value: rap.maCumRap,
          }))}
          onChange={handleChangeCumRap}
          placeholder="Please select"
        />
      </Form.Item>
      <Form.Item label="Ngày chiếu">
        <DatePicker
          format="DD/MM/YYYY hh:mm:ss"
          showTime
          onchange={onChangeDate}
          onOk={onOk}
        />
      </Form.Item>
      <Form.Item label="Giá vé">
        <InputNumber onChange={onChangeInputNumber} />
      </Form.Item>
      <Form.Item label="Xác nhận">
        <Button htmlType="submit">Tạo lịch chiếu</Button>
      </Form.Item>
    </Form>
  );
}
