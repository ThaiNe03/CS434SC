import React, { useState } from 'react';
import './AuctionViewer.css';

const AuctionViewer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="auction-viewer">
      <h1>Xem phiên đấu giá</h1>
      
      <div className="main-content">
        <div className="auction-info">
          <h2>Thông tin phiên đấu giá</h2>
          <button>Xem vị trí trong phiên đấu giá</button>
          <button>Xem thông tin của mặt hàng đấu giá</button>
          <button>Xem thông tin nhân viên đấu giá</button>
          <button>Xem giá khởi điểm, bước giá và giá chốt</button>
        </div>
        
        {!isLoggedIn ? (
          <div className="auth-section">
            <button onClick={() => setIsLoggedIn(true)}>Đăng nhập</button>
          </div>
        ) : (
          <div className="auth-section">
            <p>Đã đăng nhập</p>
            <button onClick={() => setIsLoggedIn(false)}>Đăng xuất</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuctionViewer;