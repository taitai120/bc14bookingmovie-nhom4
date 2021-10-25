import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { themPhimUploadHinhAction } from "../../../../redux/actions/QuanLyPhimActions";

const AddNewFilm = (props) => {
  const { history } = props;
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      console.log("values", values);

      // Tạo đối tượng formData rồi đưa giá trị values từ formik vào formData
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }

      // Gọi api gửi các giá trị của formData về phía backend xử lý
      dispatch(themPhimUploadHinhAction(formData));
      history.push("/film");
    },
  });

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
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

  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg" ||
      file.type === "image/gif"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
      formik.setFieldValue("hinhAnh", file);
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
          <Input name="tenPhim" name="tenPhim" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" name="trailer" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mô Tả">
          <Input name="moTa" name="moTa" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Ngày Khởi Chiếu">
          <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
        </Form.Item>
        <Form.Item label="Đang Chiếu">
          <Switch name="dangChieu" onChange={handleChangeSwitch("dangChieu")} />
        </Form.Item>
        <Form.Item label="Sắp Chiếu">
          <Switch name="sapChieu" onChange={handleChangeSwitch("sapChieu")} />
        </Form.Item>
        <Form.Item label="HOT">
          <Switch name="hot" onChange={handleChangeSwitch("hot")} />
        </Form.Item>
        <Form.Item label="Số Sao">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
          />
        </Form.Item>
        <Form.Item label="Hình Ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/jpg, image/gif"
          />
          <br />
          <img
            style={{ width: "150px", height: "150px" }}
            src={imgSrc}
            alt="demoupload"
          />
        </Form.Item>
        <Form.Item label="Tác Vụ">
          <button type="submit" className="bg-blue-600 text-white p-2">
            Submit
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddNewFilm;
