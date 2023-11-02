const LEFT = 'left';
const RIGHT = 'right';

const SIZE200 = 200;
const SIZE100 = 100;
const SIZE50 = 50;
const SIZE25 = 25;
const SIZE12 = 12;
const NOBG = '';
const SIZE12_1 = '_background1';
const SIZE12_2 = '_background2';
const SIZE12_3 = '_background3';
const SIZE12_4 = '_background4';

let sizeController = SIZE200;
let sideController = LEFT;
let BGController = NOBG;
let IsMouseDown = false;

let subIdleImgSrc = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_sub.png`;
let subStepImgSrc = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_sub${BGController}.png`;

let mainIdleImgSrc = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
let mainStepImgSrc = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;

const subChar = document.querySelector('.subSteper');
const mainChar = document.querySelector('.mainSteper');
const startBtn = document.querySelector('.startBtn');
const bgm = document.querySelector('.bgm');

let startTime = 0;
let beforeTime = 0;
let afterTime = 0;
let bitCounter = 0;

document.querySelector('.gameDisplay').addEventListener('mousedown', (e) => {
    IsMouseDown = true;
    
    mainStepImgSrc = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
    mainChar.src = mainStepImgSrc
    setTimeout((e) => {
        mainIdleImgSrc = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        mainChar.src = mainIdleImgSrc
    }, 120);
});
document.querySelector('.gameDisplay').addEventListener('mouseup', (e) => {
    IsMouseDown = false;
});

function subStep() {
    
    subIdleImgSrc = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_sub.png`;
    subStepImgSrc = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_sub${BGController}.png`;
    
    subChar.src = subStepImgSrc;
    setTimeout((e) => {
        subChar.src = subIdleImgSrc;
    }, 120);
}


startBtn.addEventListener('click', () => {
    let whiteStep;
    let blackStep;

    startTime = Date.now();
    afterTime = Date.now();

    bgm.play();
    setTimeout((e) => {
        whiteStep = setInterval((e) => {

            bitCounter = bitCounter + 1;
            LeftControl();

            if(sideController == LEFT){
                subStep();
            }
            
            beforeTime = afterTime;
            afterTime = Date.now();
            console.log(`diff = ${afterTime - beforeTime}, div = ${(beforeTime - startTime) / 368}, counter = ${bitCounter}`);
            
            if(bitCounter > 218) {
                clearInterval(whiteStep);
                clearInterval(blackStep);
            }

        }, 368);
    }, 5888);

    setTimeout((e) => {
        blackStep = setInterval((e) => {
            RightControl();
            if(sideController == RIGHT){
                subStep();
            }
        }, 368);
    }, 6072)

    startBtn.style.visibility = 'hidden';
});

function LeftControl() { // 218

    if(bitCounter == 33) {
        sideController = LEFT;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 65) {
        sideController = LEFT;
        sizeController = SIZE200;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 81) {
        sideController = LEFT;
        sizeController = SIZE50;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if( bitCounter == 97) {
        sideController = LEFT;
        sizeController = SIZE200;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 105 ) {
        sideController = LEFT;
        sizeController = SIZE50;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 113){
        sideController = LEFT;
        sizeController = SIZE12;
        BGController = SIZE12_1;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 125){
        sideController = LEFT;
        sizeController = SIZE50;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 126){
        sideController = LEFT;
        sizeController = SIZE100;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 127){
        sideController = LEFT;
        sizeController = SIZE200;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 128){
        sideController = LEFT;
        sizeController = SIZE200;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 129){
        sideController = LEFT;
        sizeController = SIZE25;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 143){
        sideController = LEFT;
        sizeController = SIZE200;
        BGController = NOBG;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }
    
    else if(bitCounter == 159){
        sideController = LEFT;
        sizeController = SIZE200;
        BGController = NOBG;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 160){
        sideController = LEFT;
        sizeController = SIZE100;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 161){
        sideController = LEFT;
        sizeController = SIZE50;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 162){
        sideController = LEFT;
        sizeController = SIZE25;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 163){
        sideController = LEFT;
        sizeController = SIZE12;
        BGController = SIZE12_2;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 167){
        sideController = LEFT;
        sizeController = SIZE200;
        BGController = NOBG;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 168){
        sideController = LEFT;
        sizeController = SIZE100;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 169){
        sideController = LEFT;
        sizeController = SIZE50;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 170){
        sideController = LEFT;
        sizeController = SIZE25;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 172){
        sideController = LEFT;
        sizeController = SIZE12;
        BGController = SIZE12_3;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }

    else if(bitCounter == 193){
        sideController = LEFT;
        sizeController = SIZE200;
        BGController = NOBG;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 194){
        sideController = LEFT;
        sizeController = SIZE100;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 195){
        sideController = LEFT;
        sizeController = SIZE25;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 196){
        sideController = LEFT;
        sizeController = SIZE12;
        BGController = SIZE12_4;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }

    else if(bitCounter == 201){
        sideController = LEFT;
        sizeController = SIZE200;
        BGController = NOBG;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 202){
        sideController = LEFT;
        sizeController = SIZE100;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 203){
        sideController = LEFT;
        sizeController = SIZE25;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 204){
        sideController = LEFT;
        sizeController = SIZE12;
        BGController = SIZE12_1;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }
    
}

function RightControl() {

    if(bitCounter == 16){
        sideController = RIGHT;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 48) {
        sideController = RIGHT;
        sizeController = SIZE100;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 72) {
        sideController = RIGHT;
        sizeController = SIZE100;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 88) {
        sideController = RIGHT;
        sizeController = SIZE100;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if( bitCounter == 100) {
        sideController = RIGHT;
        sizeController = SIZE100;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if( bitCounter == 108) {
        sideController = RIGHT;
        sizeController = SIZE25;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 116){
        sideController = RIGHT;
        sizeController = SIZE25;
        BGController = NOBG;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if(bitCounter == 128){
        sideController = LEFT;
        sizeController = SIZE100;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if (bitCounter == 136){
        sideController = RIGHT;
        sizeController = SIZE12;
        BGController = SIZE12_1;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if (bitCounter == 152){
        sideController = RIGHT;
        sizeController = SIZE12;
        BGController = SIZE12_2;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }

    else if (bitCounter == 176){
        sideController = RIGHT;
        sizeController = SIZE200;
        BGController = NOBG;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if (bitCounter == 177){
        sideController = RIGHT;
        sizeController = SIZE100;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if (bitCounter == 178){
        sideController = RIGHT;
        sizeController = SIZE25;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if (bitCounter == 179){
        sideController = RIGHT;
        sizeController = SIZE12;
        BGController = SIZE12_3;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if (bitCounter == 181){
        sideController = RIGHT;
        sizeController = SIZE12;
        BGController = SIZE12_4;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if (bitCounter == 182){
        sideController = RIGHT;
        sizeController = SIZE12;
        BGController = SIZE12_3;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if (bitCounter == 185){
        sideController = RIGHT;
        sizeController = SIZE200;
        BGController = NOBG;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if (bitCounter == 186){
        sideController = RIGHT;
        sizeController = SIZE100;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if (bitCounter == 187){
        sideController = RIGHT;
        sizeController = SIZE25;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }else if (bitCounter == 188){
        sideController = RIGHT;
        sizeController = SIZE12;
        BGController = SIZE12_1;
        if(IsMouseDown) {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_step_main.png`;
        }else {
            mainChar.src = `./imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_${sideController}_idle_main.png`;
        }
    }
    
}