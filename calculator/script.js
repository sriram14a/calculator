
//display section
const section = document.createElement('section')
section.classList.add('p-sm-5', 'd-sm-flex');

const division = document.createElement('div')
division.setAttribute('id', 'divn');
division.classList.add('divi');

const divisionDis = document.createElement('div')
divisionDis.setAttribute('id', 'disp');
divisionDis.classList.add('disp',);

const division1 = document.createElement('div')
division1.setAttribute('id', 'div1');
division1.innerText = 0;
division1.classList.add('disp1');

const division2 = document.createElement('div')
division2.setAttribute('id', 'div2');
division2.innerText = 0;
division2.classList.add('display2');

const division3 = document.createElement('div')
division3.setAttribute('id', 'div3');
division3.innerText = 0;
division3.classList.add('temp-disp');

const para = document.createElement("p");
const textNode = document.createTextNode("MATH makes your life add UP..!!!");
para.classList.add('text', 'text-center')
para.appendChild(textNode);


//Button section

const buttonsContainer = document.createElement('div')
buttonsContainer.classList.add('all-bttn');

const button1 = document.createElement('div');
button1.innerText = "AC"
button1.classList.add('bttn', 'AC');

const button2 = document.createElement('div');
button2.innerText = `Back`
button2.classList.add('bttn', 'back');

const button3 = document.createElement('div');
button3.innerText = "%"
button3.classList.add('bttn', 'oper');

const button4 = document.createElement('div');
button4.innerText = "/"
button4.classList.add('bttn', 'oper');

const buttonMp = document.createElement('div');
buttonMp.innerText = "M+"
buttonMp.classList.add('bttn', 'oper');

const buttonMm = document.createElement('div');
buttonMm.innerText = "M-"
buttonMm.classList.add('bttn', 'oper');

const buttonMc = document.createElement('div');
buttonMc.innerText = "Mc"
buttonMc.classList.add('bttn', 'oper');

const button5 = document.createElement('div');
button5.innerText = "X"
button5.classList.add('bttn', 'oper');

const button6 = document.createElement('div');
button6.innerText = "7"
button6.classList.add('bttn', 'num');

const button7 = document.createElement('div');
button7.innerText = "8"
button7.classList.add('bttn', 'num');

const button8 = document.createElement('div');
button8.innerText = "9"
button8.classList.add('bttn', 'num');

const button9 = document.createElement('div');
button9.innerText = "-"
button9.classList.add('bttn', 'oper');

const button10 = document.createElement('div');
button10.innerText = "4"
button10.classList.add('bttn', 'num');

const button11 = document.createElement('div');
button11.innerText = "5"
button11.classList.add('bttn', 'num');

const button12 = document.createElement('div');
button12.innerText = "6"
button12.classList.add('bttn', 'num');

const button13 = document.createElement('div');
button13.innerText = "+"
button13.classList.add('bttn', 'oper');

const button14 = document.createElement('div');
button14.innerText = "1"
button14.classList.add('bttn', 'num');

const button15 = document.createElement('div');
button15.innerText = "2"
button15.classList.add('bttn', 'num');

const button16 = document.createElement('div');
button16.innerText = "3"
button16.classList.add('bttn', 'num');

const button17 = document.createElement('div');
button17.innerText = "."
button17.classList.add('bttn', 'dot', 'num');

const button18 = document.createElement('div');
button18.innerText = "0"
button18.classList.add('bttn', 'num', 'zero');

const button19 = document.createElement('div');
button19.innerText = "="
button19.setAttribute = ('id', "btn19")
button19.classList.add('bttn', 'eq', 'equal');


divisionDis.append(division1, division2, division3);

buttonsContainer.append(button1, button2, button3, button4, buttonMp, buttonMm, buttonMc, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14, button15, button16, button17, button18, button19)

division.append(divisionDis, buttonsContainer);

section.append(division, para);

document.body.append(section);


//DOM 

const display1El = document.querySelector('.disp1');
const display2El = document.querySelector('.display2');
const tempEl = document.querySelector('.temp-disp');
const operationEl = document.querySelectorAll('.oper');
const numberEl = document.querySelectorAll('.num');
const clearEl = document.querySelector('.AC');
const backEl = document.querySelector('.back');
const equalEl = document.querySelector('.equal');


let display1 = '';
let display2 = '';
let tdisplay = '';
let dot = false;
let lastOper = '';

numberEl.forEach(num => {
    num.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !dot) {
            dot = true;
        } else if (e.target.innerText === '.' && dot) {
            return;
        }
        display2 += e.target.innerText;
        display2El.innerText = display2;
    })
})

operationEl.forEach(oper => {
    oper.addEventListener('click', (e) => {
        if (!display2) return;
        dot = false;
        const op = e.target.innerText;
        if (display1 && display2 && lastOper) {
            math();
        }
        else {
            result = parseFloat(display2);
        }
        cleardisp1(op);
        lastOper = op;
        console.log(result);
    })
})



//clearing display  and temporary display values
function cleardisp1(op = '') {
    if (op === 'M+') {
        display1 += display2 + ' ' + '+' + ' ';
        display1El.innerText = display1;
        display2 = '';
        display2El.innerText = display2;
        tempEl.innerText = result;
    }
    else if (op === 'M-') {
        display1 += display2 + ' ' + '-' + ' ';
        display1El.innerText = display1;
        display2 = '';
        display2El.innerText = display2;
        tempEl.innerText = result;
    }
    else if (op === 'Mc') {
        tempEl.innerText = '';
    }

    else {
        display1 += display2 + ' ' + op + ' ';
        display1El.innerText = display1;
        display2 = '';
        display2El.innerText = display2;
    }
}

// arithmatic operations
function math() {
    if (lastOper === 'X') {
        result = parseFloat(result) * parseFloat(display2);
    }
    else if (lastOper === '/') {
        result = parseFloat(result) / parseFloat(display2);
    }
    else if (lastOper === '+') {
        result = parseFloat(result) + parseFloat(display2);
    }
    else if (lastOper === '-') {
        result = parseFloat(result) - parseFloat(display2);
    }
    else if (lastOper === '%') {
        result = parseFloat(result) % parseFloat(display2);
    }
    else if (lastOper === 'M+') {
        result = parseFloat(result) + parseFloat(display2);
    }
    else if (lastOper === 'M-') {
        result = parseFloat(result) - parseFloat(display2);
    }
}

equalEl.addEventListener('click', (e) => {
    if (!display1 || !display2) {
        return;
    }
    math();
    cleardisp1();
    display2El.innerText = result;
    tempEl.innerText = '';
    display2 = result;
    display1 = '';
})

clearEl.addEventListener('click', (e) => {
    display1El.innerText = 0;
    display2El.innerText = 0;
    display1 = '';
    display2 = '';
    tempEl.innerText = 0;
})

backEl.addEventListener('click', (e) => {
    display2El.innerText = '';
    display2 = '';
})


//key board functions in calculator

window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ) {
        clickButtonEl(e.key)

    }
    else if (
        e.key === '+' ||
        e.key === '-' ||
        e.key === '*' ||
        e.key === '/' ||
        e.key === '%' ||
        e.key === 'M+' ||
        e.key === 'M-' ||
        e.key === 'Mc'
    ) {
        clickOperationEl(e.key);
    } else if (e.key === '*') {
        clickOperationEl('X')
    } else if (e.key === 'Enter' || e.key === '=') {
        clickequal(e.key);
    }
    else if (e.key === 'Backspace') {
        back();
    }
})

function clickButtonEl(key) {
    numberEl.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })
}
function clickOperationEl(key) {
    operationEl.forEach(button => {
        if (button.innerText === key) {
            button.click();
        };
    })
}

function clickequal() {
    equalEl.click();
}
function back() {
    backEl.click();
}