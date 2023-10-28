let PreloadFlag = false;
const IMG = {
    'left' : {
        'i012' : {
            'idle_main' : new Image(),
            'idle_sub' : new Image(),
            'bg1' : new Image(),
            'bg2' : new Image(),
            'bg3' : new Image(),
            'bg4' : new Image()
        },
        'i025' : {
            'idle_main' : new Image(),
            'idle_sub' : new Image(),
            'step_main' : new Image(),
            'step_sub' : new Image()
        },
        'i050' : {
            'idle_main' : new Image(),
            'idle_sub' : new Image(),
            'step_main' : new Image(),
            'step_sub' : new Image()
        },
        'i100' : {
            'idle_main' : new Image(),
            'idle_sub' : new Image(),
            'step_main' : new Image(),
            'step_sub' : new Image()
        },
        'i200' : {
            'idle_main' : new Image(),
            'idle_sub' : new Image(),
            'step_main' : new Image(),
            'step_sub' : new Image()
        }
    }, 
    'right' : {
        'i012' : {
            'idle_main' : new Image(),
            'idle_sub' : new Image(),
            'bg1' : new Image(),
            'bg2' : new Image(),
            'bg3' : new Image(),
            'bg4' : new Image()
        },
        'i025' : {
            'idle_main' : new Image(),
            'idle_sub' : new Image(),
            'step_main' : new Image(),
            'step_sub' : new Image()
        },
        'i050' : {
            'idle_main' : new Image(),
            'idle_sub' : new Image(),
            'step_main' : new Image(),
            'step_sub' : new Image()
        },
        'i100' : {
            'idle_main' : new Image(),
            'idle_sub' : new Image(),
            'step_main' : new Image(),
            'step_sub' : new Image()
        },
        'i200' : {
            'idle_main' : new Image(),
            'idle_sub' : new Image(),
            'step_main' : new Image(),
            'step_sub' : new Image()
        }
    },
    'background' : new Image()
};

function preload() {

    IMG.background.src = '/imgFile/img/background.png';

    IMG.left.i012.idle_main.src = '/imgFile/img/left/12/lisa12_left_idle_main.png';
    IMG.left.i012.idle_sub.src = '/imgFile/img/left/12/lisa12_left_idle_sub.png';
    IMG.left.i012.bg1.src = '/imgFile/img/left/12/lisa12_left_step_sub_background1.png';
    IMG.left.i012.bg2.src = '/imgFile/img/left/12/lisa12_left_step_sub_background2.png';
    IMG.left.i012.bg3.src = '/imgFile/img/left/12/lisa12_left_step_sub_background3.png';
    IMG.left.i012.bg4.src = '/imgFile/img/left/12/lisa12_left_step_sub_background4.png';

    IMG.left.i025.idle_main.src = '/imgFile/img/left/25/lisa25_left_idle_main.png';
    IMG.left.i025.idle_sub.src = '/imgFile/img/left/25/lisa25_left_idle_sub.png';
    IMG.left.i025.step_main.src = '/imgFile/img/left/25/lisa25_left_step_main.png';
    IMG.left.i025.step_sub.src = '/imgFile/img/left/25/lisa25_left_step_sub.png';

    IMG.left.i050.idle_main.src = '/imgFile/img/left/50/lisa50_left_idle_main.png';
    IMG.left.i050.idle_sub.src = '/imgFile/img/left/50/lisa50_left_idle_sub.png';
    IMG.left.i050.step_main.src = '/imgFile/img/left/50/lisa50_left_step_main.png';
    IMG.left.i050.step_sub.src = '/imgFile/img/left/50/lisa50_left_step_sub.png';

    IMG.left.i100.idle_main.src = '/imgFile/img/left/100/lisa100_left_idle_main.png';
    IMG.left.i100.idle_sub.src = '/imgFile/img/left/100/lisa100_left_idle_sub.png';
    IMG.left.i100.step_main.src = '/imgFile/img/left/100/lisa100_left_step_main.png';
    IMG.left.i100.step_sub.src = '/imgFile/img/left/100/lisa100_left_step_sub.png';

    IMG.left.i200.idle_main.src = '/imgFile/img/left/200/lisa200_left_idle_main.png';
    IMG.left.i200.idle_sub.src = '/imgFile/img/left/200/lisa200_left_idle_sub.png';
    IMG.left.i200.step_main.src = '/imgFile/img/left/200/lisa200_left_step_main.png';
    IMG.left.i200.step_sub.src = '/imgFile/img/left/200/lisa200_left_step_sub.png';

    IMG.left.i012.idle_main.src = '/imgFile/img/right/12/lisa12_right_idle_main.png';
    IMG.left.i012.idle_sub.src = '/imgFile/img/right/12/lisa12_right_idle_sub.png';
    IMG.left.i012.bg1.src = '/imgFile/img/right/12/lisa12_right_step_sub_background1.png';
    IMG.left.i012.bg2.src = '/imgFile/img/right/12/lisa12_right_step_sub_background2.png';
    IMG.left.i012.bg3.src = '/imgFile/img/right/12/lisa12_right_step_sub_background3.png';
    IMG.left.i012.bg4.src = '/imgFile/img/right/12/lisa12_right_step_sub_background4.png';

    IMG.right.i025.idle_main.src = '/imgFile/img/right/25/lisa25_right_idle_main.png';
    IMG.right.i025.idle_sub.src = '/imgFile/img/right/25/lisa25_right_idle_sub.png';
    IMG.right.i025.step_main.src = '/imgFile/img/right/25/lisa25_right_step_main.png';
    IMG.right.i025.step_sub.src = '/imgFile/img/right/25/lisa25_right_step_sub.png';

    IMG.right.i050.idle_main.src = '/imgFile/img/right/50/lisa50_right_idle_main.png';
    IMG.right.i050.idle_sub.src = '/imgFile/img/right/50/lisa50_right_idle_sub.png';
    IMG.right.i050.step_main.src = '/imgFile/img/right/50/lisa50_right_step_main.png';
    IMG.right.i050.step_sub.src = '/imgFile/img/right/50/lisa50_right_step_sub.png';

    IMG.right.i100.idle_main.src = '/imgFile/img/right/100/lisa100_right_idle_main.png';
    IMG.right.i100.idle_sub.src = '/imgFile/img/right/100/lisa100_right_idle_sub.png';
    IMG.right.i100.step_main.src = '/imgFile/img/right/100/lisa100_right_step_main.png';
    IMG.right.i100.step_sub.src = '/imgFile/img/right/100/lisa100_right_step_sub.png';

    IMG.right.i200.idle_main.src = '/imgFile/img/right/200/lisa200_right_idle_main.png';
    IMG.right.i200.idle_sub.src = '/imgFile/img/right/200/lisa200_right_idle_sub.png';
    IMG.right.i200.step_main.src = '/imgFile/img/right/200/lisa200_right_step_main.png';
    IMG.right.i200.step_sub.src = '/imgFile/img/right/200/lisa200_right_step_sub.png';

    IMG.right.i100.step_sub.onload = () => {
        console.log("preload finished");
        
    }

}

preload()


