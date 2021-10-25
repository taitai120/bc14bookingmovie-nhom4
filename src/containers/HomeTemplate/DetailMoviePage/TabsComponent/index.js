import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./style.css";
import { useEffect } from "react";
import { actGetShowtimes } from "./modules/actions";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../../../components/Loader";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props) {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetShowtimes(props?.maPhim));
  }, []);

  const data = useSelector((state) => state.showtimesReducer.data);
  const loading = useSelector((state) => state.showtimesReducer.loading);
  const userLogin = localStorage.getItem("UserCustomer");
  const redirectPage = userLogin ? "/checkout" : "/login";

  const renderTabs = () => {
    if (loading) return <Loader></Loader>;

    return data?.heThongRapChieu.map((item, index) => {
      return (
        <Tab key={index} label={item?.tenHeThongRap} {...a11yProps(index)} />
      );
    });
  };

  const renderTabPanels = () => {
    return data?.heThongRapChieu?.map((item, index) => {
      const maRap = item?.cumRapChieu[0]?.lichChieuPhim[0]?.maRap;
      const maLichChieu = item?.cumRapChieu[0]?.lichChieuPhim[0]?.maLichChieu;
      const tenRap = item?.cumRapChieu[0]?.lichChieuPhim[0]?.tenRap;
      const giaVe = item?.cumRapChieu[0]?.lichChieuPhim[0]?.giaVe;
      const thoiLuong = item?.cumRapChieu[0]?.lichChieuPhim[0]?.thoiLuong;
      const ngayKhoiChieu = new Date(
        item?.cumRapChieu[0]?.lichChieuPhim[0]?.ngayChieuGioChieu
      ).toLocaleDateString();
      const gioKhoiChieu = new Date(
        item?.cumRapChieu[0]?.lichChieuPhim[0]?.ngayChieuGioChieu
      ).toLocaleTimeString();
      const diaChi = item?.cumRapChieu[0]?.diaChi;

      return (
        <TabPanel
          value={value}
          index={index}
          key={maRap}
          className="custom-tab-panel"
        >
          <div className="tab-main">
            <div className="tab-logo">
              <div className="box-img" key={index}>
                <img src={item?.logo} alt={item?.logo} />
              </div>

              <NavLink
                to={redirectPage + "/" + maLichChieu}
                className="mt-3 btn"
              >
                Đặt Vé
              </NavLink>
            </div>

            <div className="tab-content">
              <div>
                <strong>Tên Rạp: </strong> {tenRap}
              </div>

              <div className="mt-2">
                <strong>Giá Vé: </strong> {giaVe} VND
              </div>

              <div className="mt-2">
                <strong>Thời Lượng:</strong>
                {thoiLuong} phút
              </div>

              <div className="mt-2">
                <strong>Ngày Khởi Chiếu: </strong>
                {ngayKhoiChieu}
              </div>

              <div className="mt-2">
                <strong>Giờ Khởi Chiếu: </strong>
                {gioKhoiChieu}
              </div>

              <div className="mt-2">
                <strong>Địa Chỉ: </strong>
                {diaChi}
              </div>
            </div>
          </div>
        </TabPanel>
      );
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {renderTabs()}
      </Tabs>

      {renderTabPanels()}
    </Box>
  );
}
