import React, { Component } from "react";
import NhanVien from "./nhan-vien";
// import SanPham from "./san-pham";
import WithCard from "./with-card";

const WrapperCard = WithCard(NhanVien);

export default class HocPage extends Component {
    render() {
        return (
            <>
                <WrapperCard />
            </>
        );
    }
}
