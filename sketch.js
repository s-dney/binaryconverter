var canvasx = 200;
var canvasy = 70;
var input, convertbutton, header, a;
var n1, n2, n3, n4, n5, n6, n7, n8, n9;
var numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var exponents = ["2⁰", "2¹", "2²", "2³", "2⁴", "2⁵", "2⁶", "2⁷", "2⁸", " "];
var powers = [256, 128, 64, 32, 16, 8, 4, 2, 1];
var button1, button2, button3, button4, button5, button6, button7, button8, button9;
var p1, p2, p3, p4, p5, p6, p7, p8, p9;

function setup() {

  //setting values for positioning...

   canvas = createCanvas(800, 170);
   canvas.position(canvasx, canvasy);

   buttonrowy = canvasy+5;

   exprowy = buttonrowy + 35;

   xrowy = buttonrowy + 15;

   powerrowy = buttonrowy + 78;

   powersize = "30px";

   plusrowy = powerrowy+10;

     textSize(30);
     noStroke();

   //making all the buttons and their little labels...

  button1x = canvasx+70;
    button1 = createButton(0);
    button1.mousePressed(changenumber1);
    button1.position(button1x, buttonrowy);
    n1 = createP(numbers[0]);
    n1.position(button1x-3, powerrowy);
    n1.style("font-size", powersize);
    n1.style("text-align", "center");

  button2x = canvasx+140;
    button2 = createButton(numbers[1]);
    button2.mousePressed(changenumber2);
    button2.position(button2x, buttonrowy);
    n2 = createP(numbers[1]);
    n2.position(button2x-3, powerrowy);
    n2.style("font-size", powersize);

  button3x = canvasx+210;
    button3 = createButton(numbers[2]);
    button3.mousePressed(changenumber3);
    button3.position(button3x, buttonrowy);
    n3 = createP(numbers[2]);
    n3.position(button3x-3, powerrowy);
    n3.style("font-size", powersize);

  button4x = canvasx+280;
    button4 = createButton(numbers[3]);
    button4.mousePressed(changenumber4);
    button4.position(button4x, buttonrowy);
    n4 = createP(numbers[3]);
    n4.position(button4x-3, powerrowy);
    n4.style("font-size", powersize);

  button5x = canvasx+350;
    button5 = createButton(numbers[4]);
    button5.mousePressed(changenumber5);
    button5.position(button5x, buttonrowy);
    n5 = createP(numbers[4]);
    n5.position(button5x-3, powerrowy);
    n5.style("font-size", powersize);

  button6x = canvasx+420;
    button6 = createButton(numbers[5]);
    button6.mousePressed(changenumber6);
    button6.position(button6x, buttonrowy);
    n6 = createP(numbers[5]);
    n6.position(button6x-3, powerrowy);
    n6.style("font-size", powersize);

  button7x = canvasx+490;
    button7 = createButton(numbers[6]);
    button7.mousePressed(changenumber7);
    button7.position(button7x, buttonrowy);
    n7 = createP(numbers[6]);
    n7.position(button7x-3, powerrowy);
    n7.style("font-size", powersize);

  button8x = canvasx+560;
    button8 = createButton(numbers[7]);
    button8.mousePressed(changenumber8);
    button8.position(button8x, buttonrowy);
    n8 = createP(numbers[7]);
    n8.position(button8x-3, powerrowy);
    n8.style("font-size", powersize);

  button9x = canvasx+630;
    button9 = createButton(numbers[8]);
    button9.mousePressed(changenumber9);
    button9.position(button9x, buttonrowy);
    n9 = createP(numbers[8]);
    n9.position(button9x-3, powerrowy);
    n9.style("font-size", powersize);

    //making the row of x's...

  for (i = 0; i<9; i++) {
    x = button1x-4;
    xp = createP("✕");
    xp.style("font-size", "20px");
    xp.position(x+(70*i), xrowy);
  }

  //making the row of exponents...

  for (i = 0; i<9; i++) {
    x = button1x-3;
    po = createP(exponents[8-i]);
    po.position(x+(70*i), exprowy);
  }

//making the row of arrows...

  for (i = 0; i<9; i++) {
    x = button1x-3;
    ar = createP("↓");
    ar.position(x+(70*i), exprowy+25);
  }

//making the row of plus signs...

  for (i=0; i<8; i++) {
    let x = button1x+30;
    pl = createP("+");
    pl.position(x+(71*i), plusrowy);
  }

  //making the little equals sign

  equals = createP("=");
  equals.position(860, plusrowy);

  //making the backwards converter...

  header = createElement('h2', "Can't figure it out? Enter a number in base 10 to convert to binary:");
  header.position(10, 550);
  input = createInput();
  input.position(10, 610);
  convertbutton = createButton('convert');
  convertbutton.style("font-size", "18px");
  convertbutton.position(input.x + input.width+4, input.y);
  convertbutton.mousePressed(convertnumber);
  a = createP(" ");

}

//the only thing in draw is the sum of the numbers, giving us our final answer.

function draw() {
  total = numbers[0]*256+numbers[1]*128+numbers[2]*64+numbers[3]*32+numbers[4]*16+numbers[5]*8+numbers[6]*4+numbers[7]*2+numbers[8]

text(total, 695, 142);
}

//the function for the converter box

function convertnumber() {
  num = parseInt(input.value(), 10);
  if (Number.isInteger(num) == true) {
    a.position(10, 620);
    a.html(num.toString(2));
    clear();
  }
  else {
    a.position(10, 620);
    a.html("ok that's not even a number. try again");
    clear();
  }
}

//now here are all the functions for each individual button. they change the number and make the little animation that floats up
//when you press it.

function changenumber1() {
  if (numbers[0] == 0) {
    numbers[0] = 1;
    button1.html(numbers[0]);
    p1 = createP(numbers[0]);
    p1.class('animated fadeOutUp');
    p1.position(button1x, buttonrowy-45);
    n1.position(button1x-17);
    n1.html(numbers[0]*powers[0]);
    clear();
  } else {
    numbers[0] = 0;
    button1.html(numbers[0]);
    p1 = createP(numbers[0]);
    p1.position(button1x, buttonrowy-45);
    p1.class('animated fadeOutUp');
    n1.position(button1x-3);
    n1.html(numbers[0]);
    clear();
  }
}

function changenumber2() {
  if (numbers[1] == 0) {
    numbers[1] = 1;
    button2.html(numbers[1]);
    p2 = createP(numbers[1]);
    p2.class('animated fadeOutUp');
    p2.position(button2x, buttonrowy-45);
    n2.position(button2x-17);
    n2.html(numbers[1]*128);
    clear();
  } else {
    numbers[1] = 0;
    button2.html(numbers[1]);
    p2 = createP(numbers[1]);
    p2.class('animated fadeOutUp');
    p2.position(button2x, buttonrowy-45);
    n2.position(button2x-3);
    n2.html(numbers[1]);
    clear();
  }
}

function changenumber3() {
  if (numbers[2] == 0) {
    numbers[2] = 1;
    button3.html(numbers[2]);
    p3 = createP(numbers[2]);
    p3.class('animated fadeOutUp');
    p3.position(button3x, buttonrowy-45);
    n3.html(numbers[2]*64);
    clear();
  } else {
    numbers[2] = 0;
    button3.html(numbers[2]);
    p3 = createP(numbers[2]);
    p3.class('animated fadeOutUp');
    p3.position(button3x, buttonrowy-45);
    n3.html(numbers[2]);
    clear();
  }
}

function changenumber4() {
  if (numbers[3] == 0) {
    numbers[3] = 1;
    button4.html(numbers[3]);
    p4 = createP(numbers[3]);
    p4.class('animated fadeOutUp');
    p4.position(button4x, buttonrowy-45);
    n4.html(numbers[3]*32)
    clear();
  } else {
    numbers[3] = 0;
    button4.html(numbers[3]);
    p4 = createP(numbers[3]);
    p4.class('animated fadeOutUp');
    p4.position(button4x, buttonrowy-45);
    n4.html(numbers[3]);
    clear();
  }
}

function changenumber5() {
  if (numbers[4] == 0) {
    numbers[4] = 1;
    button5.html(numbers[4]);
    p5 = createP(numbers[4]);
    p5.class('animated fadeOutUp');
    p5.position(button5x, buttonrowy-45);
    n5.html(numbers[4]*16);
    clear();
  } else {
    numbers[4] = 0;
    button5.html(numbers[4]);
    p5 = createP(numbers[4]);
    p5.class('animated fadeOutUp');
    p5.position(button5x, buttonrowy-45);
    n5.html(numbers[4]);
    clear();
  }
}

function changenumber6() {
  if (numbers[5] == 0) {
    numbers[5] = 1;
    button6.html(numbers[5]);
    p6 = createP(numbers[5]);
    p6.class('animated fadeOutUp');
    p6.position(button6x, buttonrowy-45);
    n6.html(numbers[5]*8)
    clear();
  } else {
    numbers[5] = 0;
    button6.html(numbers[5]);
    p6 = createP(numbers[5]);
    p6.class('animated fadeOutUp');
    p6.position(button6x, buttonrowy-45);
    n6.html(numbers[5]);
    clear();
  }
}

function changenumber7() {
  if (numbers[6] == 0) {
    numbers[6] = 1;
    button7.html(numbers[6]);
    p7 = createP(numbers[6]);
    p7.class('animated fadeOutUp');
    p7.position(button7x, buttonrowy-45);
    n7.html(numbers[6]*4)
    clear();
  } else {
    numbers[6] = 0;
    button7.html(numbers[6]);
    p7 = createP(numbers[6]);
    p7.class('animated fadeOutUp');
    p7.position(button7x, buttonrowy-45);
    n7.html(numbers[6]);
    clear();
  }
}

function changenumber8() {
  if (numbers[7] == 0) {
    numbers[7] = 1;
    button8.html(numbers[7]);
    p8 = createP(numbers[7]);
    p8.class('animated fadeOutUp');
    p8.position(button8x, buttonrowy-45);
    n8.html(numbers[7]*2);
    clear();
  } else {
    numbers[7] = 0;
    button8.html(numbers[7]);
    p8 = createP(numbers[7]);
    p8.class('animated fadeOutUp');
    p8.position(button8x, buttonrowy-45);
    n8.html(numbers[7]);
    clear();
  }
}

function changenumber9() {
  if (numbers[8] == 0) {
    numbers[8] = 1;
    button9.html(numbers[8]);
    p9 = createP(numbers[8]);
    p9.class('animated fadeOutUp');
    p9.position(button9x, buttonrowy-45);
    n9.html(numbers[8]);
    clear();
  } else {
    numbers[8] = 0;
    button9.html(numbers[8]);
    p9 = createP(numbers[8]);
    p9.class('animated fadeOutUp');
    p9.position(button9x, buttonrowy-45);
    n9.html(numbers[8]);
    clear();
  }
}
