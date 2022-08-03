var input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  input7,
  input8,
  input9,
  input10;
var answers;
var answersFiltered = [];
var randomAnswer;
var min, sec;

function getInputValue() {
  // Selecting the input element and get its value
  input1 = document.getElementById("myInput1").value;
  input2 = document.getElementById("myInput2").value;
  input3 = document.getElementById("myInput3").value;
  input4 = document.getElementById("myInput4").value;
  input5 = document.getElementById("myInput5").value;
  input6 = document.getElementById("myInput6").value;
  input7 = document.getElementById("myInput7").value;
  input8 = document.getElementById("myInput8").value;
  input9 = document.getElementById("myInput9").value;
  input10 = document.getElementById("myInput10").value;
  answers = [
    input1,
    input2,
    input3,
    input4,
    input5,
    input6,
    input7,
    input8,
    input9,
    input10,
  ];

  if (document.getElementById("myInput1").value != "") {
    answersFiltered.push(input1);
  }
  if (document.getElementById("myInput2").value != "") {
    answersFiltered.push(input2);
  }
  if (document.getElementById("myInput3").value != "") {
    answersFiltered.push(input3);
  }
  if (document.getElementById("myInput4").value != "") {
    answersFiltered.push(input4);
  }
  if (document.getElementById("myInput5").value != "") {
    answersFiltered.push(input5);
  }
  if (document.getElementById("myInput6").value != "") {
    answersFiltered.push(input6);
  }
  if (document.getElementById("myInput7").value != "") {
    answersFiltered.push(input7);
  }
  if (document.getElementById("myInput8").value != "") {
    answersFiltered.push(input8);
  }
  if (document.getElementById("myInput9").value != "") {
    answersFiltered.push(input9);
  }
  if (document.getElementById("myInput10").value != "") {
    answersFiltered.push(input10);
  }
}

function chooseFromList() {
  randomAnswer =
    answersFiltered[Math.floor(Math.random() * answersFiltered.length)];
  document.getElementById("random").innerHTML = randomAnswer;
  // alert(randomAnswer);
}

function clearText() {
  document.getElementById("myInput1").value = "";
  document.getElementById("myInput2").value = "";
  document.getElementById("myInput3").value = "";
  document.getElementById("myInput4").value = "";
  document.getElementById("myInput5").value = "";
  document.getElementById("myInput6").value = "";
  document.getElementById("myInput7").value = "";
  document.getElementById("myInput8").value = "";
  document.getElementById("myInput9").value = "";
  document.getElementById("myInput10").value = "";
}

function getList() {
  document.getElementById("list").innerHTML =
    "<strong>Today's List is</strong> " +
    "<br />" +
    input1 +
    "<br />" +
    input2 +
    "<br />" +
    input3 +
    "<br />" +
    input4 +
    "<br />" +
    input5 +
    "<br />" +
    input6 +
    "<br />" +
    input7 +
    "<br />" +
    input8 +
    "<br />" +
    input9 +
    "<br />" +
    input10;
}

function changeStyle() {
  var element = document.getElementById("div3");
  element.style.display = "initial";
}

function changeStyleBack() {
  var element = document.getElementById("div3");
  element.style.display = "none";
}

// function timer() {
//   min = document.getElementById("timer").value;
//   // var timer = setInterval(function () {
//   document.getElementById("mins").innerHTML = min + "mins remaining";
//   min--;
//   if (min < 0) {
// clearInterval(timer);
// } },
// 1000;);}
// min = document.getElementById("timer").value;

function timer() {
  sec = document.getElementById("timer").value;
  sec = setInterval(function () {
    document.getElementById("mins").innerHTML = sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
  // document.getElementById("mins").innerHTML = timer;
}

// dark mode
function dark() {
  var element = document.body;
  var div = document.getElementById("div1");
  element.classList.toggle("dark-mode");
  div.classList.toggle("dark-modeDIV");
}
