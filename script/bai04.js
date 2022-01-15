// Input :
// - Loại khách hàng
// - Số kết nối
// - Số kênh cao cấp

// Xử lý:
// - Dựa vào loại khách hàng lấy được loại dữ liệu tương ứng
// - Nếu là khách hàng doanh nghiệp tính phí dịch vụ cơ bản dựa trên số lượng kết nối
// - Tính tổng tiền phí thuê kênh cao cấp

// Out put:
//  - Hoá đơn thanh toán
{
  const firstInputEl = document.querySelector("#bt4__first");
  const secondInputEl = document.querySelector("#bt4__second");
  const customerInputEl = document.querySelector("#bt4__customer");

  const calculateBtnEl = document.querySelector("#bt4__submitBtn");

  const resultEl = document.querySelector("#bt4__result");

  function checkNum(num) {
    if (num >= 0 && num % 1 == 0) {
      return true;
    } else {
      return false;
    }
  }

  let phiXuLyHoaDon;
  let donGiaKetNoiDau;
  let donGiaKenhCaoCap;
  let donGiaKetNoiThem;

  function bangGiaPhanLoaiKH(kh) {
    if (kh === "cn") {
      phiXuLyHoaDon = 4.5;
      donGiaKetNoiDau = 20.5;
      donGiaKetNoiThem = 0;
      donGiaKenhCaoCap = 7.5;
    } else if (kh === "dn") {
      phiXuLyHoaDon = 15;
      donGiaKetNoiDau = 75;
      donGiaKetNoiThem = 5;
      donGiaKenhCaoCap = 50;
    }
  }

  function tinhPhiDichVuCoBan(soKetNoi, donGiaKetNoiDau, donGiaKetNoiThem) {
    if (soKetNoi <= 10) {
      return donGiaKetNoiDau * soKetNoi;
    } else {
      return donGiaKetNoiDau * 10 + (soKetNoi - 10) * donGiaKetNoiThem;
    }
  }

  customerInputEl.onchange = function () {
    let loaiKH = customerInputEl.value;

    if (loaiKH === "cn") {
      firstInputEl.disabled = true;
      firstInputEl.value = 1;
    } else {
      firstInputEl.disabled = false;
    }
    resultEl.value = null;
  };

  calculateBtnEl.onclick = function () {
    const loaiKH = customerInputEl.value;
    const soKetNoi = firstInputEl.value * 1;
    const soKenhCaoCap = secondInputEl.value * 1;

    bangGiaPhanLoaiKH(loaiKH);
    let phiDichVuCoBan = tinhPhiDichVuCoBan(
      soKetNoi,
      donGiaKetNoiDau,
      donGiaKetNoiThem
    );
    if (loaiKH) {
      if (checkNum(soKetNoi) && checkNum(soKenhCaoCap)) {
        let result =
          phiXuLyHoaDon + phiDichVuCoBan + soKenhCaoCap * donGiaKenhCaoCap;
        resultEl.value = result + " $";
      } else {
        resultEl.value = null;
        alert("Nhập sai dữ liệu");
      }
    } else {
      alert("Vui lòng chọn loại Khách Hàng");
      resultEl.value = null;
    }
  };
}
