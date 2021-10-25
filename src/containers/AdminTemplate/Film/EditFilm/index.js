import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  layThongTinPhimAction,
  capNhatPhimUploadAction,
} from "../../../../redux/actions/QuanLyPhimActions";

const EditFilm = (props) => {
  const { history } = props;
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");
  const { thongTinPhim } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinPhimAction(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: thongTinPhim.maPhim,
      tenPhim: thongTinPhim.tenPhim,
      trailer: thongTinPhim.trailer,
      moTa: thongTinPhim.moTa,
      ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
      dangChieu: thongTinPhim.dangChieu,
      sapChieu: thongTinPhim.sapChieu,
      hot: thongTinPhim.hot,
      danhGia: thongTinPhim.danhGia,
      hinhAnh: null,
    },
    onSubmit: (values) => {
      // Tạo đối tượng formData rồi đưa giá trị values từ formik vào formData
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      dispatch(capNhatPhimUploadAction(formData));
      history.push("/film");
    },
  });

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value);
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg" ||
      file.type === "image/gif"
    ) {
      await formik.setFieldValue("hinhAnh", e.target.files[0]);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      setImgSrc(reader.result);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    }
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3>Thêm Phim Mới</h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên Phim">
          <Input
            name="tenPhim"
            name="tenPhim"
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
          />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            name="trailer"
            onChange={formik.handleChange}
            value={formik.values.trailer}
          />
        </Form.Item>
        <Form.Item label="Mô Tả">
          <Input
            name="moTa"
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
        </Form.Item>
        <Form.Item label="Ngày Khởi Chiếu">
          <DatePicker
            format="DD/MM/YYYY"
            onChange={handleChangeDatePicker}
            value={moment(formik.values.ngayKhoiChieu)}
          />
        </Form.Item>
        <Form.Item label="Đang Chiếu">
          <Switch
            name="dangChieu"
            onChange={handleChangeSwitch("dangChieu")}
            checked={formik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="Sắp Chiếu">
          <Switch
            name="sapChieu"
            onChange={handleChangeSwitch("sapChieu")}
            checked={formik.values.sapChieu}
          />
        </Form.Item>
        <Form.Item label="HOT">
          <Switch
            name="hot"
            onChange={handleChangeSwitch("hot")}
            checked={formik.values.hot}
          />
        </Form.Item>
        <Form.Item label="Số Sao">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
            value={formik.values.danhGia}
          />
        </Form.Item>
        <Form.Item label="Hình Ảnh">
          <input type="file" onChange={handleChangeFile} />
          <br />
          <img
            width={100}
            height={100}
            src={imgSrc === "" ? thongTinPhim.hinhAnh : imgSrc}
            alt="demoupload"
          />
        </Form.Item>
        <Form.Item label="Tác Vụ">
          <button type="submit" className="bg-blue-600 text-white p-2">
            Cập Nhật
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditFilm;
