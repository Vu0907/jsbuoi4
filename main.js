/*
 * Bài 1
 * Đầu vào: 3 số nguyên
 * Xử lý:
 * B1: Tạo biến number1;number2;number3
 * B2: Tao bien sapxep
 * B3: xet number1 nhỏ nhất nếu number2 < number3 -> 1 2 3; còn lại 1 3 2
 * B4: xet number2 nhỏ nhất nếu number1 < number3 -> 2 1 3; còn lại 2 3 1
 * B5: xét number3 nhỏ nhất nếu number1 < number2 -> 3 1 2; còn lại 3 2 1
 *
 * Đầu ra: sắp xếp theo thứ tự tăng dần
 */

document.getElementById("btnSapxep").onclick = function () {
  var number1 = Number(document.getElementById("number1").value);
  var number2 = Number(document.getElementById("number2").value);
  var number3 = Number(document.getElementById("number3").value);
  var sapxep = "";
  if (number1 <= number2 && number1 <= number3) {
    if (number2 <= number3) {
      sapxep = number1 + ", " + number2 + ", " + number3;
    } else {
      sapxep = number1 + ", " + number3 + ", " + number2;
    }
  } else if (number2 <= number1 && number2 <= number3) {
    if (number1 <= number3) {
      sapxep = number2 + ", " + number1 + ", " + number3;
    } else {
      sapxep = number2 + ", " + number3 + ", " + number1;
    }
  } else if (number3 <= number1 && number3 <= number2) {
    if (number1 <= number2) {
      sapxep = number3 + ", " + number1 + ", " + number2;
    } else {
      sapxep = number3 + ", " + number2 + ", " + number1;
    }
  }
  document.getElementById("infoTangdan").innerHTML = sapxep;
};

/*
 * Bài 2
 * Đầu vào: lấy value dữ liệu người dùng từ dropdown
 * Xử lý:
 * B1: Tạo biến members: DOM tới value
 * B2: switch case từng value
 *
 * Đầu ra: Hiển thị lời chào với value user chọn
 */

document.getElementById("btnHello").onclick = function () {
  var members = document.getElementById("member").value;
  var result2 = "";
  switch (members) {
    case "B":
      {
        result2 = "Xin chào Bố!";
      }
      break;
    case "M":
      {
        result2 = "Xin chào Mẹ!";
      }
      break;
    case "A":
      {
        result2 = "Xin chào Anh trai!";
      }
      break;
    case "E":
      {
        result2 = "Xin chào Em gái!";
      }
      break;
    default:
      {
        result2 = "Xin chào Người lạ!";
      }
      break;
  }
  document.getElementById("infoHello").innerHTML = result2;
};

/*
 * Bài 3
 * Đầu vào: 3 số nguyên
 * Xử lý:
 * B1: Tạo 3 biến lấy thông tin từ user nb1;nb2;nb3
 * B2: Tạo biến count
 * B3: Xét nb1 chẵn hay lẻ bằng %2 -> count= count+1
 * B4: Xét nb2 chẵn hay lẻ bằng %2 -> count= count+1
 * B5: Xét nb3 chẵn hay lẻ bằng %2 -> count= count+1
 * Đầu ra: đếm số chẵn và lẻ
 */

document.getElementById("btnCount").onclick = function () {
  var nb1 = Number(document.getElementById("nb1").value);
  var nb2 = Number(document.getElementById("nb2").value);
  var nb3 = Number(document.getElementById("nb3").value);
  var count = 0;
  if (nb1 % 2 == 0) {
    count += 1;
  }
  if (nb2 % 2 == 0) {
    count += 1;
  }
  if (nb3 % 2 == 0) {
    count += 1;
  }
  var result3 = "";
  result3 += "<p> Có " + count + " số chẵn, " + (3 - count) + " số lẻ" + "</p>";
  document.getElementById("infoCount").innerHTML = result3;
};

/*
 * Bài 4
 * Đầu vào: 3 cạnh của tam giác
 * Xử lý:
 * B1: tạo 3 biến canh1, canh2, canh3
 * B2: tạo biến result4
 * B3: điều kiện để các cạnh tạo thành tam giác : tổng 2 cạnh bất kì lớn hơn cạnh còn lại và các cạnh lớn hơn 0
 * B4: xét tam giác đều 3 cạnh bằng nhau: canh1 == canh2 && canh2 == canh3
 * B5: xét tam giác cân 2 cạnh bằng nhau: canh1 == canh2 || canh1 == canh3 || canh2 == canh3
 * B6: xét tam giác vuông định lý pytago:
 * canh1 * canh1 == canh2 * canh2 + canh3 * canh3 ||
 * canh2 * canh2 == canh1 * canh1 + canh3 * canh3 ||
 * canh3 * canh3 == canh1 * canh1 + canh2 * canh2
 * B7: còn lại là Loại tam giác khác
 *
 * Đầu ra: Cho biết là tam giác gì
 */

document.getElementById("btnTriangle").onclick = function () {
  var canh1 = document.getElementById("canh1").value * 1;
  var canh2 = document.getElementById("canh2").value * 1;
  var canh3 = document.getElementById("canh3").value * 1;
  var result4;
  if (
    canh1 + canh2 > canh3 &&
    canh1 + canh3 > canh2 &&
    canh2 + canh3 > canh1 &&
    canh1 > 0 &&
    canh2 > 0 &&
    canh3 > 0
  ) {
    if (canh1 == canh2 && canh2 == canh3) {
      result4 = "Hình tam giác đều";
    } else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
      result4 = "Hình tam giác cân";
    } else if (
      canh1 * canh1 == canh2 * canh2 + canh3 * canh3 ||
      canh2 * canh2 == canh1 * canh1 + canh3 * canh3 ||
      canh3 * canh3 == canh1 * canh1 + canh2 * canh2
    ) {
      result4 = "Hình tam giác vuông";
    } else {
      result4 = "Loại tam giác khác";
    }
  } else {
    result4 = "Các cạnh không tạo được hình tam giác";
  }
  document.getElementById("infoTriangle").innerHTML = result4;
};
