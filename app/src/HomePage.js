import React from 'react';
import './HomePage.css'; // You'll need to create this CSS file

const App = () => {
  return (
    <div className="home-page">
      <header>
        <div className="logo">LOGO</div>
        <nav>
          <a href="#">Trang chủ</a>
          <a href="#">Sản phẩm</a>
          <a href="#">Lịch</a>
          <a href="#">Liên hệ</a>
        </nav>
        <div className="search-icon">🔍</div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Đồ vừa ý<br />Giá hợp lý</h1>
            <p>Đấu giá trực tuyến AI/DS mới mang lại những trải nghiệm tuyệt vời cho mọi khách hàng.</p>
            <button className="cta-button">Đăng ký tài khoản</button>
          </div>
          <div className="hero-image">
            <img src="path-to-your-image.jpg" alt="Auction" />
          </div>
        </section>

        <div className="navigation-buttons">
          <button className="prev-button">Prev</button>
          <button className="next-button">Next</button>
        </div>

        <section className="categories">
          <div className="category-item">
            <img src="path-to-icon1.svg" alt="Đồ cổ" />
            <span>Đồ cổ</span>
          </div>
          <div className="category-item">
            <img src="path-to-icon2.svg" alt="Mỹ thuật" />
            <span>Mỹ thuật</span>
          </div>
          <div className="category-item">
            <img src="path-to-icon3.svg" alt="Phương tiện" />
            <span>Phương tiện</span>
          </div>
          <div className="category-item">
            <img src="path-to-icon4.svg" alt="Bất động sản" />
            <span>Bất động sản</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;