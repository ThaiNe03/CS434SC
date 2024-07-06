import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin, onToggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra các trường bắt buộc
    if (!username || !password) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // Gọi hàm onLogin để xử lý việc đăng nhập
    onLogin(username, password);
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
        <p>Trang Chủ ----- Đăng nhập</p>
      </div>
      <div className="row flex-grow-1">
        <div className="col-md-8 mt-5">
          <div className="row">
            <div className="col-12">
              <h4 className="card-title text-center">Đăng Nhập</h4>
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
                <button className="btn btn-success btn-login btn-block">
                  Đăng Nhập
                </button>
              </form>
            </div>
            <div className="card-footer text-center"></div>
          </div>
        </div>
        <div className="col-md-4 colb d-flex flex-column align-items-center justify-content-center">
          <span className="dk">Chưa Có Tài Khoản?</span>
          <p>Đăng ký để tham gia đấu giá</p>
          <button className="btn btn-success btn-custom" onClick={onToggleForm}>
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
