# Soi corticoid

Ứng dụng web đọc tấm thử sắc ký lớp mỏng (TLC) để sàng lọc corticoid trộn trong thuốc “gia truyền”.
Đặt 1–12 tấm silica đã phun thuốc thử nằm dọc trên nền tối, chụp một ảnh; app tìm từng tấm, so với mẫu chuẩn và khoanh tấm có corticoid.

**Mở app:** https://caothanhloc03-byte.github.io/soi-corticoid/

Cài lên điện thoại: mở đường dẫn trên, rồi
- iPhone (Safari): Chia sẻ → “Thêm vào MH chính”.
- Android (Chrome): menu ⋮ → “Cài đặt ứng dụng”.

## Bản v0.2 (quy tắc chưa thẩm định)
- **Phân tích ảnh:** tìm tấm theo vùng liên thông; báo tấm nghiêng, dính nhau (tự chia), nằm ngang, lóa sáng, quá 12 tấm. Cân màu theo nền trắng của từng tấm. Tự tìm vạch xuất phát (bút chì) và tuyến dung môi, nếu không thấy thì dùng vị trí mặc định.
- **Chuẩn:** chuẩn hỗn hợp được lưu thành nhiều vết (nhiều cửa sổ Rf), có thể đặt tên. Nhập dãy nồng độ để kiểm tra tuyến tính (R², phát hiện mức bão hòa). App nhắc khi chuẩn quá 24 giờ hoặc độ sáng ảnh khác lúc lưu chuẩn.
- **Kiểm soát chất lượng:** mỗi tấm chọn vai trò Mẫu / Chuẩn / Mẫu trắng / Kiểm soát +. Tấm chuẩn trong ảnh được ưu tiên làm mốc (bù lệch Rf và ánh sáng). Mẫu trắng lên màu hoặc kiểm soát dương không đạt → cả mẻ không hợp lệ.
- **Hai tín hiệu:** thêm ảnh UV 254 nm (không bắt buộc). Có ảnh UV thì chỉ kết luận “có corticoid” khi có cả vết tím và vết tối UV; không có ảnh UV thì ghi “1 tín hiệu”. Vết tím đậm ở Rf lạ → “nghi ngờ”.
- **Sửa tay:** chọn, xóa, vẽ lại khung tấm; xoay ảnh 90°.
- **Dữ liệu:** mỗi mẻ lưu (IndexedDB) kèm ảnh gốc, ảnh UV, thông số và phiên bản quy tắc. Tải CSV, ảnh có khung, ảnh gốc; tải và nạp bản sao lưu JSON.
- **An toàn diễn giải:** hộp xác nhận giới hạn khi mở lần đầu, dòng cảnh báo dưới mọi kết luận.

## Lưu ý
- Bản mẫu (prototype) cho đề tài sinh viên Khoa Dược, Trường Y-Dược, Đại học Duy Tân. Kết quả là sàng lọc, không phải chẩn đoán; mẫu dương tính hoặc nghi ngờ phải được xác nhận bằng HPLC/LC-MS.
- Các ngưỡng mặc định (R ≥ 1; 0,5–1; cửa sổ Rf ±0,06; UV ≥ 8%) **chưa được thẩm định** bằng số liệu thực nghiệm. Độ tuyến tính của tín hiệu cũng phải kiểm tra bằng ảnh thật.
- Ảnh trong các nút “Thử ảnh mô phỏng” / “UV mô phỏng” là ảnh do máy vẽ, không phải số liệu thực nghiệm.
- Ảnh được xử lý ngay trên thiết bị, không gửi đi đâu.
