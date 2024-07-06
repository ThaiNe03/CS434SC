import React, { useState } from "react";
import "./Login.css";

const DangKy = ({ onRegister, onToggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra các trường bắt buộc
    if (
      !username ||
      !password ||
      !confirmPassword ||
      !phone ||
      !businessName ||
      !email
    ) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu và mật khẩu nhập lại không khớp.");
      return;
    }

    // Gọi hàm onRegister để xử lý việc đăng ký
    onRegister(username, password, phone, businessName, email);
  };

  return (
    <div className="container-fluid d-flex flex-column vh-100">
      <nav className="navbar na navbar-expand-lg navbar-custom">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img src="s" alt="Logo" width={30} height={30} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Trang Chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sản Phẩm
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lịch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Liên Hệ
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
      <div className="zone">
        <p>Trang Chủ ----- Đăng ký</p>
      </div>
      <div className="row flex-grow-1">
        <div className="col-md-8 mt-5">
          <div className="row">
            <div className="col-12">
              <h4 className="card-title text-center">Đăng Ký</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="accountInput"
                    placeholder="Nhập tài khoản"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPasswordInput"
                    placeholder="Nhập lại mật khẩu"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="phoneInput"
                    placeholder="Nhập số điện thoại"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="businessNameInput"
                    placeholder="Nhập tên doanh nghiệp"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Nhập email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button className="btn btn-success btn-login btn-block">
                  Đăng Ký
                </button>
              </form>
            </div>
            <div className="card-footer text-center"></div>
          </div>
        </div>
        <div className="col-md-4 colb d-flex flex-column align-items-center justify-content-center">
          <span className="dk">Đã Có Tài Khoản?</span>
          <p>Đăng nhập tham gia đấu giá ngay</p>
          <button className="btn btn-success btn-custom" onClick={onToggleForm}>
            Đăng Nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default DangKy;
