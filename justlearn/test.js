//網頁版
var c;
var ctx;
var FRAME_RATE = 30;
var loop_function = empty;
var myVideo = document.createElement('video');
var stone_img = new Image();
var stone_flat = false;
//music
var music_improt = new Array('first');
//mouse
var flat = false;
var mouse = new Array();
var mouse_count = 0;
var MD_range;
var who = null;
//initimage
var myImages = new Array();//要匯入的圖
var myImages_link1 = new Array();//要顯示的圖
var myImages_link2 = new Array();//要替換的圖
var myImages_image = new Array();
var img_count = 0;
var page = 'firstpage';
//draw_text
var draw_text_flag = false;
var draw_text_ar = new Array();
//small ani
var small_ani_ar = new Array();
var small_ani_count = new Array();
var small_ani_flag = false;
var small_ani_chg_location = new Array();
var small_ani_run_count = new Array();
//create_player
var player_name = '';
var player_sex = 'G';
var player_hair = 1;
var player_hairC = 1;
var player_eye = 1;
//player
//learngoal_page
var learngoal_from;
var learngoal_page = 1;
var now_STAR = 0;
var now_open = 0;
var progress_ar = new Array(0, 20, 40, 60, 80, 100, 17, 33, 50, 67, 83, 100, 13, 25, 38, 50, 63, 75, 88, 100, 13, 25, 38, 50, 63, 75, 88, 100, 100, 11, 22, 33, 44, 55, 66, 77, 88,100,100);
var progress_count = new Array(1, 6, 12, 20, 28, 29, 39);
var progress_now = new Array(0, 0, 0, 0, 0, 0);
var now_lock_ar = new Array('empty');
//leaarning_content
var lc_STAR = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
//learning_rule_lock
var lc_lock_ar = new Array();
var choose_task_num = 0;
//answer_page
var correct_ans=new Array('A','B','A','C','B','B','A','B','B','A','C','B','B','A','A','A','A','B','C','B','B','B','C','A','C','B','A','A','D','A');
var player_ans=new Array();
var player_correct = new Array();
//TIMER
var timer_flag = false;
var timer = 0;
//lc_task
var map_data = new Array();
var limit1 = new Object({ limit_TF: false, num: null, node: null });
var limit2 = new Object({ limit_TF: false, ob_node:new Array(), ob_edge: new Array()});
var limit3 = new Object({ limit_TF: false, SE: null, S: null, E: null });
var playpage_node = new Array();
var playpage_edge = new Array();
var node_connect = new Object();
var edge_connect = new Object();
var stone_ar = new Array();
var title_path = '';
var graph_path = '';
var print_little_ar = new Array();
var move_who = '';
var MD_check_DX_num = 0;
var MD_check_DSE_num = 0;
var draw_VR_flat = false;
var draw_VR_path = new Array();

var play_start = null;
var play_end = null;
var next = new Array();
var new_next = new Array();
var step_ar = new Array();
var step_obj = new Object({ step: 0, step_no: null });
var step = 0;
var visit = new Array();
var draw_line_flat = false;
var draw_type = new Array();//false=circle,true=line
var circle_line = new Array();
var no1 = null;
var no2 = null;
var circle_count = null;

var node = new Array();
var edge = new Array();
var node_connect = new Object();
var edge_connect = new Object();
var circle_line = new Array

var draw_point_ar = new Array();
var draw_line_ar = new Array();
var draw_circle_ar = new Array();
var draw_lc_task_help_ans = new Array();
var draw_ans_flat = false;
//timer_int
var timer_int;
//task_help
var help_type_ar = new Array(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
    false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
    false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
    false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false);
var help_STAR = 0;
var board_flat = false;
var poto_painter = new Array();
var poto_state = 'pen';
var poto_flat = false;
//check_dead
var dead_node_conn = new Array();
var last_node = null;
//music
var loadCount = 0;
var itemsToLoad = 6;
var SOUND = "sound";
var MUSIC = "music";
var MAX_SOUNDS = 6;
var soundPool = new Array();
var music1;
var music2;
var music3;
var music4;
var music5;
var music6;
var music7;
var music8;
var music9;
var music10;
var music11;
var audioType;
var sound_d = false;
//please
var please;
//check_have_ans
var check_ans_ar = new Array();
//State define
var State;
var GS_GAME_READY = 0;
var GS_FIRSTPAGE = 1;
var GS_MOUSEDOWN = 2;
var GS_MOUSEUP = 3;
var GS_CREATE_PLAYER = 4;
var GS_WAIT_USER = 5;
var GS_BACKHOME = 6;
var GS_LEARNGOAL = 7;
var GS_LEARNING_RULE = 8;
var GS_MOVIE = 9;
var GS_TASK = 10;
var GS_ANSWER_PAGE = 11;
var GS_MOVIE_FINISH = 12;
var GS_MM_TASK = 13;
var GS_TASK_FINISH = 14;
var GS_TASK_HELP = 15;
var GS_LEARNING_LOGIC = 16;
var GS_LEARNING_X = 17;
var GS_LEARNING_SE = 18;
var GS_LEARNING_SUPER = 19;

function GameState(newState) {
    State = newState;
    switch (State) {
        case GS_GAME_READY:
            game_ready();
            break;
        case GS_FIRSTPAGE:
            firstpage();
            break;
        case GS_CREATE_PLAYER:
            now_open = 37;
            create_player();
            break;
        case GS_MOUSEDOWN:
            MD_switch_page();
            break;
        case GS_MOUSEUP:
            MU_switch_page();
            break;
        case GS_WAIT_USER:
            mouse_event_listener();
            break;
        case GS_BACKHOME:
            clear_all();
            break;
        case GS_LEARNGOAL:
            lg_lock();
            break;
        case GS_LEARNING_RULE:
            learning_rule_lock();
            break;
        case GS_MOVIE:
            lc_movie();
            break;
        case GS_TASK:
            lc_task_title();
            break;
		case GS_ANSWER_PAGE:
			answer_page();
			break;
        case GS_MOVIE_FINISH:
            movie_finish();
            break;
        case GS_MM_TASK:
            MM_task();
            break;
        case GS_TASK_FINISH:
            task_finish(timer);
            break;
        case GS_TASK_HELP:
            task_help();
            break;
        case GS_LEARNING_LOGIC:
            learning_logic_lock();
            break;
        case GS_LEARNING_X:
            learning_X_lock();
            break;
        case GS_LEARNING_SE:
            learning_SE_lock();
            break;
        case GS_LEARNING_SUPER:
            learning_SUPER_lock();
            break;
    }
}
var screen_h=1;
var screen_w=1;
function game_ready() {
    c = document.getElementById("Canvas");
    ctx = c.getContext("2d");
    //window.resizeTo(768, 1024); //指定預開啟的寬度與高度
    var intervalTime = 1000 / FRAME_RATE;
    setInterval(loop, intervalTime);
    stone_img.src = "img/lc_task_stone.png";
    music_ready();
}
function music_ready() {
    //improt music program
    music1 = document.createElement("audio");
    document.body.appendChild(music1);
    audioType = supportedAudioFormat(music1);
    music1.setAttribute("src", "music/first." + audioType);
    music1.addEventListener("canplaythrough", itemLoaded, false);

    music2 = document.createElement("audio");
    document.body.appendChild(music2);
    audioType = supportedAudioFormat(music2);
    music2.setAttribute("src", "music/game." + audioType);
    music2.addEventListener("canplaythrough", itemLoaded, false);

    music3 = document.createElement("audio");
    document.body.appendChild(music3);
    audioType = supportedAudioFormat(music3);
    music3.setAttribute("src", "music/put." + audioType);
    music3.addEventListener("canplaythrough", itemLoaded, false);

    music4 = document.createElement("audio");
    document.body.appendChild(music4);
    audioType = supportedAudioFormat(music4);
    music4.setAttribute("src", "music/select." + audioType);
    music4.addEventListener("canplaythrough", itemLoaded, false);

    music5 = document.createElement("audio");
    document.body.appendChild(music5);
    audioType = supportedAudioFormat(music5);
    music5.setAttribute("src", "music/walk." + audioType);
    music5.addEventListener("canplaythrough", itemLoaded, false);

    music6 = document.createElement("audio");
    document.body.appendChild(music6);
    audioType = supportedAudioFormat(music6);
    music6.setAttribute("src", "music/wrong." + audioType);
    music6.addEventListener("canplaythrough", itemLoaded, false);

    music7 = document.createElement("audio");
    document.body.appendChild(music7);
    audioType = supportedAudioFormat(music7);
    music7.setAttribute("src", "music/key_music." + audioType);
    music7.addEventListener("canplaythrough", itemLoaded, false);

    music8 = document.createElement("audio");
    document.body.appendChild(music8);
    audioType = supportedAudioFormat(music8);
    music8.setAttribute("src", "music/key2-2." + audioType);
    music8.addEventListener("canplaythrough", itemLoaded, false);

    music9 = document.createElement("audio");
    document.body.appendChild(music9);
    audioType = supportedAudioFormat(music9);
    music9.setAttribute("src", "music/key5-2." + audioType);
    music9.addEventListener("canplaythrough", itemLoaded, false);

    music10 = document.createElement("audio");
    document.body.appendChild(music10);
    audioType = supportedAudioFormat(music10);
    music10.setAttribute("src", "music/key5-3." + audioType);
    music10.addEventListener("canplaythrough", itemLoaded, false);

    music11 = document.createElement("audio");
    document.body.appendChild(music11);
    audioType = supportedAudioFormat(music11);
    music11.setAttribute("src", "music/key6-12." + audioType);
    music11.addEventListener("canplaythrough", itemLoaded, false);
    load_finish();
}
function load_finish() {
    GameState(GS_FIRSTPAGE);
}
function loop() {
    loop_function();
}
function empty() { }
function mouse_event_listener() {
    c.addEventListener("mousedown", mousedown_event, false);
    c.addEventListener("mousemove", mousemove_event, false);
    c.addEventListener("mouseup", mouseup_event, false);
    /*c.addEventListener("touchstart", mousedown_event, false);
    c.addEventListener("touchmove", mousemove_event, false);
    c.addEventListener("touchend", mouseup_event, false);*/

}
//mouse_func
function mousedown_event() {
    flat = true;
    if (flat == true) {
        ta.textContent = null;
        mouse.length = 0;
        mouse_count = 0;
        record_mouse_XY("mousedown");
        GameState(GS_MOUSEDOWN);
    }
}
function mousemove_event() {
    if (flat == true) {
        record_mouse_XY("mousemove");
    }
    if (page == 'lc_task') {
        GameState(GS_MM_TASK);
    } else if (page == 'task_help_board') {
        MM_board();
    } else if (page == 'lc_task_DX') {
        MM_DX();
    } else if (page == 'lc_task_DSE') {
        MM_DSE();
    }
}
function mouseup_event() {
    if (flat == true) {
        flat = false;
        record_mouse_XY("mouseup");
        GameState(GS_MOUSEUP);
    }
}
function record_mouse_XY(mouseType) {
    var mouseObj = new Object();
    /*    if (mouseType == 'mouseup') {
        //alert('fghh');
    }
    else {
        event.preventDefault();
        x = event.targetTouches[0].pageX;
        y = event.targetTouches[0].pageY;*/
    x = event.clientX;
    y = event.clientY;
    mouseObj.type = mouseType;
    mouseObj.x = x;
    mouseObj.y = y;
    mouse[mouse_count] = mouseObj;
    mouse_count++;
    //}
}
//看點到誰
function MD_range(image) {
    if (mouse[0].x >= myImages[image].left && mouse[0].x <= myImages[image].left + myImages[image].img.width * myImages[image].w
        && mouse[0].y >= myImages[image].top && mouse[0].y <= myImages[image].top + myImages[image].img.height * myImages[image].h) {
        return true;
    } else {
        return false;
    }
}
function MU_range(image) {
    if (mouse[mouse.length - 1].x >= myImages[image].left && mouse[mouse.length - 1].x <= myImages[image].left + myImages[image].img.width * myImages[image].w
       && mouse[mouse.length - 1].y >= myImages[image].top && mouse[mouse.length - 1].y <= myImages[image].top + myImages[image].img.height * myImages[image].h) {
        return true;
    } else {
        return false;
    }
}
//觸發滑鼠事件-分頁執行
function MD_switch_page() {
    switch (page) {
        case 'lc_task':
            MD_lc_task();
            break;
        case 'task_help_board':
            MD_board();
            break;
        case 'lc_task_DX':
            MD_DX();
            break;
        case 'lc_task_DSE':
            MD_DSE();
            break;
    }
    //顯示座標在ta
    for (var i = 0; i < mouse_count; i++) {
        ta.textContent += mouse[i].type + "XY:(" + mouse[i].x + "," + mouse[i].y + ")\n";
    }
}
function MU_switch_page()  {
    switch (page) {
        case 'firstpage':
            firstpage_btn();
            break;
        case 'create_player':
            creat_player_btn();
            break;
        case 'learn_goal':
            learning_goal_btn();
            break;
        case 'learning_rule':
            learning_rule_btn();
            break;
        case 'lc_movie':
            lc_movie_btn();
            break;
		case 'answer_page':
			answer_btn();
			break;
        case 'movie_finish':
            mf_btn();
            break;
        case 'lc_task':
            lc_task_btn();
            break;
        case 'task_finish':
            task_finish_btn();
            break;
        case 'task_help':
            task_help_btn();
            break;
        case 'task_help_prompt':
            help_prompt_btn();
            break;
        case 'task_help_ans':
            help_ans_btn();
            break;
        case 'task_help_board':
            MU_board();
            break;
        case 'learning_logic':
            learning_logic_btn();
            break;
        case 'learning_X':
            learning_X_btn();
            break;
        case 'learning_SE':
            learning_SE_btn();
            break;
        case 'learning_SUPER':
            learning_SUPER_btn();
            break;
        case 'lc_task_DX':
            lc_task_DX_btn();
            break;
        case 'lc_task_DSE':
            lc_task_DSE_btn();
            break;
    }
    for (var i = 0; i < mouse_count; i++) {
        ta.textContent += mouse[i].type + "XY:(" + mouse[i].x + "," + mouse[i].y + ")\n";
    }
}
function myImgObj(path, left, top, wp, hp) {
    var IMG = new Image();
    IMG.src = path;
    this.img = IMG;
    this.path = path;
    this.top = top;
    this.left = left;
    this.w = wp;
    this.h = hp;
}
function initimage() {
    for (var i = 0; i < myImages_image.length; i += 6) {
        myImages[myImages_image[i]] = new myImgObj(myImages_image[i + 1], myImages_image[i + 2], myImages_image[i + 3],
            myImages_image[i + 4], myImages_image[i + 5]);
    }
    onload_image();
}
function onload_image() {
    for (var i = 0; i < myImages_image.length; i += 6) {
        myImages[myImages_image[i]].img.onload = function () {
            img_count++;
            if (img_count == (myImages_image.length / 6)) {
                img_count = 0;
                draw();
            }
        };
    }
}
function draw() {
    for (var i = 0; i < myImages_link1.length; i++) {
        ctx.drawImage(myImages[myImages_link1[i]].img,
            myImages[myImages_link1[i]].left,
            myImages[myImages_link1[i]].top,
            myImages[myImages_link1[i]].img.width * myImages[myImages_link1[i]].w,
            myImages[myImages_link1[i]].img.height * myImages[myImages_link1[i]].h);
    }
    if (draw_text_flag == true && page != 'lc_task'&& page!='task_finish') {
        for (var i = 0; i < draw_text_ar.length; i += 6) {
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 1;
            ctx.font = draw_text_ar[i + 3];
            ctx.fillStyle = draw_text_ar[i + 4];
            ctx.fillText(draw_text_ar[i], draw_text_ar[i + 1], draw_text_ar[i + 2]);

            for (var j = 0; j < 4; j++) {
                ctx.font = draw_text_ar[i + 3];
                ctx.fillStyle = draw_text_ar[i + 5];
                ctx.strokeText(draw_text_ar[i], draw_text_ar[i + 1], draw_text_ar[i + 2]);
            }
        }
    }
    if (small_ani_flag == true) {
        for (var i = 0; i < small_ani_count.length-1/*2*/; i++) {
            myImages_link1.splice(small_ani_chg_location[i], 1, small_ani_ar[small_ani_run_count[i]]);
            small_ani_run_count[i] += 1;
            //alert('run_count:' + small_ani_run_count[i] + ',count:' + small_ani_count[i]);
            if (small_ani_run_count[i] == small_ani_count[i+1]) {
                small_ani_run_count[i] = small_ani_count[i];
                //alert("if:run count=0");
            }
        }
    }
    if (page == 'lc_task' || page == 'task_help_board') {
        /*for (var i = 0; i < stone_ar.length; i++) {
            ctx.drawImage(stone_img, map_data[9][stone_ar[i]].x - 29, map_data[9][stone_ar[i]].y - 45);
        }*/
        for (var i = 0; i < draw_line_ar.length; i++) {
            ctx.strokeStyle = "red";
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(draw_line_ar[i].startX, draw_line_ar[i].startY);
            ctx.lineTo(draw_line_ar[i].endX, draw_line_ar[i].endY);
            ctx.stroke();
            ctx.closePath();
        }
        if (draw_VR_flat == true && page == 'lc_task') {
            for (var i = 1; i < draw_VR_path.length; i++) {
                ctx.beginPath();
                ctx.strokeStyle = '#ffa760';
                ctx.lineWidth = 10;
                ctx.lineCap = 'round';
                ctx.moveTo(draw_VR_path[i].s_x, draw_VR_path[i].s_y);
                ctx.lineTo(draw_VR_path[i].x, draw_VR_path[i].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
        for (var i = 0; i < draw_circle_ar.length; i++) {
            ctx.strokeStyle = "red";
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.arc(draw_circle_ar[i].cX, draw_circle_ar[i].cY, draw_circle_ar[i].r, (Math.PI / 180) * draw_circle_ar[i].sa, (Math.PI / 180) * draw_circle_ar[i].ea, false);
            ctx.stroke();
            ctx.closePath();
        } for (var i = 0; i < draw_point_ar.length; i++) {
            ctx.beginPath();
            if (i == 0) {
                ctx.strokeStyle = '#ff0000';
            } else {
                ctx.strokeStyle = '#0000ff';
            }
            ctx.lineWidth = 30;
            ctx.arc(draw_point_ar[i].x, draw_point_ar[i].y, 10, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
            ctx.stroke();
            ctx.closePath();
        }
        for (var i = 0; i < step_ar.length; i++) {
            ctx.font = "32px Verdana";
            ctx.fillStyle = "#ffffff";
            if (step_ar[i].step <= 9) {
                ctx.fillText(String(step_ar[i].step), map_data[9][step_ar[i].step_no].x - 10, map_data[9][step_ar[i].step_no].y + 10);
            } else {
                ctx.fillText(String(step_ar[i].step), map_data[9][step_ar[i].step_no].x - 20, map_data[9][step_ar[i].step_no].y + 10);
            }
            ctx.font = "bold 32px Verdana";
            ctx.fillStyle = "#ffffff";
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 5;
            ctx.fillText(String(step_ar[i].step + 1) + '/' + map_data[9].length, 90, 980);
            ctx.lineWidth = 2;
            ctx.strokeText(String(step_ar[i].step + 1) + '/' + map_data[9].length, 90, 980);

        }
        if (step_ar.length != 0 && map_data[5].SE == null && map_data[5].S == null) {
            ctx.drawImage(myImages['mark_startend'].img, draw_point_ar[0].x - 10, draw_point_ar[0].y - 55,
                myImages['mark_startend'].img.width * myImages['mark_startend'].w,
                myImages['mark_startend'].img.height * myImages['mark_startend'].h);
        }
        if (draw_text_flag == true) {
            for (var i = 0; i < draw_text_ar.length; i += 6) {
                ctx.font = draw_text_ar[i + 3];
                ctx.fillStyle = draw_text_ar[i + 4];
                ctx.fillText(draw_text_ar[i], draw_text_ar[i + 1], draw_text_ar[i + 2]);
            }
        }
    }
    if (page == 'lc_task_DX' || page == 'lc_task' || page == 'task_help_board' || page == 'lc_task_DSE') {
        for (var i = 0; i < print_little_ar.length; i++) {
            ctx.drawImage(myImages[print_little_ar[i].name].img, print_little_ar[i].x, print_little_ar[i].y);
        }
    }
    if (page == 'task_finish') {
        if (draw_text_flag == true) {
            for (var i = 0; i < draw_text_ar.length; i += 6) {
                ctx.font = draw_text_ar[i + 3];
                ctx.fillStyle = draw_text_ar[i + 4];
                ctx.fillText(draw_text_ar[i], draw_text_ar[i + 1], draw_text_ar[i + 2]);
            }
        }
    } else if (page == 'task_help_board') {
        if (board_flat == true) {
            for (var i = 1; i < poto_painter.length; i++) {
                ctx.beginPath();
                ctx.strokeStyle = '#0000ff';
                ctx.lineWidth = 15;
                ctx.lineCap = 'round';
                ctx.moveTo(poto_painter[i].s_x, poto_painter[i].s_y);
                ctx.lineTo(poto_painter[i].x, poto_painter[i].y);
                //ctx.arc(poto_painter[i].x, poto_painter[i].y, 3, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
                ctx.stroke();
                ctx.closePath();
                /*ctx.beginPath();
                ctx.strokeStyle = '#ff0000';
                ctx.lineWidth = 6;
                ctx.arc(poto_painter[i].x, poto_painter[i].y, 3, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
                ctx.stroke();
                ctx.closePath();*/
            }
        }
    }
    if (draw_ans_flat == true) {
        
        for (var i = 0; i < draw_lc_task_help_ans.length-1; i++) {
            if (draw_lc_task_help_ans[i] > draw_lc_task_help_ans[i + 1]) {
                if (!check_circle_or_line(draw_lc_task_help_ans[i + 1], draw_lc_task_help_ans[i])) {
                    ctx.strokeStyle = "red";
                    ctx.lineWidth = 10;
                    ctx.lineCap = 'round';
                    ctx.beginPath();
                    ctx.arc(map_data[11][circle_count].cX, map_data[11][circle_count].cY, map_data[11][circle_count].r, (Math.PI / 180) * map_data[11][circle_count].sa, (Math.PI / 180) * map_data[11][circle_count].ea, false);
                    ctx.stroke();
                    ctx.closePath();
                } else {
                    ctx.strokeStyle = "red";
                    ctx.lineWidth = 10;
                    ctx.lineCap = 'round';
                    ctx.beginPath();
                    ctx.moveTo(map_data[9][draw_lc_task_help_ans[i]].x, map_data[9][draw_lc_task_help_ans[i]].y);
                    ctx.lineTo(map_data[9][draw_lc_task_help_ans[i + 1]].x, map_data[9][draw_lc_task_help_ans[i + 1]].y);
                    ctx.stroke();
                    ctx.closePath();
                }
            } else {
                if (!check_circle_or_line(draw_lc_task_help_ans[i], draw_lc_task_help_ans[i+1])) {
                    ctx.strokeStyle = "red";
                    ctx.lineWidth = 10;
                    ctx.lineCap = 'round';
                    ctx.beginPath();
                    ctx.arc(map_data[11][circle_count].cX, map_data[11][circle_count].cY, map_data[11][circle_count].r, (Math.PI / 180) * map_data[11][circle_count].sa, (Math.PI / 180) * map_data[11][circle_count].ea, false);
                    ctx.stroke();
                    ctx.closePath();
                } else {
                    //alert(draw_lc_task_help_ans);
                    ctx.strokeStyle = "red";
                    ctx.lineWidth = 10;
                    ctx.lineCap = 'round';
                    ctx.beginPath();
                    ctx.moveTo(map_data[9][draw_lc_task_help_ans[i]].x, map_data[9][draw_lc_task_help_ans[i]].y);
                    ctx.lineTo(map_data[9][draw_lc_task_help_ans[i + 1]].x, map_data[9][draw_lc_task_help_ans[i + 1]].y);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }
        for (var i = 0; i < draw_lc_task_help_ans.length; i++) {
            ctx.beginPath();
            ctx.strokeStyle = '#0000ff';
            ctx.lineWidth = 30;
            ctx.arc(map_data[9][draw_lc_task_help_ans[i]].x, map_data[9][draw_lc_task_help_ans[i]].y, 10, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
            ctx.stroke();
            ctx.closePath();
        }
        //alert(draw_lc_task_help_ans);
    }
    GameState(GS_WAIT_USER);
}
function changimg(link_ar) {
    for (var i = 0; i < link_ar.length; i += 2) {
        myImages_link1[link_ar[i]] = myImages_link2[link_ar[i + 1]];
    }
    draw();
}
function del_ar(ar,del_value) {
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == del_value) {
            ar.splice(i,1);
        }
    }
}
function small_ani() {
    for (var i = 0; i < small_ani_count.length-1; i++) {
        small_ani_run_count[i] = small_ani_count[i];
    }
}
function firstpage() {
    soundloopplay('first');
    page = 'firstpage';
    myImages_image = new Array('bg1', 'img/BG1.png', 0, 0, 1, 1, 'bg2', 'img/BG2.png', 0, 0, 1, 1, 'bg3', 'img/BG3.png', 0, 0, 1, 1, 'bg4', 'img/BG4.png', 0, 0, 1, 1, 'bg5', 'img/BG5.png', 0, 0, 1, 1, 'bg6', 'img/BG6.png', 0, 0, 1, 1, 'bg7', 'img/BG7.png', 0, 0, 1, 1,
        'fp_rainbow','img/fp_rainbow.png',15,0,1,1,'fp_BTN_newgame', 'img/fp_BTN_newgame.png', 155, 622, 1, 1,
        'fp_BTN_continue', 'img/fp_BTN_continue.png', 155, 814, 1, 1, 'fp_bigstar', 'img/fp_bigstar.png', 0, 400, 1, 1, 'fp_bigstar_2', 'img/fp_bigstar_2.png', 0, 400, 1, 1,
        'fp_smallstar', 'img/fp_smallstar.png', 107, 506, 1, 1,'fp_smallstar_2', 'img/fp_smallstar_2.png', 107, 506, 1, 1, 'fp_signtext_1', 'img/fp_signtext_1.png', 55, 99, 1, 1,
        'fp_signtext_2', 'img/fp_signtext_2.png', 55, 99, 1, 1, 'fp_facecycle', 'img/fp_facecycle.png', 566, 789, 1, 1,
        'fp_face_B1', 'img/fp_face_B1.png', 607, 806, 1, 1, 'fp_face_G1', 'img/fp_face_G1.png', 595, 812, 1, 1, 'empty', 'img/empty.png', 595, 812, 1, 1);
    input_face(3);
    myImages_link1 = new Array('bg1', 'fp_rainbow', 'fp_bigstar', 'fp_smallstar', 'fp_signtext_1', 'fp_BTN_newgame', 'fp_BTN_continue',
        'fp_facecycle','empty');
    myImages_link2 = new Array();
    if (player_name != '') {
        draw_text_flag = true;
        draw_text_ar = new Array("嗨!" + player_name, 480, 960, "bolder 24pt 微軟正黑體","#ffffff","#000000");
        myImages_link1.splice(8, 1, player_sex + '_' + player_hair + player_hairC + player_eye);
    }
    small_ani_flag = true;
    small_ani_ar = new Array('fp_signtext_1', 'fp_signtext_1', 'fp_signtext_1', 'fp_signtext_1', 'fp_signtext_1', 'fp_signtext_1', 'fp_signtext_2', 'fp_signtext_2', 'fp_signtext_2', 'fp_signtext_2', 'fp_signtext_2', 'fp_signtext_2',
        'fp_bigstar', 'fp_bigstar', 'fp_bigstar', 'fp_bigstar', 'fp_bigstar', 'fp_bigstar', 'fp_bigstar', 'fp_bigstar', 'fp_bigstar_2', 'fp_bigstar_2', 'fp_bigstar_2', 'fp_bigstar_2', 'fp_bigstar_2', 'fp_bigstar_2', 'fp_bigstar_2', 'fp_bigstar_2',
        'fp_smallstar','fp_smallstar','fp_smallstar','fp_smallstar','fp_smallstar','fp_smallstar','fp_smallstar','fp_smallstar_2','fp_smallstar_2','fp_smallstar_2','fp_smallstar_2','fp_smallstar_2','fp_smallstar_2','fp_smallstar_2',
        'bg1','bg1','bg1','bg1','bg2','bg2','bg2','bg2','bg3','bg3','bg3','bg3','bg4','bg4','bg4','bg4','bg5','bg5','bg5','bg5','bg6','bg6','bg6','bg6','bg7','bg7','bg7','bg7');
    small_ani_chg_location = new Array();
    small_ani_chg_location.push(4,2,3,0);
    small_ani_count = new Array();
    small_ani_count.push(0, 12, 28, 42,70);
    small_ani();
    loop_function = draw;
    initimage();
    GameState(GS_WAIT_USER);
}
function firstpage_btn() {
    if (MU_range('fp_BTN_newgame')) {
        soundreplay('select');
        small_ani_flag=false;
        player_name = '';
        myText.value = '小明';
        now_STAR = 0;
        player_sex = 'G';
        player_hair = 1;
        player_hairC = 1;
        player_eye = 1;
        progress_now = new Array();
        now_open = 0;
        now_lock_ar = new Array('empty');
        lc_STAR = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        lc_lock_ar = new Array();
        GameState(GS_CREATE_PLAYER);
    } else if (MU_range('fp_BTN_continue') && player_name != '') {
        soundreplay('select');
        //small_ani_flag=false;
        GameState(GS_LEARNGOAL);
    }
}
function create_player() {
    page = 'create_player';
    draw_text_flag = false;
    myImages_image = new Array('bg1', 'img/BG1.png', 0, 0, 1, 1, /*'bg2', 'img/BG2.png', 0, 0, 1, 1, 'bg3', 'img/BG3.png', 0, 0, 1, 1, 'bg4', 'img/BG4.png', 0, 0, 1, 1, 'bg5', 'img/BG5.png', 0, 0, 1, 1, 'bg6', 'img/BG6.png', 0, 0, 1, 1, 'bg7', 'img/BG7.png', 0, 0, 1, 1,*/
        'cp_space', 'img/cp_space.png', 60, 149, 1, 1, 'cp_create_p_text', 'img/cp_create_p_text.png', 19, 49, 1, 1, 'cp_p_name_text', 'img/cp_p_name_text.png', 122, 765, 1, 1,
        'cp_BTN_backhome', 'img/cp_BTN_backhome.png', 542, 38, 1, 1, 'cp_BTN_sure', 'img/cp_BTN_sure.png', 534, 824, 1, 1,'cp_shadow','img/cp_shadow.png',101,669,1,1,
        'cp_G_FACE_C', 'img/cp_G_FACE_C.png', 145, 272, 1, 1,  'cp_G_OTHER', 'img/cp_G_OTHER.png',121,298,1,1,
        'cp_G_EYE1', 'img/cp_G_EYE1.png', 159, 316, 1, 1,'cp_G_EYE2', 'img/cp_G_EYE2.png', 159, 316, 1, 1,'cp_G_EYE3', 'img/cp_G_EYE3.png', 159, 316, 1, 1,'cp_G_EYE4', 'img/cp_G_EYE4.png', 159, 316, 1, 1,
        'cp_G_H1C1', 'img/cp_G_H1C1.png', 132, 232, 1, 1,'cp_G_H1C2', 'img/cp_G_H1C2.png', 132, 232, 1, 1,
        'cp_G_H2C1', 'img/cp_G_H2C1.png', 138, 234, 1, 1,'cp_G_H2C2', 'img/cp_G_H2C2.png', 138, 234, 1, 1,
        'cp_G_H3C1', 'img/cp_G_H3C1.png', 112, 228, 1, 1,'cp_G_H3C2', 'img/cp_G_H3C2.png', 112, 228, 1, 1,
        'cp_B_FACE_C', 'img/cp_B_FACE_C.png', 140, 236, 1, 1, 'cp_B_OTHER', 'img/cp_B_OTHER.png',138,272,1,1,
        'cp_B_EYE1', 'img/cp_B_EYE1.png', 169, 294, 1, 1,'cp_B_EYE2', 'img/cp_B_EYE2.png', 169, 294, 1, 1,'cp_B_EYE3', 'img/cp_B_EYE3.png', 169, 294, 1, 1,'cp_B_EYE4', 'img/cp_B_EYE4.png', 169, 294, 1, 1,
        'cp_B_H1C1', 'img/cp_B_H1C1.png', 140, 211, 1, 1,'cp_B_H1C2', 'img/cp_B_H1C2.png', 140, 211, 1, 1,
        'cp_B_H2C1', 'img/cp_B_H2C1.png', 126, 219, 1, 1,'cp_B_H2C2', 'img/cp_B_H2C2.png', 126, 219, 1, 1,
        'cp_B_H3C1', 'img/cp_B_H3C1.png', 134, 211, 1, 1,'cp_B_H3C2', 'img/cp_B_H3C2.png', 134, 211, 1, 1,
        'cp_sextext', 'img/cp_sextext.png', 335, 297, 1, 1, 'cp_hairtext', 'img/cp_hairtext.png', 337, 394, 1, 1, 'cp_hairCtext', 'img/cp_hairCtext.png', 337, 498, 1, 1, 'cp_eyetext', 'img/cp_eyetext.png',338,606,1,1,
        'cp_BTN_girl','img/cp_girl.png',589,280,1,1,'cp_BTN_boy','img/cp_boy.png',480,280,1,1,
        'cp_hair_numframe','img/cp_numframe.png',522,382,1,1,'cp_hair_left','img/cp_left.png',470,394,1,1,'cp_hair_right','img/cp_right.png',627,394,1,1,'cp_hair_num1','img/cp_1.png',561,402,1,1,'cp_hair_num2','img/cp_2.png',558,401,1,1,'cp_hair_num3','img/cp_3.png',557,401,1,1,
        'cp_hairC_numframe','img/cp_numframe.png',521,485,1,1,'cp_hairC_left','img/cp_left.png',469,497,1,1,'cp_hairC_right','img/cp_right.png',626,497,1,1,'cp_hairC_num1','img/cp_1.png',560,505,1,1,'cp_hairC_num2','img/cp_2.png',557,504,1,1,
        'cp_eye_numframe','img/cp_numframe.png',521,593,1,1,'cp_eye_left','img/cp_left.png',469,605,1,1,'cp_eye_right','img/cp_right.png',626,605,1,1,'cp_eye_num1','img/cp_1.png',560,613,1,1,'cp_eye_num2','img/cp_2.png',557,612,1,1,'cp_eye_num3','img/cp_3.png',556,612,1,1,'cp_eye_num4','img/cp_4.png',555,613,1,1
        );
    myImages_link1 = new Array('bg1', 'cp_space', 'cp_create_p_text', 'cp_p_name_text', 'cp_BTN_backhome', 'cp_BTN_sure', 'cp_shadow',
        'cp_G_FACE_C', 'cp_G_EYE1', 'cp_G_H1C1', 'cp_G_OTHER',
        'cp_sextext', 'cp_hairtext', 'cp_hairCtext', 'cp_eyetext',
        'cp_BTN_girl', 'cp_BTN_boy', 
        'cp_hair_numframe', 'cp_hair_left', 'cp_hair_right', 
        'cp_hairC_numframe', 'cp_hairC_left', 'cp_hairC_right', 
        'cp_eye_numframe', 'cp_eye_left', 'cp_eye_right', 
        'cp_hair_num1','cp_hairC_num1','cp_eye_num1');
    myImages_link2 = new Array('cp_G_FACE_C', 'cp_G_EYE1', 'cp_G_H1C1', 'cp_G_OTHER', 'cp_B_FACE_C', 'cp_B_EYE1', 'cp_B_H1C1', 'cp_B_OTHER',
        'cp_hair_num1', 'cp_hair_num2', 'cp_hair_num3',
        'cp_hairC_num1', 'cp_hairC_num2',
        'cp_eye_num1', 'cp_eye_num2', 'cp_eye_num3', 'cp_eye_num4',
        'cp_G_H1C1', 'cp_G_H1C2', 'cp_G_H2C1', 'cp_G_H2C2', 'cp_G_H3C1', 'cp_G_H3C2',
        'cp_B_H1C1', 'cp_B_H1C2', 'cp_B_H2C1', 'cp_B_H2C2', 'cp_B_H3C1', 'cp_B_H3C2',
        'cp_G_EYE1','cp_G_EYE2','cp_G_EYE3','cp_G_EYE4',
        'cp_B_EYE1','cp_B_EYE2','cp_B_EYE3','cp_B_EYE4');
    small_ani_flag = false;
    /*small_ani_ar = new Array('bg1', 'bg1', 'bg1', 'bg1', 'bg2', 'bg2', 'bg2', 'bg2', 'bg3', 'bg3', 'bg3', 'bg3', 'bg4', 'bg4', 'bg4', 'bg4', 'bg5', 'bg5', 'bg5', 'bg5', 'bg6', 'bg6', 'bg6', 'bg6', 'bg7', 'bg7', 'bg7', 'bg7');
    small_ani_chg_location = new Array();
    small_ani_chg_location.push(0);
    small_ani_count = new Array();
    small_ani_count.push(0, 28);
    small_ani();*/
    initimage();
    var myText = document.getElementById("myText");
    myText.style.visibility = 'visible';
}
function creat_player_btn() {
    if (MU_range('cp_BTN_backhome')) {
        soundreplay('select');
        GameState(GS_BACKHOME);
    } else if (MU_range('cp_BTN_sure')) {
        soundreplay('select');
        player_name = myText.value;
        GameState(GS_LEARNGOAL);
    } else if (MU_range('cp_BTN_girl')) {
        soundreplay('select');
        player_sex = 'G';
        cp_BTN_sex();
    } else if (MU_range('cp_BTN_boy')) {
        soundreplay('select');
        player_sex = 'B';
        cp_BTN_sex();
    } else if (MU_range('cp_hair_left')) {
        soundreplay('select');
        cp_BTN_hair('L');
    } else if (MU_range('cp_hair_right')) {
        soundreplay('select');
        cp_BTN_hair('R');
    } else if (MU_range('cp_hairC_left')) {
        soundreplay('select');
        cp_BTN_hairC('L');
    } else if (MU_range('cp_hairC_right')) {
        soundreplay('select');
        cp_BTN_hairC('R');
    } else if (MU_range('cp_eye_left')) {
        soundreplay('select');
        cp_BTN_eye('L');
    } else if (MU_range('cp_eye_right')) {
        soundreplay('select');
        cp_BTN_eye('R');
    }
}
function cp_BTN_sex() {
    player_hair = 1;
    player_hairC = 1;
    player_eye = 1;
    myImages_link1.splice(7, 4, 'cp_' + player_sex + '_FACE_C', 'cp_' + player_sex + '_EYE1', 'cp_' + player_sex + '_H1C1', 'cp_' + player_sex + '_OTHER');
    myImages_link1.splice(26, 3, 'cp_hair_num1', 'cp_hairC_num1', 'cp_eye_num1');
}
function cp_BTN_hair(RL) {
    player_hairC = 1;
    if (RL == 'R') {
        if (player_hair != 3) {
            player_hair++;
        } else {
            player_hair = 1;
        }
        myImages_link1.splice(9, 1, 'cp_' + player_sex + '_H' + player_hair + 'C1');
        myImages_link1.splice(26, 2, 'cp_hair_num' + player_hair, 'cp_hairC_num1');
    } else if (RL == 'L') {
        if (player_hair != 1) {
            player_hair--;
        } else {
            player_hair = 3;
        }
        myImages_link1.splice(9, 1, 'cp_' + player_sex + '_H' + player_hair + 'C1');
        myImages_link1.splice(26, 2, 'cp_hair_num' + player_hair, 'cp_hairC_num1');
    }
}
function cp_BTN_hairC(RL) {
    if (RL == 'R') {
        if (player_hairC != 2) {
            player_hairC++;
        } else {
            player_hairC = 1;
        }
    } else if (RL == 'L') {
        if (player_hairC != 1) {
            player_hairC--;
        } else {
            player_hairC = 2;
        }
    }
    myImages_link1.splice(9, 1, 'cp_' + player_sex + '_H' + player_hair + 'C' + player_hairC);
    myImages_link1.splice(26, 2, 'cp_hair_num' + player_hair, 'cp_hairC_num' + player_hairC);
}
function cp_BTN_eye(RL) {
    if (RL == 'R') {
        if (player_eye != 4) {
            player_eye++;
        } else {
            player_eye = 1;
        }
    } else if (RL == 'L') {
        if (player_eye != 1) {
            player_eye--;
        } else {
            player_eye = 4;
        }
    }
    myImages_link1.splice(8, 1, 'cp_' + player_sex + '_EYE' + player_eye);
    myImages_link1.splice(28, 1, 'cp_eye_num' + player_eye);
}
function input_face(link1_num) {
    var player_data = player_sex + '_' + player_hair + player_hairC + player_eye;
    if (page == 'firstpage') {
        myImages_image.push(player_data, 'img/FACE/' + player_data + '.png', 588, 803, 0.65, 0.65);
    }
    else {
        myImages_image.push(player_data, 'img/FACE/' + player_data + '.png', 65, 57, 0.82, 0.82);
    }
    myImages_link1.splice(link1_num, 1, player_sex + '_' + player_hair + player_hairC + player_eye);
}
function learn_goal() {
    myText.style.visibility = 'hidden';
    learngoal_from = page;
    //if (page == 'firstpage' || page == 'create_player') {
        page = 'learn_goal';
    //}
    myImages_image = new Array('BG', 'img/BG.png', 0, 0, 1, 1, 'bg1', 'img/BG1.png', 0, 0, 1, 1, /*'bg2', 'img/BG2.png', 0, 0, 1, 1, 'bg3', 'img/BG3.png', 0, 0, 1, 1, 'bg4', 'img/BG4.png', 0, 0, 1, 1, 'bg5', 'img/BG5.png', 0, 0, 1, 1, 'bg6', 'img/BG6.png', 0, 0, 1, 1, 'bg7', 'img/BG7.png', 0, 0, 1, 1,*/
        'cp_space', 'img/cp_space.png', 60, 149, 1, 1,
        'lg_B1', 'img/lg_B1.png', 88, 59, 1, 1, 'lg_G1', 'img/lg_G1.png', 73, 66, 1, 1, 'lg_facecycle', 'img/lg_facecycle.png', 36, 37, 1, 1,
        'lg_learngoal_text', 'img/lg_learngoal_text.png', 235, 182, 1, 1, 'cp_BTN_backhome', 'img/cp_BTN_backhome.png', 542, 38, 1, 1,
        'lg_lock1', 'img/lg_lock.png', 99, 264, 1, 1, 'lg_lock2', 'img/lg_lock.png', 99, 464, 1, 1, 'lg_lock3', 'img/lg_lock.png', 99, 664, 1, 1, 'lg_lock4', 'img/lg_lock.png', 99, 264, 1, 1, 'lg_lock5', 'img/lg_lock.png', 99, 464, 1, 1, 'lg_lock6', 'img/lg_lock.png', 99, 664, 1, 1,
        'lg_logic', 'img/lg_logic.png', 99, 464, 1, 1, 'lg_rule', 'img/lg_rule.png', 99, 264, 1, 1,'lg_review','img/lg_review.png',99,464,1,1,
        'lg_startend', 'img/lg_startend.png', 99, 264, 1, 1, 'lg_X', 'img/lg_X.png', 99, 664, 1, 1,'lg_super','img/lg_super.png',99, 664, 1, 1,
        'lg_redline_1', 'img/lg_redline.png', 120, 354, progress_now[0] / 100, 1, 'lg_redline_2', 'img/lg_redline.png', 120, 554, progress_now[1] / 100, 1, 'lg_redline_3', 'img/lg_redline.png', 120, 754, progress_now[2] / 100, 1, 'lg_redline_4', 'img/lg_redline.png', 120, 354, progress_now[3] / 100, 1, 'lg_redline_5', 'img/lg_redline.png', 120, 554, progress_now[4] / 100, 1, 'lg_redline_6', 'img/lg_redline.png', 120, 754, progress_now[5] / 100, 1,
        'lg_star', 'img/lg_star.png', 508, 163, 1, 1, 'cp_BTN_left', 'img/BTN_left.png', 138, 864, 1, 1, 'cp_BTN_right', 'img/BTN_right.png', 595, 864, 1, 1,
        'empty', 'img/empty.png', 99, 464, 1, 1);
    myImages_link1 = new Array('bg1','cp_space','lg_facecycle','lg_G1','lg_learngoal_text','cp_BTN_backhome','cp_BTN_left', 'cp_BTN_right','lg_star',
        'lg_rule', 'lg_logic', 'lg_X', 'lg_redline_1', 'lg_redline_2', 'lg_redline_3', now_lock_ar[0], now_lock_ar[1], now_lock_ar[2]);
    myImages_link2 = new Array();
    input_face(3);
    draw_text_ar = new Array("嗨!" + player_name, 250, 130, "bolder 32pt 微軟正黑體", "#ffffff", "#000000", now_STAR + "顆", 590, 240, "bolder 36pt 微軟正黑體", "#ffffff", "#000000");
    draw_text_flag = true;
    small_ani_flag = false;
    /*small_ani_ar = new Array('bg1', 'bg1', 'bg1', 'bg1', 'bg2', 'bg2', 'bg2', 'bg2', 'bg3', 'bg3', 'bg3', 'bg3', 'bg4', 'bg4', 'bg4', 'bg4', 'bg5', 'bg5', 'bg5', 'bg5', 'bg6', 'bg6', 'bg6', 'bg6', 'bg7', 'bg7', 'bg7', 'bg7');
    small_ani_chg_location = new Array();
    small_ani_chg_location.push(0);
    small_ani_count = new Array();
    small_ani_count.push(0, 28);
    small_ani();*/
    lg_progress();
    initimage();
}
function lg_lock() {
    var temp = 0;
    now_lock_ar = new Array('empty');
    if (now_open >= 6) {
        for (var i = 0; i < progress_count.length; i++) {
            if (now_open >= progress_count[i + 1]) {
                progress_now[i] = 100;
                temp = i;
            }
        }
        progress_now[temp + 1] = progress_ar[now_open];
    } else {
        progress_now[0] = progress_ar[now_open];
    }
    for (var i = 1; i < progress_count.length - 1; i++) {
        if (now_lock_ar.length < 6) {
            if (now_open >= progress_count[i]-1) {
                now_lock_ar.push('empty');
            } else {
                now_lock_ar.push('lg_lock' + (i + 1));
            }
        }
    }
    now_STAR = 0;
    for (var i = 0; i < lc_STAR.length; i++) {
        now_STAR += lc_STAR[i];
    }
    now_STAR -= help_STAR;
    learn_goal();
}
function lg_progress() {
    for (var i = 0; i < progress_now.length; i++) {
        if (i ==0 && myImages_link1[9] == 'lg_rule') {
            draw_text_ar.push(progress_now[i] + '%', 565, 390 + 200 * i, "bolder 30pt 微軟正黑體", "#ffffff", "#000000");
        } else if ((i > 0 && i < 3 && myImages_link1[9] == 'lg_rule' && progress_now[i] != 0)) {
            draw_text_ar.push(progress_now[i] + '%', 565, 390 + 200 * i, "bolder 30pt 微軟正黑體", "#ffffff", "#000000");
        } else if (i >= 3 && myImages_link1[9] == 'lg_startend' && progress_now[i] != 0) {
            draw_text_ar.push(progress_now[i] + '%', 565, 390 + 200 * (i - 3), "bolder 30pt 微軟正黑體", "#ffffff", "#000000");
        }
    }
}
function learning_goal_btn() {
    if (MU_range('cp_BTN_backhome')) {
        soundreplay('select');
        GameState(GS_BACKHOME);
    } else if (MU_range('lg_facecycle')) {
        soundreplay('select');
        if (learngoal_from != 'firstpage' && learngoal_from != 'create_player') {
            if (learngoal_from == 'learning_rule') {
                GameState(GS_LEARNING_RULE);
            } else if (learngoal_from == 'lc_movie') {
                GameState(GS_MOVIE);
            } else if (learngoal_from == 'answer_page') {
                GameState(GS_ANSWER_PAGE);
            } else if (learngoal_from == 'lc_task') {
                GameState(GS_TASK);
            }
        }
    }
    else if (MU_range('cp_BTN_left') || MU_range('cp_BTN_right')) {
        soundreplay('select');
        //alert(now_lock_ar);
        if (myImages_link1[9] == 'lg_rule') {
            myImages_link1.splice(9, 6, 'lg_startend', 'lg_review', 'lg_super', 'lg_redline_4', 'lg_redline_5', 'lg_redline_6');
            myImages_link1.splice(15, 3, now_lock_ar[3], now_lock_ar[4], now_lock_ar[5]);
            draw_text_ar = new Array("嗨!" + myText.value, 250, 130, "bolder 48pt 微軟正黑體", "#ffffff", "#000000", now_STAR + "顆", 590, 240, "bolder 36pt 微軟正黑體", "#ffffff", "#000000");
            lg_progress();
        } else if (myImages_link1[9] == 'lg_startend') {
            myImages_link1.splice(9, 6, 'lg_rule', 'lg_logic', 'lg_X', 'lg_redline_1', 'lg_redline_2', 'lg_redline_3');
            myImages_link1.splice(15, 3, now_lock_ar[0], now_lock_ar[1], now_lock_ar[2]);
            draw_text_ar = new Array("嗨!" + myText.value, 250, 130, "bolder 48pt 微軟正黑體", "#ffffff", "#000000", now_STAR + "顆", 590, 240, "bolder 36pt 微軟正黑體", "#ffffff", "#000000");
            lg_progress();
        }
    } else if (MU_range('lg_rule') && myImages_link1[9] == 'lg_rule') {
        soundreplay('select');
        GameState(GS_LEARNING_RULE);
    } else if (MU_range('lg_logic') && myImages_link1[10] == 'lg_logic') {
        soundreplay('select');
        GameState(GS_LEARNING_LOGIC);
    } else if (MU_range('lg_X') && myImages_link1[11] == 'lg_X') {
        soundreplay('select');
        GameState(GS_LEARNING_X);
    } else if (MU_range('lg_startend') && myImages_link1[9] == 'lg_startend') {
        soundreplay('select');
        GameState(GS_LEARNING_SE);
    } else if (MU_range('lg_review') && myImages_link1[10] == 'lg_review') {
        soundreplay('select');
        choose_task_num = 28;
        GameState(GS_MOVIE);
    } else if (MU_range('lg_super') && myImages_link1[11] == 'lg_super') {
        soundreplay('select');
        GameState(GS_LEARNING_SUPER);
    }
}
function learning_rule_lock() {
    for (var i = 0; i < 5; i++) {
        if (i <= now_open) {
            lc_lock_ar[i] = 'empty';
        } else {
            lc_lock_ar[i] = 'lc_lock' + (i + 1);
        }
    }
    learning_rule();
}
function learning_logic_lock() {
    for (var i =0; i < 6; i++) {
        if (i <= now_open-5) {
            lc_lock_ar[i] = 'empty';
        } else {
            lc_lock_ar[i] = 'lc_lock' + (i + 1);
        }
    }
    learning_logic();
}
function learning_X_lock() {
    for (var i = 0; i < 8; i++) {
        if (i <= now_open - 11) {
            lc_lock_ar[i] = 'empty';
        } else {
            lc_lock_ar[i] = 'lc_lock' + (i + 1);
        }
    }
    learning_X();
}
function learning_SE_lock() {
    for (var i = 0; i < 8; i++) {
        if (i <= now_open - 19) {
            lc_lock_ar[i] = 'empty';
        } else {
            lc_lock_ar[i] = 'lc_lock' + (i + 1);
        }
    }
    learning_SE();
}
function learning_SUPER_lock() {
    for (var i = 0; i < 9; i++) {
        if (i <= now_open - 28) {
            lc_lock_ar[i] = 'empty';
        } else {
            lc_lock_ar[i] = 'lc_lock' + (i + 1);
        }
    }
    learning_SUPER();
}
function print_STAR(task_num_ar) {
    var big_temp = new Array();
    for (var i = 0; i < task_num_ar.length; i++) {
        var temp=new Array();
        for(var j=0;j<lc_STAR[task_num_ar[i] - 1];j++){
            temp.push('lc_STAR1_' + (i + 1) + '-' + (j + 1));
        }
        for (var j = 0; j < 3; j++) {
            if (temp.length < 3) {
                temp.push('empty');
            } else {
                break;
            }
        }
        big_temp.push(temp[0],temp[1],temp[2]);
    }
    for (var i = 0; i < 9; i++) {
        if (big_temp.length < 9) {
            big_temp.push('empty');
        }
        else {
            break;
        }
    }
    myImages_link1.splice(11, 9, big_temp[0], big_temp[1], big_temp[2], big_temp[3], big_temp[4], big_temp[5], big_temp[6], big_temp[7], big_temp[8]);
}
function learning_rule() {
    page = 'learning_rule';
    myImages_image = new Array('BG', 'img/BG.png', 0, 0, 1, 1, 'bg1', 'img/BG1.png', 0, 0, 1, 1, /*'bg2', 'img/BG2.png', 0, 0, 1, 1, 'bg3', 'img/BG3.png', 0, 0, 1, 1, 'bg4', 'img/BG4.png', 0, 0, 1, 1, 'bg5', 'img/BG5.png', 0, 0, 1, 1, 'bg6', 'img/BG6.png', 0, 0, 1, 1, 'bg7', 'img/BG7.png', 0, 0, 1, 1,*/
        'cp_space', 'img/cp_space.png', 60, 149, 1, 1, 'lg_facecycle', 'img/lg_facecycle.png', 36, 37, 1, 1, 'cp_BTN_backhome', 'img/cp_BTN_backhome.png', 542, 38, 1, 1,
        'cp_BTN_left', 'img/BTN_left.png', 138, 864, 1, 1, 'cp_BTN_right', 'img/BTN_right.png', 595, 864, 1, 1,
        'lc_title_rule', 'img/lc_title_rule.png', 123, 216, 1, 1,
        'lc_1_movie','img/lc_movie.png',92,351,1,1,'lc_2_task','img/lc_task.png',92,524,1,1,'lc_3_task','img/lc_task.png',92,697,1,1,
        'lc_4_task','img/lc_task.png',92,351,1,1,'lc_5_movie','img/lc_movie.png',92,524,1,1,'empty','img/empty.png',0,0,1,1,
        'lc_STAR1_1-1','img/lc_STAR1.png',300,354,1,1,'lc_STAR1_1-2','img/lc_STAR1.png',410,354,1,1,'lc_STAR1_1-3','img/lc_STAR1.png',520,354,1,1,
        'lc_STAR1_2-1', 'img/lc_STAR1.png', 300, 527, 1, 1, 'lc_STAR1_2-2', 'img/lc_STAR1.png', 410, 527, 1, 1, 'lc_STAR1_2-3', 'img/lc_STAR1.png', 520, 527, 1, 1,
        'lc_STAR1_3-1', 'img/lc_STAR1.png', 300, 700, 1, 1, 'lc_STAR1_3-2', 'img/lc_STAR1.png', 410, 700, 1, 1, 'lc_STAR1_3-3', 'img/lc_STAR1.png', 520, 700, 1, 1,
        'lc_lock1', 'img/lc_lock.png', 92, 351, 1, 1, 'lc_lock2', 'img/lc_lock.png', 92, 524, 1, 1, 'lc_lock3', 'img/lc_lock.png', 92, 697, 1, 1, 'lc_lock4', 'img/lc_lock.png', 92, 351, 1, 1, 'lc_lock5', 'img/lc_lock.png', 92, 524, 1, 1);
    myImages_link1 = new Array('bg1', 'cp_space', 'lg_facecycle', 'lg_G1', 'cp_BTN_backhome', 'cp_BTN_left', 'cp_BTN_right', 'lc_title_rule',
        'lc_1_movie', 'lc_2_task', 'lc_3_task',
        'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
        lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
    myImages_link2 = new Array('empty','lc_STAR1_1-1', 'lc_STAR1_1-2', 'lc_STAR1_1-3', 'lc_STAR1_2-1', 'lc_STAR1_2-2', 'lc_STAR1_2-3', 'lc_STAR1_3-1', 'lc_STAR1_3-2', 'lc_STAR1_3-3');
    input_face(3);
    print_STAR(task_num_ar = new Array(1, 2, 3));
    draw_text_ar = new Array("嗨!" + player_name, 250, 130, "bolder 32pt 微軟正黑體", "#ffffff", "#000000");
    /*small_ani_flag = true;
    small_ani_ar = new Array('bg1', 'bg1', 'bg1', 'bg1', 'bg2', 'bg2', 'bg2', 'bg2', 'bg3', 'bg3', 'bg3', 'bg3', 'bg4', 'bg4', 'bg4', 'bg4', 'bg5', 'bg5', 'bg5', 'bg5', 'bg6', 'bg6', 'bg6', 'bg6', 'bg7', 'bg7', 'bg7', 'bg7');
    small_ani_chg_location = new Array();
    small_ani_chg_location.push(0);
    small_ani_count = new Array();
    small_ani_count.push(0, 28);
    small_ani();*/
    initimage();
}
function learning_rule_btn() {
    if (MU_range('cp_BTN_backhome')) {
        soundreplay('select');
        GameState(GS_BACKHOME);
    } else if (MU_range('cp_BTN_left') || MU_range('cp_BTN_right')) {
        soundreplay('select');
        if (myImages_link1[8] == 'lc_1_movie') {
            myImages_link1.splice(8, 3, 'lc_4_task', 'lc_5_movie', 'empty');
            myImages_link1.splice(20, 3, lc_lock_ar[3], lc_lock_ar[4], 'empty');
            print_STAR(task_num_ar = new Array(4, 5));
        } else if (myImages_link1[8] == 'lc_4_task') {
            myImages_link1.splice(8, 3, 'lc_1_movie', 'lc_2_task', 'lc_3_task');
            myImages_link1.splice(20, 3, lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
            print_STAR(task_num_ar = new Array(1, 2, 3));
        }
    } else if (MU_range('lg_facecycle')) {
        soundreplay('select');
        GameState(GS_LEARNGOAL);
    }
    else if (MU_range('lc_1_movie') && lc_lock_ar[0] == 'empty' && myImages_link1[8] == 'lc_1_movie') {
        soundreplay('select');
        choose_task_num = 1;
        GameState(GS_MOVIE);
    } else if (MU_range('lc_2_task') && lc_lock_ar[1] == 'empty' && myImages_link1[9] == 'lc_2_task') {
        soundreplay('select');
        choose_task_num = 2;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_3_task') && lc_lock_ar[2] == 'empty' && myImages_link1[10] == 'lc_3_task') {
        soundreplay('select');
        choose_task_num = 3;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_4_task') && lc_lock_ar[3] == 'empty' && myImages_link1[8] == 'lc_4_task') {
        soundreplay('select');
        choose_task_num = 4;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_5_movie') && lc_lock_ar[4] == 'empty' && myImages_link1[9] == 'lc_5_movie') {
        soundreplay('select');
        choose_task_num = 5;
        GameState(GS_MOVIE);
    }
}
function learning_logic() {
    page = 'learning_logic';
    myImages_image = new Array('BG', 'img/BG.png', 0, 0, 1, 1, 'bg1', 'img/BG1.png', 0, 0, 1, 1,
        'cp_space', 'img/cp_space.png', 60, 149, 1, 1, 'lg_facecycle', 'img/lg_facecycle.png', 36, 37, 1, 1, 'cp_BTN_backhome', 'img/cp_BTN_backhome.png', 542, 38, 1, 1,
        'cp_BTN_left', 'img/BTN_left.png', 138, 864, 1, 1, 'cp_BTN_right', 'img/BTN_right.png', 595, 864, 1, 1,
        'lc_title_logic', 'img/lc_title_logic.png', 123, 216, 1, 1,'empty','img/empty.png',0,0,1,1,
        'lc_1_movie','img/lc_movie.png',92,351,1,1,'lc_2_task','img/lc_task.png',92,524,1,1,'lc_3_movie','img/lc_movie.png',92,697,1,1,
        'lc_4_task','img/lc_task.png',92,351,1,1,'lc_5_movie','img/lc_movie.png',92,524,1,1,'lc_6_task','img/lc_task.png',92,697,1,1,
        'lc_STAR1_1-1','img/lc_STAR1.png',300,354,1,1,'lc_STAR1_1-2','img/lc_STAR1.png',410,354,1,1,'lc_STAR1_1-3','img/lc_STAR1.png',520,354,1,1,
        'lc_STAR1_2-1', 'img/lc_STAR1.png', 300, 527, 1, 1, 'lc_STAR1_2-2', 'img/lc_STAR1.png', 410, 527, 1, 1, 'lc_STAR1_2-3', 'img/lc_STAR1.png', 520, 527, 1, 1,
        'lc_STAR1_3-1', 'img/lc_STAR1.png', 300, 700, 1, 1, 'lc_STAR1_3-2', 'img/lc_STAR1.png', 410, 700, 1, 1, 'lc_STAR1_3-3', 'img/lc_STAR1.png', 520, 700, 1, 1,
        'lc_lock1', 'img/lc_lock.png', 92, 351, 1, 1, 'lc_lock2', 'img/lc_lock.png', 92, 524, 1, 1, 'lc_lock3', 'img/lc_lock.png', 92, 697, 1, 1,
        'lc_lock4', 'img/lc_lock.png', 92, 351, 1, 1, 'lc_lock5', 'img/lc_lock.png', 92, 524, 1, 1, 'lc_lock6', 'img/lc_lock.png', 92, 697, 1, 1);
    myImages_link1 = new Array('bg1', 'cp_space', 'lg_facecycle', 'lg_G1', 'cp_BTN_backhome', 'cp_BTN_left', 'cp_BTN_right', 'lc_title_logic',
        'lc_1_movie', 'lc_2_task', 'lc_3_movie',
        'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
        lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
    myImages_link2 = new Array('empty','lc_STAR1_1-1', 'lc_STAR1_1-2', 'lc_STAR1_1-3', 'lc_STAR1_2-1', 'lc_STAR1_2-2', 'lc_STAR1_2-3', 'lc_STAR1_3-1', 'lc_STAR1_3-2', 'lc_STAR1_3-3');
    input_face(3);
    print_STAR(task_num_ar = new Array(6, 7, 8));
    draw_text_ar = new Array("嗨!" + player_name, 250, 130, "bolder 32pt 微軟正黑體", "#ffffff", "#000000");
    initimage();
}
function learning_logic_btn() {
    if (MU_range('cp_BTN_backhome')) {
        soundreplay('select');
        GameState(GS_BACKHOME);
    } else if (MU_range('cp_BTN_left')) {
        soundreplay('select');
        if (myImages_link1[8] == 'lc_1_movie') {
            myImages_link1.splice(8, 3, 'lc_4_task', 'lc_5_movie', 'lc_6_task');
            myImages_link1.splice(20, 3, lc_lock_ar[3], lc_lock_ar[4], lc_lock_ar[5]);
            print_STAR(task_num_ar = new Array(9, 10, 11));
        } else if (myImages_link1[8] == 'lc_4_task') {
            myImages_link1.splice(8, 3, 'lc_1_movie', 'lc_2_task', 'lc_3_movie');
            myImages_link1.splice(20, 3, lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
            print_STAR(task_num_ar = new Array(6, 7, 8));
        } 
    } else if (MU_range('cp_BTN_right')) {
        soundreplay('select');
        if (myImages_link1[8] == 'lc_1_movie') {
            myImages_link1.splice(8, 3, 'lc_4_task', 'lc_5_movie', 'lc_6_task');
            myImages_link1.splice(20, 3, lc_lock_ar[3], lc_lock_ar[4], lc_lock_ar[5]);
            print_STAR(task_num_ar = new Array(9, 10, 11));
        } else if (myImages_link1[8] == 'lc_4_task') {
            myImages_link1.splice(8, 3, 'lc_1_movie', 'lc_2_task', 'lc_3_movie');
            myImages_link1.splice(20, 3, lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
            print_STAR(task_num_ar = new Array(6, 7, 8));
        } 
    } else if (MU_range('lg_facecycle')) {
        soundreplay('select');
        GameState(GS_LEARNGOAL);
    }
    else if (MU_range('lc_1_movie') && lc_lock_ar[0] == 'empty' && myImages_link1[8] == 'lc_1_movie') {
        soundreplay('select');
        choose_task_num = 6;
        GameState(GS_MOVIE);
    } else if (MU_range('lc_2_task') && lc_lock_ar[1] == 'empty' && myImages_link1[9] == 'lc_2_task') {
        soundreplay('select');
        choose_task_num = 7;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_3_movie') && lc_lock_ar[2] == 'empty' && myImages_link1[10] == 'lc_3_movie') {
        soundreplay('select');
        choose_task_num = 8;
        GameState(GS_MOVIE);
    } else if (MU_range('lc_4_task') && lc_lock_ar[3] == 'empty' && myImages_link1[8] == 'lc_4_task') {
        soundreplay('select');
        choose_task_num = 9;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_5_movie') && lc_lock_ar[4] == 'empty' && myImages_link1[9] == 'lc_5_movie') {
        soundreplay('select');
        choose_task_num = 10;
        GameState(GS_MOVIE);
    } else if (MU_range('lc_6_task') && lc_lock_ar[5] == 'empty' && myImages_link1[10] == 'lc_6_task') {
        soundreplay('select');
        choose_task_num = 11;
        learning_page_clear();
        GameState(GS_TASK);
    } 
}
function learning_X() {
    page = 'learning_X';
    myImages_image = new Array('BG', 'img/BG.png', 0, 0, 1, 1, 'bg1', 'img/BG1.png', 0, 0, 1, 1,
        'cp_space', 'img/cp_space.png', 60, 149, 1, 1, 'lg_facecycle', 'img/lg_facecycle.png', 36, 37, 1, 1, 'cp_BTN_backhome', 'img/cp_BTN_backhome.png', 542, 38, 1, 1,
        'cp_BTN_left', 'img/BTN_left.png', 138, 864, 1, 1, 'cp_BTN_right', 'img/BTN_right.png', 595, 864, 1, 1,
        'lc_title_X', 'img/lc_title_X.png', 123, 216, 1, 1, 'empty', 'img/empty.png', 0, 0, 1, 1,
        'lc_1_movie', 'img/lc_movie.png', 92, 351, 1, 1, 'lc_2_task', 'img/lc_task.png', 92, 524, 1, 1, 'lc_3_task', 'img/lc_task.png', 92, 697, 1, 1,
        'lc_4_task', 'img/lc_task.png', 92, 351, 1, 1, 'lc_5_movie', 'img/lc_movie.png', 92, 524, 1, 1, 'lc_6_task', 'img/lc_task.png', 92, 697, 1, 1,
        'lc_7_task', 'img/lc_task.png', 92, 351, 1, 1, 'lc_8_task', 'img/lc_task.png', 92, 524, 1, 1,  'empty', 'img/empty.png', 0, 0, 1, 1,
        'lc_STAR1_1-1', 'img/lc_STAR1.png', 300, 354, 1, 1, 'lc_STAR1_1-2', 'img/lc_STAR1.png', 410, 354, 1, 1, 'lc_STAR1_1-3', 'img/lc_STAR1.png', 520, 354, 1, 1,
        'lc_STAR1_2-1', 'img/lc_STAR1.png', 300, 527, 1, 1, 'lc_STAR1_2-2', 'img/lc_STAR1.png', 410, 527, 1, 1, 'lc_STAR1_2-3', 'img/lc_STAR1.png', 520, 527, 1, 1,
        'lc_STAR1_3-1', 'img/lc_STAR1.png', 300, 700, 1, 1, 'lc_STAR1_3-2', 'img/lc_STAR1.png', 410, 700, 1, 1, 'lc_STAR1_3-3', 'img/lc_STAR1.png', 520, 700, 1, 1,
        'lc_lock1', 'img/lc_lock.png', 92, 351, 1, 1, 'lc_lock2', 'img/lc_lock.png', 92, 524, 1, 1, 'lc_lock3', 'img/lc_lock.png', 92, 697, 1, 1,
        'lc_lock4', 'img/lc_lock.png', 92, 351, 1, 1, 'lc_lock5', 'img/lc_lock.png', 92, 524, 1, 1, 'lc_lock6', 'img/lc_lock.png', 92, 697, 1, 1,
        'lc_lock7', 'img/lc_lock.png', 92, 351, 1, 1, 'lc_lock8', 'img/lc_lock.png', 92, 524, 1, 1);
    myImages_link1 = new Array('bg1', 'cp_space', 'lg_facecycle', 'lg_G1', 'cp_BTN_backhome', 'cp_BTN_left', 'cp_BTN_right', 'lc_title_X',
        'lc_1_movie', 'lc_2_task', 'lc_3_task',
        'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
        lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
    myImages_link2 = new Array('empty', 'lc_STAR1_1-1', 'lc_STAR1_1-2', 'lc_STAR1_1-3', 'lc_STAR1_2-1', 'lc_STAR1_2-2', 'lc_STAR1_2-3', 'lc_STAR1_3-1', 'lc_STAR1_3-2', 'lc_STAR1_3-3');
    input_face(3);
    print_STAR(task_num_ar = new Array(12, 13, 14));
    draw_text_ar = new Array("嗨!" + player_name, 250, 130, "bolder 32pt 微軟正黑體", "#ffffff", "#000000");
    initimage();
}
function learning_X_btn() {
    if (MU_range('cp_BTN_backhome')) {
        soundreplay('select');
        GameState(GS_BACKHOME);
    } else if (MU_range('cp_BTN_left')) {
        soundreplay('select');
        if (myImages_link1[8] == 'lc_1_movie') {
            myImages_link1.splice(8, 3, 'lc_7_task', 'lc_8_task', 'empty');
            myImages_link1.splice(20, 3, lc_lock_ar[6], lc_lock_ar[7], 'empty');
            print_STAR(task_num_ar = new Array(18, 19));
        } else if (myImages_link1[8] == 'lc_4_task') {
            myImages_link1.splice(8, 3, 'lc_1_movie', 'lc_2_task', 'lc_3_task');
            myImages_link1.splice(20, 3, lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
            print_STAR(task_num_ar = new Array(12, 13, 14));
        } else if (myImages_link1[8] == 'lc_7_task') {
            myImages_link1.splice(8, 3, 'lc_4_task', 'lc_5_movie', 'lc_6_task');
            myImages_link1.splice(20, 3, lc_lock_ar[3], lc_lock_ar[4], lc_lock_ar[5]);
            print_STAR(task_num_ar = new Array(15, 16, 17));
        } 
    } else if (MU_range('cp_BTN_right')) {
        soundreplay('select');
        if (myImages_link1[8] == 'lc_1_movie') {
            myImages_link1.splice(8, 3, 'lc_4_task', 'lc_5_movie', 'lc_6_task');
            myImages_link1.splice(20, 3, lc_lock_ar[3], lc_lock_ar[4], lc_lock_ar[5]);
            print_STAR(task_num_ar = new Array(15, 16, 17));
        } else if (myImages_link1[8] == 'lc_4_task') {
            myImages_link1.splice(8, 3, 'lc_7_task', 'lc_8_task', 'empty');
            myImages_link1.splice(20, 3, lc_lock_ar[6], lc_lock_ar[7], 'empty');
            print_STAR(task_num_ar = new Array(18, 19));
        } else if (myImages_link1[8] == 'lc_7_task') {
            myImages_link1.splice(8, 3, 'lc_1_movie', 'lc_2_task', 'lc_3_task');
            myImages_link1.splice(20, 3, lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
            print_STAR(task_num_ar = new Array(12, 13, 14));
        } 
    } else if (MU_range('lg_facecycle')) {
        soundreplay('select');
        GameState(GS_LEARNGOAL);
    }
    else if (MU_range('lc_1_movie') && lc_lock_ar[0] == 'empty' && myImages_link1[8] == 'lc_1_movie') {
        soundreplay('select');
        choose_task_num = 12;
        GameState(GS_MOVIE);
    } else if (MU_range('lc_2_task') && lc_lock_ar[1] == 'empty' && myImages_link1[9] == 'lc_2_task') {
        soundreplay('select');
        choose_task_num = 13;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_3_task') && lc_lock_ar[2] == 'empty' && myImages_link1[10] == 'lc_3_task') {
        soundreplay('select');
        choose_task_num = 14;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_4_task') && lc_lock_ar[3] == 'empty' && myImages_link1[8] == 'lc_4_task') {
        soundreplay('select');
        choose_task_num = 15;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_5_movie') && lc_lock_ar[4] == 'empty' && myImages_link1[9] == 'lc_5_movie') {
        soundreplay('select');
        choose_task_num = 16;
        GameState(GS_MOVIE);
    } else if (MU_range('lc_6_task') && lc_lock_ar[5] == 'empty' && myImages_link1[10] == 'lc_6_task') {
        soundreplay('select');
        choose_task_num = 17;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_7_task') && lc_lock_ar[6] == 'empty' && myImages_link1[8] == 'lc_7_task') {
        soundreplay('select');
        choose_task_num = 18;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_8_task') && lc_lock_ar[7] == 'empty' && myImages_link1[9] == 'lc_8_task') {
        soundreplay('select');
        choose_task_num = 19;
        learning_page_clear();
        GameState(GS_TASK);
    }
}
function learning_SE() {
    page = 'learning_SE';
    myImages_image = new Array('BG', 'img/BG.png', 0, 0, 1, 1, 'bg1', 'img/BG1.png', 0, 0, 1, 1,
        'cp_space', 'img/cp_space.png', 60, 149, 1, 1, 'lg_facecycle', 'img/lg_facecycle.png', 36, 37, 1, 1, 'cp_BTN_backhome', 'img/cp_BTN_backhome.png', 542, 38, 1, 1,
        'cp_BTN_left', 'img/BTN_left.png', 138, 864, 1, 1, 'cp_BTN_right', 'img/BTN_right.png', 595, 864, 1, 1,
        'lc_title_startend', 'img/lc_title_startend.png', 123, 216, 1, 1, 'empty', 'img/empty.png', 0, 0, 1, 1,
        'lc_1_movie', 'img/lc_movie.png', 92, 351, 1, 1, 'lc_2_task', 'img/lc_task.png', 92, 524, 1, 1, 'lc_3_task', 'img/lc_task.png', 92, 697, 1, 1,
        'lc_4_task', 'img/lc_task.png', 92, 351, 1, 1, 'lc_5_movie', 'img/lc_movie.png', 92, 524, 1, 1, 'lc_6_task', 'img/lc_task.png', 92, 697, 1, 1,
        'lc_7_task', 'img/lc_task.png', 92, 351, 1, 1, 'lc_8_task', 'img/lc_task.png', 92, 524, 1, 1,  'empty', 'img/empty.png', 0, 0, 1, 1,
        'lc_STAR1_1-1', 'img/lc_STAR1.png', 300, 354, 1, 1, 'lc_STAR1_1-2', 'img/lc_STAR1.png', 410, 354, 1, 1, 'lc_STAR1_1-3', 'img/lc_STAR1.png', 520, 354, 1, 1,
        'lc_STAR1_2-1', 'img/lc_STAR1.png', 300, 527, 1, 1, 'lc_STAR1_2-2', 'img/lc_STAR1.png', 410, 527, 1, 1, 'lc_STAR1_2-3', 'img/lc_STAR1.png', 520, 527, 1, 1,
        'lc_STAR1_3-1', 'img/lc_STAR1.png', 300, 700, 1, 1, 'lc_STAR1_3-2', 'img/lc_STAR1.png', 410, 700, 1, 1, 'lc_STAR1_3-3', 'img/lc_STAR1.png', 520, 700, 1, 1,
        'lc_lock1', 'img/lc_lock.png', 92, 351, 1, 1, 'lc_lock2', 'img/lc_lock.png', 92, 524, 1, 1, 'lc_lock3', 'img/lc_lock.png', 92, 697, 1, 1,
        'lc_lock4', 'img/lc_lock.png', 92, 351, 1, 1, 'lc_lock5', 'img/lc_lock.png', 92, 524, 1, 1, 'lc_lock6', 'img/lc_lock.png', 92, 697, 1, 1,
        'lc_lock7', 'img/lc_lock.png', 92, 351, 1, 1, 'lc_lock8', 'img/lc_lock.png', 92, 524, 1, 1);
    myImages_link1 = new Array('bg1', 'cp_space', 'lg_facecycle', 'lg_G1', 'cp_BTN_backhome', 'cp_BTN_left', 'cp_BTN_right', 'lc_title_startend',
        'lc_1_movie', 'lc_2_task', 'lc_3_task',
        'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
        lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
    myImages_link2 = new Array('empty', 'lc_STAR1_1-1', 'lc_STAR1_1-2', 'lc_STAR1_1-3', 'lc_STAR1_2-1', 'lc_STAR1_2-2', 'lc_STAR1_2-3', 'lc_STAR1_3-1', 'lc_STAR1_3-2', 'lc_STAR1_3-3');
    input_face(3);
    print_STAR(task_num_ar = new Array(20, 21, 22));
    draw_text_ar = new Array("嗨!" + player_name, 250, 130, "bolder 32pt 微軟正黑體", "#ffffff", "#000000");
    initimage();
}
function learning_SE_btn() {
    if (MU_range('cp_BTN_backhome')) {
        soundreplay('select');
        GameState(GS_BACKHOME);
    } else if (MU_range('cp_BTN_left')) {
        soundreplay('select');
        if (myImages_link1[8] == 'lc_1_movie') {
            myImages_link1.splice(8, 3, 'lc_7_task', 'lc_8_task', 'empty');
            myImages_link1.splice(20, 3, lc_lock_ar[6], lc_lock_ar[7], 'empty');
            print_STAR(task_num_ar = new Array(26, 27));
        } else if (myImages_link1[8] == 'lc_4_task') {
            myImages_link1.splice(8, 3, 'lc_1_movie', 'lc_2_task', 'lc_3_task');
            myImages_link1.splice(20, 3, lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
            print_STAR(task_num_ar = new Array(20, 21, 22));
        } else if (myImages_link1[8] == 'lc_7_task') {
            myImages_link1.splice(8, 3, 'lc_4_task', 'lc_5_movie', 'lc_6_task');
            myImages_link1.splice(20, 3, lc_lock_ar[3], lc_lock_ar[4], lc_lock_ar[5]);
            print_STAR(task_num_ar = new Array(23, 24, 25));
        } 
    } else if (MU_range('cp_BTN_right')) {
        soundreplay('select');
        if (myImages_link1[8] == 'lc_1_movie') {
            myImages_link1.splice(8, 3, 'lc_4_task', 'lc_5_movie', 'lc_6_task');
            myImages_link1.splice(20, 3, lc_lock_ar[3], lc_lock_ar[4], lc_lock_ar[5]);
            print_STAR(task_num_ar = new Array(23, 24, 25));
        } else if (myImages_link1[8] == 'lc_4_task') {
            myImages_link1.splice(8, 3, 'lc_7_task', 'lc_8_task', 'empty');
            myImages_link1.splice(20, 3, lc_lock_ar[6], lc_lock_ar[7], 'empty');
            print_STAR(task_num_ar = new Array(26, 27));
        } else if (myImages_link1[8] == 'lc_7_task') {
            myImages_link1.splice(8, 3, 'lc_1_movie', 'lc_2_task', 'lc_3_task');
            myImages_link1.splice(20, 3, lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
            print_STAR(task_num_ar = new Array(20, 21,22));
        } 
    } else if (MU_range('lg_facecycle')) {
        soundreplay('select');
        GameState(GS_LEARNGOAL);
    }
    else if (MU_range('lc_1_movie') && lc_lock_ar[0] == 'empty' && myImages_link1[8] == 'lc_1_movie') {
        soundreplay('select');
        choose_task_num = 20;
        GameState(GS_MOVIE);
    } else if (MU_range('lc_2_task') && lc_lock_ar[1] == 'empty' && myImages_link1[9] == 'lc_2_task') {
        soundreplay('select');
        choose_task_num = 21;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_3_task') && lc_lock_ar[2] == 'empty' && myImages_link1[10] == 'lc_3_task') {
        soundreplay('select');
        choose_task_num = 22;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_4_task') && lc_lock_ar[3] == 'empty' && myImages_link1[8] == 'lc_4_task') {
        soundreplay('select');
        choose_task_num = 23;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_5_movie') && lc_lock_ar[4] == 'empty' && myImages_link1[9] == 'lc_5_movie') {
        soundreplay('select');
        choose_task_num = 24;
        GameState(GS_MOVIE);
    } else if (MU_range('lc_6_task') && lc_lock_ar[5] == 'empty' && myImages_link1[10] == 'lc_6_task') {
        soundreplay('select');
        choose_task_num = 25;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_7_task') && lc_lock_ar[6] == 'empty' && myImages_link1[8] == 'lc_7_task') {
        soundreplay('select');
        choose_task_num = 26;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_8_task') && lc_lock_ar[7] == 'empty' && myImages_link1[9] == 'lc_8_task') {
        soundreplay('select');
        choose_task_num = 27;
        learning_page_clear();
        GameState(GS_TASK);
    }
}
function learning_SUPER() {
    page = 'learning_SUPER';
    myImages_image = new Array('BG', 'img/BG.png', 0, 0, 1, 1, 'bg1', 'img/BG1.png', 0, 0, 1, 1,
        'cp_space', 'img/cp_space.png', 60, 149, 1, 1, 'lg_facecycle', 'img/lg_facecycle.png', 36, 37, 1, 1, 'cp_BTN_backhome', 'img/cp_BTN_backhome.png', 542, 38, 1, 1,
        'cp_BTN_left', 'img/BTN_left.png', 138, 864, 1, 1, 'cp_BTN_right', 'img/BTN_right.png', 595, 864, 1, 1,
        'lc_title_super', 'img/lc_title_super.png', 123, 216, 1, 1, 'empty', 'img/empty.png', 0, 0, 1, 1,
        'lc_1_task', 'img/lc_task.png', 92, 351, 1, 1, 'lc_2_task', 'img/lc_task.png', 92, 524, 1, 1, 'lc_3_task', 'img/lc_task.png', 92, 697, 1, 1,
        'lc_4_task', 'img/lc_task.png', 92, 351, 1, 1, 'lc_5_task', 'img/lc_task.png', 92, 524, 1, 1, 'lc_6_task', 'img/lc_task.png', 92, 697, 1, 1,
        'lc_7_task', 'img/lc_task.png', 92, 351, 1, 1, 'lc_8_task', 'img/lc_task.png', 92, 524, 1, 1, 'lc_9_task', 'img/lc_task.png', 92, 697, 1, 1,
        'lc_STAR1_1-1', 'img/lc_STAR1.png', 300, 354, 1, 1, 'lc_STAR1_1-2', 'img/lc_STAR1.png', 410, 354, 1, 1, 'lc_STAR1_1-3', 'img/lc_STAR1.png', 520, 354, 1, 1,
        'lc_STAR1_2-1', 'img/lc_STAR1.png', 300, 527, 1, 1, 'lc_STAR1_2-2', 'img/lc_STAR1.png', 410, 527, 1, 1, 'lc_STAR1_2-3', 'img/lc_STAR1.png', 520, 527, 1, 1,
        'lc_STAR1_3-1', 'img/lc_STAR1.png', 300, 700, 1, 1, 'lc_STAR1_3-2', 'img/lc_STAR1.png', 410, 700, 1, 1, 'lc_STAR1_3-3', 'img/lc_STAR1.png', 520, 700, 1, 1,
        'lc_lock1', 'img/lc_lock.png', 92, 351, 1, 1, 'lc_lock2', 'img/lc_lock.png', 92, 524, 1, 1, 'lc_lock3', 'img/lc_lock.png', 92, 697, 1, 1,
        'lc_lock4', 'img/lc_lock.png', 92, 351, 1, 1, 'lc_lock5', 'img/lc_lock.png', 92, 524, 1, 1, 'lc_lock6', 'img/lc_lock.png', 92, 697, 1, 1,
        'lc_lock7', 'img/lc_lock.png', 92, 351, 1, 1, 'lc_lock8', 'img/lc_lock.png', 92, 524, 1, 1, 'lc_lock9', 'img/lc_lock.png', 92, 697, 1, 1);
    myImages_link1 = new Array('bg1', 'cp_space', 'lg_facecycle', 'lg_G1', 'cp_BTN_backhome', 'cp_BTN_left', 'cp_BTN_right', 'lc_title_super',
        'lc_1_task', 'lc_2_task', 'lc_3_task',
        'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',
        lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
    myImages_link2 = new Array('empty', 'lc_STAR1_1-1', 'lc_STAR1_1-2', 'lc_STAR1_1-3', 'lc_STAR1_2-1', 'lc_STAR1_2-2', 'lc_STAR1_2-3', 'lc_STAR1_3-1', 'lc_STAR1_3-2', 'lc_STAR1_3-3');
    input_face(3);
    print_STAR(task_num_ar = new Array(29, 30, 31));
    draw_text_ar = new Array("嗨!" + player_name, 250, 130, "bolder 32pt 微軟正黑體", "#ffffff", "#000000");
    initimage();
}
function learning_SUPER_btn() {
    if (MU_range('cp_BTN_backhome')) {
        soundreplay('select');
        GameState(GS_BACKHOME);
    } else if (MU_range('cp_BTN_left')) {
        
        soundreplay('select');
        if (myImages_link1[8] == 'lc_1_task') {
            myImages_link1.splice(8, 3, 'lc_7_task', 'lc_8_task', 'lc_9_task');
            myImages_link1.splice(20, 3, lc_lock_ar[6], lc_lock_ar[7], lc_lock_ar[8]);
            print_STAR(task_num_ar = new Array(35, 36,37));
        } else if (myImages_link1[8] == 'lc_4_task') {
            myImages_link1.splice(8, 3, 'lc_1_task', 'lc_2_task', 'lc_3_task');
            myImages_link1.splice(20, 3, lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
            print_STAR(task_num_ar = new Array(29, 30, 31));
        } else if (myImages_link1[8] == 'lc_7_task') {
            myImages_link1.splice(8, 3, 'lc_4_task', 'lc_5_task', 'lc_6_task');
            myImages_link1.splice(20, 3, lc_lock_ar[3], lc_lock_ar[4], lc_lock_ar[5]);
            print_STAR(task_num_ar = new Array(32, 33, 34));
        }
    } else if (MU_range('cp_BTN_right')) {
        soundreplay('select');
        if (myImages_link1[8] == 'lc_1_task') {
            myImages_link1.splice(8, 3, 'lc_4_task', 'lc_5_task', 'lc_6_task');
            myImages_link1.splice(20, 3, lc_lock_ar[3], lc_lock_ar[4], lc_lock_ar[5]);
            print_STAR(task_num_ar = new Array(32, 33, 34));
        } else if (myImages_link1[8] == 'lc_4_task') {
            myImages_link1.splice(8, 3, 'lc_7_task', 'lc_8_task', 'lc_9_task');
            myImages_link1.splice(20, 3, lc_lock_ar[6], lc_lock_ar[7], lc_lock_ar[8]);
            print_STAR(task_num_ar = new Array(35, 36,37));
        } else if (myImages_link1[8] == 'lc_7_task') {
            myImages_link1.splice(8, 3, 'lc_1_task', 'lc_2_task', 'lc_3_task');
            myImages_link1.splice(20, 3, lc_lock_ar[0], lc_lock_ar[1], lc_lock_ar[2]);
            print_STAR(task_num_ar = new Array(29, 30, 31));
        }
    } else if (MU_range('lg_facecycle')) {
        soundreplay('select');
        GameState(GS_LEARNGOAL);
    }
    else if (MU_range('lc_1_task') && lc_lock_ar[0] == 'empty' && myImages_link1[8] == 'lc_1_task') {
        soundreplay('select');
        choose_task_num = 29;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_2_task') && lc_lock_ar[1] == 'empty' && myImages_link1[9] == 'lc_2_task') {
        soundreplay('select');
        choose_task_num = 30;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_3_task') && lc_lock_ar[2] == 'empty' && myImages_link1[10] == 'lc_3_task') {
        soundreplay('select');
        choose_task_num = 31;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_4_task') && lc_lock_ar[3] == 'empty' && myImages_link1[8] == 'lc_4_task') {
        soundreplay('select');
        choose_task_num = 32;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_5_task') && lc_lock_ar[4] == 'empty' && myImages_link1[9] == 'lc_5_task') {
        soundreplay('select');
        choose_task_num = 33;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_6_task') && lc_lock_ar[5] == 'empty' && myImages_link1[10] == 'lc_6_task') {
        soundreplay('select');
        choose_task_num = 34;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_7_task') && lc_lock_ar[6] == 'empty' && myImages_link1[8] == 'lc_7_task') {
        soundreplay('select');
        choose_task_num = 35;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_8_task') && lc_lock_ar[7] == 'empty' && myImages_link1[9] == 'lc_8_task') {
        soundreplay('select');
        choose_task_num = 36;
        learning_page_clear();
        GameState(GS_TASK);
    } else if (MU_range('lc_9_task') && lc_lock_ar[8] == 'empty' && myImages_link1[10] == 'lc_9_task') {
        //alert("A");
        soundreplay('select');
        choose_task_num = 37;
        learning_page_clear();
        GameState(GS_TASK);
        
    }
}
function lc_movie_title() {
    if (choose_task_num == 1) {
        myImages_image.push('title','img/movie_title_rule.png',234,185,1,1);
    } else if (choose_task_num == 5) {
        myImages_image.push('title', 'img/movie_title_apply.png', 234, 185, 1, 1);
    } else if (choose_task_num == 6) {
        myImages_image.push('title', 'img/movie_title_follow.png', 234, 185, 1, 1, 'left_BTN', 'img/BTN_left.png', 138, 864, 1, 1, 'right_BTN', 'img/BTN_right.png', 595, 864, 1, 1);
    } else if (choose_task_num == 8) {
        myImages_image.push('title', 'img/movie_title_three.png', 234, 185, 1, 1);
    } else if (choose_task_num == 10) {
        myImages_image.push('title', 'img/movie_title_cycle.png', 234, 185, 1, 1);
    } else if (choose_task_num == 12) {
        myImages_image.push('title', 'img/movie_title_X.png', 234, 185, 1, 1);
    } else if (choose_task_num == 16) {
        myImages_image.push('title', 'img/movie_title_XX.png', 234, 185, 1, 1);
    } else if (choose_task_num == 20) {
        myImages_image.push('title', 'img/movie_title_startend.png', 234, 185, 1, 1);
    } else if (choose_task_num == 24) {
        myImages_image.push('title', 'img/movie_title_two.png', 234, 185, 1, 1);
    } else if (choose_task_num == 28) {
        myImages_image.push('title', 'img/movie_title_two.png', 234, 185, 1, 1);
    }
    myImages_link1.push('title');
}
function lc_movie() {
    soundpause('first');
    page = 'lc_movie';
    myImages_image = new Array('BG', 'img/BG.png', 0, 0, 1, 1, 'bg1', 'img/BG1.png', 0, 0, 1, 1, /*'bg2', 'img/BG2.png', 0, 0, 1, 1, 'bg3', 'img/BG3.png', 0, 0, 1, 1, 'bg4', 'img/BG4.png', 0, 0, 1, 1, 'bg5', 'img/BG5.png', 0, 0, 1, 1, 'bg6', 'img/BG6.png', 0, 0, 1, 1, 'bg7', 'img/BG7.png', 0, 0, 1, 1,*/
        'cp_space', 'img/cp_space.png', 60, 149, 1, 1, 'lg_facecycle', 'img/lg_facecycle.png', 36, 37, 1, 1, 'cp_BTN_backhome', 'img/cp_BTN_backhome.png', 542, 38, 1, 1,'movie_BTN_answer','img/movie_BTN_answer.png',259,38,1,1,'empty','img/empty.png',0,0,1,1);
    myImages_link1 = new Array('bg1', 'cp_space', 'lg_facecycle', 'lg_G1', 'cp_BTN_backhome', 'movie_BTN_answer','empty','empty');
    myImages_link2 = new Array();
    input_face(3);
    lc_movie_title();
    draw_text_ar = new Array();
    /*small_ani_flag = true;
    small_ani_ar = new Array('bg1', 'bg1', 'bg1', 'bg1', 'bg2', 'bg2', 'bg2', 'bg2', 'bg3', 'bg3', 'bg3', 'bg3', 'bg4', 'bg4', 'bg4', 'bg4', 'bg5', 'bg5', 'bg5', 'bg5', 'bg6', 'bg6', 'bg6', 'bg6', 'bg7', 'bg7', 'bg7', 'bg7');
    small_ani_chg_location = new Array();
    small_ani_chg_location.push(0);
    small_ani_count = new Array();
    small_ani_count.push(0, 28);
    small_ani();*/
    initimage();
    /*if (choose_task_num == 5) {
        alert("影片結束請按開始答題完成關卡!");
    }*/
    movie_src();
}
function movie_src() {
    if (choose_task_num == 1) {
        movieplay('movie/movie_rule.mp4');
    } else if (choose_task_num == 5) {
        movieplay('movie/movie1.mp4');
    } else if (choose_task_num == 6) {
        movieplay('movie/movie_3rule.mp4');
    } else if (choose_task_num == 8) {
        movieplay('movie/movie_THREE.mp4');
    } else if (choose_task_num == 10) {
        movieplay('movie/movie_cycle.mp4');
    } else if (choose_task_num == 12) {
        movieplay('movie/movie.mp4');
    } else if (choose_task_num == 16) {
        movieplay('movie/movie_X.mp4');
    } else if (choose_task_num == 20) {
        movieplay('movie/movie_se1.mp4');
    } else if (choose_task_num == 24) {
        movieplay('movie/movie_se2.mp4');
    } else if (choose_task_num == 28) {
        movieplay('movie/movie_se2.mp4');
        soundloopreplay('first');
        soundreplay('select');
        myVideo.pause();
        myVideo.style.display = 'none';
        GameState(GS_ANSWER_PAGE);
    }
}
function lc_movie_btn() {
    if (MU_range('cp_BTN_backhome')) {
        soundloopreplay('first');
        soundreplay('select');
        GameState(GS_BACKHOME);
        myVideo.pause();
        myVideo.style.display = 'none';
    } else if (MU_range('movie_BTN_answer')) {
        soundloopreplay('first');
        soundreplay('select');
        myVideo.pause();
        myVideo.style.display = 'none';
		GameState(GS_ANSWER_PAGE);
    } else if (MU_range('lg_facecycle')) {
        //soundloopreplay('first');
        soundreplay('select');
        myVideo.pause();
        myVideo.style.display = 'none';
        GameState(GS_LEARNGOAL);
    }
}
function print_Q() {
    if (choose_task_num == 1) {
        myImages_image.push('Q1', 'img/movie_Q01.png', 110, 169, 1, 1, 'Q2', 'img/empty.png', 0, 0, 1, 1, 'Q3', 'img/empty.png', 0, 0, 1, 1,
            'Q1_A', 'img/movie_Q01-1_A.png', 213, 330, 1, 1, 'Q1_B', 'img/movie_Q01-1_B.png', 213, 402, 1, 1, 'Q1_C', 'img/empty.png', 0, 0, 1, 1, 'Q1_D', 'img/empty.png', 0, 0, 1, 1,
            'Q2_A', 'img/movie_Q01-2_A.png', 213, 492, 1, 1, 'Q2_B', 'img/movie_Q01-2_B.png', 213, 564, 1, 1, 'Q2_C', 'img/empty.png', 0, 0, 1, 1, 'Q2_D', 'img/empty.png', 0, 0, 1, 1,
            'Q3_A', 'img/movie_Q01-3_A.png', 213, 657, 1, 1, 'Q3_B', 'img/movie_Q01-3_B.png', 213, 729, 1, 1, 'Q3_C', 'img/empty.png', 0, 0, 1, 1, 'Q3_D', 'img/empty.png', 0, 0, 1, 1,
		'hook_1-1_A', 'img/movie_hook.png', 212, 322, 1, 1, 'hook_1-1_B', 'img/movie_hook.png', 212, 396, 1, 1, 'hook_1-2_A', 'img/movie_hook.png', 212, 486, 1, 1, 'hook_1-2_B', 'img/movie_hook.png', 212, 556, 1, 1,
		'hook_1-3_A', 'img/movie_hook.png', 212, 652, 1, 1, 'hook_1-3_B', 'img/movie_hook.png', 212, 724, 1, 1, 'left_BTN', 'img/empty.png', 0, 0, 1, 1, 'right_BTN', 'img/empty.png', 0, 0, 1, 1);
        myImages_link1.push('Q1', 'Q2', 'Q3', 'Q1_A', 'Q1_B', 'Q1_C', 'Q1_D', 'Q2_A', 'Q2_B', 'Q2_C', 'Q2_D', 'Q3_A', 'Q3_B', 'Q3_C', 'Q3_D', 'empty', 'empty', 'empty')
    } else {
        if (choose_task_num == 5) {
            myImages_image.push('Q1', 'img/movie_Q02-1.png', 114, 169, 1, 1, 'Q2', 'img/movie_Q02-2.png', 113, 169, 1, 1, 'Q3', 'img/movie_Q02-3.png', 113, 169, 1, 1,
                'Q1_A', 'img/movie_Q02-1_A.png', 172, 447, 1, 1, 'Q1_B', 'img/movie_Q02-1_B.png', 172, 542, 1, 1, 'Q1_C', 'img/movie_Q02-1_C.png', 172, 631, 1, 1, 'Q1_D', 'img/empty.png', 0, 0, 1, 1,
                'Q2_A', 'img/movie_Q02-2_A.png', 141, 417, 1, 1, 'Q2_B', 'img/movie_Q02-2_B.png', 141, 618, 1, 1, 'Q2_C', 'img/empty.png', 0, 0, 1, 1, 'Q2_D', 'img/empty.png', 0, 0, 1, 1,
                'Q3_A', 'img/movie_Q02-3_A.png', 141, 478, 1, 1, 'Q3_B', 'img/movie_Q02-3_B.png', 141, 618, 1, 1, 'Q3_C', 'img/empty.png', 0, 0, 1, 1, 'Q3_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ1_A', 'img/movie_select.png', 182, 457, 1, 1, 'selectQ1_B', 'img/movie_select.png', 182, 551, 1, 1,'selectQ1_C', 'img/movie_select.png', 182, 641, 1, 1,'selectQ1_D', 'img/empty.png', 0, 0, 1, 1, 
            'selectQ2_A', 'img/movie_select.png', 151, 427, 1, 1, 'selectQ2_B', 'img/movie_select.png', 151, 628, 1, 1,'selectQ2_C', 'img/empty.png', 0, 0, 1, 1,'selectQ2_D', 'img/empty.png', 0, 0, 1, 1, 
            'selectQ3_A', 'img/movie_select.png', 151, 488, 1, 1, 'selectQ3_B', 'img/movie_select.png', 151, 628, 1, 1,'selectQ3_C', 'img/empty.png', 0, 0, 1, 1,'selectQ3_D', 'img/empty.png',0, 0, 1, 1, 
            'left_BTN','img/BTN_left.png',129,840,1,1,'right_BTN','img/BTN_right.png',586,840,1,1);
        } else if (choose_task_num == 6) {
            myImages_image.push('Q1', 'img/movie_Q03-1.png', 111, 169, 1, 1, 'Q2', 'img/movie_Q03-2.png', 111, 169, 1, 1, 'Q3', 'img/movie_Q03-3.png', 112, 169, 1, 1,
                'Q1_A', 'img/movie_Q03-1_A.png', 141, 460, 1, 1, 'Q1_B', 'img/movie_Q03-1_B.png', 141, 624, 1, 1, 'Q1_C', 'img/movie_Q03-1_C.png', 141, 747, 1, 1, 'Q1_D', 'img/empty.png', 0, 0, 1, 1,
                'Q2_A', 'img/movie_Q03-2_A.png', 141, 461, 1, 1, 'Q2_B', 'img/movie_Q03-2_B.png', 141, 583, 1, 1, 'Q2_C', 'img/movie_Q03-2_C.png', 141, 705, 1, 1, 'Q2_D', 'img/empty.png', 0, 0, 1, 1,
                'Q3_A', 'img/movie_Q03-3_A.png', 141, 537, 1, 1, 'Q3_B', 'img/movie_Q03-3_B.png', 141, 616, 1, 1, 'Q3_C', 'img/movie_Q03-3_C.png', 141, 693, 1, 1, 'Q3_D', 'img/movie_Q03-3_D.png', 141, 771, 1, 1,
            'selectQ1_A', 'img/movie_select.png', 151, 470, 1, 1, 'selectQ1_B', 'img/movie_select.png', 151, 634, 1, 1, 'selectQ1_C', 'img/movie_select.png', 151, 757, 1, 1, 'selectQ1_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ2_A', 'img/movie_select.png', 151, 471, 1, 1, 'selectQ2_B', 'img/movie_select.png', 151, 593, 1, 1, 'selectQ2_C', 'img/movie_select.png', 151, 715, 1, 1, 'selectQ2_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ3_A', 'img/movie_select.png', 151, 547, 1, 1, 'selectQ3_B', 'img/movie_select.png', 151, 626, 1, 1, 'selectQ3_C', 'img/movie_select.png', 151, 703, 1, 1, 'selectQ3_D', 'img/movie_select.png', 151, 781, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1);
        } else if (choose_task_num == 8) {
            myImages_image.push('Q1', 'img/movie_Q04-1.png', 123, 169, 1, 1, 'Q2', 'img/movie_Q04-2.png', 99, 169, 1, 1, 'Q3', 'img/movie_Q04-3.png', 120, 169, 1, 1,
                'Q1_A', 'img/movie_Q04-1_A.png', 125, 418, 1, 1, 'Q1_B', 'img/movie_Q04-1_B.png', 125, 500, 1, 1, 'Q1_C', 'img/movie_Q04-1_C.png', 125, 623, 1, 1, 'Q1_D', 'img/empty.png', 0, 0, 1, 1,
                'Q2_A', 'img/movie_Q04-2_A.png', 95, 419, 1, 1, 'Q2_B', 'img/movie_Q04-2_B.png', 95, 506, 1, 1, 'Q2_C', 'img/movie_Q04-2_C.png', 95, 644, 1, 1, 'Q2_D', 'img/empty.png', 0, 0, 1, 1,
                'Q3_A', 'img/movie_Q04-3_A.png', 119, 473, 1, 1, 'Q3_B', 'img/movie_Q04-3_B.png', 119, 664, 1, 1, 'Q3_C', 'img/empty.png', 0, 0, 1, 1, 'Q3_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ1_A', 'img/movie_select.png', 135, 429, 1, 1, 'selectQ1_B', 'img/movie_select.png', 135, 510, 1, 1, 'selectQ1_C', 'img/movie_select.png', 135, 633, 1, 1, 'selectQ1_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ2_A', 'img/movie_select.png', 105, 429, 1, 1, 'selectQ2_B', 'img/movie_select.png', 105, 516, 1, 1, 'selectQ2_C', 'img/movie_select.png', 105, 654, 1, 1, 'selectQ2_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ3_A', 'img/movie_select.png', 129, 484, 1, 1, 'selectQ3_B', 'img/movie_select.png', 129, 674, 1, 1, 'selectQ3_C', 'img/empty.png', 0, 0, 1, 1, 'selectQ3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1);
        } else if (choose_task_num == 10) {
            myImages_image.push('Q1', 'img/movie_Q05-1.png', 132, 169, 1, 1, 'Q2', 'img/movie_Q05-2.png', 130, 169, 1, 1, 'Q3', 'img/movie_Q05-3.png', 127, 169, 1, 1,
                'Q1_A', 'img/movie_Q05-1_A.png', 107, 377, 1, 1, 'Q1_B', 'img/movie_Q05-1_B.png', 107, 537, 1, 1, 'Q1_C', 'img/movie_Q05-1_C.png', 107, 698, 1, 1, 'Q1_D', 'img/empty.png', 0, 0, 1, 1,
                'Q2_A', 'img/movie_Q05-2_A.png', 107, 375, 1, 1, 'Q2_B', 'img/movie_Q05-2_B.png', 107, 577, 1, 1, 'Q2_C', 'img/movie_Q05-2_C.png', 107, 698, 1, 1, 'Q2_D', 'img/empty.png', 0, 0, 1, 1,
                'Q3_A', 'img/movie_Q05-3_A.png', 107, 496, 1, 1, 'Q3_B', 'img/movie_Q05-3_B.png', 107, 636, 1, 1, 'Q3_C', 'img/empty.png', 0, 0, 1, 1, 'Q3_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ1_A', 'img/movie_select.png', 117, 388, 1, 1, 'selectQ1_B', 'img/movie_select.png', 117, 547, 1, 1, 'selectQ1_C', 'img/movie_select.png', 117, 708, 1, 1, 'selectQ1_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ2_A', 'img/movie_select.png', 117, 386, 1, 1, 'selectQ2_B', 'img/movie_select.png', 118, 587, 1, 1, 'selectQ2_C', 'img/movie_select.png', 117, 708, 1, 1, 'selectQ2_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ3_A', 'img/movie_select.png', 117, 506, 1, 1, 'selectQ3_B', 'img/movie_select.png', 117, 645, 1, 1, 'selectQ3_C', 'img/empty.png', 0, 0, 1, 1, 'selectQ3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1);
        } else if (choose_task_num == 12) {
            myImages_image.push('Q1', 'img/movie_Q06-1.png', 99, 169, 1, 1, 'Q2', 'img/movie_Q06-2.png', 104, 169, 1, 1, 'Q3', 'img/movie_Q06-3.png', 104, 169, 1, 1,
                'Q1_A', 'img/movie_Q06-1_A.png', 121, 616, 1, 1, 'Q1_B', 'img/movie_Q06-1_B.png', 121, 747, 1, 1, 'Q1_C', 'img/empty.png', 0, 0, 1, 1, 'Q1_D', 'img/empty.png', 0, 0, 1, 1,
                'Q2_A', 'img/movie_Q06-2_A.png', 196, 611, 1, 1, 'Q2_B', 'img/movie_Q06-2_B.png', 196, 687, 1, 1, 'Q2_C', 'img/movie_Q06-2_C.png', 196, 756, 1, 1, 'Q2_D', 'img/empty.png', 0, 0, 1, 1,
                'Q3_A', 'img/movie_Q06-3_A.png', 196, 611, 1, 1, 'Q3_B', 'img/movie_Q06-3_B.png', 196, 685, 1, 1, 'Q3_C', 'img/movie_Q06-3_C.png', 196, 758, 1, 1, 'Q3_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ1_A', 'img/movie_select.png', 131, 625, 1, 1, 'selectQ1_B', 'img/movie_select.png', 131, 756, 1, 1, 'selectQ1_C', 'img/empty.png', 0, 0, 1, 1, 'selectQ1_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ2_A', 'img/movie_select.png', 206, 621, 1, 1, 'selectQ2_B', 'img/movie_select.png', 206, 697, 1, 1, 'selectQ2_C', 'img/movie_select.png', 206, 766, 1, 1, 'selectQ2_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ3_A', 'img/movie_select.png', 206, 621, 1, 1, 'selectQ3_B', 'img/movie_select.png', 206, 695, 1, 1, 'selectQ3_C', 'img/movie_select.png', 206, 767, 1, 1, 'selectQ3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1);
        } else if (choose_task_num == 16) {
            myImages_image.push('Q1', 'img/movie_Q07-1.png', 112, 169, 1, 1, 'Q2', 'img/movie_Q07-2.png', 111, 169, 1, 1, 'Q3', 'img/movie_Q07-3.png', 119, 169, 1, 1,
                'Q1_A', 'img/movie_Q07-1_A.png', 100, 385, 1, 1, 'Q1_B', 'img/movie_Q07-1_B.png', 100, 479, 1, 1, 'Q1_C', 'img/movie_Q07-1_C.png', 100, 673, 1, 1, 'Q1_D', 'img/empty.png', 0, 0, 1, 1,
                'Q2_A', 'img/movie_Q07-2_A.png', 100, 408, 1, 1, 'Q2_B', 'img/movie_Q07-2_B.png', 100, 599, 1, 1, 'Q2_C', 'img/empty.png', 0, 0, 1, 1, 'Q2_D', 'img/empty.png', 0, 0, 1, 1,
                'Q3_A', 'img/movie_Q07-3_A.png', 127, 579, 1, 1, 'Q3_B', 'img/movie_Q07-3_B.png', 127, 671, 1, 1, 'Q3_C', 'img/empty.png', 0, 0, 1, 1, 'Q3_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ1_A', 'img/movie_select.png', 110, 395, 1, 1, 'selectQ1_B', 'img/movie_select.png', 110, 489, 1, 1, 'selectQ1_C', 'img/movie_select.png', 110, 683, 1, 1, 'selectQ1_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ2_A', 'img/movie_select.png', 110, 417, 1, 1, 'selectQ2_B', 'img/movie_select.png', 110, 609, 1, 1, 'selectQ2_C', 'img/empty.png', 0, 0, 1, 1, 'selectQ2_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ3_A', 'img/movie_select.png', 137, 588, 1, 1, 'selectQ3_B', 'img/movie_select.png', 137, 680, 1, 1, 'selectQ3_C', 'img/empty.png', 0, 0, 1, 1, 'selectQ3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1);
        } else if (choose_task_num == 20) {
            myImages_image.push('Q1', 'img/movie_Q08-1.png', 121, 169, 1, 1, 'Q2', 'img/movie_Q08-2.png', 119, 169, 1, 1, 'Q3', 'img/movie_Q08-3.png', 119, 169, 1, 1,
                'Q1_A', 'img/movie_Q08-1_A.png', 102, 335, 1, 1, 'Q1_B', 'img/movie_Q08-1_B.png', 102, 535, 1, 1, 'Q1_C', 'img/movie_Q08-1_C.png', 102, 694, 1, 1, 'Q1_D', 'img/empty.png', 0, 0, 1, 1,
                'Q2_A', 'img/movie_Q08-2_A.png', 91, 389, 1, 1, 'Q2_B', 'img/movie_Q08-2_B.png', 91, 515, 1, 1, 'Q2_C', 'img/movie_Q08-2_C.png', 91, 714, 1, 1, 'Q2_D', 'img/empty.png', 0, 0, 1, 1,
                'Q3_A', 'img/movie_Q08-3_A.png', 79, 427, 1, 1, 'Q3_B', 'img/movie_Q08-3_B.png', 79, 571, 1, 1, 'Q3_C', 'img/movie_Q08-3_C.png', 79, 760, 1, 1, 'Q3_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ1_A', 'img/movie_select.png', 112, 345, 1, 1, 'selectQ1_B', 'img/movie_select.png', 112, 545, 1, 1, 'selectQ1_C', 'img/movie_select.png', 112, 704, 1, 1, 'selectQ1_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ2_A', 'img/movie_select.png', 101, 399, 1, 1, 'selectQ2_B', 'img/movie_select.png', 101, 525, 1, 1, 'selectQ2_C', 'img/movie_select.png', 101, 724, 1, 1, 'selectQ2_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ3_A', 'img/movie_select.png', 89, 437, 1, 1, 'selectQ3_B', 'img/movie_select.png', 89, 581, 1, 1, 'selectQ3_C', 'img/movie_select.png', 89, 770, 1, 1, 'selectQ3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1);
        } else if (choose_task_num == 24) {
            myImages_image.push('Q1', 'img/movie_Q09-1.png', 122, 169, 1, 1, 'Q2', 'img/movie_Q09-2.png', 134, 169, 1, 1, 'Q3', 'img/movie_Q09-3.png', 134, 169, 1, 1,
                'Q1_A', 'img/movie_Q09-1_A.png', 79, 330, 1, 1, 'Q1_B', 'img/movie_Q09-1_B.png', 79, 426, 1, 1, 'Q1_C', 'img/movie_Q09-1_C.png', 79, 666, 1, 1, 'Q1_D', 'img/empty.png', 0, 0, 1, 1,
                'Q2_A', 'img/movie_Q09-2_A.png', 79, 391, 1, 1, 'Q2_B', 'img/movie_Q09-2_B.png', 79, 543, 1, 1, 'Q2_C', 'img/movie_Q09-2_C.png', 79, 695, 1, 1, 'Q2_D', 'img/empty.png', 0, 0, 1, 1,
                'Q3_A', 'img/movie_Q09-3_A.png', 79, 387, 1, 1, 'Q3_B', 'img/movie_Q09-3_B.png', 79, 531, 1, 1, 'Q3_C', 'img/movie_Q09-3_C.png', 79, 683, 1, 1, 'Q3_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ1_A', 'img/movie_select.png', 89, 340, 1, 1, 'selectQ1_B', 'img/movie_select.png', 89, 436, 1, 1, 'selectQ1_C', 'img/movie_select.png', 89, 676, 1, 1, 'selectQ1_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ2_A', 'img/movie_select.png', 89, 401, 1, 1, 'selectQ2_B', 'img/movie_select.png', 89, 553, 1, 1, 'selectQ2_C', 'img/movie_select.png', 89, 705, 1, 1, 'selectQ2_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ3_A', 'img/movie_select.png', 89, 397, 1, 1, 'selectQ3_B', 'img/movie_select.png', 89, 541, 1, 1, 'selectQ3_C', 'img/movie_select.png', 89, 693, 1, 1, 'selectQ3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1);
        } else if (choose_task_num == 28) {
            myImages_image.push('Q1', 'img/movie_Q10-1.png', 131, 169, 1, 1, 'Q2', 'img/movie_Q10-2.png', 114, 169, 1, 1, 'Q3', 'img/movie_Q10-3.png', 114, 169, 1, 1,
                'Q1_A', 'img/movie_Q10-1_A.png', 75, 370, 1, 1, 'Q1_B', 'img/movie_Q10-1_B.png', 75, 639, 1, 1, 'Q1_C', 'img/movie_Q10-1_C.png', 75, 749, 1, 1, 'Q1_D', 'img/empty.png', 0, 0, 1, 1,
                'Q2_A', 'img/movie_Q10-2_A.png', 97, 411, 1, 1, 'Q2_B', 'img/movie_Q10-2_B.png', 97, 521, 1, 1, 'Q2_C', 'img/movie_Q10-2_C.png', 97, 630, 1, 1, 'Q2_D', 'img/movie_Q10-2_D.png', 97, 738, 1, 1,
                'Q3_A', 'img/movie_Q10-3_A.png', 94, 500, 1, 1, 'Q3_B', 'img/movie_Q10-3_B.png', 94, 620, 1, 1, 'Q3_C', 'img/movie_Q10-3_C.png', 94, 702, 1, 1, 'Q3_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ1_A', 'img/movie_select.png', 85, 380, 1, 1, 'selectQ1_B', 'img/movie_select.png', 85, 649, 1, 1, 'selectQ1_C', 'img/movie_select.png', 85, 759, 1, 1, 'selectQ1_D', 'img/empty.png', 0, 0, 1, 1,
            'selectQ2_A', 'img/movie_select.png', 107, 421, 1, 1, 'selectQ2_B', 'img/movie_select.png', 107, 531, 1, 1, 'selectQ2_C', 'img/movie_select.png', 107, 641, 1, 1, 'selectQ2_D', 'img/movie_select.png', 107, 748, 1, 1,
            'selectQ3_A', 'img/movie_select.png', 104, 510, 1, 1, 'selectQ3_B', 'img/movie_select.png', 104, 630, 1, 1, 'selectQ3_C', 'img/movie_select.png', 104, 712, 1, 1, 'selectQ3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1);
        }
        myImages_link1.push('Q1', 'Q1_A', 'Q1_B', 'Q1_C', 'Q1_D', 'empty','left_BTN','right_BTN');
    }
}
function answer_page(){
    page = 'answer_page';
    player_ans = new Array();
	myImages_image = new Array('BG', 'img/BG.png', 0, 0, 1, 1, 'bg1', 'img/BG1.png', 0, 0, 1, 1, /*'bg2', 'img/BG2.png', 0, 0, 1, 1, 'bg3', 'img/BG3.png', 0, 0, 1, 1, 'bg4', 'img/BG4.png', 0, 0, 1, 1, 'bg5', 'img/BG5.png', 0, 0, 1, 1, 'bg6', 'img/BG6.png', 0, 0, 1, 1, 'bg7', 'img/BG7.png', 0, 0, 1, 1,*/
	'cp_space', 'img/cp_space.png', 60, 149, 1, 1, 'lg_facecycle', 'img/lg_facecycle.png', 36, 37, 1, 1, 'cp_BTN_backhome', 'img/cp_BTN_backhome.png', 542, 38, 1, 1,
	'movie_Q_BTN_grade','img/movie_Q_BTN_grade.png',558,934,1,1,'empty','img/empty.png',0,0,1,1);
	myImages_link1 = new Array('bg1', 'cp_space', 'lg_facecycle', 'lg_G1', 'cp_BTN_backhome', 'movie_Q_BTN_grade');
    myImages_link2 = new Array();
	print_Q();
    input_face(3);
	draw_text_ar = new Array();
    /*small_ani_flag = true;
    small_ani_ar = new Array('bg1', 'bg1', 'bg1', 'bg1', 'bg2', 'bg2', 'bg2', 'bg2', 'bg3', 'bg3', 'bg3', 'bg3', 'bg4', 'bg4', 'bg4', 'bg4', 'bg5', 'bg5', 'bg5', 'bg5', 'bg6', 'bg6', 'bg6', 'bg6', 'bg7', 'bg7', 'bg7', 'bg7');
    small_ani_chg_location = new Array();
    small_ani_chg_location.push(0);
    small_ani_count = new Array();
    small_ani_count.push(0, 28);
    small_ani();*/
    initimage();
	}
function answer_btn() {
    if (choose_task_num == 1) {
        if (MU_range('Q1_A')) {
            soundreplay('put');
            myImages_link1.splice(21, 1, 'hook_1-1_A');
            player_ans[0] = 'A';
        }
        else if (MU_range('Q1_B')) {
            soundreplay('put');
            myImages_link1.splice(21, 1, 'hook_1-1_B');
            player_ans[0] = 'B';
        }
        else if (MU_range('Q2_A')) {
            soundreplay('put');
            myImages_link1.splice(22, 1, 'hook_1-2_A');
            player_ans[1] = 'A';
        }
        else if (MU_range('Q2_B')) {
            soundreplay('put');
            myImages_link1.splice(22, 1, 'hook_1-2_B');
            player_ans[1] = 'B';
        }
        else if (MU_range('Q3_A')) {
            soundreplay('put');
            myImages_link1.splice(23, 1, 'hook_1-3_A');
            player_ans[2] = 'A';
        }
        else if (MU_range('Q3_B')) {
            soundreplay('put');
            myImages_link1.splice(23, 1, 'hook_1-3_B');
            player_ans[2] = 'B';
        }
    } else {
        for (var i = 1; i < 4; i++) {
            if (myImages_link1[6] == 'Q' + i) {
                if (MU_range('Q' + i + '_A')) {
                    soundreplay('put');
                    myImages_link1.splice(11, 1, 'selectQ' + i + '_A');
                    player_ans[i - 1] = 'A';
                } else if (MU_range('Q' + i + '_B')) {
                    soundreplay('put');
                    myImages_link1.splice(11, 1, 'selectQ' + i + '_B');
                    player_ans[i - 1] = 'B';
                } else if (MU_range('Q' + i + '_C')) {
                    soundreplay('put');
                    myImages_link1.splice(11, 1, 'selectQ' + i + '_C');
                    player_ans[i - 1] = 'C';
                } else if (MU_range('Q' + i + '_D')) {
                    soundreplay('put');
                    myImages_link1.splice(11, 1, 'selectQ' + i + '_D');
                    player_ans[i - 1] = 'D';
                }
            }
        }
    }
    if (MU_range('cp_BTN_backhome')) {
        soundreplay('select');
        GameState(GS_BACKHOME);
    } else if (MU_range('lg_facecycle')) {
        soundreplay('select');
        GameState(GS_LEARNGOAL);
    }
    else if (MU_range('movie_Q_BTN_grade')) {
        soundreplay('select');
        //alert(player_ans.length);
        if (player_ans.length == 3) {
            if (choose_task_num == 1) {
                check_ans(0);
            } else if (choose_task_num == 5) {
                check_ans(3);
            } else if (choose_task_num == 6) {
                check_ans(6);
            } else if (choose_task_num == 8) {
                check_ans(9);
            } else if (choose_task_num == 10) {
                check_ans(12);
            } else if (choose_task_num == 12) {
                check_ans(15);
            } else if (choose_task_num == 16) {
                check_ans(18);
            } else if (choose_task_num == 20) {
                check_ans(21);
            } else if (choose_task_num == 24) {
                check_ans(24);
            } else if (choose_task_num == 28) {
                check_ans(27);
            }
        } else {
            alert("請將所有題目都作答喔!");
        }
    } else if (MU_range('left_BTN')) {
        soundreplay('select');
        var choose;
        if (myImages_link1[6] == 'Q1') {
            if (player_ans[2] != null) {
                choose = 'selectQ3_' + player_ans[2];
            } else {
                choose = 'empty';
            }
            myImages_link1.splice(6, 6, 'Q3', 'Q3_A', 'Q3_B', 'Q3_C', 'Q3_D', choose);
        }
        else {
            for (var i = 2; i < 4; i++) {
                if (myImages_link1[6] == 'Q' + i) {
                    if (player_ans[i - 1] != null) {
                        choose = 'selectQ' + (i - 1) + '_' + player_ans[i - 2];
                    } else {
                        choose = 'empty';
                    }
                    myImages_link1.splice(6, 6, 'Q' + (i - 1), 'Q' + (i - 1) + '_A', 'Q' + (i - 1) + '_B', 'Q' + (i - 1) + '_C', 'Q' + (i - 1) + '_D', choose);
                }
            }
        }
    } else if (MU_range('right_BTN')) {
        soundreplay('select');
        var choose;
        if (myImages_link1[6] == 'Q3') {
            if (player_ans[0] != null) {
                choose = 'selectQ1_' + player_ans[0];
            } else {
                choose = 'empty';
            }
            myImages_link1.splice(6, 6, 'Q1', 'Q1_A', 'Q1_B', 'Q1_C', 'Q1_D', choose);
        } else {
            for (var i = 2; i > 0; i--) {
                if (myImages_link1[6] == 'Q' + i) {
                    if (player_ans[i] != null) {
                        choose = 'selectQ' + (i + 1) + '_' + player_ans[i];
                    } else {
                        choose = 'empty';
                    }
                    myImages_link1.splice(6, 6, 'Q' + (i + 1), 'Q' + (i + 1) + '_A', 'Q' + (i + 1) + '_B', 'Q' + (i + 1) + '_C', 'Q' + (i + 1) + '_D', choose);
                }
            }
        }
    }
}
function check_ans(start) {
    if (now_open == choose_task_num-1) {
        now_open++;
    }
    lc_STAR[choose_task_num - 1] = 0;
	for(var i=0;i<3;i++){
	    if(player_ans[i]==correct_ans[i+start]){
	        lc_STAR[choose_task_num-1]++;
	        player_correct[i]=true;
	    }else{
	        player_correct[i]=false;
	    }
	}
	//alert(player_correct);
	//alert(lc_STAR);
	//alert(myImages_image.length+','+myImages_link1.length);
	GameState(GS_MOVIE_FINISH);
}
function movie_small_star_XY() {
    if (choose_task_num == 1) {
        myImages_image.push('small_STAR0_1', 'img/movie_finish_small_STAR0.png', 112, 414, 1, 1, 'small_STAR1_1', 'img/movie_finish_small_STAR1.png', 94, 395, 1, 1,
            'small_STAR0_2', 'img/movie_finish_small_STAR0.png', 112, 558, 1, 1, 'small_STAR1_2', 'img/movie_finish_small_STAR1.png', 94, 539, 1, 1,
            'small_STAR0_3', 'img/movie_finish_small_STAR0.png', 112, 704, 1, 1, 'small_STAR1_3', 'img/movie_finish_small_STAR1.png', 94, 685, 1, 1,
            'mf_Q1', 'img/mf_Q01.png', 145, 362, 1, 1, 'mf_Q2', 'img/empty.png', 0, 0, 1, 1, 'mf_Q3', 'img/empty.png', 0, 0, 1, 1,
            'choose1_A', 'img/mf_hook.png', 234, 410, 1, 1, 'choose1_B', 'img/mf_hook.png', 234, 480, 1, 1, 'choose_1_C', 'img/empty.png', 0, 0, 1, 1, 'choose_1_D', 'img/empty.png', 0, 0, 1, 1,
            'choose2_A', 'img/mf_hook.png', 234, 560, 1, 1, 'choose2_B', 'img/mf_hook.png', 234, 622, 1, 1, 'choose_2_C', 'img/empty.png', 0, 0, 1, 1, 'choose_2_D', 'img/empty.png', 0, 0, 1, 1,
            'choose3_A', 'img/mf_hook.png', 234, 704, 1, 1, 'choose3_B', 'img/mf_hook.png', 234, 772, 1, 1, 'choose_3_C', 'img/empty.png', 0, 0, 1, 1, 'choose_3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/empty.png', 0, 0, 1, 1, 'right_BTN', 'img/empty.png', 0, 0, 1, 1);
        myImages_link1.push('gray', 'movie_finish_bg', 'movie_finish_cat', 'movie_finish_BTN_againExam', 'movie_finish_BTN_againMovie',
        'movie_finish_BTN_next', 'empty', 'empty', 'empty', 'small_STAR0_1', 'small_STAR0_2', 'small_STAR0_3', 'empty', 'empty', 'empty',
        'mf_Q1', 'mf_Q2', 'mf_Q3', 'choose1_' + player_ans[0], 'choose2_' + player_ans[1], 'choose3_' + player_ans[2], 'X', 'left_BTN', 'right_BTN');
    } else {
        if (choose_task_num == 5) {
            myImages_image.push('small_STAR0_1', 'img/movie_finish_small_STAR0.png', 80, 387, 1, 1, 'small_STAR1_1', 'img/movie_finish_small_STAR1.png', 63, 369, 1, 1,
            'small_STAR0_2', 'img/movie_finish_small_STAR0.png', 67, 339, 1, 1, 'small_STAR1_2', 'img/movie_finish_small_STAR1.png', 50, 321, 1, 1,
            'small_STAR0_3', 'img/movie_finish_small_STAR0.png', 73, 399, 1, 1, 'small_STAR1_3', 'img/movie_finish_small_STAR1.png', 56, 381, 1, 1,
            'mf_Q1', 'img/mf_Q02-1.png', 132, 388, 1, 1, 'mf_Q2', 'img/mf_Q02-2.png', 118, 324, 1, 1, 'mf_Q3', 'img/mf_Q02-3.png', 124, 402, 1, 1,
            'choose1_A', 'img/movie_select.png', 200, 525, 1, 1, 'choose1_B', 'img/movie_select.png', 200, 619, 1, 1, 'choose1_C', 'img/movie_select.png', 200, 709, 1, 1, 'choose1_D', 'img/empty.png', 0, 0, 1, 1,
            'choose2_A', 'img/movie_select.png', 156, 463, 1, 1, 'choose2_B', 'img/movie_select.png', 156, 664, 1, 1, 'choose2_C', 'img/empty.png', 0, 0, 1, 1, 'choose2_D', 'img/empty.png', 0, 0, 1, 1,
            'choose3_A', 'img/movie_select.png', 162, 537, 1, 1, 'choose3_B', 'img/movie_select.png', 162, 677, 1, 1, 'choose3_C', 'img/empty.png', 0, 0, 1, 1, 'choose3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1, 'empty', 'img/empty.png', 0, 0, 1, 1);
        } else if (choose_task_num == 6) {
            myImages_image.push('small_STAR0_1', 'img/movie_finish_small_STAR0.png', 81, 339, 1, 1, 'small_STAR1_1', 'img/movie_finish_small_STAR1.png', 63, 321, 1, 1,
            'small_STAR0_2', 'img/movie_finish_small_STAR0.png', 81, 363, 1, 1, 'small_STAR1_2', 'img/movie_finish_small_STAR1.png', 63, 345, 1, 1,
            'small_STAR0_3', 'img/movie_finish_small_STAR0.png', 89, 343, 1, 1, 'small_STAR1_3', 'img/movie_finish_small_STAR1.png', 71, 325, 1, 1,
            'mf_Q1', 'img/mf_Q03-1.png', 140, 346, 1, 1, 'mf_Q2', 'img/mf_Q03-2.png', 140, 369, 1, 1, 'mf_Q3', 'img/mf_Q03-3.png', 150, 350, 1, 1,
            'choose1_A', 'img/movie_select.png', 159, 522, 1, 1, 'choose1_B', 'img/movie_select.png', 159, 670, 1, 1, 'choose1_C', 'img/movie_select.png', 159, 781, 1, 1, 'choose1_D', 'img/empty.png', 0, 0, 1, 1,
            'choose2_A', 'img/movie_select.png', 159, 518, 1, 1, 'choose2_B', 'img/movie_select.png', 159, 628, 1, 1, 'choose2_C', 'img/movie_select.png', 159, 740, 1, 1, 'choose2_D', 'img/empty.png', 0, 0, 1, 1,
            'choose3_A', 'img/movie_select.png', 183, 602, 1, 1, 'choose3_B', 'img/movie_select.png', 183, 669, 1, 1, 'choose3_C', 'img/movie_select.png', 183, 736, 1, 1, 'choose3_D', 'img/movie_select.png', 183, 804, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1, 'empty', 'img/empty.png', 0, 0, 1, 1);
        } else if (choose_task_num == 8) {
            myImages_image.push('small_STAR0_1', 'img/movie_finish_small_STAR0.png', 81, 379, 1, 1, 'small_STAR1_1', 'img/movie_finish_small_STAR1.png', 63, 361, 1, 1,
            'small_STAR0_2', 'img/movie_finish_small_STAR0.png', 65, 343, 1, 1, 'small_STAR1_2', 'img/movie_finish_small_STAR1.png', 47, 325, 1, 1,
            'small_STAR0_3', 'img/movie_finish_small_STAR0.png', 79, 363, 1, 1, 'small_STAR1_3', 'img/movie_finish_small_STAR1.png', 61, 345, 1, 1,
            'mf_Q1', 'img/mf_Q04-1.png', 139, 388, 1, 1, 'mf_Q2', 'img/mf_Q04-2.png', 98, 340, 1, 1, 'mf_Q3', 'img/mf_Q04-3.png', 138, 369, 1, 1,
            'choose1_A', 'img/movie_select.png', 153.5, 493, 1, 1, 'choose1_B', 'img/movie_select.png', 154, 575, 1, 1, 'choose1_C', 'img/movie_select.png', 154, 698, 1, 1, 'choose1_D', 'img/empty.png', 0, 0, 1, 1,
            'choose2_A', 'img/movie_select.png', 108, 478, 1, 1, 'choose2_B', 'img/movie_select.png', 108, 551, 1, 1, 'choose2_C', 'img/movie_select.png', 108, 677, 1, 1, 'choose2_D', 'img/empty.png', 0, 0, 1, 1,
            'choose3_A', 'img/movie_select.png', 148, 536, 1, 1, 'choose3_B', 'img/movie_select.png', 148, 726, 1, 1, 'choose3_C', 'img/empty.png', 0, 0, 1, 1, 'choose3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1, 'empty', 'img/empty.png', 0, 0, 1, 1);
        } else if (choose_task_num == 10) {
            myImages_image.push('small_STAR0_1', 'img/movie_finish_small_STAR0.png', 81, 347, 1, 1, 'small_STAR1_1', 'img/movie_finish_small_STAR1.png', 63, 329, 1, 1,
            'small_STAR0_2', 'img/movie_finish_small_STAR0.png', 81, 341, 1, 1, 'small_STAR1_2', 'img/movie_finish_small_STAR1.png', 323, 325, 1, 1,
            'small_STAR0_3', 'img/movie_finish_small_STAR0.png', 77, 375, 1, 1, 'small_STAR1_3', 'img/movie_finish_small_STAR1.png', 59, 357, 1, 1,
            'mf_Q1', 'img/mf_Q05-1.png', 124, 358, 1, 1, 'mf_Q2', 'img/mf_Q05-2.png', 118, 352, 1, 1, 'mf_Q3', 'img/mf_Q05-3.png', 112, 383, 1, 1,
            'choose1_A', 'img/movie_select.png', 134, 448, 1, 1, 'choose1_B', 'img/movie_select.png', 134, 608, 1, 1, 'choose1_C', 'img/movie_select.png', 134, 769, 1, 1, 'choose1_D', 'img/empty.png', 0, 0, 1, 1,
            'choose2_A', 'img/movie_select.png', 128, 440, 1, 1, 'choose2_B', 'img/movie_select.png', 128, 642, 1, 1, 'choose2_C', 'img/movie_select.png', 128, 764, 1, 1, 'choose2_D', 'img/empty.png', 0, 0, 1, 1,
            'choose3_A', 'img/movie_select.png', 122, 554, 1, 1, 'choose3_B', 'img/movie_select.png', 122, 694, 1, 1, 'choose3_C', 'img/empty.png', 0, 0, 1, 1, 'choose3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1, 'empty', 'img/empty.png', 0, 0, 1, 1);
        } else if (choose_task_num == 12) {
            myImages_image.push('small_STAR0_1', 'img/movie_finish_small_STAR0.png', 65, 347, 1, 1, 'small_STAR1_1', 'img/movie_finish_small_STAR1.png', 47, 329, 1, 1,
            'small_STAR0_2', 'img/movie_finish_small_STAR0.png', 67, 339, 1, 1, 'small_STAR1_2', 'img/movie_finish_small_STAR1.png', 49, 321, 1, 1,
            'small_STAR0_3', 'img/movie_finish_small_STAR0.png', 67, 339, 1, 1, 'small_STAR1_3', 'img/movie_finish_small_STAR1.png', 49, 321, 1, 1,
            'mf_Q1', 'img/mf_Q06-1.png', 117, 354, 1, 1, 'mf_Q2', 'img/mf_Q06-2.png', 122, 347, 1, 1, 'mf_Q3', 'img/mf_Q06-3.png', 124, 347, 1, 1,
            'choose1_A', 'img/movie_select.png', 150, 698, 1, 1, 'choose1_B', 'img/movie_select.png', 150, 788, 1, 1, 'choose1_C', 'img/empty.png', 0, 0, 1, 1, 'choose1_D', 'img/empty.png', 0, 0, 1, 1,
            'choose2_A', 'img/movie_select.png', 241, 698, 1, 1, 'choose2_B', 'img/movie_select.png', 241, 760, 1, 1, 'choose2_C', 'img/movie_select.png', 241, 819, 1, 1, 'choose2_D', 'img/empty.png', 0, 0, 1, 1,
            'choose3_A', 'img/movie_select.png', 221, 696, 1, 1, 'choose3_B', 'img/movie_select.png', 221, 758, 1, 1, 'choose3_C', 'img/movie_select.png', 221, 820, 1, 1, 'choose3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1, 'empty', 'img/empty.png', 0, 0, 1, 1);
        } else if (choose_task_num == 16) {
            myImages_image.push('small_STAR0_1', 'img/movie_finish_small_STAR0.png', 74, 346, 1, 1, 'small_STAR1_1', 'img/movie_finish_small_STAR1.png', 56, 328, 1, 1,
            'small_STAR0_2', 'img/movie_finish_small_STAR0.png', 74, 346, 1, 1, 'small_STAR1_2', 'img/movie_finish_small_STAR1.png', 56, 328, 1, 1,
            'small_STAR0_3', 'img/movie_finish_small_STAR0.png', 74, 362, 1, 1, 'small_STAR1_3', 'img/movie_finish_small_STAR1.png', 56, 344, 1, 1,
            'mf_Q1', 'img/mf_Q07-1.png', 103, 354, 1, 1, 'mf_Q2', 'img/mf_Q07-2.png', 123, 350, 1, 1, 'mf_Q3', 'img/mf_Q07-3.png', 132, 367, 1, 1,
            'choose1_A', 'img/movie_select.png', 113, 476, 1, 1, 'choose1_B', 'img/movie_select.png', 113, 537, 1, 1, 'choose1_C', 'img/movie_select.png', 113, 686, 1, 1, 'choose1_D', 'img/empty.png', 0, 0, 1, 1,
            'choose2_A', 'img/movie_select.png', 133, 473, 1, 1, 'choose2_B', 'img/movie_select.png', 133, 643, 1, 1, 'choose2_C', 'img/empty.png', 0, 0, 1, 1, 'choose2_D', 'img/empty.png', 0, 0, 1, 1,
            'choose3_A', 'img/movie_select.png', 150, 645, 1, 1, 'choose3_B', 'img/movie_select.png', 150, 737, 1, 1, 'choose3_C', 'img/empty.png', 0, 0, 1, 1, 'choose3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1, 'empty', 'img/empty.png', 0, 0, 1, 1);
        }
        else if (choose_task_num == 20) {
            myImages_image.push('small_STAR0_1', 'img/movie_finish_small_STAR0.png', 81, 339, 1, 1, 'small_STAR1_1', 'img/movie_finish_small_STAR1.png', 63, 321, 1, 1,
            'small_STAR0_2', 'img/movie_finish_small_STAR0.png', 73, 339, 1, 1, 'small_STAR1_2', 'img/movie_finish_small_STAR1.png', 55, 321, 1, 1,
            'small_STAR0_3', 'img/movie_finish_small_STAR0.png', 73, 345, 1, 1, 'small_STAR1_3', 'img/movie_finish_small_STAR1.png', 55, 327, 1, 1,
            'mf_Q1', 'img/mf_Q08-1.png', 119, 347, 1, 1, 'mf_Q2', 'img/mf_Q08-2.png', 94, 358, 1, 1, 'mf_Q3', 'img/mf_Q08-3.png', 82, 351, 1, 1,
            'choose1_A', 'img/movie_select.png', 129, 415, 1, 1, 'choose1_B', 'img/movie_select.png', 129, 588, 1, 1, 'choose1_C', 'img/movie_select.png', 129, 712, 1, 1, 'choose1_D', 'img/empty.png', 0, 0, 1, 1,
            'choose2_A', 'img/movie_select.png', 104, 462, 1, 1, 'choose2_B', 'img/movie_select.png', 104, 565, 1, 1, 'choose2_C', 'img/movie_select.png', 104, 745, 1, 1, 'choose2_D', 'img/empty.png', 0, 0, 1, 1,
            'choose3_A', 'img/movie_select.png', 92, 526, 1, 1, 'choose3_B', 'img/movie_select.png', 92, 639, 1, 1, 'choose3_C', 'img/movie_select.png', 92, 788, 1, 1, 'choose3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1, 'empty', 'img/empty.png', 0, 0, 1, 1);
        } else if (choose_task_num == 24) {
            myImages_image.push('small_STAR0_1', 'img/movie_finish_small_STAR0.png', 81, 339, 1, 1, 'small_STAR1_1', 'img/movie_finish_small_STAR1.png', 63, 321, 1, 1,
            'small_STAR0_2', 'img/movie_finish_small_STAR0.png', 81, 343, 1, 1, 'small_STAR1_2', 'img/movie_finish_small_STAR1.png', 63, 325, 1, 1,
            'small_STAR0_3', 'img/movie_finish_small_STAR0.png', 81, 343, 1, 1, 'small_STAR1_3', 'img/movie_finish_small_STAR1.png', 63, 325, 1, 1,
            'mf_Q1', 'img/mf_Q09-1.png', 80, 352, 1, 1, 'mf_Q2', 'img/mf_Q09-2.png', 90, 354, 1, 1, 'mf_Q3', 'img/mf_Q09-3.png', 89, 354, 1, 1,
            'choose1_A', 'img/movie_select.png', 90, 425, 1, 1, 'choose1_B', 'img/movie_select.png', 90, 487, 1, 1, 'choose1_C', 'img/movie_select.png', 90, 696, 1, 1, 'choose1_D', 'img/empty.png', 0, 0, 1, 1,
            'choose2_A', 'img/movie_select.png', 100, 446, 1, 1, 'choose2_B', 'img/movie_select.png', 100, 598, 1, 1, 'choose2_C', 'img/movie_select.png', 100, 750, 1, 1, 'choose2_D', 'img/empty.png', 0, 0, 1, 1,
            'choose3_A', 'img/movie_select.png', 99, 461, 1, 1, 'choose3_B', 'img/movie_select.png', 99, 588, 1, 1, 'choose3_C', 'img/movie_select.png', 99, 715, 1, 1, 'choose3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1, 'empty', 'img/empty.png', 0, 0, 1, 1);
        } else if (choose_task_num == 28) {
            myImages_image.push('small_STAR0_1', 'img/movie_finish_small_STAR0.png', 81, 343, 1, 1, 'small_STAR1_1', 'img/movie_finish_small_STAR1.png', 63, 325, 1, 1,
            'small_STAR0_2', 'img/movie_finish_small_STAR0.png', 81, 343, 1, 1, 'small_STAR1_2', 'img/movie_finish_small_STAR1.png', 63, 325, 1, 1,
            'small_STAR0_3', 'img/movie_finish_small_STAR0.png', 81, 346, 1, 1, 'small_STAR1_3', 'img/movie_finish_small_STAR1.png', 63, 328, 1, 1,
            'mf_Q1', 'img/mf_Q10-1.png', 80, 346, 1, 1, 'mf_Q2', 'img/mf_Q10-2.png', 106, 351, 1, 1, 'mf_Q3', 'img/mf_Q10-3.png', 118, 353, 1, 1,
            'choose1_A', 'img/movie_select.png', 90, 437, 1, 1, 'choose1_B', 'img/movie_select.png', 90, 688, 1, 1, 'choose1_C', 'img/movie_select.png', 90, 776, 1, 1, 'choose1_D', 'img/empty.png', 0, 0, 1, 1,
            'choose2_A', 'img/movie_select.png', 116, 458, 1, 1, 'choose2_B', 'img/movie_select.png', 116, 570, 1, 1, 'choose2_C', 'img/movie_select.png', 116, 677, 1, 1, 'choose2_D', 'img/movie_select.png', 116, 779, 1, 1,
            'choose3_A', 'img/movie_select.png', 128, 581, 1, 1, 'choose3_B', 'img/movie_select.png', 128, 701, 1, 1, 'choose3_C', 'img/movie_select.png', 128, 783, 1, 1, 'choose3_D', 'img/empty.png', 0, 0, 1, 1,
            'left_BTN', 'img/BTN_left.png', 129, 840, 1, 1, 'right_BTN', 'img/BTN_right.png', 586, 840, 1, 1, 'empty', 'img/empty.png', 0, 0, 1, 1);
        }
        //alert(player_ans[0]);
        myImages_link1.push('gray', 'movie_finish_bg', 'movie_finish_cat', 'movie_finish_BTN_againExam', 'movie_finish_BTN_againMovie',
        'movie_finish_BTN_next', 'empty', 'empty', 'empty', 'small_STAR0_1', 'empty',
        'mf_Q1', 'choose1_' + player_ans[0], 'X', 'left_BTN', 'right_BTN');
    }
}
function movie_finish() {
    page = 'movie_finish';
    //alert(myImages_image.length + ',' + myImages_link1.length);
    if (choose_task_num == 1) {
        myImages_image.length = 174;
        myImages_link1.length = 24;
    } else {
        myImages_image.length = 222;
        myImages_link1.length = 14;
    }
    myImages_image.push('gray','img/gray.png', 0, 0, 1, 1, 'movie_finish_bg', 'img/movie_finish_bg.png', 53, 74, 1, 1,'X','img/X.png',664,26,1,1,
        'movie_finish_cat', 'img/movie_finish_cat.png', 469, 86, 1, 1, 'movie_finish_BTN_againExam', 'img/movie_finish_BTN_againEaxm.png', 292, 914, 1, 1,
        'movie_finish_BTN_againMovie', 'img/movie_finish_BTN_againMovie.png', 91, 914, 1, 1, 'movie_finish_BTN_next', 'img/movie_finish_BTN_next.png', 491, 914, 1, 1,
        'big_STAR1','img/lg_star.png',130,210,1,1,'big_STAR2','img/lg_star.png',240,210,1,1,'big_STAR3','img/lg_star.png',350,210,1,1
        );
    movie_small_star_XY();
    for (var i = 0; i < lc_STAR[choose_task_num - 1]; i++) {
        myImages_link1.splice(30 + i, 1, 'big_STAR' + (i + 1));
    }
    if(choose_task_num==1){
        for (var i = 0; i < 3; i++) {
            if (player_correct[i] == true) {
                myImages_link1.splice(36 + i, 1, 'small_STAR1_' + (i + 1));
            }
        }
    }else{
        if (player_correct[0] == true) {
            myImages_link1.splice(24, 1, 'small_STAR1_1');
        }
    }
    initimage();
    draw();
    /*if (choose_task_num == 5) {
        please = setInterval(please_help, 3000);
    }*/
}
/*function please_help() {
    alert("感謝您的幫助!!\n請幫忙填寫問卷!!");
    location.href = ('https://docs.google.com/forms/d/1Gdz5GzQdgjM4o-FXfVSTeut8lf-BzWHVXSgtV1Nnq3c/viewform?usp=send_form');
    clearInterval(please);
}*/
function mf_btn() {
    if (MU_range('X') || MU_range('movie_finish_BTN_againExam')) {
        soundreplay('select');
        if (choose_task_num == 1) {
            myImages_image.length = 174;
            myImages_link1.length = 24;
        } else {
            myImages_image.length = 222;
            myImages_link1.length = 14;
        }
        page = 'answer_page';
    } else if (MU_range('movie_finish_BTN_next')) {
        soundreplay('select');
        choose_task_num++;
        if (choose_task_num == 6) {
           GameState(GS_MOVIE);
        } else {
           GameState(GS_TASK);
        }
    } else if (MU_range('movie_finish_BTN_againMovie')) {
        soundreplay('select');
        //choose_task_num = 1;
        GameState(GS_MOVIE);
    } else if (MU_range('left_BTN')) {
        soundreplay('select');
        //alert(myImages_link1[25]);
        if (choose_task_num != 1) {
            if (myImages_link1[25] == 'mf_Q1') {
                myImages_link1.splice(25, 2, 'mf_Q3', 'choose3_' + player_ans[2]);
                if (player_correct[2] == true) {
                    myImages_link1.splice(23, 2, 'small_STAR0_3', 'small_STAR1_3');
                } else {
                    myImages_link1.splice(23, 2,'small_STAR0_3', 'empty');
                }
            } else if (myImages_link1[25] == 'mf_Q2') {
                myImages_link1.splice(25, 2, 'mf_Q1', 'choose1_' + player_ans[0]);
                if (player_correct[0] == true) {
                    myImages_link1.splice(23, 2, 'small_STAR0_1', 'small_STAR1_1');
                } else {
                    myImages_link1.splice(23, 2, 'small_STAR0_1', 'empty');
                }
            } else if (myImages_link1[25] == 'mf_Q3') {
                myImages_link1.splice(25, 2, 'mf_Q2', 'choose2_' + player_ans[1]);
                if (player_correct[1] == true) {
                    myImages_link1.splice(23, 2, 'small_STAR0_2', 'small_STAR1_2');
                } else {
                    myImages_link1.splice(23, 2, 'small_STAR0_2', 'empty');
                }
            }
        }
    } else if (MU_range('right_BTN')) {
        soundreplay('select');
        //alert(myImages_link1[25]);
        if (choose_task_num != 1) {
            if (myImages_link1[25] == 'mf_Q1') {
                myImages_link1.splice(25, 2, 'mf_Q2', 'choose2_' + player_ans[1]);
                if (player_correct[1] == true) {
                    myImages_link1.splice(23, 2, 'small_STAR0_2', 'small_STAR1_2');
                } else {
                    myImages_link1.splice(23, 2, 'small_STAR0_2', 'empty');
                }
            } else if (myImages_link1[25] == 'mf_Q2') {
                myImages_link1.splice(25, 2, 'mf_Q3', 'choose3_' + player_ans[2]);
                if (player_correct[2] == true) {
                    myImages_link1.splice(23, 2, 'small_STAR0_3', 'small_STAR1_3');
                } else {
                    myImages_link1.splice(23, 2, 'small_STAR0_3', 'empty');
                }
            } else if (myImages_link1[25] == 'mf_Q3') {
                myImages_link1.splice(25, 2, 'mf_Q1', 'choose1_' + player_ans[0]);
                if (player_correct[0] == true) {
                    myImages_link1.splice(23, 2, 'small_STAR0_1', 'small_STAR1_1');
                } else {
                    myImages_link1.splice(23, 2, 'small_STAR0_1', 'empty');
                }
            }
        }
    }
}
function lc_task_title() {
    title_path = '';
    graph_path = '';
    if (choose_task_num < 12 || (choose_task_num > 28 && choose_task_num < 32)) {
        title_path = 'img/task_p_title.png';
    } else if ((choose_task_num >= 12 && choose_task_num < 20) || (choose_task_num > 31 && choose_task_num < 35)) {
        title_path = 'img/task_p_title_DX.png';
    } else if ((choose_task_num >= 20 && choose_task_num < 28) || (choose_task_num > 34 && choose_task_num < 38)) {
        title_path = 'img/task_p_title_DSE.png';
    }
    if (choose_task_num == 2 || choose_task_num == 13 || choose_task_num == 21) {
        graph_path = 'img/road_simple1.png';
        simple1_XY();
        input_stone_ar();
    } else if (choose_task_num == 3 || choose_task_num == 14 || choose_task_num == 22) {
        graph_path = 'img/road_simple2.png';
        simple2_XY();
        input_stone_ar();
    } else if (choose_task_num == 4 || choose_task_num == 15 || choose_task_num == 23) {
        graph_path = 'img/road_simple3.png';
        simple3_XY();
        input_stone_ar();
    } else if (choose_task_num == 7 || choose_task_num == 17 || choose_task_num == 25) {
        graph_path = 'img/road_middle1.png';
        middle1_XY();
        input_stone_ar();
    } else if (choose_task_num == 9 || choose_task_num == 18 || choose_task_num == 26) {
        graph_path = 'img/road_middle2.png';
        middle2_XY();
        input_stone_ar();
    } else if (choose_task_num == 11 || choose_task_num == 19 || choose_task_num == 27) {
        graph_path = 'img/road_middle3.png';
        middle3_XY();
        input_stone_ar();
    } else if (choose_task_num == 29 || choose_task_num == 32 || choose_task_num == 35) {
        graph_path = 'img/road_hard1.png';
        hard1_XY();
        input_stone_ar();
    } else if (choose_task_num == 30 || choose_task_num == 33 || choose_task_num == 36) {
        graph_path = 'img/road_hard2.png';
        hard2_XY();
        input_stone_ar();
    } else if (choose_task_num == 31 || choose_task_num == 34 || choose_task_num == 37) {
        graph_path = 'img/road_hard3.png';
        hard3_XY();
        input_stone_ar();
    }
    if (choose_task_num < 12 || (choose_task_num > 28 && choose_task_num < 32)) {
        lc_task();
    } else if ((choose_task_num > 11 && choose_task_num < 20) || (choose_task_num > 31 && choose_task_num < 35)) {
        if (page == 'task_help' || page == 'task_help_ans' || page == 'task_help_prompt' || page == 'task_help_board' || page == 'lc_task_DX') {
            for (var i = 0; i < map_data[4].ob_node.length; i++) {
                stone_ar.splice(find_value_loc(stone_ar, map_data[4].ob_node[i]), 1);
            }
            title_path = 'img/task_p_title_X.png';
            lc_task();
        } else {
            print_little_ar = new Array();
            lc_task_DX();
        }
    } else if ((choose_task_num > 19 && choose_task_num < 28) || (choose_task_num > 34 && choose_task_num < 38)) {
        if (page == 'task_help' || page == 'task_help_ans' || page == 'task_help_prompt' || page == 'task_help_board' || page == 'lc_task_DSE') {
            title_path = 'img/task_p_title_startend.png';
            lc_task();
        } else {
            print_little_ar = new Array();
            lc_task_DSE();
        }
    }
}
function lc_task_DX() {
    page = 'lc_task_DX';
    draw_text_ar = new Array();
    myImages_image = new Array('bg1', 'img/BG1.png', 0, 0, 1, 1, 'cp_space', 'img/cp_space.png', 60, 149, 1, 1,
        'lg_facecycle', 'img/lg_facecycle.png', 36, 37, 1, 1, 'cp_BTN_backhome', 'img/cp_BTN_backhome.png', 542, 38, 1, 1,
        'title', title_path, 122, 176, 1, 1, 'mark_ob_edge', 'img/mark_ob_edge.png', 0, 0, 1, 1,
        'mark_ob_node', 'img/mark_ob_node.png', 0, 0, 1, 1, 'graph', graph_path, 80, 320, 0.85, 0.85,
        'task_p_BTN_sure', 'img/task_p_BTN_sure.png', 576, 932, 1, 1,
        'task_p_title_DX_node_BTN', 'img/task_p_title_DX_node_BTN.png', 208, 266, 1, 1,
        'task_p_title_DX_edge_BTN', 'img/task_p_title_DX_edge_BTN.png', 424, 266, 1, 1,
        'empty', 'img/empty.png', 0, 0, 1, 1);
    myImages_link1 = new Array('bg1', 'cp_space', 'cp_BTN_backhome', 'title', 'lg_facecycle', 'lg_G1', 'graph', 'task_p_BTN_sure',
        'task_p_title_DX_node_BTN', 'task_p_title_DX_edge_BTN');
    myImages_link2 = new Array();
    input_face(5);
    initimage();
}
function MD_DX() {
    if (MD_range('task_p_title_DX_node_BTN')) {
        var DX_node_ob = new Object({ name: 'mark_ob_node', x: event.clientX - 19, y: event.clientY - 19 });
        print_little_ar.push(DX_node_ob);
        MD_check_DX_num = print_little_ar.length - 1;
        move_who = print_little_ar[MD_check_DX_num];
    } else if (MD_range('task_p_title_DX_edge_BTN')) {
        var DX_edge_ob = new Object({ name: 'mark_ob_edge', x: event.clientX - 25, y: event.clientY - 52 });
        print_little_ar.push(DX_edge_ob);
        MD_check_DX_num = print_little_ar.length - 1;
        move_who = print_little_ar[MD_check_DX_num];
    }else if (check_MD_DX()) {
        move_who = print_little_ar[MD_check_DX_num];
    } 
}
function check_MD_DX(){
    var MD_X = mouse[0].x;
    var MD_Y = mouse[0].y;
    var return_val=false;
    if (check_map_collide(map_data[9], MD_X, MD_Y)) {
        for (var i = 0; i < print_little_ar.length; i++) {
            if (print_little_ar[i].name == 'mark_ob_node' && no == print_little_ar[i].no) {
                return_val = true;
                MD_check_DX_num = i;
                break;
            }
        }
    }
    if (check_map_collide(map_data[10], MD_X, MD_Y)) {
        for (var i = 0; i < print_little_ar.length; i++) {
            if (print_little_ar[i].name == 'mark_ob_edge' && no == print_little_ar[i].no) {
                return_val = true;
                MD_check_DX_num = i;
                break;
            }
        }
    }
    return return_val;
}
function MM_DX() {
    if (move_who != '') {
        if (move_who.name == 'mark_ob_node') {
            move_who.x = event.clientX - 19;
            move_who.y = event.clientY - 19;
        } else if (move_who.name == 'mark_ob_edge') {
            move_who.x = event.clientX - 25;
            move_who.y = event.clientY - 52;
        }
    }
}
function lc_task_DX_btn() {
    var MU_X = mouse[mouse.length - 1].x;
    var MU_Y = mouse[mouse.length - 1].y;
    if (move_who != '') {
        if (move_who.name == 'mark_ob_node' && check_map_collide(map_data[9], MU_X, MU_Y)) {
            move_who.x = map_data[9][no].x - 19;
            move_who.y = map_data[9][no].y - 19;
            move_who.no = no;
            move_who = '';
            if (print_little_ar.length > 1) {
                for (var i = 0; i < print_little_ar.length; i++) {
                    if (print_little_ar[i].no == no && print_little_ar[i].name == 'mark_ob_node' && i != MD_check_DX_num) {
                        print_little_ar.pop();
                        break;
                    }
                }
            }
        } else if (move_who.name == 'mark_ob_edge' && check_map_collide(map_data[10], MU_X, MU_Y)) {
            move_who.x = map_data[10][no].x - 25;
            move_who.y = map_data[10][no].y - 52;
            move_who.no = no;
            move_who = '';
            if (print_little_ar.length > 1) {
                for (var i = 0; i < print_little_ar.length; i++) {
                    if (print_little_ar[i].no == no && print_little_ar[i].name == 'mark_ob_edge' && i != MD_check_DX_num) {
                        print_little_ar.pop();
                        break;
                    }
                }
            }
        } else {
            print_little_ar.splice(MD_check_DX_num, 1);
            move_who = '';
        }
    }
    if (MU_range('cp_BTN_backhome')) {
        soundreplay('select');
        clearInterval(timer_int);
        timer_flag = false;
        timer = 0;
        //lc_task
        map_data = new Array();
        limit1 = new Object({ limit_TF: false, num: null, node: null });
        limit2 = new Object({ limit_TF: false, ob_node: new Array(), ob_edge: new Array() });
        limit3 = new Object({ limit_TF: false, SE: null, S: null, E: null });
        playpage_node = new Array();
        playpage_edge = new Array();
        node_connect = new Object();
        edge_connect = new Object();

        play_start = null;
        play_end = null;
        next = new Array();
        new_next = new Array();
        step_ar = new Array();
        step_obj = new Object({ step: 0, step_no: null });
        step = 0;
        visit = new Array();
        draw_line_flat = false;
        draw_type = new Array();//false=circle,true=line
        circle_line = new Array();
        no1 = null;
        no2 = null;
        circle_count = null;

        node = new Array();
        edge = new Array();
        node_connect = new Object();
        edge_connect = new Object();
        circle_line = new Array();
        print_little_ar = new Array();
        draw_lc_task_help_ans = new Array();
        draw_point_ar = new Array();
        draw_line_ar = new Array();
        draw_circle_ar = new Array();
        poto_painter.length = 0;
        GameState(GS_BACKHOME);
    } else if (MU_range('lg_facecycle')) {
        soundreplay('select');
        clearInterval(timer_int);
        timer_flag = false;
        timer = 0;
        //lc_task
        map_data = new Array();
        limit1 = new Object({ limit_TF: false, num: null, node: null });
        limit2 = new Object({ limit_TF: false, ob_node: new Array(), ob_edge: new Array() });
        limit3 = new Object({ limit_TF: false, SE: null, S: null, E: null });
        playpage_node = new Array();
        playpage_edge = new Array();
        node_connect = new Object();
        edge_connect = new Object();

        play_start = null;
        play_end = null;
        next = new Array();
        new_next = new Array();
        step_ar = new Array();
        step_obj = new Object({ step: 0, step_no: null });
        step = 0;
        visit = new Array();
        draw_line_flat = false;
        draw_type = new Array();//false=circle,true=line
        circle_line = new Array();
        no1 = null;
        no2 = null;
        circle_count = null;

        node = new Array();
        edge = new Array();
        node_connect = new Object();
        edge_connect = new Object();
        circle_line = new Array();

        draw_point_ar = new Array();
        draw_line_ar = new Array();
        draw_circle_ar = new Array();
        poto_painter.length = 0;
        GameState(GS_LEARNGOAL);
    } else if (MU_range('task_p_BTN_sure')) {
        if (print_little_ar.length != 0) {
            title_path = 'img/task_p_title_X.png';
            for (var i = 0; i < print_little_ar.length; i++) {
                if (print_little_ar[i].name == 'mark_ob_node') {
                    stone_ar.splice(find_value_loc(stone_ar, print_little_ar[i].no), 1);
                }
            }
            limit2.limit_TF = true;
            limit2.ob_edge = new Array();
            limit2.ob_node = new Array();
            for (var i = 0; i < print_little_ar.length; i++) {
                if (print_little_ar[i].name == 'mark_ob_node') {
                    if (limit2.ob_node == null) {
                        limit2.ob_node = new Array();
                    }
                    limit2.ob_node.push(print_little_ar[i].no);
                } else if (print_little_ar[i].name == 'mark_ob_edge') {
                    if (limit2.ob_edge == null) {
                        limit2.ob_edge = new Array();
                    }
                    limit2.ob_edge.push(print_little_ar[i].no);
                }
            }
            map_data[4] = limit2;
            check_have_ans();
            //GameState(GS_TASK);
        } else {
            alert("請至少放置一個障礙以進行關卡");
        }
    }
}
function lc_task_DSE() {
    page = 'lc_task_DSE';
    draw_text_ar = new Array();
    myImages_image = new Array('bg1', 'img/BG1.png', 0, 0, 1, 1, 'cp_space', 'img/cp_space.png', 60, 149, 1, 1,
        'lg_facecycle', 'img/lg_facecycle.png', 36, 37, 1, 1, 'cp_BTN_backhome', 'img/cp_BTN_backhome.png', 542, 38, 1, 1,
        'title', title_path, 122, 176, 1, 1, 'mark_start', 'img/mark_start.png', 0, 0, 1, 1, 
        'mark_end', 'img/mark_end.png', 0, 0, 1, 1, 'graph', graph_path, 80, 320, 0.85, 0.85,
        'task_p_BTN_sure', 'img/task_p_BTN_sure.png', 576, 932, 1, 1,
        'task_p_title_DSE_start_BTN', 'img/task_p_title_DSE_start_BTN.png', 208, 266, 1, 1,
        'task_p_title_DSE_end_BTN', 'img/task_p_title_DSE_end_BTN.png', 424, 266, 1, 1,
        'empty', 'img/empty.png', 0, 0, 1, 1);
    myImages_link1 = new Array('bg1', 'cp_space', 'cp_BTN_backhome', 'title', 'lg_facecycle', 'lg_G1', 'graph', 'task_p_BTN_sure',
        'task_p_title_DSE_start_BTN', 'task_p_title_DSE_end_BTN','empty');
    myImages_link2 = new Array();
    print_little_ar = new Array({ name: 'mark_start', x: 354, y: 273 ,no:null}, { name: 'mark_end', x: 573, y: 272 ,no:null});
    input_face(5);
    initimage();
}
function MD_DSE() {
    if (MD_range('task_p_title_DSE_start_BTN')) {
        MD_check_DSE_num = 0;
        move_who = print_little_ar[MD_check_DSE_num];
    } else if (MD_range('task_p_title_DSE_end_BTN')) {
        MD_check_DSE_num = 1;
        move_who = print_little_ar[MD_check_DSE_num];
    } else if (check_MD_DSE()) {
        //alert("A");
        move_who = print_little_ar[MD_check_DSE_num];
    }
}
function check_MD_DSE() {
    var MD_X = mouse[0].x;
    var MD_Y = mouse[0].y;
    var return_val = false;
    if (check_map_collide(map_data[9], MD_X, MD_Y)) {
        if (no == print_little_ar[0].no) {
            MD_check_DSE_num = 0;
            return_val = true;
        } if (no == print_little_ar[1].no) {
            MD_check_DSE_num = 1;
            return_val = true;
        }
    }
    return return_val;
}
function MM_DSE() {
    if (move_who != '') {
        if (move_who.name == 'mark_start') {
            move_who.x = event.clientX;
            move_who.y = event.clientY - 45;
        } else if (move_who.name == 'mark_end') {
            move_who.x = event.clientX;
            move_who.y = event.clientY - 45;
        }
    }
}
function lc_task_DSE_btn() {
    var MU_X = mouse[mouse.length - 1].x;
    var MU_Y = mouse[mouse.length - 1].y;
    if (move_who != '') {
        if (check_map_collide(map_data[9], MU_X, MU_Y)) {
            if (move_who.name == 'mark_start') {
                move_who.x = map_data[9][no].x - 10;
                move_who.y = map_data[9][no].y - 45;
                move_who.no = no;
                move_who = '';
            } else if (move_who.name == 'mark_end') {
                move_who.x = map_data[9][no].x - 10;
                move_who.y = map_data[9][no].y - 45;
                move_who.no = no;
                move_who = '';
            }
        } else {
            if (move_who.name == 'mark_start') {
                print_little_ar[0].no = '';
                print_little_ar[0].x = 354;
                print_little_ar[0].y = 273;
                move_who = '';
            } else if (move_who.name == 'mark_end') {
                print_little_ar[1].no = '';
                print_little_ar[1].x = 573;
                print_little_ar[1].y = 272;
                move_who = '';
            }
        }
    }
    if (MU_range('cp_BTN_backhome')) {
        soundreplay('select');
        clearInterval(timer_int);
        timer_flag = false;
        timer = 0;
        //lc_task
        map_data = new Array();
        limit1 = new Object({ limit_TF: false, num: null, node: null });
        limit2 = new Object({ limit_TF: false, ob_node: new Array(), ob_edge: new Array() });
        limit3 = new Object({ limit_TF: false, SE: null, S: null, E: null });
        playpage_node = new Array();
        playpage_edge = new Array();
        node_connect = new Object();
        edge_connect = new Object();

        play_start = null;
        play_end = null;
        next = new Array();
        new_next = new Array();
        step_ar = new Array();
        step_obj = new Object({ step: 0, step_no: null });
        step = 0;
        visit = new Array();
        draw_line_flat = false;
        draw_type = new Array();//false=circle,true=line
        circle_line = new Array();
        no1 = null;
        no2 = null;
        circle_count = null;

        node = new Array();
        edge = new Array();
        node_connect = new Object();
        edge_connect = new Object();
        circle_line = new Array();
        draw_lc_task_help_ans = new Array();
        draw_point_ar = new Array();
        draw_line_ar = new Array();
        draw_circle_ar = new Array();
        poto_painter.length = 0;
        print_little_ar = new Array();
        GameState(GS_BACKHOME);
    } else if (MU_range('lg_facecycle')) {
        soundreplay('select');
        clearInterval(timer_int);
        timer_flag = false;
        timer = 0;
        //lc_task
        map_data = new Array();
        limit1 = new Object({ limit_TF: false, num: null, node: null });
        limit2 = new Object({ limit_TF: false, ob_node: new Array(), ob_edge: new Array() });
        limit3 = new Object({ limit_TF: false, SE: null, S: null, E: null });
        playpage_node = new Array();
        playpage_edge = new Array();
        node_connect = new Object();
        edge_connect = new Object();

        play_start = null;
        play_end = null;
        next = new Array();
        new_next = new Array();
        step_ar = new Array();
        step_obj = new Object({ step: 0, step_no: null });
        step = 0;
        visit = new Array();
        draw_line_flat = false;
        draw_type = new Array();//false=circle,true=line
        circle_line = new Array();
        no1 = null;
        no2 = null;
        circle_count = null;

        node = new Array();
        edge = new Array();
        node_connect = new Object();
        edge_connect = new Object();
        circle_line = new Array();

        draw_point_ar = new Array();
        draw_line_ar = new Array();
        draw_circle_ar = new Array();
        poto_painter.length = 0;
        print_little_ar = new Array();
        GameState(GS_LEARNGOAL);
    } else if (MU_range('task_p_BTN_sure')) {
        if (print_little_ar[0].no != null && print_little_ar[1].no != null) {
            limit3.limit_TF = true;
            limit3.S = print_little_ar[0].no;
            limit3.E = print_little_ar[1].no;
            map_data[5] = limit3;
            check_have_ans();
            //GameState(GS_TASK);
        } else {
            alert("請放置起點和終點以進行關卡");
        }
    }
}
/*function load_ani() {
    if (!check_same(myImages_image, 'load1')) {
        myImages_image.push('load1', 'img/load1.png', 0, 0, 1, 1, 'load2', 'img/load2.png', 0, 0, 1, 1, 'load3', 'img/load3.png', 0, 0, 1, 1);
    }small_ani_flag = true;
    initimage();
    small_ani_ar = new Array('load1', 'load1', 'load1', 'load1', 'load2', 'load2', 'load2', 'load2', 'load3', 'load3', 'load3', 'load3');
    small_ani_chg_location = new Array();
    small_ani_chg_location.push(10);
    small_ani_count = new Array();
    small_ani_count.push(0, 12);
    small_ani();
    //draw();
    alert("DD");
    //check_have_ans();
}*/
function check_have_ans() {
    //load_ani();
    check_ans_ar = new Array(map_data[7], map_data[8], map_data[3].num, map_data[3].node, map_data[4].ob_node, map_data[4].ob_edge, map_data[5].SE, map_data[5].S, map_data[5].E);
    for (var i = 0; i < check_ans_ar.length; i++) {
        ta.textContent += check_ans_ar[i] + "\n";
    }
    if (check1(check_ans_ar[0], check_ans_ar[1], check_ans_ar[2], check_ans_ar[3], check_ans_ar[4], check_ans_ar[5], check_ans_ar[6], check_ans_ar[7], check_ans_ar[8])) {
        alert("題目有解\nhave ans");
        small_ani_flag = false;
        //alert("draw_path" + draw_lc_task_help_ans);
        GameState(GS_TASK);
    } else {
        alert("題目無解請繼續編輯!\nno ans");
        small_ani_flag = false;
        //alert("first_bad_vertex" + check_ans_ar[4]);
        //alert("first_bad_edge" + check_ans_ar[5]);        
    }
}
function lc_task() {
    var from = page;
    //alert('lc_task');
    page = 'lc_task';
    myImages_image = new Array('bg1', 'img/BG1.png', 0, 0, 1, 1, 'cp_space', 'img/cp_space.png', 60, 149, 1, 1, 'lg_facecycle', 'img/lg_facecycle.png', 36, 37, 1, 1,
        'cp_BTN_backhome', 'img/cp_BTN_backhome.png', 542, 38, 1, 1, 'collect_stone', 'img/task_p_stone.png', 26, 920, 1, 1, 'title', title_path, 122, 176, 1, 1,
        'help_BTN', 'img/task_p_BTN_help.png', 234, 932, 1, 1, 'back_BTN', 'img/task_p_BTN_back.png', 405, 932, 1, 1, 'clear_BTN', 'img/task_p_BTN_clear.png', 576, 932, 1, 1,
        'graph', graph_path, 80, 320, 0.85, 0.85,'mark_startend', 'img/mark_startend.png', 574, 158, 1.5, 1.5,'empty','img/empty.png',0,0,1,1
        );
    myImages_link1 = new Array('bg1', 'cp_space', 'cp_BTN_backhome', 'title', 'lg_facecycle', 'lg_G1', 'graph', 'collect_stone', 
        'help_BTN', 'back_BTN', 'clear_BTN');
    myImages_link2 = new Array();
    input_face(5);
    help_func();
    if (from != 'task_help' && from != 'learn_goal' && from != 'task_help_prompt' && from != 'task_help_ans' && from != 'task_help_board') {
        timer = 0;
    }
    var min = 0;
    var sec = 0;
    min = Math.floor(timer / 60);
    sec = timer % 60;
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    timer_flag = true;
    draw_text_ar = new Array(min + ' : ' + sec, 288, 110, "bolder 48pt 微軟正黑體", "#ff0000", "#ff0000");
    timer_int = setInterval(timer_func, 1000);
    dead_node_conn = new Array();
    for (var i = 0; i < map_data[9].length; i++) {
        var temp = new Array();
        for (var j = 0; j < node_connect[i].length; j++) {
            temp[j] = node_connect[i][j];
        }
        dead_node_conn[i] = temp;
    }
    if (from == 'lc_task_DSE') {
        play_start = map_data[5].S;
        play_end = map_data[5].E;
    }
    initimage();
}
function help_func() {
    myImages_image.length = 78;
    myImages_link1.length = 11;
    if (help_type_ar[3 * (choose_task_num - 1)] == true) {
        myImages_image.push('board_close_BTN', 'img/help_board_close_BTN.png', 693, 182, 1, 1, 'board_open_BTN', 'img/help_board_open_BTN.png', 693, 182, 1, 1,
            'board_pen_BTN', 'img/help_board_pen_BTN.png', 707, 320, 1, 1, 'board_eraser_BTN', 'img/help_board_eraser.png', 707, 386, 1, 1, 'board_return_BTN', 'img/help_board_return_BTN.png', 707, 452, 1, 1, 'board_clear_BTN', 'img/help_board_clear_BTN.png', 707, 518, 1, 1
            );
    } else {
        myImages_image.push('board_close_BTN', 'img/empty.png', 0, 0, 1, 1, 'board_open_BTN', 'img/empty.png', 0, 0, 1, 1,
            'board_pen_BTN', 'img/empty.png', 0, 0, 1, 1, 'board_eraser_BTN', 'img/empty.png', 0, 0, 1, 1, 'board_return_BTN', 'img/empty.png', 0, 0, 1, 1, 'board_clear_BTN', 'img/empty.png', 0, 0, 1, 1);
    }
    if (help_type_ar[3 * (choose_task_num - 1) + 1] == true) {
        myImages_image.push('prompt_BTN', 'img/help_prompt_BTN.png', 0, 426, 1, 1, 'prompt_page', 'img/help_prompt_' + choose_task_num + '.png', 0, 0, 1, 1, 'prompt_X', 'img/X.png', 658, 32, 1, 1);
    } else {
        myImages_image.push('prompt_BTN', 'img/empty.png', 0, 0, 1, 1, 'prompt_page', 'img/empty.png', 0, 0, 1, 1, 'prompt_X', 'img/empty.png', 0, 0, 1, 1);
    }
    if (help_type_ar[3 * (choose_task_num - 1) + 2] == true) {
        myImages_image.push('ans_BTN', 'img/help_ans_BTN.png', 0, 243, 1, 1, 'ans_page', 'img/help_ans_' + choose_task_num + '.png', 0, 0, 1, 1, 'ans_X', 'img/X.png', 658, 32, 1, 1);
    } else {
        myImages_image.push('ans_BTN', 'img/empty.png', 0, 243, 1, 1, 'ans_page', 'img/empty.png', 0, 0, 1, 1, 'ans_X', 'img/empty.png', 658, 32, 1, 1);
    }
    myImages_link1.push('board_close_BTN', 'empty', 'empty', 'empty', 'empty', 'prompt_BTN', 'empty', 'empty', 'ans_BTN', 'empty', 'empty');
}
function timer_func() {
    if (page == 'lc_task') {
        if (timer_flag == true) {
            var min = 0;
            var sec = 0;
            timer++;
            min = Math.floor(timer / 60);
            sec = timer % 60;
            if (sec < 10) {
                sec = "0" + sec;
            }
            if (min < 10) {
                min = "0" + min;
            }
            draw_text_flag = true;
            draw_text_ar = new Array(min + ' : ' + sec, 288, 110, "bolder 48pt 微軟正黑體", "#ff0000", "#ff0000");
        }
        initimage();
        draw();
    }
}
function MD_lc_task() {
    var MD_X = mouse[0].x;
    var MD_Y = mouse[0].y;
        if (step == 0) {
            if (play_start != null) {
                if (check_map_collide(map_data[9], MD_X, MD_Y)) {
                    if (no == play_start) {
                        soundreplay('select');
                        draw_line_flat = true;
                        draw_point();
                        no1 = no;
                    }
                }
            } else {
                if (check_map_collide(map_data[9], MD_X, MD_Y)) {
                    if (/*no != map_data[4].ob_node&&*/ !check_same(map_data[4].ob_node, no) && no != map_data[3].node) {
                        draw_line_flat = true;
                        soundreplay('select');
                        draw_point();
                        no1 = no;
                        play_start = no;
                        play_end = no;
                    }
                }
            }
        } else {
            if (check_map_collide(map_data[9], MD_X, MD_Y)) {
                if (no == visit[visit.length - 1]) {
                    draw_line_flat = true;
                    draw_VR_flat = true;
                    next = map_data[7][no];
                    no1 = no;
                }
            }
        }
}
function check_map_collide(ar, x, y) {
    var a;
    var b;
    no = null;
    for (var i = 0; i < ar.length; i++) {
        a = x - ar[i].x;
        b = y - ar[i].y;
        if (Math.sqrt(a * a + b * b) <= 25) {
            no = i;
        }
    } if (no != null) {
        return true;
    } else {
        return false;
    }
}
function MM_task() {
    var MM_X = mouse[mouse.length - 1].x;
    var MM_Y = mouse[mouse.length - 1].y;
    if (draw_line_flat == true) {
        if (check_map_collide(map_data[9], MM_X, MM_Y)) {
            if (check_new_next(no)) {
                soundreplay('select');
                //soundreplay('walk');
                no2 = no;
                draw_circle_or_line();
                last_node = no1;
                no1 = no;
                draw_point();
                if (check_finish_new()) {
                    //put_win(map_data[0]);
                    no2 = no;
                    draw_circle_or_line();
                    draw();
                    //alert("FINISH!!\n恭喜過關!!你太棒了!!");
                    clearInterval(timer_int);
                    if (now_open < choose_task_num) {
                        now_open++;
                    }
                    GameState(GS_TASK_FINISH);
                    timer = 0;
                    //GameState(GS_HOMEPAGE_MOVIE);>改成TASK_FINISH
                } else {
                    if (new_next.length == 0 || check_dead()) {
                        draw_line_flat = false;
                        draw();
                        alert("Blind alley!!\n你走到死路囉!!\n你可以按退回或是清除繼續遊戲!");
                    }
                }
            }
        }
    }
    if (draw_VR_flat == true) {
        if (mouse.length <= 1) {
            draw_VR_path.push({ s_x: MM_X, s_y: MM_Y, x: MM_X, y: MM_Y });
        } else {
            draw_VR_path.push({ s_x: mouse[mouse.length - 2].x, s_y: mouse[mouse.length - 2].y, x: MM_X, y: MM_Y });
        }
    }
}
function help_prompt_btn() {
    if (MU_range('prompt_X')) {
        soundreplay('put');
        GameState(GS_TASK);
    }
}
function help_ans_btn() {
    if (MU_range('ans_X')) {
        soundreplay('put');
        draw_ans_flat = false;
        GameState(GS_TASK);
    }
}
function MU_board() {
    if (poto_flat == true) {
        poto_flat = false;
    }
    if (MU_range('board_clear_BTN')) {
        soundreplay('select');
        poto_painter.length = 0;
    } else if (MU_range('board_return_BTN')) {
        soundreplay('select');
        if (poto_painter.length > 100) {
            poto_painter.length -= 100;
        } else {
            poto_painter.length = 0;
        }
    }
    else if (MU_range('board_pen_BTN')) {
        soundreplay('select');
        poto_state = 'pen';
    } else if (MU_range('board_eraser_BTN')) {
        soundreplay('select');
        poto_state = 'e';
    } else if (MU_range('board_open_BTN')) {
        soundreplay('select');
        board_flat = false;
        GameState(GS_TASK);
    }
}
function MD_board() {
    //alert("MD_BOARD");
    poto_flat = true;
}
function MM_board() {
    if (poto_flat == true) {
        var MM_X = mouse[mouse.length - 1].x;
        var MM_Y = mouse[mouse.length - 1].y;
        if (poto_state == 'pen') {
            if (mouse.length <= 1) {
                poto_painter.push({ s_x: MM_X, s_y: MM_Y, x: MM_X, y: MM_Y });
            } else {
                poto_painter.push({ s_x: mouse[mouse.length - 2].x, s_y: mouse[mouse.length - 2].y, x: MM_X, y: MM_Y });
            }
        } else if (poto_state == 'e') {
            if (check_map_collide(poto_painter, MM_X, MM_Y)) {
                poto_painter.splice(no, 1);
            }
        }
    }
}
function lc_task_btn() {
    var MU_X = mouse[mouse.length - 1].x;
    var MU_Y = mouse[mouse.length - 1].y;
    draw_VR_flat = false;
    draw_VR_path.length = 0;
    if (draw_line_flat == true) {
        draw_line_flat = false;
    } else {
        if (MU_range('cp_BTN_backhome')) {
            soundreplay('select');
            clearInterval(timer_int);
            timer_flag = false;
            timer = 0;
            //lc_task
            map_data = new Array();
            limit1 = new Object({ limit_TF: false, num: null, node: null });
            limit2 = new Object({ limit_TF: false, ob_node:new Array(), ob_edge: new Array() });
            limit3 = new Object({ limit_TF: false, SE: null, S: null, E: null });
            playpage_node = new Array();
            playpage_edge = new Array();
            node_connect = new Object();
            edge_connect = new Object();

            play_start = null;
            play_end = null;
            next = new Array();
            new_next = new Array();
            step_ar = new Array();
            step_obj = new Object({ step: 0, step_no: null });
            step = 0;
            visit = new Array();
            draw_line_flat = false;
            draw_type = new Array();//false=circle,true=line
            circle_line = new Array();
            no1 = null;
            no2 = null;
            circle_count = null;

            node = new Array();
            edge = new Array();
            node_connect = new Object();
            edge_connect = new Object();
            circle_line = new Array();

            draw_point_ar = new Array();
            draw_line_ar = new Array();
            draw_circle_ar = new Array();
            poto_painter.length = 0;
            print_little_ar = new Array();
            GameState(GS_BACKHOME);
        } else if (MU_range('lg_facecycle')) {
            soundreplay('select');
            clearInterval(timer_int);
            timer_flag = false;
            timer = 0;
            //lc_task
            map_data = new Array();
            limit1 = new Object({ limit_TF: false, num: null, node: null });
            limit2 = new Object({ limit_TF: false, ob_node: new Array(), ob_edge: new Array() });
            limit3 = new Object({ limit_TF: false, SE: null, S: null, E: null });
            playpage_node = new Array();
            playpage_edge = new Array();
            node_connect = new Object();
            edge_connect = new Object();

            play_start = null;
            play_end = null;
            next = new Array();
            new_next = new Array();
            step_ar = new Array();
            step_obj = new Object({ step: 0, step_no: null });
            step = 0;
            visit = new Array();
            draw_line_flat = false;
            draw_type = new Array();//false=circle,true=line
            circle_line = new Array();
            no1 = null;
            no2 = null;
            circle_count = null;

            node = new Array();
            edge = new Array();
            node_connect = new Object();
            edge_connect = new Object();
            circle_line = new Array();

            draw_point_ar = new Array();
            draw_line_ar = new Array();
            draw_circle_ar = new Array();
            poto_painter.length = 0;
            GameState(GS_LEARNGOAL);
        } else if (MU_range('help_BTN')) {
            soundreplay('select');
            clearInterval(timer_int);
            GameState(GS_TASK_HELP);
        } else if (MU_range('prompt_BTN')) {
            soundreplay('select');
            clearInterval(timer_int);
            draw_text_ar = new Array();
            myImages_link1.splice(17, 2, 'prompt_page', 'prompt_X');
            page = 'task_help_prompt';
        } else if (MU_range('ans_BTN')) {
            soundreplay('select');
            clearInterval(timer_int);
            draw_text_ar = new Array();
            myImages_link1.splice(20, 2, 'ans_page', 'ans_X');
            if ((choose_task_num > 12 && choose_task_num < 28) || (choose_task_num > 31)) {
                draw_ans_flat = true;
            }
            page = 'task_help_ans';
        } else if (MU_range('board_close_BTN')) {
            soundreplay('select');
            clearInterval(timer_int);
            draw_text_ar = new Array();
            myImages_link1.splice(11, 5, 'board_open_BTN', 'board_pen_BTN', 'board_eraser_BTN', 'board_return_BTN', 'board_clear_BTN');
            board_flat = true;
            page = 'task_help_board';
            loop_function = draw;

        }
        else {
            if (visit.length > 0) {
                if (MU_range('back_BTN')) {
                    soundreplay('put');
                    var new_next_copy = new Array();
                    if (draw_type[draw_type.length - 1]) {
                        draw_line_ar.pop();
                    } else if (!draw_type[draw_type.length - 1]) {
                        draw_circle_ar.pop();
                    }
                    draw_type.pop();
                    draw_point_ar.pop();
                    step--;
                    step_ar.pop();
                    visit.pop();
                    next = map_data[7][visit[visit.length - 1]];
                    new_next = new Array();
                    for (var i = 0; i < next.length; i++) {
                        new_next_copy.push(next[i]);
                    }
                    new_next = new_next_copy;
                    check_have_next();
                    draw_line_flat = false;
                    if (step == 1) {
                        play_start = null;
                        play_limit_inf();
                    }
                } else if (MU_range('clear_BTN')) {
                    soundreplay('put');
                    draw_point_ar = new Array();
                    draw_line_ar = new Array();
                    draw_circle_ar = new Array();
                    next = new Array();
                    step_ar = new Array();
                    step_obj = new Object({ step: 0, step_no: null });
                    step = 0;
                    visit = new Array();
                    draw_line_flat = false;
                    draw_type = new Array();//false=circle,true=line
                    circle_line = new Array();
                    no1 = null;
                    no2 = null;
                    circle_count = null;
                    if (map_data[5].SE == null && map_data[5].S == null && map_data[5].E == null) {
                        play_start = null;
                        play_end = null;
                    }
                    dead_node_conn = new Array();
                    for (var i = 0; i < map_data[9].length; i++) {
                        var temp = new Array();
                        for (var j = 0; j < node_connect[i].length; j++) {
                            temp[j] = node_connect[i][j];
                        }
                        dead_node_conn[i] = temp;
                    }
                }
            }
        }
    }
}
function task_finish(fin_timer) {
    //alert(myImages_image.length + ',' + myImages_link1.length);
    page = 'task_finish';
    myImages_image.length = 150;
    myImages_link1.length = 22;
    //alert(myImages_image.length + ',' + myImages_link1.length);
    myImages_image.push('gray','img/gray.png', 0, 0, 1, 1,'X','img/X.png',662,208,1,1,'cat', 'img/task_finish_cat.png', 450, 288, 1, 1,
        'task_f_bg', 'img/task_finish_bg.png', 51, 247, 1, 1,'empty','img/empty.png',0,0,1,1,
        'STAR_1', 'img/task_finish_STAR1.png', 114, 374, 1, 1, 'STAR_2', 'img/task_finish_STAR1.png', 224, 374, 1, 1, 'STAR_3', 'img/task_finish_STAR1.png', 334, 374, 1, 1,
        'again_BTN', 'img/task_finish_BTN_again.png', 286, 716, 1, 1, 'next_BTN', 'img/task_finish_BTN_next.png', 485, 716, 1, 1);
    myImages_link1.push('gray', 'task_f_bg', 'cat', 'X', 'again_BTN', 'next_BTN', 'empty', 'empty', 'empty');
    min = Math.floor(fin_timer / 60);
    sec = fin_timer % 60;
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    draw_text_ar = new Array(min + ' : ' + sec, 104, 680, "bolder 32pt 微軟正黑體", "#ff0000", "#ff0000");
    if (fin_timer < 60) {
        myImages_link1.splice(28, 3, 'STAR_1', 'STAR_2', 'STAR_3');
		lc_STAR[choose_task_num-1]=3;
    } else if (fin_timer >= 60 && fin_timer < 180) {
        myImages_link1.splice(28, 3, 'STAR_1', 'STAR_2', 'empty');
		lc_STAR[choose_task_num-1]=2;
    } else if (fin_timer > 180) {
        myImages_link1.splice(28, 3, 'STAR_1', 'empty', 'empty');
		lc_STAR[choose_task_num-1]=1;
    }
    initimage();
    draw();
}
function task_finish_btn() {
    if (MU_range('X') || MU_range('again_BTN')) {
        soundreplay('select');
        timer_flag = false;
        timer = 0;
        //lc_task
        map_data = new Array();
        limit1 = new Object({ limit_TF: false, num: null, node: null });
        limit2 = new Object({ limit_TF: false, ob_node: new Array(), ob_edge: new Array() });
        limit3 = new Object({ limit_TF: false, SE: null, S: null, E: null });
        playpage_node = new Array();
        playpage_edge = new Array();
        node_connect = new Object();
        edge_connect = new Object();

        play_start = null;
        play_end = null;
        next = new Array();
        new_next = new Array();
        step_ar = new Array();
        step_obj = new Object({ step: 0, step_no: null });
        step = 0;
        visit = new Array();
        draw_line_flat = false;
        draw_type = new Array();//false=circle,true=line
        circle_line = new Array();
        no1 = null;
        no2 = null;
        circle_count = null;

        node = new Array();
        edge = new Array();
        node_connect = new Object();
        edge_connect = new Object();
        circle_line = new Array();

        draw_point_ar = new Array();
        draw_line_ar = new Array();
        draw_circle_ar = new Array();

        draw_lc_task_help_ans = new Array();
        /*myImages_image.length = 72;
        myImages_link1.length = 11;
        page = 'lc_task';
        draw_text_ar = new Array(min + ' : ' + sec, 288, 110, "bolder 48pt 微軟正黑體", "#ff0000", "#ff0000");*/
        GameState(GS_TASK);
    } else if (MU_range('next_BTN')) {
        soundreplay('select');
        choose_task_num++;
        timer_flag = false;
            timer = 0;
            //lc_task
            map_data = new Array();
            limit1 = new Object({ limit_TF: false, num: null, node: null });
            limit2 = new Object({ limit_TF: false, ob_node: new Array(), ob_edge: new Array() });
            limit3 = new Object({ limit_TF: false, SE: null, S: null, E: null });
            playpage_node = new Array();
            playpage_edge = new Array();
            node_connect = new Object();
            edge_connect = new Object();

            play_start = null;
            play_end = null;
            next = new Array();
            new_next = new Array();
            step_ar = new Array();
            step_obj = new Object({ step: 0, step_no: null });
            step = 0;
            visit = new Array();
            draw_line_flat = false;
            draw_type = new Array();//false=circle,true=line
            circle_line = new Array();
            no1 = null;
            no2 = null;
            circle_count = null;

            node = new Array();
            edge = new Array();
            node_connect = new Object();
            edge_connect = new Object();
            circle_line = new Array();

            draw_point_ar = new Array();
            draw_line_ar = new Array();
            draw_circle_ar = new Array();
            poto_painter.length = 0;
            print_little_ar = new Array();
            if (choose_task_num != 5 && choose_task_num != 6 && choose_task_num != 8 && choose_task_num != 10 && choose_task_num != 12 && choose_task_num != 16 && choose_task_num != 20 && choose_task_num != 24 && choose_task_num != 28) {
                GameState(GS_TASK);
            } else {
                GameState(GS_MOVIE);
            }
    }
}
function task_help() {
    page = 'task_help';
    myImages_image.length=150;
    myImages_link1.length = 22;
    myImages_image.push('gray', 'img/gray.png', 0, 0, 1, 1, 'X', 'img/X.png', 658, 32, 1, 1, 'help_bg', 'img/task_help_bg.png', 24, 83, 1, 1,
        'help1', 'img/task_help_star1.png', 173, 158, 1, 1, 'help2', 'img/task_help_star2.png', 122, 264, 1, 1, 'help3', 'img/task_help_star3.png', 78, 381, 1, 1,
        'return_BTN','img/task_help_BTN_return.png',87,536,1,1,'buy_BTN','img/task_help_BTN_buy.png',447,536,1,1,
        'cost_text', 'img/task_help_cost.png', 87, 112, 1, 1,
        'red_frame1', 'img/task_help_red_frame.png', 87, 165, 1, 1, 'red_frame2', 'img/task_help_red_frame.png', 87, 273, 1, 1, 'red_frame3', 'img/task_help_red_frame.png', 87, 387, 1, 1
        );
    myImages_link1.push('gray', 'help_bg', 'red_frame1', 'cost_text', 'help1', 'help2', 'help3', 'return_BTN', 'buy_BTN', 'X');
    draw_text_ar = new Array();
    initimage();
}
function task_help_btn() {
    for (var i = 1; i < 4; i++) {
        if (MU_range('help' + i)) {
            soundreplay('select');
            myImages_link1.splice(24, 1, 'red_frame' + i);
            break;
        }
    }
    if (MU_range('X') || MU_range('return_BTN')) {
        soundreplay('select');
        GameState(GS_TASK);
    } else if (MU_range('buy_BTN')) {
        soundreplay('select');
        if (myImages_link1[24] == 'red_frame1') {
            if (help_type_ar[3 * (choose_task_num - 1)] == true) {
                alert("你已經買過這個幫助了!!");
            } else {
                //if (now_STAR >= 1) {
                    help_STAR++;
                    help_type_ar.splice(3 * (choose_task_num - 1), 1, true);
                    GameState(GS_TASK);
                /*} else {
                    alert("你累積的星星不夠買這個幫助,你可以\n將之前未滿3顆星的關卡再玩一遍來\n獲得星星");
                }*/
            }
        } else if (myImages_link1[24] == 'red_frame2') {
            if (help_type_ar[3 * (choose_task_num - 1) + 1] == true) {
                alert("你已經買過這個幫助了!!");
            } else {
                help_STAR += 2;
                help_type_ar.splice(3 * (choose_task_num - 1) + 1, 1, true);
                GameState(GS_TASK);
            }
        } else if (myImages_link1[24] == 'red_frame3') {
            if (help_type_ar[3 * (choose_task_num - 1) + 2] == true) {
                alert("你已經買過這個幫助了!!");
            } else {
                help_STAR += 3;
                help_type_ar.splice(3 * (choose_task_num - 1) + 2, 1, true);
                GameState(GS_TASK);
            }
        }
        
    }
}
function draw_circle_or_line() {
    var min = null;
    var max = null;
    if (no1 > no2) {
        min = no2;
        max = no1;
    } else {
        min = no1;
        max = no2;
    }
    if (check_circle_or_line(min, max)) {//line
        draw_type.push(true);
        get_a_new_line();
    } else {//circle
        draw_type.push(false);
        draw_circle_ar.push(map_data[11][circle_count]);
    }
}
function draw_point() {
    var new_next_copy = new Array();
    draw_point_ar.push({ x: map_data[9][no].x, y: map_data[9][no].y });
    step_obj.step = step;
    step_obj.step_no = no;
    step_ar.push(step_obj);
    step++;
    visit.push(no);
    next = map_data[7][no];
    new_next = new Array();
    for (var i = 0; i < next.length; i++) {
        new_next_copy.push(next[i]);
    }
    new_next = new_next_copy;
    check_have_next();
    draw_VR_path.length = 0;
    draw_VR_flat = true;
    //del_ar(stone_ar, no);
}
function get_a_new_line() {
    draw_line_ar.push({
        startX: map_data[9][no1].x, startY: map_data[9][no1].y,
        endX: map_data[9][no2].x, endY: map_data[9][no2].y
    });
}
function check_dead() {
    var you_dead = false;
    /*alert(last_node + "," + no2);
    alert(visit);
    dead_node_conn[last_node].splice(find_value_loc(dead_node_conn[last_node], no2), 1);
    dead_node_conn[no2].splice(find_value_loc(dead_node_conn[no2], last_node), 1);
    for (var i = 0; i < dead_node_conn.length; i++) {
        if (dead_node_conn[i].length == 1) {
            if (check_visit(i) && i != play_end) {
                dead_node_conn[dead_node_conn[i][0]].splice(find_value_loc(dead_node_conn[dead_node_conn[i][0]], i), 1);
                dead_node_conn[i].length = 0;
            }
        }
    } alert(dead_node_conn[0] + '/' + dead_node_conn[1] + '/' + dead_node_conn[2] + '/' + dead_node_conn[3] + '/' + dead_node_conn[4] + '/' + dead_node_conn[5] + '/');
    for (var i = 0; i < dead_node_conn.length; i++) {
        if (dead_node_conn[i].length == 1) {
            if (!check_visit(i) && i != play_end) {
                alert("D1");
                you_dead = true;
            } else if (i == play_end) {
                alert("D2");
                you_dead = true;
            }
        } else if (dead_node_conn[i].length == 0) {
            if (i == play_end) {
                alert("D2");
                you_dead = true;
            }
        }
    }*/
    return you_dead;
}
function find_value_loc(ar,value) {
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == value) {
            return i;
            break;
        }
    }
}
function check_have_next() {
    var v = map_data[9].length;
    if (map_data[4].ob_node.length > 0) {
        v -= map_data[4].ob_node.length;
    }
    for (var i = 0; i < new_next.length; i++) {
        if (check_visit(new_next[i])) {
            new_next.splice(i, 1);
            i--;
        }
    }
    //alert("visit_same:" + new_next);
    if (map_data[4].ob_node.length >0) {
        for (var i = 0; i < new_next.length; i++) {
            for (var j = 0; j < map_data[4].ob_node.length; j++) {
                if (new_next[i] == map_data[4].ob_node[j]) {
                    new_next.splice(i, 1);
                }
            }
        } //alert("ob_node:" + new_next);
    }
    if (map_data[4].ob_edge.length > 0) {
        for (var i = 0; i < new_next.length; i++) {
            for (var j = 0; j < map_data[4].ob_edge.length; j++) {
                //alert("check_ob_node:" + map_data[4].ob_edge + "," + no + "," + new_next[i]);
                if (check_ob_edge_new(map_data[4].ob_edge[j], no, new_next[i])) {
                    new_next.splice(i, 1);
                }
            }
        } //alert("ob_edge:" + new_next);
    }
    if (map_data[3].node != null && map_data[3].num != null) {
        for (var i = 0; i < new_next.length; i++) {
            if (new_next[i] == map_data[3].node) {
                if (step != map_data[3].num) {
                    new_next.splice(i, 1);
                }
            }
        }
        if (step == map_data[3].num) {
            if (check_new_next(map_data[3].node)) {
                new_next = new Array();
                new_next.push(map_data[3].node);
            }
            else {
                new_next = new Array();
            }
        }
        //alert("order:" + new_next);
    }
    for (var i = 0; i < new_next.length; i++) {
        if (new_next[i] == play_start) {
            new_next.splice(i, 1);
        }
    } //alert("play_start_same:" + new_next);
    for (var i = 0; i < new_next.length; i++) {
        if (new_next[i] == play_end) {
            new_next.splice(i, 1);
        }
    } //alert("play_end_same:" + new_next);
    if (play_start == play_end) {
        if (visit.length == v) {
            if (check_next(play_end)) {
                if (map_data[4].ob_edge == '') {
                    //alert(map_data[4].ob_edge);
                    new_next.push(play_end);
                } else {
                    for (var i = 0; i < map_data[4].ob_edge.length; i++) {
                        if (!check_ob_edge_new(map_data[4].ob_edge[i], no, play_end)) {
                            new_next.push(play_end);
                        }
                    }
                }
            }
        }
    } else {
        if (visit.length == v - 1) {
            if (check_same(map_data[7][no],play_end)) {
                new_next.push(play_end);
            }
        }
    }
    //alert("add_end:" + new_next);
}
function check_visit(val) {
    var same = false;
    for (var i = 0; i < visit.length; i++) {
        if (val == visit[i]) {
            same = true;
        }
    } return same;
}
function check_ob_edge_new(edge_num, val_1, val_2) {
    if (map_data[8][edge_num][0] == val_1 && map_data[8][edge_num][1] == val_2) {
        return true;
    } else if (map_data[8][edge_num][0] == val_2 && map_data[8][edge_num][1] == val_1) {
        return true;
    } else {
        return false;
    }
}
function check_new_next(val) {
    var same = false;
    for (var i = 0; i < new_next.length; i++) {
        if (new_next[i] == val) {
            same = true;
        }
    }
    return same;
}
function check_circle_or_line(min, max) {
    var circle_or_line = true;
    for (var i = 0; i < map_data[11].length; i++) {
        if (map_data[11][i].s_no == min && map_data[11][i].e_no == max) {
            circle_or_line = false;
            circle_count = i;
        }
    }
    return circle_or_line;
}
function check_finish_new() {
    var finish = false;
    var node_num = map_data[9].length;
    if (map_data[4].ob_node != null) {
        node_num-=map_data[4].ob_node.length;
    }
    if (play_start == play_end) {
        if (visit.length == node_num + 1) {
            finish = true;
        }
    } else {
        if (visit.length == node_num) {
            finish = true;
        }
    }
    return finish;
}
function check_next(val) {
    var same = false;
    for (var i = 0; i < next.length; i++) {
        if (val == next[i]) {
            same = true;
        }
    }
    return same;
}
function play_limit_inf() {
    if (map_data[5].limit_TF == true) {
        if (map_data[5].SE != null) {
            play_start = map_data[5].SE;
            play_end = map_data[5].SE;
        } else {
            if (map_data[5].S != null) {
                play_start = map_data[5].S;
            }
            if (map_data[5].E != null) {
                play_end = map_data[5].E;
            }
        }
    }
}
function check_same(ar, val) {
    var same = false;
    for (var i = 0; i < ar.length; i++) {
        if (ar[i]== val) {
            same = true;
        }
    }
    return same;
}
function check_obj_same(ar, obj_1, val_1, obj_2, val_2) {
    var same = false;
    for (var i = 0; i < ar.length; i++) {
        if (ar[i].obj_1 == val_1 && ar[i].obj_2 == val_2) {
            same = true;
        }
    }
    return same;
}

function check_obj_same_i(ar, obj, val) {
    for (var i = 0; i < ar.length; i++) {
        if (ar[i].obj == val) {
            return i;
            break;
        }
    }
}
function movieplay(src) {
    myVideo = document.createElement('video');
    myVideo.controls = true;
    myVideo.style.position = 'absolute';
    myVideo.style.top = '240px';
    myVideo.style.left = '85px';
    myVideo.style.width = '600px';
    myVideo.style.height = '700px';
    document.body.appendChild(myVideo);
    myVideo.src = src;
    myVideo.play();
    
}
function movie_volume() {
    myVideo.volume = 0;
}
function clear_all() {
    page = '';
    myImages_image = new Array();
    myImages_link1 = new Array();
    myImages_link2 = new Array();
    myText.style.visibility = 'hidden';
    draw_text_flag = false;
    small_ani_flag = false;
    GameState(GS_FIRSTPAGE);
}
function learning_page_clear() {
    draw_point_ar = new Array();
    draw_line_ar = new Array();
    draw_circle_ar = new Array();
    next = new Array();
    step_ar = new Array();
    step_obj = new Object({ step: 0, step_no: null });
    step = 0;
    visit = new Array();
    draw_line_flat = false;
    draw_type = new Array();//false=circle,true=line
    circle_line = new Array();
    no1 = null;
    no2 = null;
    circle_count = null;
    poto_painter.length = 0;
}
//music
function itemLoaded() {
    //loadCount++;
    if (loadCount >= itemsToLoad) {
        load_finish();
    }
}
function load_finish() {
    soundPool['first'] = { element: music1, played: false };
    soundPool['game'] = { element: music2, played: false };
    soundPool['put'] = { element: music3, played: false };
    soundPool['select'] = { element: music4, played: false };
    soundPool['walk'] = { element: music5, played: false };
    soundPool['wrong'] = { element: music6, played: false };
    soundPool['key_music'] = { element: music7, played: false };
    soundPool['key2-2'] = { element: music8, played: false };
    soundPool['key5-2'] = { element: music9, played: false };
    soundPool['key5-3'] = { element: music10, played: false };
    soundPool['key6-12'] = { element: music11, played: false };
    GameState(GS_FIRSTPAGE);
}
function soundloopreplay(name) {
    if (sound_d == true) {
        soundPool[name].element.pause();

    }
    else if (sound_d == false) {
        soundPool[name].element.play();
        soundPool[name].element.currentTime = 0;
        soundPool[name].element.loop = true;
    }
}
function soundreplay(name) {
    if (sound_d == true) {
        soundPool[name].element.pause();
    }
    else if (sound_d == false) {
        soundPool[name].element.play();
        soundPool[name].element.currentTime = 0;
    }
}
function soundloopplay(name) {
    if (sound_d == false) {
        soundPool[name].element.play();
        soundPool[name].element.loop = true;
    } else if (sound_d == true) {
        soundPool[name].element.pause();
    }
}
function soundplay(name) {
    if (sound_d == true) {
        soundPool[name].element.pause();
    }
    else if (sound_d == false) {
        soundPool[name].element.play();
    }
}
function soundkey(name) {
    soundPool[name].element.play();
    soundPool[name].element.currentTime = 0;
}
function soundpause(name) {
    soundPool[name].element.pause();
}
function supportedAudioFormat(audio) {
    var returnExtension = "";
    if (audio.canPlayType("audio/wav") == "probably" ||
        audio.canPlayType("audio/wav") == "maybe") {
        returnExtension = "wav";
    }
    else if (audio.canPlayType("audio/mp3") == "probably" ||
    audio.canPlayType("audio/mp3") == "maybe") {
        returnExtension = "mp3";
    }
    else if (audio.canPlayType("audio/ogg") == "probably" ||
        audio.canPlayType("audio/ogg") == "maybe") {
        returnExtension = "ogg";
    }
    return returnExtension;

}
function input_stone_ar() {
    stone_ar = new Array();
    for (var i = 0; i < playpage_node.length; i++) {
        stone_ar.push(i);
    }
}
function simple1_XY() {
    node_connect = new Object({ 0: [3, 4, 5], 1: [2, 3, 4], 2: [1, 3, 5], 3: [1, 2, 0], 4: [1, 5, 0], 5: [2, 4, 0] });
    edge_connect = new Object({ 0: [3, 0], 1: [1, 2], 2: [2, 3], 3: [1, 3], 4: [4, 5], 5: [5, 0], 6: [4, 0], 7: [1, 4], 8: [2, 5] });
    playpage_node = new Array({ node_num: 0, x: 518, y: 700 }, { node_num: 1, x: 396, y: 414 }, { node_num: 2, x: 190, y: 742},
        { node_num: 3, x: 596, y: 756 }, { node_num: 4, x: 395, y: 518 }, { node_num: 5, x: 279, y: 700 });
    playpage_edge = new Array({ edge_num: 0, x: 560, y: 726 }, { edge_num: 1, x: 194, y: 534 }, { edge_num: 2, x: 414, y: 878 }, { edge_num: 3, x: 602, y: 528 },
        { edge_num: 4, x: 292, y: 584 }, { edge_num: 5, x: 402, y: 774 }, { edge_num: 6, x: 510, y: 588 }, { edge_num: 7, x: 400, y: 468 }, { edge_num: 8, x: 246, y: 722 });
    circle_line = new Array({ s_no: 0, e_no: 4, cX: 393, cY: 638, r: 132, sa: 270, ea: 28.09 }, { s_no: 0, e_no: 5, cX: 393, cY: 638, r: 132, sa: 28.09, ea: 152.12 },
        { s_no: 1, e_no: 2, cX: 392, cY: 634, r: 234, sa: 152.12, ea: 270 }, { s_no: 1, e_no: 3, cX: 392, cY: 634, r: 234, sa: 270, ea: 28.09 },
        { s_no: 2, e_no: 3, cX: 392, cY: 634, r: 234, sa: 28.09, ea: 152.12 }, { s_no: 4, e_no: 5, cX: 393, cY: 638, r: 132, sa: 152.12, ea: 270 });
    map_data[3] = limit1;
    map_data[4] = limit2;
    map_data[5] = limit3;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
}
function simple2_XY() {
    node_connect = new Object({
        0: [3, 5, 7], 1: [2, 4, 6], 2: [1, 3, 7], 3: [2, 4, 0], 4: [1, 3, 5], 5: [4, 6, 0],
        6: [1, 5, 7], 7: [2, 6, 0]
    });
    edge_connect = new Object({
        0: [4, 5], 1: [1, 4], 2: [3, 4], 3: [2, 3], 4: [1, 2],
        5: [6, 7], 6: [7, 0], 7: [5, 0], 8: [5, 6], 9: [1, 6], 10: [2, 7], 11: [3, 0]
    });
    playpage_node = new Array({ node_num: 0, x: 537, y: 788 }, { node_num: 1, x: 150, y: 391 }, { node_num: 2, x: 638, y: 391 }
        , { node_num: 3, x: 638, y: 884 }, { node_num: 4, x: 150, y: 884 }, { node_num: 5, x: 256, y: 788 }, { node_num: 6, x: 256, y: 490 },
        { node_num: 7, x: 537, y: 490 });
    playpage_edge = new Array({ edge_num: 0, x: 216, y: 828 }, { edge_num: 1, x: 150, y: 637 }, { edge_num: 2, x: 394, y: 884 },
        { edge_num: 3, x: 638, y: 637 }, { edge_num: 4, x: 394, y: 391 }, { edge_num: 5, x: 397, y: 490 }, { edge_num: 6, x: 537, y: 639 },
        { edge_num: 7, x: 397, y: 788 }, { edge_num: 8, x: 256, y: 639 }, { edge_num: 9, x: 214, y: 447 }, { edge_num: 10, x: 587, y: 453 },
        { edge_num: 11, x: 581, y: 836 });
    circle_line = new Array();
    map_data[3] = limit1;
    map_data[4] = limit2;
    map_data[5] = limit3;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
}
function simple3_XY() {
    node_connect = new Object({
        0: [6, 7, 11], 1: [2, 6, 7], 2: [1, 3, 8], 3: [2, 4, 9], 4: [3, 5, 10], 5: [4, 6, 11],
        6: [1, 5, 0], 7: [1, 8, 0], 8: [2, 7, 9], 9: [3, 8, 10], 10: [4, 9, 11], 11: [5, 10, 0]
    });
    edge_connect = new Object({
        0: [4, 10], 1: [1, 6], 2: [1, 2], 3: [2, 3], 4: [3, 4], 5: [4, 5], 6: [5, 6], 7: [11, 0],
        8: [7, 0], 9: [7, 8], 10: [8, 9], 11: [17, 18], 12: [10, 11], 13: [5, 11], 14: [6, 0],
        15: [1, 7], 16: [2, 8], 17: [3, 9]
    });
    playpage_node = new Array({ node_num: 0, x: 204, y: 644 }, { node_num: 1, x: 259, y: 397 }, { node_num: 2, x: 531, y: 397 },
        { node_num: 3, x: 677, y: 644 }, { node_num: 4, x: 527, y: 887 }, { node_num: 5, x: 258, y: 887 },
        { node_num: 6, x: 115, y: 644 }, { node_num: 7, x: 301, y: 480 }, { node_num: 8, x: 484, y: 480 },
        { node_num: 9, x: 588, y: 644 }, { node_num: 10, x: 490, y: 813 }, { node_num: 11, x: 301, y: 813 });
    playpage_edge = new Array({ edge_num: 0, x: 512, y: 887 }, { edge_num: 1, x: 181, y: 518 }, { edge_num: 2, x: 406, y: 397 }
        , { edge_num: 3, x: 612, y: 525 }, { edge_num: 4, x: 612, y: 764 }, { edge_num: 5, x: 402, y: 891 }, { edge_num: 6, x: 190, y: 779 }
        , { edge_num: 7, x: 253, y: 735 }, { edge_num: 8, x: 255, y: 558 }, { edge_num: 9, x: 396, y: 487 }, { edge_num: 10, x: 537, y: 561 },
        { edge_num: 11, x: 540, y: 731 }, { edge_num: 12, x: 397, y: 815 }, { edge_num: 13, x: 282, y: 846 }, { edge_num: 14, x: 162, y: 647 }
        , { edge_num: 15, x: 282, y: 441 }, { edge_num: 16, x: 509, y: 439 }, { edge_num: 17, x: 630, y: 642 });
    circle_line = new Array();
    map_data[3] = limit1;
    map_data[4] = limit2;
    map_data[5] = limit3;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
}
function middle1_XY() {
    node_connect = new Object({
        0: [9, 16, 19], 1: [2, 5, 6], 2: [1, 3, 14], 3: [2, 4, 12], 4: [3, 5, 10], 5: [1, 4, 8],
        6: [1, 7, 15], 7: [6, 8, 16], 8: [5, 7, 9], 9: [8, 10, 0], 10: [4, 9, 11], 11: [10, 12, 19],
        12: [3, 11, 13], 13: [12, 14, 18], 14: [2, 13, 15], 15: [6, 14, 17], 16: [7, 17, 0], 17: [15, 16, 18],
        18: [13, 17, 19], 19: [11, 18, 0]
    });
    edge_connect = new Object({
        0: [19, 0], 1: [1, 2], 2: [2, 3], 3: [3, 4], 4: [4, 5], 5: [1, 5], 6: [1, 6], 7: [2, 14],
        8: [3, 12], 9: [4, 10], 10: [5, 8], 11: [7, 8], 12: [6, 7], 13: [6, 15], 14: [14, 15], 15: [13, 14],
        16: [12, 13], 17: [11, 12], 18: [10, 11], 19: [9, 10], 20: [8, 9], 21: [7, 16], 22: [15, 17], 23: [13, 18],
        24: [11, 19], 25: [9, 0], 26: [16, 0], 27: [16, 17], 28: [17, 18], 29: [18, 19]
    });
    playpage_node = new Array({ node_num: 0, x: 320, y: 658 }, { node_num: 1, x: 378, y: 381 }, { node_num: 2, x: 654, y: 570 },
        { node_num: 3, x: 564, y: 888 }, { node_num: 4, x: 206, y: 888 }, { node_num: 5, x: 125, y: 568 }, { node_num: 6, x: 380, y: 465 },
        { node_num: 7, x: 310, y: 552 }, { node_num: 8, x: 198, y: 602 }, { node_num: 9, x: 254, y: 688 }, { node_num: 10, x: 260, y: 824 },
        { node_num: 11, x: 378, y: 786 }, { node_num: 12, x: 506, y: 818 }, { node_num: 13, x: 509, y: 693 }, { node_num: 14, x: 565, y: 601 },
        { node_num: 15, x: 458, y: 550 }, { node_num: 16, x: 338, y: 593 }, { node_num: 17, x: 425, y: 596 }, { node_num: 18, x: 445, y: 661 },
        { node_num: 19, x: 381, y: 718 });
    playpage_edge = new Array({ edge_num: 0, x: 353, y: 694 }, { edge_num: 1, x: 526, y: 694 }, { edge_num: 2, x: 621, y: 733 },
        { edge_num: 3, x: 381, y: 904 }, { edge_num: 4, x: 153, y: 730 }, { edge_num: 5, x: 256, y: 462 }, { edge_num: 6, x: 381, y: 429 },
        { edge_num: 7, x: 602, y: 585 }, { edge_num: 8, x: 536, y: 852 }, { edge_num: 9, x: 241, y: 850 }, { edge_num: 10, x: 165, y: 586 },
        { edge_num: 11, x: 257, y: 574 }, { edge_num: 12, x: 350, y: 506 }, { edge_num: 13, x: 422, y: 506 }, { edge_num: 14, x: 512, y: 574 },
        { edge_num: 15, x: 545, y: 645 }, { edge_num: 16, x: 508, y: 756 }, { edge_num: 17, x: 449, y: 806 }, { edge_num: 18, x: 324, y: 808 },
        { edge_num: 19, x: 256, y: 754 }, { edge_num: 20, x: 225, y: 649 }, { edge_num: 21, x: 325, y: 573 }, { edge_num: 22, x: 441, y: 576 },
        { edge_num: 23, x: 476, y: 676 }, { edge_num: 24, x: 381, y: 748 }, { edge_num: 25, x: 290, y: 674 }, { edge_num: 26, x: 329, y: 629 },
        { edge_num: 27, x: 381, y: 594 }, { edge_num: 28, x: 437, y: 630 }, { edge_num: 29, x: 418, y: 692 });
    circle_line = new Array();
	map_data[3] = limit1;
    map_data[4] = limit2;
    map_data[5] = limit3;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
}
function middle2_XY() {
    node_connect = new Object({
        0: [15, 16, 17], 1: [2, 6, 8], 2: [1, 3, 9], 3: [2, 4, 10], 4: [3, 5, 11], 5: [4, 6, 12],
        6: [1, 5, 7], 7: [6, 8, 13], 8: [1, 7, 14], 9: [2, 10, 14], 10: [3, 9, 15], 11: [4, 12, 15],
        12: [5, 11, 13], 13: [7, 12, 16], 14: [8, 9, 17], 15: [10, 11, 0], 16: [13, 17, 0], 17: [14, 16, 0]
    });
    edge_connect = new Object({
        0: [16, 17], 1: [1, 2], 2: [2, 3], 3: [3, 4], 4: [4, 5], 5: [5, 6], 6: [1, 6], 7: [1, 8],
        8: [2, 9], 9: [3, 10], 10: [4, 11], 11: [5, 12], 12: [6, 7], 13: [7, 13], 14: [7, 8], 15: [8, 14],
        16: [9, 14], 17: [9, 10], 18: [10, 15], 19: [11, 15], 20: [11, 12], 21: [12, 13], 22: [13, 16], 23: [14, 17],
        24: [15, 0], 25: [17, 0], 26: [16, 0]
    });
    playpage_node = new Array({ node_num: 0, x: 480, y: 675 }, { node_num: 1, x: 226, y: 414 }, { node_num: 2, x: 563, y: 413 },
        { node_num: 3, x: 668, y: 616 }, { node_num: 4, x: 562, y: 848 }, { node_num: 5, x: 228, y: 851 }, { node_num: 6, x: 118, y: 607 },
        { node_num: 7, x: 213, y: 612 }, { node_num: 8, x: 282, y: 484 }, { node_num: 9, x: 502, y: 485 }, { node_num: 10, x: 576, y: 616 },
        { node_num: 11, x: 505, y: 780 }, { node_num: 12, x: 292, y: 785 }, { node_num: 13, x: 231, y: 714 }, { node_num: 14, x: 395, y: 450 },
        { node_num: 15, x: 551, y: 722 }, { node_num: 16, x: 304, y: 676 }, { node_num: 17, x: 395, y: 537 });
    playpage_edge = new Array({ edge_num: 0, x: 315, y: 574 }, { edge_num: 1, x: 393, y: 354 }, { edge_num: 2, x: 636, y: 495 }, { edge_num: 3, x: 646, y: 742 },
        { edge_num: 4, x: 401, y: 912 }, { edge_num: 5, x: 140, y: 753 }, { edge_num: 6, x: 152, y: 496 }, { edge_num: 7, x: 256, y: 451 }, { edge_num: 8, x: 534, y: 450 },
        { edge_num: 9, x: 620, y: 617 }, { edge_num: 10, x: 540, y: 815 }, { edge_num: 11, x: 261, y: 817 }, { edge_num: 12, x: 167, y: 611 }, { edge_num: 13, x: 214, y: 660 },
        { edge_num: 14, x: 233, y: 536 }, { edge_num: 15, x: 336, y: 461 }, { edge_num: 16, x: 452, y: 458 }, { edge_num: 17, x: 554, y: 544 }, { edge_num: 18, x: 573, y: 665 },
        { edge_num: 19, x: 530, y: 748 }, { edge_num: 20, x: 401, y: 812 }, { edge_num: 21, x: 260, y: 756 }, { edge_num: 22, x: 268, y: 296 }, { edge_num: 23, x: 394, y: 492 },
        { edge_num: 24, x: 515, y: 700 }, { edge_num: 25, x: 481, y: 590 }, { edge_num: 26, x: 390, y: 726 });

    circle_line = new Array({ s_no: 0, e_no: 17, cX: 392.5, cY: 631.5, r: 103.5, sa: 270, ea: 32 }, { s_no: 0, e_no: 16, cX: 392.5, cY: 631.5, r: 103.5, sa: 32, ea: 152.5 }, { s_no: 16, e_no: 17, cX: 392.5, cY: 631.5, r: 103.5, sa: 152.5, ea: 270 },
{ s_no: 9, e_no: 14, cX: 392.5, cY: 630.5, r: 189.5, sa: 270, ea: 313.5 }, { s_no: 9, e_no: 10, cX: 392.5, cY: 630.5, r: 189.5, sa: 313.5, ea: 1.5 }, { s_no: 10, e_no: 15, cX: 392.5, cY: 630.5, r: 189.5, sa: 1.5, ea: 34 }, {
    s_no: 11, e_no: 15, cX: 392.5, cY: 630.5, r: 189.5, sa: 34, ea: 49.5
}, { s_no: 11, e_no: 12, cX: 392.5, cY: 630.5, r: 189.5, sa: 49.5, ea: 126 }, { s_no: 12, e_no: 13, cX: 392.5, cY: 630.5, r: 189.5, sa: 126, ea: 151 }, { s_no: 7, e_no: 13, cX: 392.5, cY: 630.5, r: 189.5, sa: 151, ea: 182 }, { s_no: 7, e_no: 8, cX: 392.5, cY: 630.5, r: 189.5, sa: 182, ea: 229 }, { s_no: 8, e_no: 14, cX: 392.5, cY: 630.5, r: 189.5, sa: 229, ea: 270 },
{ s_no: 1, e_no: 2, cX: 393.5, cY: 632.5, r: 283.5, sa: 233, ea: 311.5 }, { s_no: 2, e_no: 3, cX: 393.5, cY: 632.5, r: 283.5, sa: 311.5, ea: 0 }, { s_no: 3, e_no: 4, cX: 393.5, cY: 632.5, r: 283.5, sa: 0, ea: 50 }, { s_no: 4, e_no: 5, cX: 393.5, cY: 632.5, r: 283.5, sa: 50, ea: 125.5 }, { s_no: 5, e_no: 6, cX: 393.5, cY: 632.5, r: 283.5, sa: 125.5, ea: 183.5 }, { s_no: 1, e_no: 6, cX: 393.5, cY: 632.5, r: 283.5, sa: 183.5, ea: 229.5 }
);
    map_data[3] = limit1;
    map_data[4] = limit2;
    map_data[5] = limit3;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
}
function middle3_XY() {
    node_connect = new Object({
        0: [18, 21, 23], 1: [2, 8, 10], 2: [1, 3, 11], 3: [2, 4, 13], 4: [3, 5, 14], 5: [4, 6, 16],
        6: [5, 7, 17], 7: [6, 8, 19], 8: [1, 7, 20], 9: [10, 20, 21], 10: [1, 9, 11], 11: [2, 10, 12],
        12: [11, 13, 22], 13: [3, 12, 14], 14: [4, 13, 15], 15: [14, 16, 23], 16: [5, 15, 17], 17: [6, 16, 18],
        18: [0, 17, 19], 19: [7, 18, 20], 20: [8, 9, 19], 21: [0, 9, 22], 22: [12, 21, 23], 23: [0, 15, 22]
    });
    edge_connect = new Object({
        0: [0, 23], 1: [1, 2], 2: [2, 3], 3: [3, 4], 4: [4, 5], 5: [5, 6], 6: [6, 7],
        7: [7, 8], 8: [1, 8], 9: [1, 10], 10: [2, 11], 11: [3, 13], 12: [4, 14], 13: [5, 16],
        14: [6, 17], 15: [7, 19], 16: [8, 20], 17: [9, 20], 18: [9, 10], 19: [10, 11], 20: [11, 12],
        21: [12, 13], 22: [13, 14], 23: [14, 15], 24: [15, 16], 25: [16, 17], 26: [17, 18], 27: [18, 19],
        28: [19, 20], 29: [9, 21], 30: [12, 22], 31: [15, 23], 32: [0, 18], 33: [0, 21], 34: [21, 22], 35: [22, 23]
    });
    playpage_node = new Array({ node_num: 0, x: 288, y: 746 }, { node_num: 1, x: 232, y: 374 }, { node_num: 2, x: 553, y: 374 },
        { node_num: 3, x: 653, y: 453 }, { node_num: 4, x: 653, y: 818 }, { node_num: 5, x: 565, y: 901 }, { node_num: 6, x: 223, y: 901 },
        { node_num: 7, x: 135, y: 814 }, { node_num: 8, x: 135, y: 456 }, { node_num: 9, x: 216, y: 460 }, { node_num: 10, x: 285, y: 452 },
        { node_num: 11, x: 507, y: 452 }, { node_num: 12, x: 571, y: 457 }, { node_num: 13, x: 576, y: 520 }, { node_num: 14, x: 575, y: 761 },
        { node_num: 15, x: 568, y: 816 }, { node_num: 16, x: 516, y: 825 }, { node_num: 17, x: 272, y: 825 }, { node_num: 18, x: 216, y: 820 },
        { node_num: 19, x: 215, y: 758 }, { node_num: 20, x: 216, y: 523 }, { node_num: 21, x: 288, y: 530 }, { node_num: 22, x: 500, y: 530 },
        { node_num: 23, x: 502, y: 748 });
    playpage_edge = new Array({ edge_num: 0, x: 395, y: 753 }, { edge_num: 1, x: 395, y: 375 }, { edge_num: 2, x: 612, y: 408 },
        { edge_num: 3, x: 653, y: 631 }, { edge_num: 4, x: 623, y: 866 }, { edge_num: 5, x: 394, y: 903 }, { edge_num: 6, x: 171, y: 866 },
        { edge_num: 7, x: 135, y: 633 }, { edge_num: 8, x: 177, y: 408 }, { edge_num: 9, x: 260, y: 414 }, { edge_num: 10, x: 531, y: 416 },
        { edge_num: 11, x: 614, y: 493 }, { edge_num: 12, x: 613, y: 788 }, { edge_num: 13, x: 543, y: 865 }, { edge_num: 14, x: 251, y: 863 },
        { edge_num: 15, x: 180, y: 787 }, { edge_num: 16, x: 174, y: 490 }, { edge_num: 17, x: 216, y: 488 }, { edge_num: 18, x: 253, y: 455 },
        { edge_num: 19, x: 387, y: 453 }, { edge_num: 20, x: 537, y: 456 }, { edge_num: 21, x: 573, y: 483 }, { edge_num: 22, x: 575, y: 634 },
        { edge_num: 23, x: 573, y: 790 }, { edge_num: 24, x: 550, y: 824 }, { edge_num: 25, x: 397, y: 826 }, { edge_num: 26, x: 240, y: 822 },
        { edge_num: 27, x: 216, y: 790 }, { edge_num: 28, x: 214, y: 647 }, { edge_num: 29, x: 262, y: 495 }, { edge_num: 30, x: 531, y: 494 },
        { edge_num: 31, x: 533, y: 777 }, { edge_num: 32, x: 262, y: 776 }, { edge_num: 33, x: 286, y: 634 }, { edge_num: 34, x: 396, y: 530 },
        { edge_num: 35, x: 502, y: 631 });
    circle_line = new Array();
	map_data[3] = limit1;
    map_data[4] = limit2;
    map_data[5] = limit3;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
}
function hard1_XY() {
    node_connect = new Object({
        0: [18, 19, 23], 1: [2, 6, 7], 2: [1, 3, 8], 3: [2, 4, 9], 4: [3, 5, 10], 5: [4, 6, 11],
        6: [1, 5, 12], 7: [1, 8, 13], 8: [2, 7, 14], 9: [3, 10, 15], 10: [4, 9, 16], 11: [5, 12, 17], 12: [6, 11, 18],
        13: [7, 18, 19], 14: [8, 15, 20], 15: [9, 14, 21], 16: [10, 17, 22], 17: [11, 16, 23], 18: [0, 12, 13],
        19: [0, 13, 20], 20: [14, 19, 21], 21: [15, 20, 22], 22: [16, 21, 23], 23: [0, 17, 22]
    });
    edge_connect = new Object({
        0: [1, 2], 1: [2, 3], 2: [3, 4], 3: [4, 5], 4: [5, 6], 5: [1, 6], 6: [1, 7], 7: [2, 8], 8: [3, 9],
        9: [4, 10], 10: [5, 11], 11: [6, 12], 12: [7, 8], 13: [9, 10], 14: [11, 12], 15: [12, 18], 16: [7, 13], 17: [8, 14],
        18: [9, 15], 19: [10, 16], 20: [11, 17], 21: [13, 18], 22: [14, 15], 23: [16, 17], 24: [0, 18], 25: [13, 19], 26: [14, 20],
        27: [15, 21], 28: [16, 22], 29: [17, 23], 30: [0, 23], 31: [0, 19], 32: [19, 20], 33: [20, 21], 34: [21, 22], 35: [22, 23]
    });
    playpage_node = new Array({ node_num: 0, x: 324, y: 654 }, { node_num: 1, x: 250, y: 430 }, { node_num: 2, x: 536, y: 430 },
        { node_num: 3, x: 666, y: 648 }, { node_num: 4, x: 534, y: 868 }, { node_num: 5, x: 248, y: 870 }, { node_num: 6, x: 120, y: 648 },
        { node_num: 7, x: 286, y: 484 }, { node_num: 8, x: 498, y: 488 }, { node_num: 9, x: 590, y: 650 }, { node_num: 10, x: 500, y: 810 },
        { node_num: 11, x: 286, y: 812 }, { node_num: 12, x: 190, y: 652 }, { node_num: 13, x: 314, y: 530 }, { node_num: 14, x: 470, y: 530 },
        { node_num: 15, x: 530, y: 648 }, { node_num: 16, x: 462, y: 758 }, { node_nu: 17, x: 324, y: 758 }, { node_num: 18, x: 252, y: 650 },
        { node_num: 19, x: 356, y: 590 }, { node_num: 20, x: 426, y: 590 }, { node_num: 21, x: 462, y: 650 }, { node_num: 22, x: 432, y: 708 },
        { node_num: 23, x: 354, y: 708 });
    playpage_edge = new Array({ edge_num: 0, x: 392, y: 432 }, { edge_num: 1, x: 610, y: 550 }, { edge_num: 2, x: 602, y: 766 },
        { edge_num: 3, x: 388, y: 874 }, { edge_num: 4, x: 184, y: 768 }, { edge_num: 5, x: 182, y: 536 }, { edge_num: 6, x: 266, y: 458 },
        { edge_num: 7, x: 520, y: 458 }, { edge_num: 8, x: 632, y: 650 }, { edge_num: 9, x: 520, y: 848 }, { edge_num: 10, x: 268, y: 840 },
        { edge_num: 11, x: 152, y: 650 }, { edge_num: 12, x: 392, y: 484 }, { edge_num: 13, x: 546, y: 740 }, { edge_num: 14, x: 236, y: 738 },
        { edge_num: 15, x: 222, y: 652 }, { edge_num: 16, x: 300, y: 510 }, { edge_num: 17, x: 484, y: 508 }, { edge_num: 18, x: 560, y: 652 },
        { edge_num: 19, x: 480, y: 782 }, { edge_num: 20, x: 302, y: 784 }, { edge_num: 21, x: 282, y: 588 }, { edge_num: 22, x: 508, y: 598 },
        { edge_num: 23, x: 392, y: 764 }, { edge_num: 24, x: 290, y: 652 }, { edge_num: 25, x: 338, y: 564 }, { edge_num: 26, x: 448, y: 564 },
        { edge_num: 27, x: 494, y: 654 }, { edge_num: 28, x: 452, y: 738 }, { edge_num: 29, x: 338, y: 730 }, { edge_num: 30, x: 340, y: 682 },
        { edge_num: 31, x: 340, y: 662 }, { edge_num: 32, x: 390, y: 590 }, { edge_num: 33, x: 446, y: 624 }, { edge_num: 34, x: 446, y: 682 },
        { edge_num: 35, x: 392, y: 706 });
    circle_line = new Array();
    map_data[3] = limit1;
    map_data[4] = limit2;
    map_data[5] = limit3;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
}
function hard2_XY() {
    node_connect = new Object({
        0: [1, 9, 10], 1: [0, 2, 12], 2: [1, 3, 13], 3: [2, 4, 15], 4: [3, 5, 16], 5: [4, 6, 18],
        6: [5, 7, 19], 7: [6, 8, 21], 8: [7, 9, 22], 9: [0, 8, 24], 10: [0, 11, 24], 11: [10, 12, 25], 12: [1, 11, 13],
        13: [2, 12, 14], 14: [13, 15, 26], 15: [3, 14, 16], 16: [4, 15, 17], 17: [16, 18, 27], 18: [5, 17, 19], 19: [6, 18, 20],
        20: [19, 21, 28], 21: [7, 20, 22], 22: [8, 21, 23], 23: [22, 24, 29], 24: [9, 10, 23], 25: [11, 30, 31], 26: [14, 31, 32],
        27: [17, 32, 33], 28: [20, 33, 34], 29: [23, 30, 34], 30: [25, 29, 31, 34], 31: [25, 26, 30, 32], 32: [26, 27, 31, 33],
        33: [27, 28, 32, 34], 34: [28, 29, 30, 33]
    });
    edge_connect = new Object({
        0: [0, 1], 1: [1, 2], 2: [2, 3], 3: [3, 4], 4: [4, 5], 5: [5, 6], 6: [6, 7], 7: [7, 8], 8: [8, 9],
        9: [0, 9], 10: [0, 10], 11: [1, 12], 12: [2, 13], 13: [3, 15], 14: [4, 16], 15: [5, 18], 16: [6, 19], 17: [7, 21],
        18: [8, 22], 19: [9, 24], 20: [10, 24], 21: [10, 11], 22: [11, 12], 23: [12, 13], 24: [13, 14], 25: [14, 15],
        26: [15, 16], 27: [16, 17], 28: [17, 18], 29: [18, 19], 30: [19, 20], 31: [20, 21], 32: [21, 22], 33: [22, 23],
        34: [23, 24], 35: [11, 25], 36: [14, 26], 37: [17, 27], 38: [20, 28], 39: [23, 29], 40: [25, 30], 41: [25, 31],
        42: [26, 31], 43: [26, 32], 44: [27, 32], 45: [27, 33], 46: [28, 33], 47: [28, 34], 48: [29, 34], 49: [29, 30],
        50: [30, 31], 51: [31, 32], 52: [32, 33], 53: [33, 34], 54: [30, 34]
    });
    playpage_node = new Array({ node_num: 0, x: 282, y: 384 }, { node_num: 1, x: 500, y: 380 }, { node_num: 2, x: 606, y: 458 },
        { node_num: 3, x: 666, y: 666 }, { node_num: 4, x: 626, y: 784 }, { node_num: 5, x: 452, y: 902 }, { node_num: 6, x: 336, y: 902 },
        { node_num: 7, x: 160, y: 784 }, { node_num: 8, x: 120, y: 662 }, { node_num: 9, x: 176, y: 456 }, { node_num: 10, x: 330, y: 490 },
        { node_num: 11, x: 392, y: 458 }, { node_num: 12, x: 452, y: 492 }, { node_num: 13, x: 518, y: 538 }, { node_num: 14, x: 564, y: 582 },
        { node_num: 15, x: 552, y: 652 }, { node_num: 16, x: 532, y: 722 }, { node_num: 17, x: 502, y: 786 }, { node_num: 18, x: 422, y: 794 },
        { node_num: 19, x: 350, y: 794 }, { node_num: 20, x: 278, y: 782 }, { node_num: 21, x: 254, y: 720 }, { node_num: 22, x: 232, y: 654 },
        { node_num: 23, x: 216, y: 584 }, { node_num: 24, x: 262, y: 538 }, { node_num: 25, x: 392, y: 522 }, { node_num: 26, x: 506, y: 606 },
        { node_num: 27, x: 462, y: 732 }, { node_num: 28, x: 322, y: 734 }, { node_num: 29, x: 272, y: 606 }, { node_num: 30, x: 360, y: 604 },
        { node_num: 31, x: 422, y: 602 }, { node_num: 32, x: 444, y: 656 }, { node_num: 33, x: 392, y: 692 }, { node_num: 34, x: 340, y: 658 });
    playpage_edge = new Array({ edge_num: 0, x: 390, y: 352 }, { edge_num: 1, x: 558, y: 414 }, { edge_num: 2, x: 656, y: 552 }, { edge_num: 3, x: 654, y: 732 },
        { edge_num: 4, x: 560, y: 854 }, { edge_num: 5, x: 390, y: 912 }, { edge_num: 6, x: 232, y: 856 }, { edge_num: 7, x: 130, y: 726 }, { edge_num: 8, x: 132, y: 548 },
        { edge_num: 9, x: 228, y: 414 }, { edge_num: 10, x: 306, y: 440 }, { edge_num: 11, x: 480, y: 438 }, { edge_num: 12, x: 564, y: 496 }, { edge_num: 13, x: 606, y: 658 },
        { edge_num: 14, x: 580, y: 752 }, { edge_num: 15, x: 438, y: 846 }, { edge_num: 16, x: 344, y: 846 }, { edge_num: 17, x: 206, y: 748 }, { edge_num: 18, x: 174, y: 660 },
        { edge_num: 19, x: 224, y: 500 }, { edge_num: 20, x: 302, y: 516 }, { edge_num: 21, x: 358, y: 476 }, { edge_num: 22, x: 424, y: 472 }, { edge_num: 23, x: 486, y: 518 },
        { edge_num: 24, x: 544, y: 562 }, { edge_num: 25, x: 564, y: 616 }, { edge_num: 26, x: 542, y: 686 }, { edge_num: 27, x: 520, y: 752 }, { edge_num: 28, x: 468, y: 790 },
        { edge_num: 29, x: 390, y: 794 }, { edge_num: 30, x: 306, y: 796 }, { edge_num: 31, x: 268, y: 754 }, { edge_num: 32, x: 244, y: 684 }, { edge_num: 33, x: 224, y: 616 },
        { edge_num: 34, x: 246, y: 558 }, { edge_num: 35, x: 394, y: 498 }, { edge_num: 36, x: 530, y: 596 }, { edge_num: 37, x: 480, y: 756 }, { edge_num: 38, x: 310, y: 748 },
        { edge_num: 39, x: 258, y: 598 }, { edge_num: 40, x: 374, y: 568 }, { edge_num: 41, x: 410, y: 564 }, { edge_num: 42, x: 460, y: 602 }, { edge_num: 43, x: 476, y: 636 },
        { edge_num: 44, x: 456, y: 692 }, { edge_num: 45, x: 428, y: 718 }, { edge_num: 46, x: 362, y: 712 }, { edge_num: 47, x: 330, y: 692 }, { edge_num: 48, x: 314, y: 640 },
        { edge_num: 49, x: 322, y: 604 }, { edge_num: 50, x: 390, y: 602 }, { edge_num: 51, x: 434, y: 632 }, { edge_num: 52, x: 416, y: 672 }, { edge_num: 53, x: 368, y: 674 },
        { edge_num: 54, x: 352, y: 630 });
    circle_line = new Array({ s_no: 0, e_no: 1, cX: 392.5, cY: 635.5, r: 283.5, sa: 245, ea: 295.5 }, { s_no: 1, e_no: 2, cX: 392.5, cY: 635.5, r: 283.5, sa: 295.5, ea: 321 },
         { s_no: 2, e_no: 3, cX: 392.5, cY: 635.5, r: 283.5, sa: 321, ea: 7 }, { s_no: 3, e_no: 4, cX: 392.5, cY: 635.5, r: 283.5, sa: 7, ea: 32.5 }
        , { s_no: 4, e_no: 5, cX: 392.5, cY: 635.5, r: 283.5, sa: 32.5, ea: 75 }, { s_no: 5, e_no: 6, cX: 392.5, cY: 635.5, r: 283.5, sa: 77, ea: 98 }
        , { s_no: 6, e_no: 7, cX: 392.5, cY: 635.5, r: 283.5, sa: 100.5, ea: 145 }, { s_no: 7, e_no: 8, cX: 392.5, cY: 635.5, r: 283.5, sa: 145, ea: 171 }, { s_no: 8, e_no: 9, cX: 392.5, cY: 635.5, r: 283.5, sa: 171, ea: 220.5 }, { s_no: 0, e_no: 9, cX: 392.5, cY: 635.5, r: 283.5, sa: 220.5, ea: 245 }
);
    map_data[3] = limit1;
    map_data[4] = limit2;
    map_data[5] = limit3;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
}
function hard3_XY() {
    node_connect = new Object({
        0: [1, 11, 12], 1: [0, 2, 13], 2: [1, 3, 15], 3: [2, 4, 16], 4: [3, 5, 18], 5: [4, 6, 19],
        6: [5, 7, 21], 7: [6, 8, 22], 8: [7, 9, 24], 9: [8, 10, 25], 10: [9, 11, 27], 11: [0, 10, 28], 12: [0, 13, 29],
        13: [1, 12, 14], 14: [13, 15, 32], 15: [2, 14, 16], 16: [3, 15, 17], 17: [16, 18, 33], 18: [4, 17, 19], 19: [5, 18, 20],
        20: [19, 21, 35], 21: [6, 20, 22], 22: [7, 21, 23], 23: [22, 24, 36], 24: [8, 23, 25], 25: [9, 24, 26], 26: [25, 27, 38],
        27: [10, 26, 28], 28: [11, 27, 29], 29: [12, 28, 30], 30: [29, 31, 38], 31: [30, 32, 39], 32: [14, 31, 33],
        33: [17, 32, 34], 34: [33, 35, 40], 35: [20, 34, 36], 36: [23, 35, 37], 37: [36, 38, 41], 38: [26, 30, 37],
        39: [31, 40, 41], 40: [34, 39, 41], 41: [37, 39, 40]
    });
    edge_connect = new Object({
        0: [0, 1], 1: [1, 2], 2: [2, 3], 3: [3, 4], 4: [4, 5], 5: [5, 6], 6: [6, 7], 7: [7, 8], 8: [8, 9],
        9: [9, 10], 10: [10, 11], 11: [0, 11], 12: [0, 12], 13: [1, 13], 14: [2, 15], 15: [3, 16], 16: [4, 18], 17: [5, 19],
        18: [6, 21], 19: [7, 22], 20: [8, 24], 21: [9, 25], 22: [10, 27], 23: [11, 28], 24: [28, 29], 25: [12, 29], 26: [12, 13],
        27: [13, 14], 28: [14, 15], 29: [15, 16], 30: [16, 17], 31: [17, 18], 32: [18, 19], 33: [19, 20], 34: [20, 21],
        35: [21, 22], 36: [22, 23], 37: [23, 24], 38: [24, 25], 39: [25, 26], 40: [26, 27], 41: [27, 28], 42: [29, 30],
        43: [14, 32], 44: [17, 33], 45: [20, 35], 46: [23, 36], 47: [26, 38], 48: [30, 38], 49: [30, 31], 50: [31, 32],
        51: [32, 33], 52: [33, 34], 53: [34, 35], 54: [35, 36], 55: [36, 37], 56: [37, 38], 57: [31, 39], 58: [34, 40],
        59: [37, 41], 60: [39, 41], 61: [39, 40], 62: [40, 41]
    });
    playpage_node = new Array({ node_num: 0, x: 314, y: 368 }, { node_num: 1, x: 458, y: 362 }, { node_num: 2, x: 574, y: 438 },
        { node_num: 3, x: 636, y: 558 }, { node_num: 4, x: 636, y: 674 }, { node_num: 5, x: 588, y: 796 }, { node_num: 6, x: 482, y: 870 },
        { node_num: 7, x: 324, y: 880 }, { node_num: 8, x: 192, y: 800 }, { node_num: 9, x: 124, y: 664 }, { node_num: 10, x: 130, y: 530 },
        { node_num: 11, x: 194, y: 432 }, { node_num: 12, x: 334, y: 422 }, { node_num: 13, x: 440, y: 420 }, { node_num: 14, x: 500, y: 460 },
        { node_num: 15, x: 532, y: 484 }, { node_num: 16, x: 578, y: 566 }, { node_num: 17, x: 576, y: 612 }, { node_num: 18, x: 578, y: 664 },
        { node_num: 19, x: 540, y: 752 }, { node_num: 20, x: 502, y: 774 }, { node_num: 21, x: 458, y: 812 }, { node_num: 22, x: 338, y: 822 },
        { node_num: 23, x: 266, y: 782 }, { node_num: 24, x: 236, y: 762 }, { node_num: 25, x: 182, y: 662 }, { node_num: 26, x: 184, y: 606 },
        { node_num: 27, x: 188, y: 550 }, { node_num: 28, x: 234, y: 478 }, { node_num: 29, x: 266, y: 458 }, { node_num: 30, x: 300, y: 510 },
        { node_num: 31, x: 384, y: 488 }, { node_num: 32, x: 464, y: 510 }, { node_num: 33, x: 516, y: 608 }, { node_num: 34, x: 498, y: 686 },
        { node_num: 35, x: 466, y: 728 }, { node_num: 36, x: 302, y: 732 }, { node_num: 37, x: 262, y: 680 }, { node_num: 38, x: 248, y: 606 },
        { node_num: 39, x: 386, y: 552 }, { node_num: 40, x: 446, y: 650 }, { node_num: 41, x: 318, y: 652 });
    playpage_edge = new Array({ edge_num: 0, x: 380, y: 350 }, { edge_num: 1, x: 528, y: 398 }, { edge_num: 2, x: 616, y: 490 }, { edge_num: 3, x: 644, y: 618 },
        { edge_num: 4, x: 618, y: 736 }, { edge_num: 5, x: 544, y: 836 }, { edge_num: 6, x: 402, y: 892 }, { edge_num: 7, x: 250, y: 856 }, { edge_num: 8, x: 146, y: 746 },
        { edge_num: 9, x: 120, y: 592 }, { edge_num: 10, x: 158, y: 476 }, { edge_num: 11, x: 250, y: 390 }, { edge_num: 12, x: 326, y: 394 }, { edge_num: 13, x: 450, y: 394 },
        { edge_num: 14, x: 550, y: 464 }, { edge_num: 15, x: 604, y: 562 }, { edge_num: 16, x: 606, y: 670 }, { edge_num: 17, x: 564, y: 776 }, { edge_num: 18, x: 468, y: 836 },
        { edge_num: 19, x: 332, y: 846 }, { edge_num: 20, x: 216, y: 780 }, { edge_num: 21, x: 152, y: 666 }, { edge_num: 22, x: 158, y: 540 }, { edge_num: 23, x: 216, y: 456 },
        { edge_num: 24, x: 244, y: 472 }, { edge_num: 25, x: 302, y: 438 }, { edge_num: 26, x: 382, y: 420 }, { edge_num: 27, x: 472, y: 442 }, { edge_num: 28, x: 516, y: 472 },
        { edge_num: 29, x: 562, y: 520 }, { edge_num: 30, x: 580, y: 590 }, { edge_num: 31, x: 578, y: 634 }, { edge_num: 32, x: 568, y: 708 }, { edge_num: 33, x: 526, y: 764 },
        { edge_num: 34, x: 486, y: 794 }, { edge_num: 35, x: 404, y: 824 }, { edge_num: 36, x: 302, y: 806 }, { edge_num: 37, x: 246, y: 768 }, { edge_num: 38, x: 200, y: 716 },
        { edge_num: 39, x: 184, y: 632 }, { edge_num: 40, x: 186, y: 578 }, { edge_num: 41, x: 206, y: 510 }, { edge_num: 42, x: 286, y: 488 }, { edge_num: 43, x: 486, y: 486 },
        { edge_num: 44, x: 548, y: 612 }, { edge_num: 45, x: 488, y: 752 }, { edge_num: 46, x: 286, y: 756 }, { edge_num: 47, x: 216, y: 606 }, { edge_num: 48, x: 266, y: 548 },
        { edge_num: 49, x: 344, y: 492 }, { edge_num: 50, x: 422, y: 494 }, { edge_num: 51, x: 504, y: 560 }, { edge_num: 52, x: 514, y: 642 }, { edge_num: 53, x: 486, y: 706 },
        { edge_num: 54, x: 386, y: 754 }, { edge_num: 55, x: 284, y: 710 }, { edge_num: 56, x: 250, y: 646 }, { edge_num: 57, x: 386, y: 516 }, { edge_num: 58, x: 470, y: 666 },
        { edge_num: 59, x: 292, y: 664 }, { edge_num: 60, x: 326, y: 582 }, { edge_num: 61, x: 444, y: 586 }, { edge_num: 62, x: 382, y: 692 });
    circle_line = new Array({ s_no: 0, e_no: 1, cX: 380, cY: 623, r: 271, sa: 254, ea: 287.5 }, { s_no: 1, e_no: 2, cX: 380, cY: 623, r: 271, sa: 287.5, ea: 318.5 },
            { s_no: 2, e_no: 3, cX: 380, cY: 623, r: 271, sa: 318.5, ea: 349 }, { s_no: 3, e_no: 4, cX: 380, cY: 623, r: 271, sa: 350, ea: 10 }, { s_no: 4, e_no: 5, cX: 380, cY: 623, r: 271, sa: 10, ea: 38 },
            { s_no: 5, e_no: 6, cX: 380, cY: 623, r: 271, sa: 38, ea: 69.5 }, { s_no: 6, e_no: 7, cX: 380, cY: 623, r: 271, sa: 69.5, ea: 102 }, { s_no: 7, e_no: 8, cX: 380, cY: 623, r: 271, sa: 102, ea: 137.5 },
            { s_no: 8, e_no: 9, cX: 380, cY: 623, r: 271, sa: 137.5, ea: 167.5 }, { s_no: 9, e_no: 10, cX: 380, cY: 623, r: 271, sa: 167.5, ea: 200.5 }, { s_no: 10, e_no: 11, cX: 380, cY: 623, r: 271, sa: 200.5, ea: 224 },
            { s_no: 0, e_no: 11, cX: 380, cY: 623, r: 271, sa: 224, ea: 254 }, { s_no: 12, e_no: 13, cX: 383, cY: 622, r: 208, sa: 255.5, ea: 287 },
            { s_no: 13, e_no: 14, cX: 383, cY: 622, r: 208, sa: 287, ea: 309 }, { s_no: 14, e_no: 15, cX: 383, cY: 622, r: 208, sa: 309, ea: 317.5 }, { s_no: 15, e_no: 16, cX: 383, cY: 622, r: 208, sa: 317.5, ea: 345 },
            { s_no: 16, e_no: 17, cX: 383, cY: 622, r: 208, sa: 345, ea: 359.5 }, { s_no: 17, e_no: 18, cX: 383, cY: 622, r: 208, sa: 359.5, ea: 11.5 }, { s_no: 18, e_no: 19, cX: 383, cY: 622, r: 208, sa: 11.5, ea: 41 },
            { s_no: 19, e_no: 20, cX: 383, cY: 622, r: 208, sa: 41, ea: 52 }, { s_no: 20, e_no: 21, cX: 383, cY: 622, r: 208, sa: 53, ea: 68.4 }, { s_no: 21, e_no: 22, cX: 383, cY: 622, r: 208, sa: 70, ea: 103 },
            { s_no: 22, e_no: 23, cX: 383, cY: 622, r: 208, sa: 103, ea: 126 }, { s_no: 23, e_no: 24, cX: 383, cY: 622, r: 208, sa: 126, ea: 138.5 }, { s_no: 24, e_no: 25, cX: 383, cY: 622, r: 208, sa: 138.5, ea: 171 },
            { s_no: 25, e_no: 26, cX: 383, cY: 622, r: 208, sa: 171, ea: 182 }, { s_no: 26, e_no: 27, cX: 383, cY: 622, r: 208, sa: 182, ea: 199 }, { s_no: 27, e_no: 28, cX: 383, cY: 622, r: 208, sa: 199, ea: 222 },
            { s_no: 28, e_no: 29, cX: 383, cY: 622, r: 208, sa: 222, ea: 232 }, { s_no: 12, e_no: 29, cX: 383, cY: 622, r: 208, sa: 232, ea: 255.5 }, { s_no: 30, e_no: 31, cX: 382, cY: 622, r: 140, sa: 232.5, ea: 270 },
            { s_no: 31, e_no: 32, cX: 382, cY: 622, r: 140, sa: 270, ea: 305 }, { s_no: 32, e_no: 33, cX: 382, cY: 622, r: 140, sa: 305, ea: 355.5 }, { s_no: 33, e_no: 34, cX: 382, cY: 622, r: 140, sa: 355.5, ea: 29.5 },
            { s_no: 34, e_no: 35, cX: 382, cY: 622, r: 140, sa: 29.5, ea: 50.5 }, { s_no: 35, e_no: 36, cX: 382, cY: 622, r: 140, sa: 50.5, ea: 125.5 }, { s_no: 36, e_no: 37, cX: 382, cY: 622, r: 140, sa: 125.5, ea: 148 },
            { s_no: 37, e_no: 38, cX: 382, cY: 622, r: 140, sa: 148, ea: 182 }, { s_no: 30, e_no: 38, cX: 382, cY: 622, r: 140, sa: 182, ea: 232.5 }, { s_no: 39, e_no: 40, cX: 382.5, cY: 622.5, r: 67.5, sa: 270, ea: 34 },
            { s_no: 40, e_no: 41, cX: 382.5, cY: 622.5, r: 67.5, sa: 34, ea: 147 }, { s_no: 39, e_no: 41, cX: 382.5, cY: 622.5, r: 67.5, sa: 147, ea: 270 }
    );
    map_data[3] = limit1;
    map_data[4] = limit2;
    map_data[5] = limit3;
    map_data[7] = node_connect;
    map_data[8] = edge_connect;
    map_data[9] = playpage_node;
    map_data[10] = playpage_edge;
    map_data[11] = circle_line;
}

//大頭的
function parseData(graph) {
    var ar = new Array();
    for (var i in graph) {
        var arr = new Array();
        for (var j in graph[i]) {
            arr.push(graph[i][j]);
        }
        arr.push(-1);
        ar.push(arr.concat());
    }
    return ar;
}
function check1(vertex, edge, order1, orderVertex, badVertex, badEdge, startEnd, start1, end1) {

    var s = new Array();
    var s1 = new Array();
    var MAX_SIZE = 100;
    var visit_1 = new Array();
    var graph = new Array();
    graph.push(new Array());
    var graph_edge = new Array();
    graph_edge.push(new Array());
    var temp_graph = new Array();
    temp_graph.push(new Array());
    var start_point = 0;
    var point_num = 0;
    var bad_vertex = new Array();
    var bad_edge = new Array();
    var bad_vertex_num = 0, bad_edge_num = 0;
    var temp = 0, temp1 = 0;
    var number = 0;
    var count = 0;
    var Adjacent_num = 0;
    var a = 0, b = 0;
    var start = 0, end = 0;
    var point = 0, order = 0;
    var flag = 0;
    var input = 0;
    var check_start_point = new Array();

    graph = parseData(vertex);//get grpah data
    graph_edge = parseData(edge);//get graph_edge data
    var check = 0, final_check = 0;
    for (var i = 0; i < graph.length; i++) {
        for (var j = 0; j < graph.length; j++) {
            if (graph[i][j] == -1) {
                point_num = point_num + 1;//get graph points number
                Adjacent_num = j;//get graph point Adjacent number
            }
        }
    }
    temp_graph = graph;
    if (startEnd == null) {
        //起終點不同
        if (start1 == null && end1 == null) {
            start = 0;
            end = 0;
        }
        else {
            start = start1;
            end = end1;
        }
    }
    else {
        //起終點相同
        start = startEnd;
        end = startEnd;
    }
    if (badVertex == null) {
        //表示沒有壞點
        bad_vertex_num = 0;
        bad_vertex = badVertex;
    }
    else {
        bad_vertex_num = badVertex.length;
        bad_vertex = badVertex;
        vertex_fault(graph, bad_vertex_num, bad_vertex);
    }
    if (badEdge == null) {
        //表示沒有壞線
        bad_edge_num = 0;
        bad_edge = badEdge;
    }
    else {
        bad_edge_num = badEdge.length;
        bad_edge = badEdge;
        edge_fault(graph, graph_edge, bad_edge_num, bad_edge);
    }
    order = order1;
    point = orderVertex;
    for (var i = 0; i < MAX_SIZE; i++) {
        visit_1[i] = false;
    }
    if (startEnd == null && start1 == null && end1 == null && order1 == null && orderVertex == null) {//have nothing
        inpt = 0;
    }
    else if (startEnd == null && start1 == null && end1 == null) {//have order1 and orderVertex
        input = 1;
    }
    else if (startEnd == null) {//have start1 and end1 and order1 and orderVertex
        input = 2;
    }
    else if (start1 == null && end1 == null) {//have startEnd and order1 and orderVertex
        input = 3;
    }
    switch (input) {
        case 0: {//have nothing
            for (var i = 0; i < bad_vertex_num; i++) {
                if (start == bad_vertex || end == bad_vertex) {
                    check = false;
                    flag = 1;
                    break;
                }
            }
            if (flag) {
                break;
            }
            var j = 0;
            for (var i = 0; i < point_num; i++) {
                start = i;
                end = i;
                check = Hamilton_cycle(graph, start, end);
                clear_search_point_value();
                if (check == true) {
                    check_start_point[j] = i;
                    j++;
                    final_check = check;
                    //alert("case0:" + draw_lc_task_help_ans);
                    break;
                }                
            }
            clear_all_value();
            break;
        }
        case 1: {//have order1 and orderVertex
            for (var i = 0; i < bad_vertex_num; i++) {
                if (start == bad_vertex || end == bad_vertex) {
                    check = false;
                    flag = 1;
                    break;
                }
            }
            if (flag) {
                break;
            }
            var j = 0;
            for (var i = 0; i < point_num; i++) {
                start = i;
                end = i;
                check = korder_Hamilton_cycle(graph, point, order, start, end);
                clear_search_point_value();
                if (check == true) {
                    check_start_point[j] = i;
                    j++;
                    final_check = check;
                    break;
                }
            }
            clear_all_value();
            break;
        }
        case 2: {//have start1 and end1 and order1 and orderVertex
            for (var i = 0; i < bad_vertex_num; i++) {
                if (start == bad_vertex || end == bad_vertex) {
                    check = false;
                    flag = 1;
                    break;
                }
            }
            if (flag) {
                break;
            }
            if (start == end) {
                check = korder_Hamilton_cycle(graph, point, order, start, end);
                final_check = check;
            }
            else if (start != end) {
                check = korder_Hamilton_path(graph, point, order, start, end);
                final_check = check;
            }
            clear_all_value();
            break;
        }
        case 3: {//have startEnd and order1 and orderVertex
            for (var i = 0; i < bad_vertex_num; i++) {
                if (start == bad_vertex || end == bad_vertex) {
                    check = false;
                    flag = 1;
                    break;
                }
            }
            if (flag) {
                break;
            }
            if (start == end) {
                check = korder_Hamilton_cycle(graph, point, order, start, end);
                final_check = check;
            }
            else if (start != end) {
                check = korder_Hamilton_path(graph, point, order, start, end);
                final_check = check;
            }
            clear_all_value();
            break;
        }
    }
    return final_check;
    function check_Adjacent_points(temp, temp1, graph, s, s1)/*檢查是否有鄰點*/ {
        var i = 0;
        var j = 0;
        for (j = temp; j < point_num; j++) {
            for (i = temp1; i < point_num; i++) {
                if (graph[j][i] != -1) {
                    if (visit_1[graph[j][i]] == false) {
                        if (graph[j][i] != start_point) {
                            s.push(j);
                            s1.push(i + 1);
                            s.push(graph[j][i]);
                            s1.push(0);
                            visit_1[j] = true;
                            visit_1[graph[j][i]] = true;
                            //printf("visit_1[%d]=%d\n",j,visit_1[j]);
                            return s;
                        }
                    }
                }
                else {
                    break;
                }
            }
            return s;
        }
        return s;
    }
    function check_Condition_cycle(s, s1, start, end)/*檢查是否有到達標準*/ {
        if (s.length - 1 == point_num - 1 - bad_vertex_num) {
            s = check_Hamilton_cycle(s, start, end);
            return s;
        }
        else {
            return s;
        }
    }
    function check_Condition_path(s, s1, start, end)/*檢查是否有到達標準*/ {
        if (s.length - 1 == point_num - 1 - bad_vertex_num) {
            if (start == start_point && end == s[s.length - 1]) {
                count++;
                return s;
            }
            return s;
        }
        else {
            return s;
        }
    }
    function check_Condition_cycle_korder(s, s1, point, order, start, end)/*檢查是否有到達標準*/ {
        if (s.length - 1 == point_num - 1 - bad_vertex_num) {
            if (s[order] == point) {
                s = check_Hamilton_cycle_korder(s, s1, start, end);
                return s;
            }
            else {
                return s;
            }
        }
        else {
            return s;
        }
    }
    function check_Condition_path_korder(s, s1, point, order, start, end)/*檢查是否有到達標準*/ {
        if (s.length - 1 == point_num - 1 - bad_vertex_num) {
            if (start == start_point && end == s[s.length - 1]) {
                if (s[order] == point) {
                    count++;
                    for (var i = 0; s.length > i; i++) {
                        draw_lc_task_help_ans[i] = s[i];
                    }
                    //alert(draw_lc_task_help_ans);
                    //alert(s);
                    return s;
                }
                else {
                    return s;
                }
            }
            return s;
        }
        else {
            return s;
        }
    }
    function check_Hamilton_cycle(s, start, end)/*檢查是否為漢米爾頓迴圈*/ {
        temp = s[s.length - 1];
        for (var i = 0; i < Adjacent_num; i++) {
            if (graph[temp][i] == start_point) {
                if (start == start_point && end == graph[temp][i]) {
                    count++;
                    for (var i = 0; s.length > i; i++) {
                        draw_lc_task_help_ans[i] = s[i];
                    }
                    draw_lc_task_help_ans[s.length] = s[0];
                    //alert(draw_lc_task_help_ans);
                    //alert(s);
                    return s;
                }
                return s;
            }
        }
        return s;
    }
    function check_Hamilton_cycle_korder(s, s1, start, end)/*檢查是否為漢米爾頓迴圈*/ {
        temp = s[s.length - 1];
        for (var i = 0; i < Adjacent_num; i++) {
            if (graph[temp][i] == start_point) {
                if (start == start_point && end == graph[temp][i]) {
                    count++;
                    for (var i = 0; s.length > i; i++) {
                        draw_lc_task_help_ans[i] = s[i];
                    }
                    draw_lc_task_help_ans[s.length] = s[0];
                    //alert(draw_lc_task_help_ans);
                    //alert(s);
                    return s;
                }
                return s;
            }
        }
        return s;
    }
    function vertex_fault(graph, bad_vertex_num, bad_vertex) {
        for (var i = 0; i < bad_vertex_num; i++) {
            for (var j = 0; j < Adjacent_num; j++) {
                if (graph[bad_vertex[i]][j] != -1)/*把壞的點所連接的點都變成-1*/ {
                    graph[bad_vertex[i]][j] = -1;
                }
            }
        }
        var temp2 = 0;
        for (var k = 0; k < bad_vertex_num ; k++) {
            for (var i = 0; i < point_num; i++) {
                for (var j = 0; j < Adjacent_num; j++) {
                    if (graph[i][j] == bad_vertex[k])/*拿掉graph中壞的那個點變成-1*/ {
                        graph[i][j] = -1;
                        if (graph[i][j + 1] != -1) {
                            temp2 = graph[i][j];
                            graph[i][j] = graph[i][j + 1];
                            graph[i][j + 1] = temp2;
                        }
                    }
                    else if (graph[i][j] == -1) {
                        graph[i][j] = -1;
                        if (graph[i][j + 1] != -1) {
                            temp2 = graph[i][j];
                            graph[i][j] = graph[i][j + 1];
                            graph[i][j + 1] = temp2;
                        }
                    }
                }
            }
        }
    }
    function edge_fault(graph, graph_edge, bad_edge_num, bad_edge) {
        var k = 0;
        var temp2;
        for (var i = 0; i < bad_edge_num; i++) {
            a = graph_edge[bad_edge[i]][0];
            b = graph_edge[bad_edge[i]][1];
            for (var j = 0; j < 3; j++) {
                if (graph[a][j] == b) {
                    graph[a][j] = -1;
                    if (graph[a][j + 1] != -1) {
                        temp2 = graph[a][j];
                        graph[a][j] = graph[a][j + 1];
                        graph[a][j + 1] = temp2;
                    }
                }
                else if (graph[a][j] == -1) {
                    graph[a][j] = -1;
                    if (graph[a][j + 1] != -1) {
                        temp2 = graph[a][j];
                        graph[a][j] = graph[a][j + 1];
                        graph[a][j + 1] = temp2;
                    }
                }
            }
            for (var j = 0; j < 3; j++) {
                if (graph[b][j] == a) {
                    graph[b][j] = -1;
                    if (graph[b][j + 1] != -1) {
                        temp2 = graph[b][j];
                        graph[b][j] = graph[b][j + 1];
                        graph[b][j + 1] = temp2;
                    }
                }
                else if (graph[b][j] == -1) {
                    graph[b][j] = -1;
                    if (graph[b][j + 1] != -1) {
                        temp2 = graph[b][j];
                        graph[b][j] = graph[b][j + 1];
                        graph[b][j + 1] = temp2;
                    }
                }
            }
        }
    }
    function Hamilton_cycle(graph, start, end) {
        for (start_point = start; start_point < point_num; start_point++) {
            s.push(start_point);
            s1.push(0);
            visit_1[start_point] = true;
            while (s.length > 0) {
                temp = s[s.length - 1];
                temp1 = s1[s1.length - 1];
                s.pop(s);
                s1.pop(s1);
                visit_1[temp] = false;
                if (count == 0) {
                    s = check_Adjacent_points(temp, temp1, graph, s, s1);
                    s = check_Condition_cycle(s, s1, start, end);
                }
                else if (count == 1) {
                    return true;
                }
            }
        }
        return false;
    }
    function Hamilton_path(graph, start, end) {
        for (start_point = start; start_point < point_num; start_point++) {
            s.push(start_point);
            s1.push(0);
            visit_1[start_point] = true;
            while (s.length > 0) {
                temp = s[s.length - 1];
                temp1 = s1[s1.length - 1];
                s.pop(s);
                s1.pop(s1);
                visit_1[temp] = false;
                if (count == 0) {
                    s = check_Adjacent_points(temp, temp1, graph, s, s1);
                    s = check_Condition_path(s, s1, start, end);
                }
                else if (count == 1) {
                    return true;
                }
            }
        }
        return false;
    }
    function korder_Hamilton_cycle(graph, point, order, start, end) {
        for (start_point = start; start_point < point_num; start_point++) {
            s.push(start_point);
            s1.push(0);
            visit_1[start_point] = true;
            while (s.length > 0) {
                temp = s[s.length - 1];
                temp1 = s1[s1.length - 1];
                s.pop(s);
                s1.pop(s1);
                visit_1[temp] = false;
                if (count == 0) {
                    s = check_Adjacent_points(temp, temp1, graph, s, s1);
                    s = check_Condition_cycle_korder(s, s1, point, order, start, end);
                }
                else if (count == 1) {
                    return true;
                }
            }
        }
        return false;
    }
    function korder_Hamilton_path(graph, point, order, start, end) {
        for (start_point = start; start_point < point_num; start_point++) {
            s.push(start_point);
            s1.push(0);
            visit_1[start_point] = true;
            while (s.length > 0) {
                temp = s[s.length - 1];
                temp1 = s1[s1.length - 1];
                s.pop(s);
                s1.pop(s1);
                visit_1[temp] = false;
                if (count == 0) {
                    s = check_Adjacent_points(temp, temp1, graph, s, s1);
                    s = check_Condition_path_korder(s, s1, point, order, start, end);
                }
                else if (count == 1) {
                    return true;
                }
            }
        }
        return false;
    }
    function clear_all_value() {
        start_point = 0;
        /*for (var i = 0; i < MAX_SIZE; i++) {
            bad_vertex[i] = 0;
            bad_edge[i] = 0;
        }*/
        bad_vertex = new Array();
        bad_edge = new Array();
        /*Array.clear(bad_vertex);
        Array.clear(bad_edge);*/
        //alert(bad_vertex.length);
        //alert(bad_vertex);
        bad_vertex_num = 0;
        bad_edge_num = 0;
        temp = 0;
        temp1 = 0;
        count = 0;
        a = 0;
        b = 0;
        start = 0;
        end = 0;
        point = 0;
        order = 0;
        graph = temp_graph;
        for (var i = 0; i < MAX_SIZE; i++) {
            visit_1[i] = false;
        }
        for (var i = 0; i < MAX_SIZE; i++) {
            s.pop(s);
            s1.pop(s1);
        }
    }
    function clear_search_point_value() {
        temp = 0;
        temp1 = 0;
        count = 0;
        for (var i = 0; i < MAX_SIZE; i++) {
            visit_1[i] = false;
        }
        for (var i = 0; i < MAX_SIZE; i++) {
            s.pop(s);
            s1.pop(s1);
        }
    }
}