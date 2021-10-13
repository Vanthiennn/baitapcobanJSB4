/**
 * Bài tập 1 
 * Khối 1 : Người dùng nhập 3 số nguyên
 * Khối 2 : 
 * + Tạo hàm và lấy các giá trị của thẻ từ form
 * + Thêm sự kiện onclick cho thẻ button
 * + Sử dụng lệnh if else lồng nhau để xét 3 trường hợp :
 *    - TH1 ( a > b) :
 *          + (a > c và b < c hoặc a bằng c) =>  b < c < a 
 *          + (a < c ) => b < a < c (vì b chắc chắn phải nhỏ hơn c) 
 *          + (b > c ) => c < b < a 
 *    - TH2 ( a < b ) :
 *          + (b < c) => a < b < c
 *          + (b > c và a < c hoặc b == c) => a < c < b
 *          + (a > c) => c < a < b
 *    - TH3  (a == b) :
 *          + a hoặc b lớn hơn c => c < a < b
 *          + a hoặc b bé hơn c => a < b < c  
 * + In kết quả ra màn hình 
 * Khối 3 : Sắp xếp 3 số nguyên vừa nhập theo thứ tự tăng dần 
 */
function changeNumber(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = document.getElementById("num3").value;
    var result = document.getElementById("result")
    console.log(a,b,c)
    if(a > b) {
        if(a > c && b < c || a == c) {
            result.innerHTML = b + " < " + c + " < " + a ;
        }   
        else if (a < c ) {
            result.innerHTML = b + " < " + a + " < " + c;
        } else {
            result.innerHTML = c + " < " + b + " < " + a;
        }
    } else if (a < b ) {
        if (b < c) {
            result.innerHTML = a + " < " + b + " < " + c;
        } else if(b>c && a < c || b == c) {
            result.innerHTML = a + " < " + c + " < " + b;
        } else {
            result.innerHTML = c + " < " + a + " < " + b;
        }
    } else  {
        if(a > c) {
            result.innerHTML = c + " < " + a + " < " + b;
        }     
        else {
            result.innerHTML = b + " < " + a + " < " + c;
        }
    }
}
document.getElementById("btnNum").onclick = changeNumber 


// Bài tập 2 
/**
 * Khối 1 : Tạo dropdown với các thẻ Bố , Mẹ , Anh trai , Em gái 
 * Khối 2 :
 * + Tạo hàm và lấy các giá trị của thẻ trong dropdown
 * + Thêm sự kiện onclick cho nút button
 * + Sử dụng điều kiện Switch case để lựa chọn lời chào của các thành viên
 * + Hiển thị nội dung ra màn hình
 * Khối 3 : Hiển thị lời chào của các thành viên khi được chọn
 */

function sayHi() { 
    var relation = document.getElementById("greeting").value ;
    console.log(relation);
    switch(relation) {
        case "B" : 
        document.getElementById("txtResult").innerHTML = " Xin chào Bố  ! " ;
        break;
        case "M" : 
        document.getElementById("txtResult").innerHTML = " Xin chào Mẹ ! " ;
        break;
        case "A" : 
        document.getElementById("txtResult").innerHTML = " Xin chào Anh trai ! " ;
        break;
        default: 
        document.getElementById("txtResult").innerHTML = " Xin chào Em gái ! " ;
    }

}

document.getElementById("btnHi").onclick = sayHi

// Bài tập 3 
/**
 * Khối 1 : Nhập 3  số nguyên 
 * Khối 2 : 
 * + Tạo hàm và lấy giá trị của thẻ từ form
 * + Gán sự kiện onclick cho thẻ button
 * + Sử dụng câu lệnh IF ELSE 
 *  - Kiểm tra xem các giá trị có chia hết cho 2 hay ko , nếu chia hết cho 2 là số chẵn , ko chia hết là số lẻ
 * + Hiển thị kết quả ra màn hình
 * Khối 3 : Đếm được có bao nhiêu số lẻ , bao nhiêu số chẵn trong 3 số người dùng nhập
 */
function checkNumber() {
    var number1 = document.getElementById("check1").value;
    var number2 = document.getElementById("check2").value;
    var number3 = document.getElementById("check3").value;
    var show = document.getElementById("checkNumber")
    console.log(number1,number2,number3)
    if(number1 % 2 == 0 ) {
        console.log(number1 + " Đây là số chẵn") ;
    } else {
        console.log(number1 + " Đây là số lẻ")
    }
    if(number2 % 2 == 0 ) {
        console.log(number2 + " Đây là số chẵn") ;
    } else {
        console.log(number2 + " Đây là số lẻ")
    }
    if(number3 % 2 == 0 ) {
        console.log(number3 + " Đây là số chẵn") ;
    } else {
        console.log(number3 + " Đây là số lẻ")
    }
    soChan = (number1%2 ==0 )  + ( number2%2 == 0 ) + (number3%2 ==0 ) 
    
    show.innerHTML = "Có " + soChan   +" số chẵn , "   + (3- soChan) + " số lẻ " 
}   
document.getElementById("btnCheck").onclick = checkNumber

// Bài 4 
/** 
 * Khối 1 : Nhập độ dài của 3 cạnh 
 * Khối 2 : 
 * + Tạo hàm và lấy giá trị của thẻ từ form
 * + Gán sự kiện onclick cho thẻ button
 * + Sử dụng câu lệnh IF ELSE 
 * + Hiển thị kết quả ra màn hình
 * Khối 3 : Loại tam giác của 3 cạnh vừa nhập 
 */

function checkEdge() {
    var edge1 = document.getElementById("edge1").value;
    var edge2 = document.getElementById("edge2").value;
    var edge3 = document.getElementById("edge3").value;
    var total = document.getElementById("total")
    console.log(edge1,edge2,edge3)
    if(edge1 == edge2 && edge2 == edge3 ) {
        total.innerHTML = "Tam giác đều" ;
    } else if (edge1 == edge2 || edge2 == edge3 || edge3 == edge1) {
        total.innerHTML = "Tam giác cân" ;
    } else if (edge1*edge1 == edge2*edge2 + edge3*edge3 || edge2*edge2 == edge3*edge3 + edge1*edge1 || edge3*edge3 == edge2*edge2 + edge1*edge1) {
        total.innerHTML = "Tam giác vuông" ;
    } else {
        total.innerHTML = "Một loại tam giác nào đó" ;
    }
}
document.getElementById("btnEdge").onclick = checkEdge

// Bài 5
function NextDay() {
    var day = document.getElementById("day").value ;
    var month = document.getElementById("month").value ; 
    var year = document.getElementById("year").value ; 
    var x 
    console.log(day,month,year)
    switch (month) {
        case "1" : case "3": case "5" : case "7" : case "8" : case "10" : case "12" :
            x = 31 ;
            break; 
        case "4" : case "6" : case "9" : case "11" : 
            x = 30 ;
            break ;    
        case "2" :
            x = 28 ;
            break ; 
        default : x = 0    
                
    }
    if(day > x || x == 0 || day < 0 ) {
        document.getElementById("show").innerHTML = "Ko có ngày mà bạn nhập"
    } else {
        if(day == x) {
            if (month == 12) {
                day = 1 ;
                month = 1 ;
                year++ ;   
            } else {
                day = 1 ;
                month++ ;
            }
        } else {
            day++ ;          
        }
        document.getElementById("show").innerHTML = "Ngày tiếp theo là " + day + "/" + month + "/" + year ; 
    }
}

function PrevDay() {
    var day = document.getElementById("day").value ;
    var month = document.getElementById("month").value ; 
    var year = document.getElementById("year").value ; 
    var x 
    console.log(day,month,year)
    switch (month) {
        case "1" : case "3": case "5" : case "7" : case "8" : case "10" : case "12" :
            x = 31 ;
            break; 
        case "4" : case "6" : case "9" : case "11" : 
            x = 30 ;
            break ;    
        case "2" :
            x = 28 ;
            break ; 
        default : x = 0    
                
    }
    if(day > x || x == 0 || day < 0 ) {
        document.getElementById("show").innerHTML = "Ko có ngày mà bạn nhập"
    } else {
        if(day == 1) {
            if (month == 1) {
                day = 31 ;
                month = 12 ;
                year-- ;   
            } else if (month == 2) {
                day = 31 ;
                month -- 
            } else if(month == 4 || month == 6 || month == 9 || month == 11) {
                day =  x + 1  ;
                month-- ;
            } else {
                day =  x-1 ;
                month-- ;
            }
        } else {
            day-- ;          
        }
        document.getElementById("show").innerHTML = "Ngày hôm qua là " + day + "/" + month + "/" + year ; 
    }
}

document.getElementById("btnNext").onclick = NextDay
document.getElementById("btnPrev").onclick = PrevDay

// Bài 6 
function countMonth() {
    var monthCount = document.getElementById("monthCount").value ; 
    var yearCount = document.getElementById("yearCount").value ; 
    console.log(monthCount,yearCount)
    switch(monthCount) {
        case "1" : case "3": case "5" : case "7" : case "8" : case "10" : case "12" :
            document.getElementById("count").innerHTML = "Tháng " + monthCount + " năm " + yearCount + " có 31 ngày "
            break; 
        case "4" : case "6" : case "9" : case "11" : 
            document.getElementById("count").innerHTML = "Tháng " + monthCount + " năm " + yearCount + " có 30 ngày "
            break ;    
        case "2" :
            if(yearCount % 4== 0 && yearCount % 100 !=0) {
                document.getElementById("count").innerHTML = "Tháng " + monthCount + " năm " + yearCount + " có 29 ngày "
            } else {
                document.getElementById("count").innerHTML = "Tháng " + monthCount + " năm " + yearCount + " có 28 ngày "
            }
            break ; 
        default : 
                document.getElementById("count").innerHTML = "Không có tháng bạn tìm"
    }
}

document.getElementById("btnCount").onclick = countMonth

// Bài 7 
function readNumber() {
    var readNum = document.getElementById("readNumber").value ;
    var read 
    var readTen 
    var readUnit
    var hundred = Math.floor(readNum / 100) ;
    var ten = Math.floor(readNum % 100 / 10)
    var unit = readNum % 100 % 10 ;
    console.log(readNum,hundred,ten,unit)
    if(readNum < 100 || readNum > 999) {
        read.innerHTML = "Nhập vào số có 3 chữ số"
    } else {
        switch(hundred) {
            case 1 : read = " Một trăm "   ;
            break;
            case 2 :  read = " Hai trăm "  ;
            break;
            case 3 :  read = " Ba trăm "  ;
            break;
            case 4 :  read = " Bốn trăm "  ;
            break;
            case 5 :  read = " Năm trăm "  ;
            break;
            case 6 : read =  " Sáu trăm "  ;
            break;
            case 7 : read =  " Bảy trăm "  ;
            break;
            case 8 : read =  " Tám trăm "  ;
            break;
            case 9 : read =  " Chín trăm "  ;
            break;
        }
        switch(ten) {
            case 0 : readTen = " Lẻ " ; break ;
            case  1 : readTen = " Mười "   ;
            break;
            case 2 : readTen = " Hai mươi "  ;
            break;
            case 3 : readTen = " Ba mươi "  ;
            break;
            case 4 : readTen = " Bốn mươi "  ;
            break; 
            case 5 : readTen = " Năm mươi "  ;
            break;
            case 6 : readTen = " Sáu mươi "  ;
            break;
            case 7 : readTen = " Bảy mươi "  ;
            break;
            case 8 : readTen = " Tám mươi "  ;
            break;
            case 9 : readTen = " Chín mươi "  ;
            break;
        }
        switch(unit) {
            case 1 : readUnit = " Mốt "   ;
            break;
            case 2 : readUnit = " Hai  "  ;
            break;
            case 3 : readUnit = " Ba  "  ;
            break;
            case 4 : readUnit = " Bốn  "  ;
            break;
            case 5 : readUnit = " Năm  "  ;
            break;
            case 6 : readUnit = " Sáu  "  ;
            break;
            case 7 : readUnit = " Bảy  "  ;
            break;
            case 8 : readUnit = " Tám  "  ;
            break;
            case 9 : readUnit = " Chín  "  ;
            break;
        } 
    }
    document.getElementById("countTotal").innerHTML = read + readTen + readUnit
}

document.getElementById("btnRead").onclick = readNumber

// Bài 8 
function compareDistance() {
    var stu1 = document.getElementById("student1").value ;
    var stu2 = document.getElementById("student2").value ;
    var stu3 = document.getElementById("student3").value ;
    var col = document.getElementById("col").value ;
    var col1 = document.getElementById("col1").value ;
    var col2 = document.getElementById("col2").value ; 
    var col3 = document.getElementById("col3").value ; 
    var row = document.getElementById("row").value ;
    var row1 = document.getElementById("row1").value ;
    var row2 = document.getElementById("row2").value ;
    var row3 = document.getElementById("row3").value ;
    console.log(stu1,stu2,stu3,col,col1,col2,col3,row,row1,row2,row3)
    var d1 = Math.sqrt(((col1 - col)*(col1 - col)) + ((row1 - row)*(row1 - row)) )
    var d2 = Math.sqrt(((col2 - col)*(col2 - col)) + ((row2 - row)*(row2 - row)) )
    var d3 = Math.sqrt(((col3 - col)*(col3 - col)) + ((row3 - row)*(row3 - row)) )
    if(d2 > d1 && d2 > d3) { 
        document.getElementById("compareResult").innerHTML= " Sinh viên xa trường nhất là " + stu2 ;
    } else if (d1> d2 && d1 > d3) {
        document.getElementById("compareResult").innerHTML= " Sinh viên xa trường nhất là " + stu1 ;
    } else {
        document.getElementById("compareResult").innerHTML= " Sinh viên xa trường nhất là " + stu3 ;
    }
}

document.getElementById("btnCompare").onclick = compareDistance