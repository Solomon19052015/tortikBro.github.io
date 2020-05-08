let input = document.querySelector(".nameProductUser");
let inputValue;
let btn = document.querySelector(".btn");
let nameProductTextEl = document.querySelector('.nameProductText');
let gramEl = document.querySelector('.gramConteiner');
let priceEl = document.querySelector('.price');
let totalPriceEl = document.querySelector(".totalPrice");
let totalGramEl = document.querySelector(".totalGram");

let arrPrice = 0;
let totalGram = 0;
let array = [] ;
let resultSearch;
let resultCalculation;
let countClass = -1;

let savePriceOnArray=[];
let saveGramOnArray=[];

btn.addEventListener('click', inputValueGo);


let namePriceProduct ={
    "сливочное масло, 160" : 2.13,
    "разрыхлитель, 15": 0.45,
    "мука, 2000": 2.4,
    "сода, 500": 1.00,
    "какао, 150": 1.77,
    "сахар, 1000": 1.54,
    "соль, 1000": 0.40,
    "яица, 450":1.80,
    "молоко, 900": 1.48,
    "кофе растворимый, 250": 14.29,
    "грецкий орех, 1000":21.45,
    "желатин, 50": 1.50,
    "вода, 1000": 0.40,
    "апельсин, 1000": 3.00,
    "крахмал, 450": 1.60,
    "сливки 33%, 500": 6.10,
    "молочный шоколад, 100":2.70,
    "темный шоколад, 90": 2.25,
    "творожный сыр, 380": 5.00,
    "сахарная пудра, 356": 1.25,
    "растительное масло, 800": 2.30,
    "вишня, 400":4.15,
    "маскарпоне, 250": 5.25,
    "ванилин, 2": 0.21,
    "клубника, 400": 4.29,
    "лимоный сок, 1000": 7.00,
    "белый шоколад, 90": 2.00,
    "сливочный сыр, 400": 7.69,
    "сливки 10%, 350": 2.05,
    "сливки 22%, 500": 4.70,
    "фундук, 1000": 33,
    "подсолнечное масло, 1000": 3.20,
    "сгущенное молоко, 380": 2.75,
    "сгущенное молоко(варёное), 360": 2.85,
    "чернослив, 1000": 13,
    "крахмал кукурузный, 450": 1.60,
    "печенье шоколадное, 80": 2.69,
    "мак, 100": 3.85,
    "лимон, 1000": 7.70,
    "лимонная кислота, 30": 0.75,
    "миндальная мука, 100": 12,
    "кофе молотый, 250": 5,

    



}

//СОБЫТИЕ НАЖАТИЯ КНОПКИ

function inputValueGo(){
    
    inputValue = input.value;
   // console.log(inputValue);
  array= processingTextAddArray(inputValue);
  resultSearch = saerchValueObject(namePriceProduct, array[0]);
  resultCalculation = calculationPrice(array[1],resultSearch);
  savePriceOnArray.push(resultCalculation);

  saveGramOnArray.push(array[1]);
  
  arrPrice += Number(resultCalculation);
  totalGram+=Number(array[1]);
 // console.log(totalGram);
  if(arrPrice>0){
    arrPrice = Number(arrPrice.toFixed(2));
  }
  
 addHtml(array[0],array[1],resultCalculation);
  addHtmlTotalPrice(totalPriceEl,arrPrice);
  addHtmlTotalGram(totalGramEl,totalGram);

setTimeout(allElPp,50);

  input.value = '';

}

function changeValArray(arr,val){
        arr[val]=null;
        return arr;

}

document.onkeyup = function (e) {
	e = e || window.event;
	if (e.keyCode === 13) {
		inputValueGo();
	}
	// Отменяем действие браузера
	return false;
}


//С ФОРМЫ ЗНАЧЕНИЕ РАЗДЕЛЯЕТСЯ И ДОБАВЛЯЕТСЯ В МАССИВ
function processingTextAddArray(value){
    
    let indx = value.indexOf(',',1);
    let valueNameProduct = value.slice(0,indx).toLowerCase();
  
    let valueGram = value.slice(indx+1, value.lenght).trim();
    if(valueNameProduct == "яица"){
        valueGram*=45;
    }
    let arr = [];
    arr.push(valueNameProduct);
    arr.push(valueGram);
    return arr;
}

//ПОИСК ЗНАЧЕНИЕ В ОБЬЕКТЕ ПРОДУКТОВ
function saerchValueObject(obj,val){
    let name;
    let resultSearch;
    for (let key in obj ){
    
     name = processingText(key);
     
     if(name == val){
        resultSearch = key + "," + obj[key];
       // console.log(resultSearch );
         return String(resultSearch);
     }
    
    }

}
//ОТДЕЛЕНИЕ ИМЯ ПРОДУКТЫ В ОБЬКТЕ ОТ ОТСАЛЬНОГО 
function processingText(value){
    let indx = value.indexOf(',',1);
    let valueNameProduct = value.slice(0,indx).trim().toLowerCase();
    return valueNameProduct;
}
//VAL1-ГРАММОВКА ПОЛЬЗОВАТЕЛЯ, VAL2 ДАННЫЕ С ОБЬЕКТА(ГРАММ, ЦЕНА)
function calculationPrice(val1, val2){
    let gramUser = Number(val1); 
     let indexComma1 = val2.indexOf(',',1);
    let indexComma2 = val2.indexOf(',', indexComma1 +1);
    let gramStok = Number(val2.slice(indexComma1 +1, indexComma2).trim());
     let priceStok = Number(val2.slice(indexComma2 +1,val2.lenght));
    let result = (gramUser * priceStok)/gramStok;
    return result.toFixed(2); 
}


function addHtml(name,gram,price){
    countClass++;
    let pName = document.createElement('p');
    pName.classList.add("p" + countClass);
    setTimeout(addClassAnimation,11,pName);
     pName.innerHTML= name[0].toUpperCase()+name.slice(1);
    nameProductTextEl.prepend(pName);
    let pGram = document.createElement('p');
    pGram.classList.add("p" + countClass);
    setTimeout(addClassAnimation,11,pGram);
     pGram.classList.add("gram" + countClass);
    pGram.innerHTML= gram;
    gramEl.prepend(pGram);
    let pPrice = document.createElement('p');
    pPrice.classList.add("p" + countClass);
    setTimeout(addClassAnimation,11,pPrice);
     pPrice.classList.add("price" + countClass);
    pPrice.innerHTML= price;
    priceEl.prepend(pPrice);
   
   return;
}



function addClassAnimation(el){
    
    el.classList.add("pp");
}

function addHtmlTotalPrice(el,val){
    el.innerHTML =  val + "р";

}

function addHtmlTotalGram(el,val){
    el.innerHTML =   val + "г";

}

//ДОБАВЛЕНИЕ СОБЫТИЯ ВСЕМ НОВЫМ СТРОКАМ
function allElPp(){
    let pp = document.querySelectorAll(".pp");
    for(let i =0; i < pp.length; i++){
        pp[i].addEventListener('click', clickDelete);
    }

}
allElPp();

function clickDelete(){
    let delPrice = searchEventCkick();
   
  
  //  (arrPrice-=searchEventCkick()).toFixed(2);
    arrPrice-=delPrice[0];
   // console.log(delPrice[0]);
    totalGram-=Number(delPrice[1]);

    if(arrPrice>0){
        arrPrice= Number(arrPrice.toFixed(2));
    }
    addHtmlTotalPrice(totalPriceEl,arrPrice);
    addHtmlTotalGram(totalGramEl,totalGram);
  }

function searchEventCkick(){
    let elEvent =  event.target;
    let needClass = elEvent.classList[0];
    let allEventEl = document.querySelectorAll("." + needClass);
    console.log(allEventEl);
     let decreaseSum=decreaseTotalPrice(needClass);
   let decreaseGram= decreaseTotalGram(needClass);
   let arrPriceGram=[] ;
   arrPriceGram.push(decreaseSum);
   arrPriceGram.push(decreaseGram);
   
      for(let i = 0; i < allEventEl.length; i++){
        allEventEl[i].classList.add('delString');
    }

    setTimeout(animationDelEl,700,allEventEl);
       return arrPriceGram;
}


function decreaseTotalPrice(el){
    let num = el.slice(1, el.lenght);
    let classPriceNeed = document.querySelector(".price" + num);
    console.log(classPriceNeed);
    let contentPrice = classPriceNeed.textContent;
    return Number(contentPrice);
}

function decreaseTotalGram(el){
    let num = el.slice(1, el.lenght);
    let classPriceNeed = document.querySelector(".gram" + num);
  //  console.log(classPriceNeed);
    let contentPrice = classPriceNeed.textContent;
    changeValArray(savePriceOnArray,num);
    changeValArray(saveGramOnArray,num);
        return Number(contentPrice);

}

function animationDelEl(el){

    for(let i = 0; i < el.length; i++){
    
        el[i].remove()
     
    }
   
}


//ОКНО ПОМОЩИ
let helpBtnEl = document.querySelector(".helpBtn");
let helpWindowEl = document.querySelector(".helpWindow");
let countHelp = 0;
helpBtnEl.addEventListener('click', openHelpWindowFunction) ;
helpWindowEl.addEventListener('click', closeHelpWindowFunction) ;
function openHelpWindowFunction(){
    countHelp++;
     helpWindowEl.classList.add('openHelpWindow');
   
}

function closeHelpWindowFunction(){
    helpWindowEl.classList.remove('openHelpWindow');

}






let sizeForm = document.querySelector(".sizeFormCake");
let lastSizeFormCake = sizeForm.value;
sizeForm.addEventListener('change', eventRecalculation);
let stateSizeForm = true;

function eventRecalculation(){
    
    let nowSizeCake = sizeForm.value;
    //console.log(lastSizeFormCake,nowSizeCake);
    if(lastSizeFormCake > nowSizeCake ){
        stateSizeForm = false;
    }
    else{
        stateSizeForm = true;
    }
   
    let factor = calculationFactor(lastSizeFormCake, nowSizeCake);
    savePriceOnArray= recalculationValue(savePriceOnArray,factor,"price");
    saveGramOnArray = recalculationValue(saveGramOnArray,factor,"gram");
    
    arrPrice= sumAfterRecaculation(savePriceOnArray);
    totalGram= sumAfterRecaculation(saveGramOnArray);
    
    if(arrPrice !=undefined && totalGram !=undefined){
        console.log(arrPrice,totalGram)
    arrPrice = arrPrice.toFixed(2);
    totalGram = totalGram.toFixed(0);
    }
    else{
        arrPrice = 0;
        totalGram = 0;
    }

    addHtmlTotalPrice(totalPriceEl,arrPrice);
    addHtmlTotalGram(totalGramEl,totalGram);
 
    lastSizeFormCake=nowSizeCake;

    
}



function recalculationValue(arr, factor,name){
      
    for(let i = 0; i < arr.length; i++){
    
        if(arr[i] != null && stateSizeForm ){
         
            if(name == "gram"){
                arr[i] = (arr[i] * factor).toFixed(0);
                arr[i] = Number(arr[i]);
                console.log(arr);
            }
            else{
                arr[i] = (arr[i] * factor).toFixed(2);
                arr[i] = Number(arr[i]);
            }
        
    
        searchTagRecalculation(i,name,arr[i]);

        }
        else if(arr[i] != null && !stateSizeForm){
           
            if(name == "gram"){
                arr[i] = (arr[i] / factor).toFixed(0);
                console.log(arr[i] , factor);
            }
            else{
                arr[i] = (arr[i] / factor).toFixed(2);
            }
      
            searchTagRecalculation(i,name,arr[i]);
        }
    }
    return arr
}



function searchTagRecalculation(index, name,value){
    let nameClass ='.'+ name + index;
    console.log(nameClass);

    let el =document.querySelector(nameClass);
    el.innerHTML=value;
  
    return;
}

function sumAfterRecaculation(arr){
  
    let sum = 0;
    for(let i=0; i < arr.length; i++){
          if(arr[i] != null){
            sum+=Number(arr[i]);
        }
    }
    if(sum ==0){
        return
    }
    else{
        console.log(sum);
        return sum;
    }
   
}

function calculationFactor(valLastSize, valNowSize){
  
    if(valNowSize>valLastSize){
        return Math.pow(valNowSize,2)/Math.pow(valLastSize,2);
    }
    else{
        return Math.pow(valLastSize,2)/Math.pow(valNowSize,2);
    }
   

}

