// alert("hi");
// //

var display = document.getElementById('screen');

  var buttons = document.getElementsByTagName('button');

  var screen = document.querySelector("h1");

   for (var i=0; i<buttons.length; i++) {
    if (buttons[i].innerHTML === 'AC') {
      buttons[i].addEventListener('click', clearScreen());
    }
    else if (buttons[i].innerHTML === '=') {
      buttons[i].addEventListener('click', calculate());
    }
    else {
      buttons[i].addEventListener('click', printScreen(buttons[i].innerHTML));
    }
  }


  function printScreen(string){
    return function() {
      screen.innerHTML += string;
    }
  }

  function clearScreen() {
    return function() {
      screen.innerHTML = " ";
    }
  }
  function calculate() {
      return function () {

          screen.innerHTML = eval(screen.innerHTML);

        }


  }
