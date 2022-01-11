function start(){
    a = Number(prompt("Nhập điểm đầu"));
    b = Number(prompt("Nhập điểm cuối"));
    x = Math.floor(Math.random() * (b - a + 1) + a);
    c = Number(prompt("Nhập số dự đoán"));
    for (c;;){
        if (c === x) {
            alert("Chúc mừng, bạn đã đoán đúng");
            break;
        } else if(c > x){
            alert("Số bạn chọn lớn hơn đáp án");
            c = Number(prompt("Nhập số dự đoán"));
        }else{
            alert("Số bạn chọn bé hơn đáp án");
            c = Number(prompt("Nhập số dự đoán"));
        }
    }
}