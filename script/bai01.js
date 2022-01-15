// Input :
// - Nhập vào điểm số 3 môn của thí sinh
// - Nhập thông tin đối tượng ưu tiên và khu vực ưu tiên
// - Nhập điểm chuẩn của hội đồng

// Xử lý:
// - Tình trung bình của tổng điểm thí sinh
//  - Lấy điểm chuẩn của hội đồng trừ đi điểm ưu tiên từ khu vực và đối tượng
//  - So sánh 2 kết quả trên với nhau
//  - Kiểm tra thí sinh có điểm 0 hay không

// Out put:
//  - Thí sinh đậu hay rớt ?
{
  const firstInputEl = document.querySelector("#bt1__first");
  const secondInputEl = document.querySelector("#bt1__second");
  const thirdInputEl = document.querySelector("#bt1__third");

  const pointForAreaEl = document.querySelector("#area");
  const pointForObjectEl = document.querySelector("#person");

  const benchmarkEl = document.querySelector("#benchmark");
  const calculateBtnEl = document.querySelector("#bt1__submitBtn");

  const resultEl = document.querySelector("#bt1__result");

  function checkGrade(grade) {
    if (grade >= 0 && grade <= 10) {
      return true;
    } else {
      return false;
    }
  }

  function takePointForAre(value) {
    if (value === "a") {
      return 2;
    } else if (value === "b") {
      return 1;
    } else if (value === "c") {
      return 0.5;
    } else {
      return 0;
    }
  }

  function takePointForObject(value) {
    if (value == 1) {
      return 2.5;
    } else if (value == 2) {
      return 1.5;
    } else if (value == 3) {
      return 1;
    } else {
      return 0;
    }
  }
  calculateBtnEl.onclick = function () {
    const diemMon1 = firstInputEl.value * 1;
    const diemMon2 = secondInputEl.value * 1;
    const diemMon3 = thirdInputEl.value * 1;

    const objectPoint = takePointForObject(pointForObjectEl.value);
    const areaPoint = takePointForAre(pointForAreaEl.value);

    const benchmarkPoint = benchmarkEl.value * 1;

    let diemTrungBinh = (diemMon1 + diemMon2 + diemMon3) / 3;

    if (
      checkGrade(diemMon1) &&
      checkGrade(diemMon2) &&
      checkGrade(diemMon3) &&
      checkGrade(benchmarkPoint)
    ) {
      if (diemMon1 * diemMon2 * diemMon3 != 0) {
        let diemXetTuyen = diemTrungBinh + objectPoint + areaPoint;
        if (diemXetTuyen < benchmarkPoint) {
          resultEl.value = "Bạn đã rớt";
          resultEl.classList.add("text-white");
          resultEl.classList.remove("text-warning");
        } else {
          resultEl.value = "Chúc mừng bạn đã đậu !!!";
          resultEl.classList.remove("text-white");
          resultEl.classList.add("text-warning");
        }
      } else {
        resultEl.value = "Bạn đã rớt";
        resultEl.classList.add("text-white");
        resultEl.classList.remove("text-warning");
      }
    } else {
      alert(" Vui Lòng Kiểm tra lại dữ liệu");
      resultEl.value = null;
    }
  };
}
