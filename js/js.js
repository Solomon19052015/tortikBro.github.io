let input = document.querySelector(".nameProduct");
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
let countClass = 0;


btn.addEventListener('click', inputValueGo);
btn.addEventListener('keyup', inputValueGo);

let namePriceProduct ={
    "сливочное масло, 160" : 2.13,
    "разрыхлитель, 15": 0.45,
    "мука, 2000": 2.4,
    "сода, 500": 1.00,
    "какао, 150": 1.77,
    "сахар, 1000": 1.54,
    "соль, 1000": 0.40,
    "яица, 10":1.80,
    "молоко, 900": 1.48,
    "кофе, 75": 2.39,
    "грецкий орех, 1000":21.45,
    "желатеин, 50": 1.50,
    "вода, 1000": 0.40,
    "апельсин, 1000": 3.00,
    "крахмал, 450": 1.60,
    "сливки, 500": 5.60,
    "молочный шоколад, 100":2.70,
    "темный шоколад, 90": 2.25,
    "творожный сыр, 380": 5.00,
    "сахарная пудра, 356": 1.25,
    "растительное масло, 800": 2.30,
    "вишня, 400":4.15,
    "маскарпони, 250": 5.25,
    "ванилин, 2": 0.21,
    "клубника, 400": 4.29,
    "лимоный сок, 1000": 7.00,
    "белый шоколад, 90": 2.00,
    "сливочный сыр, 400": 7.69
 }

//СОБЫТИЕ НАЖАТИЯ КНОПКИ

function inputValueGo(){
    if(event.code == 'Enter' || event.which == 1){
    inputValue = input.value;
   // console.log(inputValue);
  array= processingTextAddArray(inputValue);
  resultSearch = saerchValueObject(namePriceProduct, array[0]);
  resultCalculation = calculationPrice(array[1],resultSearch);
 // (arrPrice += resultCalculation).toFixed(2) ;
  arrPrice += Number(resultCalculation);
  totalGram+=Number(array[1]);
  console.log(totalGram);
  if(arrPrice>0){
    arrPrice = Number(arrPrice.toFixed(2));
  }
  
  addHtml(array[0],array[1],resultCalculation);
  addHtmlTotalPrice(totalPriceEl,arrPrice,totalGram);


  allElPp();
  input.value = '';
}
}
//С ФОРМЫ ЗНАЧЕНИЕ РАЗДЕЛЯЕТСЯ И ДОБАВЛЯЕТСЯ В МАССИВ
function processingTextAddArray(value){
    let indx = value.indexOf(',',1);
    let valueNameProduct = value.slice(0,indx).toLowerCase();
    let valueGram = value.slice(indx+1, value.lenght).trim();
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
    pName.classList.add("pp");
    pName.innerHTML= name[0].toUpperCase()+name.slice(1);
    nameProductTextEl.append(pName);
    let pGram = document.createElement('p');
    pGram.classList.add("p" + countClass);
    pGram.classList.add("pp");
    pGram.classList.add("gram" + countClass);
    pGram.innerHTML= gram;
    gramEl.append(pGram);
    let pPrice = document.createElement('p');
    pPrice.classList.add("p" + countClass);
    pPrice.classList.add("pp" );
    pPrice.classList.add("price" + countClass);
    pPrice.innerHTML= price;
    priceEl.append(pPrice);

}

function addHtmlTotalPrice(el,val, val2){
    el.innerHTML = "Итог: "  +  val + "р,     " + val2  + "г";

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
    console.log(delPrice[0]);
    totalGram-=Number(delPrice[1]);

    if(arrPrice>0){
        arrPrice= Number(arrPrice.toFixed(2));
    }
    addHtmlTotalPrice(totalPriceEl,arrPrice,totalGram);
   
 
    
}

function searchEventCkick(){
    let elEvent =  event.target;
    let needClass = elEvent.classList[0];
    let allEventEl = document.querySelectorAll("." + needClass);
  
   let decreaseSum=decreaseTotalPrice(needClass);
   let decreaseGram= decreaseTotalGram(needClass);
   let arrPriceGram=[] ;
   arrPriceGram.push(decreaseSum);
   arrPriceGram.push(decreaseGram);

      for(let i = 0; i < allEventEl.length; i++){
      allEventEl[i].remove();
    }
    
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
    return Number(contentPrice);

}



