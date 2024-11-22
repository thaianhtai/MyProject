import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Sản phẩm hàng đầu</h4>
              <ul>
                <li><a href="#">Trang web được quản lý</a></li>
                <li><a href="#">Quản lý danh tiếng</a></li>
                <li><a href="#">Dụng cụ điện</a></li>
                <li><a href="#">Dịch vụ tiếp thị</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>đường dẫn nhanh</h4>
              <ul>
                <li><a href="#">Việc làm</a></li>
                <li><a href="#">Tài sản thương hiệu</a></li>
                <li><a href="#">Quan hệ đầu tư</a></li>
                <li><a href="#">Điều khoản dịch vụ</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Đặc trưng</h4>
              <ul>
                <li><a href="#">Việc làm</a></li>
                <li><a href="#">Tài sản thương hiệu</a></li>
                <li><a href="#">Quan hệ đầu tư</a></li>
                <li><a href="#">Điều khoản dịch vụ</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Tài nguyên</h4>
              <ul>
                <li><a href="#">Hướng dẫn</a></li>
                <li><a href="#">Nghiên cứu</a></li>
                <li><a href="#">Các chuyên gia</a></li>
                <li><a href="#">Các cơ quan</a></li>
              </ul>
            </div>

          </div>
          <div className="footer-bottom row align-items-center">
            <p className="footer-text m-0 col-lg-8 col-md-12">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                <a href="https://colorlib.com" target="_blank"></a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default Footer;