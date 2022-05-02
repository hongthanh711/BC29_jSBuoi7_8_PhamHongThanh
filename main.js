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
