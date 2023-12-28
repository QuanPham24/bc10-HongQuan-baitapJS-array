var numberArray = [];

function storeIntegers(){
    var numberInput = document.getElementById("intInput").value * 1;
    if(!isNaN(numberInput)){
        numberArray.push(numberInput);
    }
    displayResult();
}

function displayResult(){
    var resultInput = document.getElementById("result-inMang");
    resultInput.innerText=
    `Mang hien tai:${numberArray}`;
}

function sumInteger(){
    var sum = 0;
    for(var i = 0; i < numberArray.length; i++){
        if(numberArray[i] >= 0){
            sum += numberArray[i];
        }
    }
    displayTong(sum);
}

function displayTong(sum){
    var result = document.getElementById("tong");
    result.innerText =`Tong so duong: ${sum}`;
}


function countInteger(){
    var count = 0;
    for( var i = 0; i < numberArray.length; i++){
        if(numberArray[i] >= 0){
            count++;
        }
    }
    document.getElementById("count").innerText = `So duong: ${count}`;
}

function smallest(){
    var small = numberArray[0];
    for(var i = 1; i < numberArray.length; i++){
        if(numberArray[i] < small){
            small = numberArray[i];
        }
    }
    document.getElementById("findSmall").innerText= `So nho nhat: ${small}`;
}

function smallestInteger(){
   var soDuong = [];
   var count = 0
   for(var i = 0; i < numberArray.length; i++){
    if(numberArray[i] > 0){
        soDuong[count] = numberArray[i];
        count++;
    }
   }
 
   if(soDuong.length == 0){
    document.getElementById("findSmallInteger").innerText= `khong co so duong`;
   }else{
        var soDuongNhoNhat = soDuong[0];
        for(var i = 0; i < soDuong.length; i++){
        if(soDuong[i] < soDuongNhoNhat){
            soDuongNhoNhat = soDuong[i];
        }
    }
        document.getElementById("findSmallInteger").innerText= `so duong nho nhat: ${soDuongNhoNhat}`;
   }
}

function lastEven(){
    
}
