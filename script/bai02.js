// Input :
// - Số kw tiêu thụ

// Xử lý:
// - So sánh số kw tiêu thụ với các hạn mức hệ số

// Out put:
//  - Tổng tiền phải trả
{
  const firstInputEl = document.querySelector("#bt2__first");

  const calculateBtnEl = document.querySelector("#bt2__submitBtn");

  const resultEl = document.querySelector("#bt2__result");

  function checkNum(num) {
    if (num >= 0) {
      return true;
    } else {
      return false;
    }
  }

  function tinhTienDien(x) {
    let tongTienDien;
    if (x <= 50) {
      tongTienDien = x * 500;
    } else if (x <= 100) {
      tongTienDien = 50 * 500 + (x - 50) * 650;
    } else if (x <= 200) {
      tongTienDien = 50 * 500 + 50 * 650 + (x - 100) * 850;
    } else if (x <= 350) {
      tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (x - 200) * 1100;
    } else {
      tongTienDien =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (x - 350) * 1300;
    }
    return tongTienDien;
  }
  calculateBtnEl.onclick = function () {
    const soKwTieuThu = firstInputEl.value * 1;
    if (checkNum(soKwTieuThu)) {
      resultEl.value = tinhTienDien(soKwTieuThu).toLocaleString();
    } else {
      alert("Nhập sai dữ liệu");
      resultEl.value = null;
    }
  };
}
