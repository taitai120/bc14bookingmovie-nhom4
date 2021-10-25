import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../components/Loader";
import { actAddUserApi } from "./modules/actions";

export default function AddUserPage() {
    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
    });

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.addUserReducer.loading);
    // const error = useSelector((state) => state.addUserReducer.error);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);

        setState({
            ...state,
            [name]: value,
        });
    };

    const handleAddUser = (e) => {
        e.preventDefault();

        dispatch(actAddUserApi(state));
    };

    if (loading) return <Loader />;

    return (
        <form className="container" onSubmit={handleAddUser}>
            <h3>Add User</h3>

            <div className="form-group">
                <span>Username</span>
                <input
                    className="form-control"
                    name="taiKhoan"
                    onChange={handleOnChange}
                />
            </div>

            <div className="form-group">
                <span>Password</span>
                <input
                    className="form-control"
                    name="matKhau"
                    onChange={handleOnChange}
                />
            </div>

            <div className="form-group">
                <span>Name</span>
                <input
                    className="form-control"
                    name="hoTen"
                    onChange={handleOnChange}
                />
            </div>

            <div className="form-group">
                <span>Email</span>
                <input
                    className="form-control"
                    name="email"
                    onChange={handleOnChange}
                />
            </div>

            <div className="form-group">
                <span>Phone Number</span>
                <input
                    className="form-control"
                    name="soDt"
                    onChange={handleOnChange}
                />
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-success">
                    Add User
                </button>
            </div>
        </form>
    );
}
