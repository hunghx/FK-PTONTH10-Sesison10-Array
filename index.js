// Khai báo mảng 
let array ; // giá trị biến a = undefined
// khởi tạo giá trị cho mảng
array = [1,2,3,4,5,6,7,8,9,10]; // danh sách số nguyên
let arrayString = ["quả chuối","quả ổi","quả đào"];
let arrayObject = [1,"hunghx",true,false];
// cách khác : ko khuyến khích
let arrayAdvance = new Array(10);


console.log("array =>>>", array);
console.log("arrayAdvance =>>>", arrayAdvance);
// Cú pháp 
// Lấy ra giá trị từ vị trí : array[index]
let phanTuViTriThu5 = array[5]  // = 6
console.log("phần tử vị trí thứ index = 5 là ", phanTuViTriThu5);
console.log("phần tử vị trí thứ index = 5 là ", array[5]);
// thay đổi giá tri qua chỉ mục
array[5] = 100; // phép gán
console.log("array =>>>", array);

// lấy ra độ dài mảng
console.log( "độ dài của mảng là : ",array.length); // thuộc tính length
// thêm 1 phần tử vào cuối mảng
array.push(1000);
console.log("array =>>>", array);
// bài toán duyệt mảng : In ra lần lượt từng giá trị trong mảng
// áp dụng : hãy kiểm tra giá trị nào chia hết cho 3 thì in ra màn hình console
// dùng for i duyệt theo chỉ mục

for(let i = 0; i < array.length ; i++){
    if(array[i]%3 ==0){
    console.log(`Phần tử tại vị trí ${i} = ${array[i]}`); // nối chuỗi kiểu literal string
    }
}
// Cách duyệt thông qua giá trị : for of
for(let value of array){
    console.log("value =>>",value)
}
// Các phương thức của Array 
let length = array.unshift(1,2,3,4); // chèn các phần tử mới vào đầu và trả về độ dài mới của mảng
console.log(array);
console.log(length);
// array.filter(); // sau hàm
// array.findIndex(); // sau hàm
// array.forEach(); // sau hàm
// array.includes(); // kiểm tra phần tử có tồn tại trong mảng hay ko
let checkExist = arrayString.includes("quả chuối");
console.log("Quả chuối có tồn tại trong mảng ArrayString hay ko ? ",checkExist);

array.indexOf(); // lấy ra vị trí theo giá trị , trả về -1 nếu giá trị ko tồn tại
let IndexOfQuaDao = arrayString.indexOf("quả đo"); // vị trí = 2
console.log( "Vị trí quả đào  = ",IndexOfQuaDao);

array.join(); // nối mảng thành chuỗi 
console.log(" nối mảng thành chuỗi cách nhau bởi dấu  '-'  : ", array.join("-"));

// array.map(); // sau ham
array.pop(); // xóa và trả về phần tử cuối cùng của mảng
// array.reduce(); // sau hàm
// array.shift(); // lấy và xóa phần tử đầu của mảng
// array.some(); // sau hàm
// array.sort(); // sau hàm

