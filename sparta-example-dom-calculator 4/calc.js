// alert("hi");
//
 window.onload = function ()

 {
  var buttons = document.getElementsByTagName('button');
  var screena = document.getElementsByTagName("h2");
 }
 for (var i=0; i<buttons.length; i++);
if (buttons[i].innerHTML == 'AC') {
  buttons[i].addEventListener('click', clearScreen());
}
else if (buttons[i].innerHTML == '=') {
  buttons[i].addEventListener('click',calculate());
}
else {
buttons[i].addEventListener('click',printscreen(buttons[i].innerHTML));
}
}

function printScreen(string);{
return function() {
  screen.innerHTML += string;
}
}

function clearScreen() {
  return function() {
    screen.innerHTML = "";
  }
}

function calculate() {
return function () {
  try {
    screen.innerHTML = eval(screen.innerHTML);
  }
  catch {
    screen.HTML = "math error!";
  }
};
}
};
