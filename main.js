function getEle(id) {
  return document.getElementById(id);
}

// Khai báo mảng
var arrNumber = [];

// Thêm phần tử vào mảng
getEle("btn-themSo").onclick = function () {
  var number = getEle("soN").value * 1;
  arrNumber.push(number);

  // In mảng ra màn hình
  getEle("ketqua-mang").innerHTML = "[" + arrNumber.toString() + "]";
};

// 1
/**
 * Input: array
 * Process:
 * Duyệt mảng lấy giá trị
 * Cộng giá trị vào sum
 * Đưa kq ra màn hình
 *  * Output:Number. Tổng các số dương trong mảng
 */

getEle("btn-tinhTong").onclick = function () {
  var sum = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      sum += arrNumber[i];
    }
  }

  // Show kq
  getEle("ketqua-1").innerHTML = "Kết quả là:" + sum;
};

// 2
/**
 * Input: Duyệt mảng lấy giá trị
 * Process:
 * if giá trị > 0 . count ++
 * Output: Số số dương (count)
 */

getEle("btn-dem").onclick = function () {
  var count = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      count++;
    }
  }

  // Show kq
  getEle("ketqua-2").innerHTML = "Số số dương là: " + count;
};

// 3
/**
 * Input: Array
 * Process:
 * Output: Number.Số nhỏ nhất trong bảng.
 */

getEle("btn-tim").onclick = function () {
  var min = arrNumber[0];
  for (var i = 1; i < arrNumber.length; i++) {
    if (arrNumber[i] < min) {
      min = arrNumber[i];
    }
  }

  // Show kq
  getEle("ketqua-3").innerHTML = "Số nhỏ nhất là: " + min;
};

// 4
/**
 * Input: Array
 * Process:
 * Tạo thêm 1 mảng mới dùng để chứa các số dương
    Dùng vòng lặp để lấy các số dương từ mảng cũ và lưu vào trong mảng mới
    Kiểm tra mảng mới có phần tử hay không. Nếu có thì bắt đầu đi tìm giá trị dương nhỏ nhất. Ngược lại thì thông báo không có số dương
 * Output: Number. Nhỏ nhất
 */

getEle("btn-timSoDuong").onclick = function () {
  var arrNumberDuong = [];
  var mark = 0;
  var result = "";

  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      arrNumberDuong.push(arrNumber[i]);
      mark = 1;
    }
    if (mark === 1) {
      min = arrNumberDuong[0];
      for (var j = 1; j < arrNumberDuong.length; j++) {
        if (arrNumberDuong[j] < min) {
          min = arrNumberDuong[j];
        }
      }
      result = "Số dương nhỏ nhất là: " + min;
    } else {
      result = "Không có số dương nào trong mảng";
    }
  }

  // Show kq
  getEle("ketqua-4").innerHTML = result;
};

// 5
// Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1
/**
 * Input: Array
 * Process:
 * - Thêm số chẵn vào mảng mới
 * - Có số chẵn
 *  + In ra số cuối cùng (length -1)
 * - Else: In ra không có số chẵn
 * Output: Number. Số chẵn cuối cùng trong mảng
 */

getEle("btn-timSoChan").onclick = function () {
  var arrNumberChan = [];
  var mark = -1;
  var result = "";

  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 === 0) {
      arrNumberChan.push(arrNumber[i]);
      mark = 1;
    }
    if (mark === 1) {
      result =
        "Số chẵn cuối cùng trong mảng là: " +
        arrNumberChan[arrNumberChan.length - 1];
    } else {
      result = "Không có số chẵn nào trong mảng";
    }
  }

  // Show kq
  getEle("ketqua-5").innerHTML = result;
};

// 6
// Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).

/**
 * Input: Array
 *    Vị trí 1
 *    Vị trí 2
 * Process:
 *  Tạo 1 biến trung gian
 *  Truyền giá trị qua trung gian
 * Output: Array mới
 */

getEle("btn-doiCho").onclick = function () {
  var temp = 0;
  var result = "";

  var viTri1 = getEle("viTri1").value * 1;
  var viTri2 = getEle("viTri2").value * 1;
};
