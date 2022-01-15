// Input :
// - Tổng thu nhập năm
// - Số người phụ thuộc

// Xử lý:
// - Tình thu nhập chịu thuế
// - Tìm thuế suất phù hợp
// - Nhân 2 giá trị với nhau

// Out put:
//  - Thuế thu nhập cá nhân
{
  const firstInputEl = document.querySelector("#bt3__first");
  const secondInputEl = document.querySelector("#bt3__second");

  const calculateBtnEl = document.querySelector("#bt3__submitBtn");

  const resultEl = document.querySelector("#bt3__result");

  function checkNum(num) {
    if (num >= 0) {
      return true;
    } else {
      return false;
    }
  }
  function checkNumOfPerson(num) {
    if (num >= 0 && num % 1 == 0) {
      return true;
    } else {
      return false;
    }
  }
  function tinhThuNhapChiuThue(thuNhap = 0, soNguoiPhuThuoc = 0) {
    return thuNhap - 4 - soNguoiPhuThuoc * 1.6;
  }

  function tinhThueThuNhap(num = 0) {
    if (num < 0) {
      return 0;
    } else if (num <= 60) {
      return (num * 5) / 100;
    } else if (num <= 120) {
      return (num * 10) / 100;
    } else if (num <= 210) {
      return (num * 15) / 100;
    } else if (num <= 384) {
      return (num * 20) / 100;
    } else if (num <= 624) {
      return (num * 25) / 100;
    } else if (num <= 960) {
      return (num * 30) / 100;
    } else {
      return (num * 35) / 100;
    }
  }

  calculateBtnEl.onclick = function () {
    const tongThuNhap = firstInputEl.value * 1;
    const soNguoiPhuThuoc = secondInputEl.value * 1;

    if (checkNum(tongThuNhap) && checkNumOfPerson(soNguoiPhuThuoc)) {
      let thuNhapChiuThue = tinhThuNhapChiuThue(tongThuNhap, soNguoiPhuThuoc);
      let result = (
        tinhThueThuNhap(thuNhapChiuThue) * 1000000
      ).toLocaleString();
      resultEl.value = result;
    } else {
      alert("Nhập Sai Dữ Liệu");
      resultEl.value = null;
    }
  };
}
