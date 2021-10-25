import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Input, Button } from "antd";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import {
  layDanhSachPhimAction,
  xoaPhimAction,
} from "../../../redux/actions/QuanLyPhimActions";

export default function Film() {
  const dispatch = useDispatch();
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);

  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      value: (text, object) => {
        return <span>{text}</span>;
      },
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      defaultSortOrder: "descend",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      width: "25%",
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      sorter: (a, b) => {
        let moTaA = a.moTa.toLowerCase().trim();
        let moTaB = b.moTa.toLowerCase().trim();
        if (moTaA > moTaB) {
          return 1;
        }
        return -1;
      },
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      width: "25%",
    },
    {
      title: "Công Cụ",
      dataIndex: "maPhim",
      render: (text, film) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className="p-1 mr-1 text-2xl"
              to={`/films/editfilm/${film.maPhim}`}
            >
              <EditOutlined style={{ color: "blue" }} />
            </NavLink>
            <span
              key={2}
              style={{ cursor: "pointer" }}
              className="p-1 text-2xl"
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc muốn xóa phim " + film.tenPhim + "?"
                  )
                ) {
                  dispatch(xoaPhimAction(film.maPhim));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span>
            <NavLink
              key={3}
              className="p-1 mr-1 text-2xl"
              to={`/films/showtime/${film.maPhim}`}
            >
              <CalendarOutlined style={{ color: "gold" }} />
            </NavLink>
          </Fragment>
        );
      },
      width: "15%",
    },
  ];

  const data = arrFilm;

  const { Search } = Input;

  const onSearch = (value) => {
    console.log(value);
    dispatch(layDanhSachPhimAction(value));
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div className="container">
      <h3 className="text-4xl my-3">Quản Lý Phim</h3>
      <Button className="my-3">
        <NavLink to="/films/addnewfilm">Thêm Phim</NavLink>
      </Button>
      <Search
        placeholder="input search text"
        size="large"
        enterButton={<SearchOutlined />}
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </div>
  );
}
