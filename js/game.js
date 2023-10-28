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

let subChar = document.querySelector('.subSteper');
let mainChar = document.querySelector('.mainSteper')

document.querySelector('.gameDisplay').addEventListener('mousedown', (e) => {
    console.log("click")
    
    mainChar.src = '/imgFile/img/left/200/lisa200_left_step_main.png'
    setTimeout((e) => {
        mainChar.src = '/imgFile/img/left/200/lisa200_left_idle_main.png'
    }, 120);
});

function subStep() {
    
    let idleImgSrc = `/imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_left_idle_sub.png`;
    let stepImgSrc = `/imgFile/img/${sideController}/${sizeController}/lisa${sizeController}_left_step_sub${BGController}.png`;
    
    subChar.src = stepImgSrc;
    setTimeout((e) => {
        subChar.src = idleImgSrc;
    }, 120);
}

setInterval((e) => {
    subStep();
}, 308);