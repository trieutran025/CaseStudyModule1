function OrderDrink1() {
    let input =document.getElementById("input1").value;
    if(input>0) {
        let result = input * 10000;
        document.getElementById('read1').innerText = "Giá của sản phẩm là :" + result;
        return result;
    }
    return 0;
}
function OrderDrink2() {
    let input =document.getElementById("input2").value;
    if(input>0) {
        let result = input * 12000;
        document.getElementById('read2').innerText = "Giá của sản phẩm là :" + result;
        return result;
    }
    return 0;

}
function OrderDrink3() {
    let input =document.getElementById("input3").value;
    if(input>0) {
        let result = input * 12000;
        document.getElementById('read3').innerText = "Giá của sản phẩm là :" + result;
        return result;
    }
    return 0;
}
function OrderDrink4() {
    let input =document.getElementById("input4").value;
    if(input>0) {
    let result=input*15000;
    document.getElementById('read4').innerText="Giá của sản phẩm là :"+result;
    return result;
    }
    return 0;
}
function OrderDrink5() {
    let input =document.getElementById("input5").value;
    if(input>0) {
    let result=input*5000;
    document.getElementById('read5').innerText="Giá của sản phẩm là :"+result;
    return result;
        return result;
    }
    return 0;
}
function OrderDrink6() {
    let input =document.getElementById("input6").value;
   let result=input*20000;
    if(input>0) {
        document.getElementById('read6').innerText = "Giá của sản phẩm là :" + result;
        return result;
    }
    return 0;
}
function calculate() {
    let Money=OrderDrink1()+OrderDrink2()+OrderDrink3()+OrderDrink4()+OrderDrink5()+OrderDrink6();
    document.getElementById("READ").innerText="Số tiền cần phải thanh toán là:"+Money;
}
function Reset() {
    document.getElementById('bbx').reset();
}