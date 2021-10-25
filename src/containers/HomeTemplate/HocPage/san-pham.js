import React, { Component } from "react";

export default class SanPham extends Component {
    render() {
        return (
            <>
                <div className="form-group">
                    <label>Mã Sản Phẩm</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Tên Sản Phẩm</label>
                    <input type="text" className="form-control" />
                </div>
            </>
        );
    }
}
