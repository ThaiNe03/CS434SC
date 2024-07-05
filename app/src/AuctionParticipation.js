import React, { useState } from 'react';
import './AuctionParticipation.css';

const AuctionParticipation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bidAmount, setBidAmount] = useState('');

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  const handleBid = (e) => {
    e.preventDefault();
    alert(`Đã đặt giá: ${bidAmount}`);
    setBidAmount('');
  };

  return (
    <div className="auction-participation">
      <h1>Tham gia đấu giá</h1>

      {!isLoggedIn ? (
        <div className="auth-section">
          <button onClick={handleLogin}>Đăng nhập</button>
        </div>
      ) : (
        <div className="main-content">
          <div className="auction-info">
            <button>Chọn vị trí trong phiên đấu giá</button>
            <button>Xem thông tin của mặt hàng đấu giá</button>
            <button>Xem thông tin nhân viên đấu giá</button>
            <button>Xem giá khởi điểm, bước giá và giá chốt</button>
          </div>
          
          <div className="bidding-section">
            <h2>Đặt giá</h2>
            <form onSubmit={handleBid}>
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder="Nhập mức giá"
                required
              />
              <button type="submit">Đưa ra mức giá</button>
            </form>
          </div>
          
          <div className="auth-section">
            <button onClick={handleLogout}>Đăng xuất</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuctionParticipation;