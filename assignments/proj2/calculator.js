// add event listener to all buttons
// parseInt(document.querySelector('.one')) --> 1

const buttons = document.querySelector('.buttons');
const result = document.querySelector('.result');
let curr = '0';
let currOp;
let prev;
let eqRepeat = false;

function buttonClicked(val) {
    if (Number.isInteger(parseInt(val))) {
        // number button clicked
        numberClick(val);
    } else {
        // non number button
        nonNumberClick(val);

    }
}

function numberClick(val) {
    if (curr === '0') {
        curr = val;
    } else {
        curr += val;
    }
    updateDisplay()
}

function nonNumberClick(val) {
    // val is still a string
    if  (val === 'C') {
        curr = '0';
        currOp = '';
        prev = NaN;
        eqRepeat = false;
    } else if (val === '←') {
        if (curr.length > 1) {
            curr = curr.substring(0, curr.length-1);
        } else {
            curr = '0';
        }
    } else if (val === '=' && currOp !== '' && !isNaN(prev)) {
        if (!eqRepeat) {
            calculate();
            eqRepeat = true;
        }
    } else {
        // operator is clicked
        currOp = val;
        prev = curr;
        curr = '0'
        eqRepeat = false;
    }

    updateDisplay();
}

function calculate() {
    switch(currOp) {
        case '+':
            curr = String(parseInt(prev) + parseInt(curr));
            break;
        
        case '-':
            curr = String(parseInt(prev) - parseInt(curr));
            break;
        
        case 'x':
            curr = String(parseInt(prev) * parseInt(curr));
            break;
        
        case '÷':
            curr = String(parseInt(prev) / parseInt(curr));
            break;
    }
}

function updateDisplay() {
    result.innerText = curr;
}





buttons.addEventListener('click', e => buttonClicked(e.target.innerText));
