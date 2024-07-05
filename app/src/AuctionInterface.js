import React, { useState } from 'react';
import './AuctionInterface.css';

const AuctionInterface = () => {
  const [auctionMethod, setAuctionMethod] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="auction-interface">
      <h1>Quản lý đấu giá</h1>
      <div className="auction-form">
        <form>
          <div className="form-group">
            <label>Phương thức đấu giá:</label>
            <select value={auctionMethod} onChange={(e) => setAuctionMethod(e.target.value)}>
              <option value="">Chọn phương thức</option>
              <option value="online">Trực tuyến</option>
              <option value="offline">Trực tiếp</option>
              <option value="hybrid">Kết hợp</option>
            </select>
          </div>
          <div className="form-group">
            <label>Loại hàng đấu giá:</label>
            <select value={itemCategory} onChange={(e) => setItemCategory(e.target.value)}>
              <option value="">Chọn loại hàng</option>
              <option value="antique">Đồ cổ</option>
              <option value="art">Mỹ thuật</option>
              <option value="vehicle">Phương tiện</option>
              <option value="realestate">Bất động sản</option>
            </select>
          </div>
          <div className="form-group">
            <label>Phòng đấu giá:</label>
            <select value={room} onChange={(e) => setRoom(e.target.value)}>
              <option value="">Chọn phòng</option>
              <option value="room1">Phòng 1</option>
              <option value="room2">Phòng 2</option>
              <option value="room3">Phòng 3</option>
            </select>
          </div>
          <button type="submit">Xác nhận</button>
        </form>
      </div>
      <div className="user-actions">
        <button className="login-btn">Đăng nhập</button>
        <button className="logout-btn">Đăng xuất</button>
      </div>
    </div>
  );
};

export default AuctionInterface;