var numberArray = [];

function storeIntegers(){
    var numberInput = document.getElementById("intInput").value * 1;
    if(!isNaN(numberInput)){
        numberArray.push(numberInput);
    }
    displayResult();
    document.getElementById("intInput").value = "";
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
    var lastEvenNum = null;
    for(var i = numberArray.length-1; i >= 0; i--){
        if(numberArray[i] % 2 == 0){
            lastEvenNum = numberArray[i];
            break;
        }
    }
    document.getElementById("lastevenNumber").innerText = `So chan cuoi cung: ${lastEvenNum}`;
}

function swap(){
    var index1 = document.getElementById("index1").value *1;
    var index2 = document.getElementById("index2").value *1;

    var temp = numberArray[index1];
    numberArray[index1] = numberArray[index2];
    numberArray[index2] = temp;

    document.getElementById("swapNumber").innerText = `Mang Sau khi swap: ${numberArray}`;
}

function sapXep(){
    var len = numberArray.length;
    for(var i = 0; i < len -1; i++){
        var minIndex = i;
        for(var j = i + 1; j < len ; j++){
            if(numberArray[j] < numberArray[minIndex]){
                minIndex = j;
            }
        }

        //  doi vi tri neu co so nho hon
        // minIndex bi thay doi
        if(minIndex != i){
            var temp = numberArray[i];
            numberArray[i] = numberArray[minIndex];
            numberArray[minIndex] = temp;
        }
    }

    document.getElementById("arrange").innerText = `Mang Tu nho den lon: ${numberArray}`;
}

