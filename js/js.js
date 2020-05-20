let input = document.querySelector(".nameProductUser");
let inputValue;
let btn = document.querySelector(".btn");
let nameProductTextEl = document.querySelector(".nameProductText");
let gramEl = document.querySelector(".gramConteiner");
let priceEl = document.querySelector(".price");
let totalPriceEl = document.querySelector(".totalPrice");
let totalGramEl = document.querySelector(".totalGram");

let totalPrice = 0;
let totalGram = 0;
let array = [];
let resultSearch;
let resultCalculation;
let countClass = -1;

let savePriceOnArray = [];
let saveGramOnArray = [];

btn.addEventListener("click", inputValueGo);

let namePriceProduct = {
  "сливочное масло 82.5%, 160": 2.55,
  "разрыхлитель, 15": 0.75,
  "пшеничная мука, 2000": 2.4,
  "сода, 500": 1.0,
  "какао, 150": 1.77,
  "сахар, 1000": 1.54,
  "соль, 1000": 0.4,
  "яица с1 (шт), 600": 1.8,
  "яица с1 (г), 600": 1.8,
  "молоко 3.2%, 900": 1.48,
  "молоко 2.5%, 900": 1.15,
  "кофе растворимый, 250": 14.29,
  "грецкий орех, 1000": 21.45,
  "желатин, 50": 1.19,
  "вода, 1000": 0.4,
  "апельсин, 1000": 3.0,
  "кукурузный крахмал, 450": 1.6,
  "сливки 33%, 500": 6,
  "шоколад горький 56%, 90": 1.29,
  "молочный шоколад, 100": 1.35,
  "темный шоколад, 90": 2.25,
  "творожный сыр, 380": 5.0,
  "сахарная пудра, 350": 1.25,
  "замороженная вишня, 400": 4.15,
  "сыр маскарпоне, 250": 5.25,
  "ванилин, 2": 0.29,
  "замороженная клубника, 400": 4.29,
  "белый шоколад, 90": 2.0,
  "сливочный сыр, 400": 7.69,
  "сливки 10%, 500": 1.75,
  "сливки 22%, 500": 4.7,
  "фундук, 1000": 33,
  "подсолнечное масло, 1000": 3.2,
  "сгущенное молоко, 380": 2.75,
  "сгущенное молоко(варёное), 360": 2.85,
  "чернослив, 1000": 13,
  "крахмал картофельный, 500": 2.19,
  "печенье шоколадное, 450": 2.75,
  "мак, 100": 3.85,
  "лимон, 1000": 7.0,
  "лимонная кислота, 30": 0.75,
  "миндальная мука, 100": 12,
  "кофе нерастворимый, 250": 5,
  "консервированные персики половинки, 800": 3.79,
  "банан, 1000": 3,
  "мед, 200": 2.89,
  "сметана 15%, 400": 1.75,
  "сметана 10%, 350": 2.09,
  "сметана 20%, 400": 2.09,
  "сметана 25%, 400": 2.45,
  "сметана 26%, 400": 2.65,
  "сметана 18%, 400": 2.06,
  "сметана 22%, 400": 2.29,
  "глюкозный сироп, 500": 4.35,
  "агар агар, 900": 4.7,
  "замороженная черника, 400": 8.29,
  "замороженная малина, 450": 7.45,
  "замороженная смородина, 300": 2.39,
  "уксус 9%, 1000": 1.29,
  "уксус винный 6%, 1000": 6.89,
  "уксус яблочный 6%, 250": 2.6,
  "лайм, 1000": 5.49,
  "лимонный джем, 300": 7.09,
  "кефир 2.5%, 950": 1.75,
  "кефир 1.5%, 950": 1.69,
  "кефир 3.2%, 930": 1.65,
  "арахис жаренный соленый, 1000": 7.69,
  "батончик сникерс, 95": 1.65,
  "киви, 1000": 6.59,
  "печенье орео, 228": 3.29,
  "молотая корица, 15": 0.76,
  "морковь, 1000": 0.65,
  "изюм светлый, 1000": 12.25,
  "кокосовая стружка, 20": 0.69,
  "мускатный орех, 15": 2.09,
  "фисташки, 1000": 37.99,
  "кедровый орех, 1000": 100.99,
  "курага, 1000": 6.59,
  "финики, 1000": 5.49,
  "творог 5%, 220": 1.65,
  "творог 1%, 220": 1.51,
  "творог 9%, 220": 1.74,
  "имбирь молотый, 20": 1.19,
  "сыр мягкий рикотта 40%, 500": 4.05,
  "консервированный ананас кольца, 565": 3.09,
  "консервированный ананас кусочки, 565": 2.59,
  "сухие быстродействующие дрожжи, 11": 0.43,
  "пахта, 1000": 0.89,
};

//СОБЫТИЕ НАЖАТИЯ КНОПКИ

function inputValueGo() {
  inputValue = input.value;
  // console.log(inputValue.length);
  if (inputValue.length == 0) {
    return;
  }
  array = processingTextAddArray(inputValue);
  resultSearch = saerchValueObject(namePriceProduct, array[0]);
  resultCalculation = Number(calculationPrice(array[1], resultSearch));
  console.log(resultCalculation + " " + typeof resultCalculation);
  savePriceOnArray.push(resultCalculation);
  saveGramOnArray.push(array[1]);

  totalPrice = Number(totalPrice) + Number(resultCalculation);
  totalPrice = totalPrice.toFixed(2);
  console.log(totalPrice + " " + typeof totalPrice);
  totalGram = Number(totalGram) + Number(array[1]);
  /*  if(totalPrice>0){
    totalPrice = Number(totalPrice.toFixed(2));
  } */

  addHtml(array[0], array[1], resultCalculation);
  addHtmlTotalPrice(totalPriceEl, totalPrice);
  addHtmlTotalGram(totalGramEl, totalGram);

  setTimeout(allElPp, 50);

  input.value = "";
}

function changeValArray(arr, val) {
  arr[val] = null;
  return arr;
}

document.onkeyup = function (e) {
  e = e || window.event;
  if (e.keyCode === 13) {
    inputValueGo();
  } else if (e.keyCode == 36) {
    clearListFunctionEvent();
  }
  // Отменяем действие браузера
  return false;
};

//С ФОРМЫ ЗНАЧЕНИЕ РАЗДЕЛЯЕТСЯ И ДОБАВЛЯЕТСЯ В МАССИВ
function processingTextAddArray(value) {
  let indx = value.indexOf(",", 1);
  let valueNameProduct = value.slice(0, indx).toLowerCase();

  let valueGram = value.slice(indx + 1, value.lenght).trim();
  if (valueNameProduct == "яица с1 (шт)") {
    valueGram *= 60;
  }
  if (isNaN(valueGram)) {
    return;
  }
  let arr = [];
  arr.push(valueNameProduct);
  arr.push(valueGram);
  return arr;
}

//ПОИСК ЗНАЧЕНИЕ В ОБЬЕКТЕ ПРОДУКТОВ
function saerchValueObject(obj, val) {
  let name;
  let resultSearch;
  for (let key in obj) {
    name = processingText(key);

    if (name == val) {
      resultSearch = key + "," + obj[key];
      // console.log(resultSearch );
      return String(resultSearch);
    }
  }
}
//ОТДЕЛЕНИЕ ИМЯ ПРОДУКТЫ В ОБЬКТЕ ОТ ОТСАЛЬНОГО
function processingText(value) {
  let indx = value.indexOf(",", 1);
  let valueNameProduct = value.slice(0, indx).trim().toLowerCase();
  return valueNameProduct;
}
//VAL1-ГРАММОВКА ПОЛЬЗОВАТЕЛЯ, VAL2 ДАННЫЕ С ОБЬЕКТА(ГРАММ, ЦЕНА)
function calculationPrice(val1, val2) {
  let gramUser = Number(val1);
  let indexComma1 = val2.indexOf(",", 1);
  let indexComma2 = val2.indexOf(",", indexComma1 + 1);
  let gramStok = Number(val2.slice(indexComma1 + 1, indexComma2).trim());
  let priceStok = Number(val2.slice(indexComma2 + 1, val2.lenght));
  let result = (gramUser * priceStok) / gramStok;
  console.log(gramUser, priceStok, result);
  return result.toFixed(2);
}

function addHtml(name, gram, price) {
  countClass++;
  let pName = document.createElement("p");
  pName.classList.add("p" + countClass);
  setTimeout(addClassAnimation, 11, pName);
  pName.innerHTML = name[0].toUpperCase() + name.slice(1);
  nameProductTextEl.prepend(pName);
  let pGram = document.createElement("p");
  pGram.classList.add("p" + countClass);
  setTimeout(addClassAnimation, 11, pGram);
  pGram.classList.add("gram" + countClass);
  pGram.innerHTML = gram;
  gramEl.prepend(pGram);
  let pPrice = document.createElement("p");
  pPrice.classList.add("p" + countClass);
  setTimeout(addClassAnimation, 11, pPrice);
  pPrice.classList.add("price" + countClass);
  pPrice.innerHTML = price;
  priceEl.prepend(pPrice);

  return;
}

function addClassAnimation(el) {
  el.classList.add("pp");
}

function addHtmlTotalPrice(el, val) {
  el.innerHTML = "";
  console.log(` цена ${val}`);
  el.innerHTML = val + "р";
}

function addHtmlTotalGram(el, val) {
  el.innerHTML = "";
  console.log(` граммы ${val}`);
  el.innerHTML = val + "г";
}

//ДОБАВЛЕНИЕ СОБЫТИЯ ВСЕМ НОВЫМ СТРОКАМ
function allElPp() {
  let pp = document.querySelectorAll(".pp");
  for (let i = 0; i < pp.length; i++) {
    pp[i].addEventListener("click", clickDelete);
  }
}
allElPp();

//СОБЫТИЕ УДЛАЕНИЕ СТРОКИ СПИСКА
function clickDelete() {
  let delPrice = searchEventCkick();
  totalPrice -= delPrice[0];
  totalGram -= Number(delPrice[1]);

  if (totalPrice > 0) {
    totalPrice = Number(totalPrice.toFixed(2));
  }
  addHtmlTotalPrice(totalPriceEl, totalPrice);
  addHtmlTotalGram(totalGramEl, totalGram);
}

//ОПРЕДЕЛНИЕ СТРОКИ СПИСКА ДЛЯ УДАЛЕНИЯ
function searchEventCkick() {
  let elEvent = event.target;
  let needClass = elEvent.classList[0];
  let allEventEl = document.querySelectorAll("." + needClass);
  //console.log(allEventEl);
  let decreaseSum = decreaseTotalPrice(needClass);
  let decreaseGram = decreaseTotalGram(needClass);
  let totalPriceGram = [];
  totalPriceGram.push(decreaseSum);
  totalPriceGram.push(decreaseGram);

  for (let i = 0; i < allEventEl.length; i++) {
    allEventEl[i].classList.add("delString");
  }

  setTimeout(animationDelEl, 700, allEventEl);
  return totalPriceGram;
}

//ПЕРЕРСЧЕТ ИТОГОВОЙ ЦЕНЫ ПОСЛЕ УДАЛЕНИЯ СТРОКИ СПИСКА
function decreaseTotalPrice(el) {
  let num = el.slice(1, el.lenght);
  let classPriceNeed = document.querySelector(".price" + num);
  // console.log(classPriceNeed);
  let contentPrice = classPriceNeed.textContent;
  return Number(contentPrice);
}

//ПЕРЕРСЧЕТ ИТОГОВОЙ ГРАММОВКИ ПОСЛЕ УДАЛЕНИЯ СТРОКИ СПИСКА
function decreaseTotalGram(el) {
  let num = el.slice(1, el.lenght);
  let classPriceNeed = document.querySelector(".gram" + num);
  //  console.log(classPriceNeed);
  let contentPrice = classPriceNeed.textContent;
  changeValArray(savePriceOnArray, num);
  changeValArray(saveGramOnArray, num);
  return Number(contentPrice);
}

function animationDelEl(el) {
  for (let i = 0; i < el.length; i++) {
    el[i].remove();
  }
}

//ОКНО ПОМОЩИ
let helpBtnEl = document.querySelector(".helpBtn");
let helpWindowEl = document.querySelector(".helpWindow");
let countHelp = 0;
helpBtnEl.addEventListener("click", openHelpWindowFunction);
helpWindowEl.addEventListener("click", closeHelpWindowFunction);
function openHelpWindowFunction() {
  countHelp++;
  helpWindowEl.classList.add("openHelpWindow");
  if (countHelp == 2) {
    helpWindowEl.classList.remove("openHelpWindow");
    countHelp = 0;
  }
}

function closeHelpWindowFunction() {
  helpWindowEl.classList.remove("openHelpWindow");
  countHelp = 0;
}

//ПЕРЕРАСЧЕТ ОТ РАЗМЕРА ФОРМЫ

let sizeForm = document.querySelector(".sizeFormCake");
let lastSizeFormCake = sizeForm.value;
sizeForm.addEventListener("change", eventRecalculation);
let stateSizeForm = true;

function eventRecalculation() {
  let nowSizeCake = sizeForm.value;
  //console.log(lastSizeFormCake,nowSizeCake);
  if (lastSizeFormCake > nowSizeCake) {
    stateSizeForm = false;
  } else {
    stateSizeForm = true;
  }

  let factor = calculationFactor(lastSizeFormCake, nowSizeCake);
  savePriceOnArray = recalculationValue(
    savePriceOnArray,
    factor,
    "price",
    stateSizeForm
  );
  saveGramOnArray = recalculationValue(
    saveGramOnArray,
    factor,
    "gram",
    stateSizeForm
  );

  console.log(savePriceOnArray);
  totalPrice = sumAfterRecaculation(savePriceOnArray);
  totalGram = sumAfterRecaculation(saveGramOnArray);

  if (totalPrice != undefined && totalGram != undefined) {
    totalPrice = totalPrice.toFixed(2);
    totalGram = totalGram.toFixed(0);
  } else {
    totalPrice = 0;
    totalGram = 0;
  }
  if (totalPrice != 0) {
    addHtmlTotalPrice(totalPriceEl, totalPrice);
    addHtmlTotalGram(totalGramEl, totalGram);
  }

  lastSizeFormCake = nowSizeCake;
}

//ОСНОВНОЙ ПЕРЕРАСЧЕТ КАЖДОГО ПУНКТА СПИСКА ПО ИЗМЕНЕНИЮ ФОРМЫ
function recalculationValue(arr, factor, name, boolValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != null && boolValue) {
      if (name == "gram") {
        arr[i] = (arr[i] * factor).toFixed(0);
        arr[i] = Number(arr[i]);
        // console.log(arr);
      } else {
        arr[i] = (arr[i] * factor).toFixed(2);
        arr[i] = Number(arr[i]);
      }

      searchTagRecalculation(i, name, arr[i]);
    } else if (arr[i] != null && !boolValue) {
      if (name == "gram") {
        arr[i] = (arr[i] / factor).toFixed(0);
        //  console.log(arr[i] , factor);
      } else {
        arr[i] = (arr[i] / factor).toFixed(2);
      }

      searchTagRecalculation(i, name, arr[i]);
    }
  }
  console.log(arr);
  return arr;
}

function searchTagRecalculation(index, name, value) {
  let nameClass = "." + name + index;
  let el = document.querySelector(nameClass);
  el.innerHTML = value;

  return;
}

//ПЕРЕРАСЧЕТ ИТОГОВОЙ СУММЫ ПОСЛЕ ИЗМЕНЕНИЯ РАЗМЕРА ФОРМЫ
function sumAfterRecaculation(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != null) {
      sum += Number(arr[i]);
    }
  }
  if (sum == 0) {
    return;
  } else {
    //  console.log(sum);

    return sum;
  }
}

//РАСЧЕТ КОЭФФИЦИЕНТА ДЛЯ РАЗМЕРА ФОРМЫ
function calculationFactor(valLastSize, valNowSize) {
  if (valNowSize > valLastSize) {
    return Math.pow(valNowSize, 2) / Math.pow(valLastSize, 2);
  } else {
    return Math.pow(valLastSize, 2) / Math.pow(valNowSize, 2);
  }
}

//ОЧИСКТА СПИСКА

let clearListElement = document.querySelector(".clearList");

clearListElement.addEventListener("click", clearListFunctionEvent);

function clearListFunctionEvent() {
  if (totalPrice == 0) {
    return;
  }
  clearListHTML();
  clearArray(savePriceOnArray);
  clearArray(saveGramOnArray);
  totalPrice = cleatTotalValue(totalPrice);
  totalGram = cleatTotalValue(totalGram);
  addHtmlTotalPrice(totalPriceEl, 0);
  addHtmlTotalPrice(totalGramEl, 0);
  weightCakeElement.value = "";
  countClass = -1;
}

function clearArray(arr) {
  for (let i = arr.length; i > 0; i--) {
    arr.pop();
  }
  return;
}

function clearListHTML() {
  let allElementList = document.querySelectorAll(".pp");

  for (let i = 0; i < allElementList.length; i++) {
    allElementList[i].classList.add("delString");

    setTimeout(() => {
      allElementList[i].remove();
    }, 700);
  }
  return;
}

function cleatTotalValue(val) {
  return (val = 0);
}

//ПОДБОР ПО ВЕСУ
let weightCakeElement = document.querySelector(".weightCake");
let valueWeightCake;
let lastWeightCake = 1;
let boolWeight = true;

weightCakeElement.addEventListener("blur", recalculationWeightEvent);

function recalculationWeightEvent() {
  valueWeightCake = weightCakeElement.value;
  if (valueWeightCake == 0 || isNaN(valueWeightCake)) {
    return;
  }

  if (lastWeightCake > valueWeightCake) {
    boolWeight = false;
  } else {
    boolWeight = true;
  }

  let factorWeight = factorWeightFunction(valueWeightCake, totalGram);

  savePriceOnArray = recalculationValue(
     savePriceOnArray,
    factorWeight,
    "price",
    boolWeight
  );
  saveGramOnArray = recalculationValue(
    saveGramOnArray,
    factorWeight,
    "gram",
    boolWeight
  );

  totalPrice = sumAfterRecaculation(savePriceOnArray);
  totalGram = sumAfterRecaculation(saveGramOnArray);

  if (totalPrice != undefined && totalGram != undefined) {
    totalPrice = totalPrice.toFixed(2);
    totalGram = totalGram.toFixed(0);
  } else {
    totalPrice = 0;
    totalGram = 0;
  }
  if (totalPrice != 0) {
    addHtmlTotalPrice(totalPriceEl, totalPrice);
    addHtmlTotalGram(totalGramEl, totalGram);
  }
}

//ОПРЕДЕЛЕНИЕ КОЭФФИЦИЕНТА МНОЖИТЕЛЯ ДЛЯ ПОДГОНКИ ПО ВЕСУ
function factorWeightFunction(valForm, totalWeight) {
  valueWeightCake = Number(valForm);
  return valueWeightCake / totalWeight;
}


//ОТКРЫТИЕ ОКНА ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ
let addFunctionButtonElement = document.querySelector(".addFunction");
let listAddFunctionElement = document.querySelector(".listAddFunction");
let addFunctionItemElement = document.querySelectorAll(".addFunctionItem");
let divWeightCakeElement = document.querySelector(".divWeightCake");
addFunctionButtonElement.addEventListener('click', openAddListFunctionEvent);
let countOpenAddFunction =0;
function openAddListFunctionEvent(){
  countOpenAddFunction++;
  if(countOpenAddFunction ==1){
    listAddFunctionElement.classList.add('openListAddFunction');
  }
  else if(countOpenAddFunction == 2){
    listAddFunctionElement.classList.remove('openListAddFunction');
    countOpenAddFunction =0;
  }
}


function addItemAddFuctionEvent(){

  let el = event.target;
  let foundEl = searchAddFunctionEl(el);
 let detectorClass= removeClassOpen(foundEl,"addMoreFunction");
  if(detectorClass){
    return;
 
  }
  else{
    addClassOpen(foundEl,"addMoreFunction");
  
  }
 
 
}

function addEventItemList(arr){
  for(let i =0; i < arr.length; i++ ){
    arr[i].addEventListener('click', addItemAddFuctionEvent);
  }
}

function addClassOpen(el, className){
  el.classList.add(className);
}

function removeClassOpen(el, className){
  if(el.classList[2] == className){
  el.classList.remove(className);
  return true
  }
  else{
    return false
  }
  ;
}

function searchAddFunctionEl(el){
  let className = el.classList[1];
  let searchEl = document.querySelector("." + className + "1");
   return searchEl;
}

addEventItemList(addFunctionItemElement);

